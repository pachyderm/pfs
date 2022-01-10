package collection

import (
	"context"
	"crypto/md5"
	"database/sql"
	"fmt"
	"strings"
	"time"

	etcd "github.com/coreos/etcd/clientv3"
	"github.com/gogo/protobuf/proto"
	"github.com/jackc/pgerrcode"
	"github.com/jmoiron/sqlx"
	"github.com/lib/pq"

	"github.com/pachyderm/pachyderm/v2/src/internal/dbutil"
	"github.com/pachyderm/pachyderm/v2/src/internal/errors"
	"github.com/pachyderm/pachyderm/v2/src/internal/errutil"
	"github.com/pachyderm/pachyderm/v2/src/internal/watch"
	"github.com/pachyderm/pachyderm/v2/src/version"
)

const (
	defaultListBufferCapacity = 1000
)

type postgresCollection struct {
	table              string
	db                 *sqlx.DB
	listener           PostgresListener
	template           proto.Message
	indexes            []*Index
	keyGen             func(interface{}) (string, error)
	keyCheck           func(string) error
	notFound           func(interface{}) string
	exists             func(interface{}) string
	listBufferCapacity int
}

func indexFieldName(idx *Index) string {
	return "idx_" + idx.Name
}

type model struct {
	CreatedAt time.Time
	UpdatedAt time.Time
	Version   string
	Key       string
	Proto     []byte
}

type Option func(collection *postgresCollection)

func WithKeyCheck(check func(string) error) Option {
	return func(c *postgresCollection) {
		c.keyCheck = check
	}
}

func WithKeyGen(gen func(interface{}) (string, error)) Option {
	return func(c *postgresCollection) {
		c.keyGen = gen
	}
}

func WithExistsMessage(format func(interface{}) string) Option {
	return func(c *postgresCollection) {
		c.exists = format
	}
}

func WithNotFoundMessage(format func(interface{}) string) Option {
	return func(c *postgresCollection) {
		c.notFound = format
	}
}

func WithListBufferCapacity(cap int) Option {
	return func(c *postgresCollection) {
		c.listBufferCapacity = cap
	}
}

// NewPostgresCollection creates a new collection backed by postgres.
func NewPostgresCollection(name string, db *sqlx.DB, listener PostgresListener, template proto.Message, indexes []*Index, opts ...Option) PostgresCollection {
	col := &postgresCollection{
		table:              name,
		db:                 db,
		listener:           listener,
		template:           template,
		indexes:            indexes,
		listBufferCapacity: defaultListBufferCapacity,
	}
	for _, opt := range opts {
		opt(col)
	}
	return col
}

// Indexes passed into queries are required to be the same object used at
// construction time to ensure that their Name field and Extract method are
// identical.
func (c *postgresCollection) validateIndex(index *Index) error {
	found := false
	for _, idx := range c.indexes {
		if idx == index {
			found = true
			break
		}
	}
	if !found {
		return errors.Errorf("Unknown collection index: %s", index.Name)
	}
	return nil
}

func (c *postgresCollection) tableWatchChannel() string {
	return "pwc_" + c.table
}

func (c *postgresCollection) indexWatchChannel(field string, value string) string {
	data := fmt.Sprintf("%s %s", field, value)
	return c.tableWatchChannel() + "_" + fmt.Sprintf("%x", md5.Sum([]byte(data)))
}

func (c *postgresCollection) ReadOnly(ctx context.Context) PostgresReadOnlyCollection {
	return &postgresReadOnlyCollection{c, ctx}
}

func (c *postgresCollection) ReadWrite(tx *sqlx.Tx) PostgresReadWriteCollection {
	return &postgresReadWriteCollection{c, tx}
}

// NewDryrunSQLTx is identical to NewSQLTx except it will always roll back the
// transaction instead of committing it.
func NewDryrunSQLTx(ctx context.Context, db *sqlx.DB, apply func(*sqlx.Tx) error) error {
	err := dbutil.WithTx(ctx, db, func(tx *sqlx.Tx) error {
		if err := apply(tx); err != nil {
			return err
		}
		return tx.Rollback()
	})
	if err == sql.ErrTxDone {
		err = nil
	}
	return err
}

func (c *postgresCollection) Claim(ctx context.Context, key string, val proto.Message, f func(context.Context) error) error {
	return errors.New("Claim is not supported on postgres collections")
}

func isDuplicateKeyError(err error) bool {
	pqerr := &pq.Error{}
	if errors.As(err, pqerr) {
		return pqerr.Code == pgerrcode.UniqueViolation
	}
	return false
}

func (c *postgresCollection) mapSQLError(err error, key string) error {
	if err != nil {
		if errors.Is(err, sql.ErrNoRows) {
			return errors.WithStack(ErrNotFound{Type: c.table, Key: key})
		} else if isDuplicateKeyError(err) {
			return errors.WithStack(ErrExists{Type: c.table, Key: key})
		}
		return errors.EnsureStack(err)
	}
	return nil
}

type postgresReadOnlyCollection struct {
	*postgresCollection
	ctx context.Context
}

func (c *postgresCollection) get(ctx context.Context, key string, q sqlx.QueryerContext) (*model, error) {
	result := &model{}
	queryString := fmt.Sprintf("select proto, updatedat from collections.%s where key = $1;", c.table)
	if err := sqlx.GetContext(ctx, q, result, queryString, key); err != nil {
		return nil, c.mapSQLError(err, key)
	}
	return result, nil
}

func (c *postgresReadOnlyCollection) Get(key interface{}, val proto.Message) error {
	var result *model
	var err error
	err = c.withKey(key, func(rawKey string) error {
		result, err = c.get(c.ctx, rawKey, c.db)
		return err
	})
	if err != nil {
		return err
	}
	return errors.EnsureStack(proto.Unmarshal(result.Proto, val))
}

func (c *postgresCollection) withKey(key interface{}, query func(string) error) error {
	if str, ok := key.(string); ok {
		return query(str)
	}
	rawKey, err := c.keyGen(key)
	if err != nil {
		return err
	}
	err = query(rawKey)
	if err != nil {
		var notFound ErrNotFound
		var exists ErrExists
		if c.notFound != nil && errors.As(err, &notFound) {
			notFound.customMessage = c.notFound(key)
			return errors.EnsureStack(notFound)
		}
		if c.exists != nil && errors.As(err, &exists) {
			exists.customMessage = c.exists(key)
			return errors.EnsureStack(exists)
		}
		return err
	}
	return nil
}

func (c *postgresCollection) getByIndex(ctx context.Context, q sqlx.ExtContext, index *Index, indexVal string, val proto.Message, opts *Options, f func(string) error) error {
	if err := c.validateIndex(index); err != nil {
		return err
	}
	return c.list(ctx, map[string]string{indexFieldName(index): indexVal}, opts, q, func(m *model) error {
		if err := proto.Unmarshal(m.Proto, val); err != nil {
			return errors.EnsureStack(err)
		}
		return f(m.Key)
	})
}

// NOTE: Internally, GetByIndex scans the collection over multiple transactions,
// making this method susceptible to inconsistent reads
func (c *postgresReadOnlyCollection) GetByIndex(index *Index, indexVal string, val proto.Message, opts *Options, f func(string) error) error {
	return c.getByIndex(c.ctx, c.db, index, indexVal, val, opts, f)
}

// NOTE: Internally, GetByIndex scans the collection using multiple queries,
// making this method susceptible to inconsistent reads
func (c *postgresReadWriteCollection) GetByIndex(index *Index, indexVal string, val proto.Message, opts *Options, f func(string) error) error {
	return c.getByIndex(context.Background(), c.tx, index, indexVal, val, opts, f)
}

func (c *postgresCollection) getUniqueByIndex(ctx context.Context, q sqlx.ExtContext, index *Index, indexVal string, val proto.Message) error {
	found := false
	if err := c.getByIndex(ctx, q, index, indexVal, val, DefaultOptions(), func(string) error {
		if found {
			return ErrNotUnique{Type: c.table, Index: index.Name, Value: indexVal}
		}
		found = true
		return nil
	}); err != nil {
		return err
	}
	if !found {
		return ErrNotFound{Type: c.table, Key: indexVal}
	}
	return nil
}

func (c *postgresReadOnlyCollection) GetUniqueByIndex(index *Index, indexVal string, val proto.Message) error {
	return c.getUniqueByIndex(c.ctx, c.db, index, indexVal, val)
}

func (c *postgresReadWriteCollection) GetUniqueByIndex(index *Index, indexVal string, val proto.Message) error {
	return c.getUniqueByIndex(context.Background(), c.tx, index, indexVal, val)
}

func orderToSQL(order etcd.SortOrder) (string, error) {
	switch order {
	case SortAscend:
		return "asc", nil
	case SortDescend:
		return "desc", nil
	}
	return "", errors.Errorf("unsupported sort order: %d", order)
}

func targetToSQL(target etcd.SortTarget) (string, error) {
	switch target {
	case SortByCreateRevision:
		return "createdat", nil
	case SortByModRevision:
		return "updatedat", nil
	case SortByKey:
		return "key", nil
	}
	return "", errors.Errorf("unsupported sort target for postgres collections: %d", target)
}

func sortTargetValue(m *model, target SortTarget) (interface{}, error) {
	switch target {
	case SortByCreateRevision:
		return m.CreatedAt, nil
	case SortByModRevision:
		return m.UpdatedAt, nil
	case SortByKey:
		return m.Key, nil
	}
	return "", errors.Errorf("unsupported sort target for postgres collections: %d", target)
}

func sortOrderOperator(order SortOrder) string {
	if order == SortDescend {
		return "<"
	}
	// SortAscend + SortNone
	return ">"
}

func (c *postgresCollection) listQueryStr(ctx context.Context, withFields map[string]string, opts *Options, last *model) (string, []interface{}, error) {
	query := fmt.Sprintf("select key, createdat, updatedat, proto from collections.%s", c.table)

	var args []interface{}
	if len(withFields) > 0 {
		fields := []string{}
		i := 1
		for k, v := range withFields {
			fields = append(fields, fmt.Sprintf("%s = $%d", k, i))
			args = append(args, v)
			i++
		}
		query += " where " + strings.Join(fields, " and ")
	}

	afterCondition := func(t SortTarget, ord SortOrder) (string, error) {
		ts, err := targetToSQL(t)
		if err != nil {
			return "", err
		}
		afterSortVal, err := sortTargetValue(last, t)
		if err != nil {
			return "", err
		}
		args = append(args, afterSortVal)
		// condition ends up including:
		// where ... (<TARGET> <OP> <VALUE> or (<TARGET> = <VALUE> and key > '<PKEY>'))
		// This covers the case where we only want to return rows following a certain offset value.
		// We handle the case where multiple rows have the same sort value (when it isn't sorted by primary key)
		// by including "or (<TARGET> = <VALUE> and key > '<PKEY>')" and also ordering by Primary Key as a tie breaker
		cond := fmt.Sprintf("(%s %s $%d or (%s = $%d and key > '%s'))", ts, sortOrderOperator(ord), len(args), ts, len(args), last.Key)
		if len(withFields) > 0 {
			return " and " + cond, nil
		} else {
			return " where " + cond, nil
		}
	}

	st := opts.Target
	so := opts.Order
	if opts.Order == SortNone { // defaults if to "order by key asc" if no sort specified
		st = SortByKey
		so = SortAscend
	}
	if order, err := orderToSQL(so); err != nil {
		return "", nil, err
	} else if target, err := targetToSQL(st); err != nil {
		return "", nil, err
	} else {
		if last != nil {
			ac, err := afterCondition(st, so)
			if err != nil {
				return "", nil, err
			}
			query += ac
		}
		if st == SortByKey {
			query += fmt.Sprintf(" order by key %s", order)
		} else {
			query += fmt.Sprintf(" order by %s %s, key asc", target, order)
		}
	}

	query += fmt.Sprintf(" limit %d", c.listBufferCapacity)
	return query, args, nil
}

func (c *postgresCollection) list(
	ctx context.Context,
	withFields map[string]string,
	opts *Options,
	q sqlx.ExtContext,
	f func(*model) error,
) error {
	// To avoid holding a transaction open (which holds a DB connection) for an unknown duration
	// dictated by the client's callback, we:
	// (1) query a limited count of SQL rows into a buffer
	// (2) apply f(), the client's callback, to results in the buffer
	// (3) if the buffer was full, re-execute the query, offset by key, and repeat (1)
	bufferResults := func(last *model) ([]*model, bool, error) {
		query, args, err := c.listQueryStr(ctx, withFields, opts, last)
		if err != nil {
			return nil, false, err
		}
		rs, err := q.QueryxContext(ctx, query, args...)
		if err != nil {
			return nil, false, c.mapSQLError(err, "")
		}
		defer rs.Close()

		var rowCnt int
		rowsBuffer := make([]*model, 0, c.listBufferCapacity)
		for rs.Next() && rowCnt < c.listBufferCapacity {
			result := &model{}
			if err := rs.StructScan(result); err != nil {
				return nil, false, c.mapSQLError(err, "")
			}
			rowsBuffer = append(rowsBuffer, result)
			rowCnt++
		}
		if err := rs.Err(); err != nil {
			return nil, false, errors.EnsureStack(err)
		}
		if err := rs.Close(); err != nil {
			return nil, false, c.mapSQLError(rs.Close(), "")
		}
		return rowsBuffer, rowCnt == c.listBufferCapacity, nil
	}

	var last *model
	for {
		rowsBuffer, fullBuffer, err := bufferResults(last)
		if err != nil {
			return err
		}
		for _, v := range rowsBuffer {
			if err := f(v); err != nil {
				if errors.Is(err, errutil.ErrBreak) {
					return nil
				}
				return err
			}
			last = v
		}
		if !fullBuffer {
			break
		}
	}
	return nil
}

func (c *postgresReadOnlyCollection) list(withFields map[string]string, opts *Options, f func(*model) error) error {
	return c.postgresCollection.list(c.ctx, withFields, opts, c.db, f)
}

// NOTE: Internally, List scans the collection over multiple transactions,
// making this method susceptible to inconsistent reads
func (c *postgresReadOnlyCollection) List(val proto.Message, opts *Options, f func(string) error) error {
	return c.list(nil, opts, func(m *model) error {
		if err := proto.Unmarshal(m.Proto, val); err != nil {
			return errors.EnsureStack(err)
		}
		return f(m.Key)
	})
}

func (c *postgresReadOnlyCollection) listRev(withFields map[string]string, val proto.Message, opts *Options, f func(string, int64) error) error {
	fakeRev := int64(0)
	lastTimestamp := time.Time{}

	updateRev := func(t time.Time) {
		if t.After(lastTimestamp) {
			lastTimestamp = t
			fakeRev++
		}
	}

	return c.list(withFields, opts, func(m *model) error {
		if err := proto.Unmarshal(m.Proto, val); err != nil {
			return errors.EnsureStack(err)
		}

		if opts.Target == SortByCreateRevision {
			updateRev(m.CreatedAt)
		} else if opts.Target == SortByModRevision {
			updateRev(m.UpdatedAt)
		}

		return f(m.Key, fakeRev)
	})
}

// ListRev emulates the behavior of etcd collection's ListRev, but doesn't
// reproduce it exactly. The revisions returned are not from the database -
// postgres uses 32-bit transaction ids and doesn't include one for the creating
// transaction of a row. So, we fake a revision id by sorting rows by their
// create/update timestamp and incrementing a fake revision id every time the
// timestamp changes. Note that the etcd implementation always returns the
// create revision, but that only works here if you also sort by the create
// revision.
func (c *postgresReadOnlyCollection) ListRev(val proto.Message, opts *Options, f func(string, int64) error) error {
	return c.listRev(nil, val, opts, f)
}

// GetRevByIndex is identical to ListRev except that it filters the results
// according to a predicate on the given index.
func (c *postgresReadOnlyCollection) GetRevByIndex(index *Index, indexVal string, val proto.Message, opts *Options, f func(string, int64) error) error {
	if err := c.validateIndex(index); err != nil {
		return err
	}
	return c.listRev(map[string]string{indexFieldName(index): indexVal}, val, opts, f)
}

func (c *postgresReadOnlyCollection) Count() (int64, error) {
	query := fmt.Sprintf("select count(*) from collections.%s", c.table)
	row := c.db.QueryRowContext(c.ctx, query)

	var result int64
	err := row.Scan(&result)
	return result, c.mapSQLError(err, "")
}

// This blocking function sends watch events to the client. It first sends a list of the existing elements
// in the collection, followed by new events.
func (c *postgresReadOnlyCollection) watchRoutine(watcher *postgresWatcher, options watch.WatchOptions, withFields map[string]string) {
	// Do a list of the collection to get the initial state
	lastTs := time.Time{}
	val := cloneProtoMsg(c.template)

	lastTimestamp := func(m *model, target etcd.SortTarget) time.Time {
		if target == SortByModRevision {
			return m.UpdatedAt
		}
		return m.CreatedAt
	}

	var bufEvent *postgresEvent
	// Since list is not a snapshot of the DB, we break out early and hand-off
	// event emition to the watcher if we encounter a listed record that is
	// in the future of a buffered event
	if err := c.list(withFields, &Options{Target: options.SortTarget, Order: etcd.SortAscend}, func(m *model) error {
		if err := proto.Unmarshal(m.Proto, val); err != nil {
			return errors.EnsureStack(err)
		}
		lastTs := lastTimestamp(m, options.SortTarget)

		if bufEvent == nil {
			select {
			case eventData := <-watcher.buf:
				bufEvent = eventData
			default:
			}
		}

		if bufEvent != nil && bufEvent.time.Unix() <= lastTs.Unix() {
			if err := watcher.sendInitial(bufEvent.WatchEvent(c.ctx, watcher.db, watcher.template)); err != nil {
				return err
			}
			return errutil.ErrBreak
		}

		return watcher.sendInitial(&watch.Event{
			Key:      []byte(m.Key),
			Value:    m.Proto,
			Type:     watch.EventPut,
			Template: c.template,
			Rev:      m.UpdatedAt.Unix(),
		})
	}); err != nil && err != errutil.ErrBreak {
		// Ignore any additional error here - we're already attempting to send an error to the user
		watcher.sendInitial(&watch.Event{Type: watch.EventError, Err: err})
		watcher.listener.Unregister(watcher)
		return
	}

	// Forward all buffered notifications until the watcher is closed
	watcher.forwardNotifications(c.ctx, lastTs)
}

// NOTE: Internally, Watch scans the collection's initial state over multiple transactions,
// making this method susceptible to inconsistent reads
func (c *postgresReadOnlyCollection) Watch(opts ...watch.Option) (watch.Watcher, error) {
	options := watch.SumOptions(opts...)

	if options.SortOrder == SortDescend {
		return nil, errors.New("Watches cannot have a descending sort order.")
	}

	watcher, err := newPostgresWatcher(c.db, c.listener, c.tableWatchChannel(), c.template, nil, nil, options)
	if err != nil {
		return nil, err
	}

	go c.watchRoutine(watcher, options, nil)

	return watcher, nil
}

// NOTE: Internally, WatchF scans the collection's initial state over multiple transactions,
// making this method susceptible to inconsistent reads
func (c *postgresReadOnlyCollection) WatchF(f func(*watch.Event) error, opts ...watch.Option) error {
	watcher, err := c.Watch(opts...)
	if err != nil {
		return err
	}
	defer watcher.Close()
	return watchF(c.ctx, watcher, f)
}

func (c *postgresReadOnlyCollection) WatchOne(key interface{}, opts ...watch.Option) (watch.Watcher, error) {
	var watcher watch.Watcher
	var err error
	err = c.withKey(key, func(rawKey string) error {
		watcher, err = c.watchOne(rawKey, opts...)
		return err
	})
	return watcher, err
}

func (c *postgresReadOnlyCollection) watchOne(key string, opts ...watch.Option) (watch.Watcher, error) {
	options := watch.SumOptions(opts...)

	watcher, err := newPostgresWatcher(c.db, c.listener, c.indexWatchChannel("key", key), c.template, nil, nil, options)
	if err != nil {
		return nil, err
	}

	go func() {
		// Load the initial state of the row
		lastUpdated := time.Time{}
		if m, err := c.get(c.ctx, key, c.db); err != nil {
			if !errors.Is(err, ErrNotFound{}) {
				watcher.sendInitial(&watch.Event{Type: watch.EventError, Err: err})
				watcher.listener.Unregister(watcher)
				return
			}
		} else {
			lastUpdated = m.UpdatedAt
			if err := watcher.sendInitial(&watch.Event{
				Key:      []byte(key),
				Value:    m.Proto,
				Type:     watch.EventPut,
				Template: c.template,
			}); err != nil {
				watcher.listener.Unregister(watcher)
				return
			}
		}

		// Forward all buffered notifications until the watcher is closed
		watcher.forwardNotifications(c.ctx, lastUpdated)
	}()
	return watcher, nil
}

func (c *postgresReadOnlyCollection) WatchOneF(key interface{}, f func(*watch.Event) error, opts ...watch.Option) error {
	watcher, err := c.WatchOne(key, opts...)
	if err != nil {
		return err
	}
	defer watcher.Close()
	return watchF(c.ctx, watcher, f)
}

// NOTE: Internally, WatchByIndex scans the collection's initial state over multiple transactions,
// making this method susceptible to inconsistent reads
func (c *postgresReadOnlyCollection) WatchByIndex(index *Index, indexVal string, opts ...watch.Option) (watch.Watcher, error) {
	if err := c.validateIndex(index); err != nil {
		return nil, err
	}

	options := watch.SumOptions(opts...)

	if options.SortOrder == SortDescend {
		return nil, errors.New("Watches cannot have a descending sort order.")
	}

	channelName := c.indexWatchChannel(indexFieldName(index), indexVal)
	watcher, err := newPostgresWatcher(c.db, c.listener, channelName, c.template, nil, nil, options)
	if err != nil {
		return nil, err
	}

	withFields := map[string]string{indexFieldName(index): indexVal}
	go c.watchRoutine(watcher, options, withFields)

	return watcher, nil
}

// NOTE: Internally, WatchByIndexF scans the collection's initial state over multiple transactions,
// making this method susceptible to inconsistent reads
func (c *postgresReadOnlyCollection) WatchByIndexF(index *Index, indexVal string, f func(*watch.Event) error, opts ...watch.Option) error {
	watcher, err := c.WatchByIndex(index, indexVal, opts...)
	if err != nil {
		return err
	}
	defer watcher.Close()
	return watchF(c.ctx, watcher, f)
}

type postgresReadWriteCollection struct {
	*postgresCollection
	tx *sqlx.Tx
}

func (c *postgresReadWriteCollection) Get(key interface{}, val proto.Message) error {
	var result *model
	var err error
	err = c.withKey(key, func(rawKey string) error {
		result, err = c.get(context.Background(), rawKey, c.tx)
		return err
	})
	if err != nil {
		return err
	}
	return errors.EnsureStack(proto.Unmarshal(result.Proto, val))
}

func (c *postgresReadWriteCollection) Put(key interface{}, val proto.Message) error {
	return c.withKey(key, func(rawKey string) error {
		return c.insert(rawKey, val, true)
	})
}

func (c *postgresReadWriteCollection) getWriteParams(key string, val proto.Message) (map[string]interface{}, error) {
	data, err := proto.Marshal(val)
	if err != nil {
		return nil, errors.EnsureStack(err)
	}

	params := map[string]interface{}{
		"version": version.PrettyVersion(),
		"key":     key,
		"proto":   data,
	}

	for _, idx := range c.indexes {
		params[indexFieldName(idx)] = idx.Extract(val)
	}

	return params, nil
}

func (c *postgresReadWriteCollection) Update(key interface{}, val proto.Message, f func() error) error {
	if err := c.Get(key, val); err != nil {
		return err
	}
	if err := f(); err != nil {
		return err
	}

	return c.withKey(key, func(rawKey string) error {
		params, err := c.getWriteParams(rawKey, val)
		if err != nil {
			return err
		}

		updateFields := []string{}
		for k := range params {
			updateFields = append(updateFields, fmt.Sprintf("%s = :%s", k, k))
		}

		query := fmt.Sprintf("update collections.%s set %s where key = :key", c.table, strings.Join(updateFields, ", "))

		_, err = c.tx.NamedExec(query, params)
		return c.mapSQLError(err, rawKey)
	})
}

func (c *postgresReadWriteCollection) insert(key string, val proto.Message, upsert bool) error {
	if c.keyCheck != nil {
		if err := c.keyCheck(key); err != nil {
			return err
		}
	}

	paramMap, err := c.getWriteParams(key, val)
	if err != nil {
		return err
	}

	columns := []string{}
	paramNames := []string{}
	params := []interface{}{}
	for k, v := range paramMap {
		columns = append(columns, k)
		paramNames = append(paramNames, fmt.Sprintf("$%d", len(paramNames)+1))
		params = append(params, v)
	}
	columnList := strings.Join(columns, ", ")
	paramList := strings.Join(paramNames, ", ")

	query := fmt.Sprintf("insert into collections.%s (%s) values (%s)", c.table, columnList, paramList)
	if upsert {
		query = fmt.Sprintf("%s on conflict (key) do update set (%s) = (%s)", query, columnList, paramList)
	} else {
		// On a normal insert, an error would invalidate the transaction, so do
		// nothing and check the number of rows affected afterwards.
		query += " on conflict do nothing"
	}

	result, err := c.tx.Exec(query, params...)
	if err != nil {
		return c.mapSQLError(err, key)
	}

	if !upsert {
		count, err := result.RowsAffected()
		if err != nil {
			return c.mapSQLError(err, key)
		}

		if count != int64(1) {
			return errors.WithStack(ErrExists{Type: c.table, Key: key})
		}
	}
	return nil
}

func (c *postgresReadWriteCollection) Upsert(key interface{}, val proto.Message, f func() error) error {
	if err := c.Get(key, val); err != nil && !IsErrNotFound(err) {
		return err
	}
	if err := f(); err != nil {
		return err
	}
	return c.Put(key, val)
}

func (c *postgresReadWriteCollection) Create(key interface{}, val proto.Message) error {
	return c.withKey(key, func(rawKey string) error {
		return c.insert(rawKey, val, false)
	})
}

func (c *postgresReadWriteCollection) Delete(key interface{}) error {
	return c.withKey(key, func(rawKey string) error {
		return c.delete(rawKey)
	})
}

func (c *postgresReadWriteCollection) delete(key string) error {
	query := fmt.Sprintf("delete from collections.%s where key = $1", c.table)
	res, err := c.tx.Exec(query, key)
	if err != nil {
		return c.mapSQLError(err, key)
	}

	if count, err := res.RowsAffected(); err != nil {
		return c.mapSQLError(err, key)
	} else if count == 0 {
		return errors.WithStack(ErrNotFound{Type: c.table, Key: key})
	}
	return nil
}

func (c *postgresReadWriteCollection) DeleteAll() error {
	query := fmt.Sprintf("delete from collections.%s", c.table)
	_, err := c.tx.Exec(query)
	return c.mapSQLError(err, "")
}

func (c *postgresReadWriteCollection) DeleteByIndex(index *Index, indexVal string) error {
	if err := c.validateIndex(index); err != nil {
		return err
	}
	query := fmt.Sprintf("delete from collections.%s where %s = $1", c.table, indexFieldName(index))
	_, err := c.tx.Exec(query, indexVal)
	return c.mapSQLError(err, "")
}
