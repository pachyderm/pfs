package testutil

import (
	"crypto/rand"
	"fmt"
	"runtime"
	"testing"

	"github.com/jmoiron/sqlx"

	col "github.com/pachyderm/pachyderm/v2/src/internal/collection"
	"github.com/pachyderm/pachyderm/v2/src/internal/dbutil"
	"github.com/pachyderm/pachyderm/v2/src/internal/require"
	"github.com/pachyderm/pachyderm/v2/src/internal/serviceenv"
)

const (
	DefaultPostgresHost     = "127.0.0.1"
	DefaultPostgresPort     = 30228
	DefaultPGBouncerHost    = DefaultPostgresHost
	DefaultPGBouncerPort    = 30229
	DefaultPostgresUser     = "pachyderm"
	DefaultPostgresPassword = "correcthorsebatterystaple"
	DefaultPostgresDatabase = "pachyderm"
)

// set this to false if you want to keep the database around
var cleanup = true

const postgresMaxConnections = 100

// we want to divide the total number of connections we can have up among the
// concurrently running tests
var maxOpenConnsPerPool = (postgresMaxConnections - 1) / runtime.GOMAXPROCS(0)

// TestDatabaseDeployment represents a deployment of postgres, and databases may
// be created for individual tests.
type TestDatabaseDeployment interface {
	NewDatabase(t testing.TB) (*sqlx.DB, col.PostgresListener)
	NewDatabaseConfig(t testing.TB) serviceenv.ConfigOption
}

// NewTestDBOptions connects to postgres using opts, creates a database
// with a unique name then returns options to connect to the new database
func NewTestDBOptions(t testing.TB, opts []dbutil.Option) []dbutil.Option {
	db := OpenDB(t, opts...)
	dbName := CreateEphemeralDB(t, db)
	opts2 := []dbutil.Option{
		dbutil.WithMaxOpenConns(maxOpenConnsPerPool),
	}
	opts2 = append(opts2, opts...)
	opts2 = append(opts2, dbutil.WithDBName(dbName))
	return opts2
}

// NewTestDB connects to postgres using opts, creates a database
// with a unique name then returns a sqlx.DB configured to use the newly created
// database. After the test or suite finishes, the database is dropped.
func NewTestDB(t testing.TB, opts []dbutil.Option) *sqlx.DB {
	return OpenDB(t, NewTestDBOptions(t, opts)...)
}

// OpenDB connects to a database using opts and returns it.
// the database will be cleaned up at the end of the test.
func OpenDB(t testing.TB, opts ...dbutil.Option) *sqlx.DB {
	db, err := dbutil.NewDB(opts...)
	require.NoError(t, err)
	require.NoError(t, db.Ping())
	t.Cleanup(func() { require.NoError(t, db.Close()) })
	return db
}

// CreateEphemeralDB creates a new database using db with a lifetime scoped to the test t
// and returns its name
func CreateEphemeralDB(t testing.TB, db *sqlx.DB) string {
	dbName := ephemeralDBName(t)
	_, err := db.Exec(`CREATE DATABASE ` + dbName)
	require.NoError(t, err)
	if cleanup {
		t.Cleanup(func() {
			_, err := db.Exec(fmt.Sprintf(`DROP DATABASE %s WITH (FORCE)`, dbName))
			require.NoError(t, err)
		})
	}
	t.Log("database", dbName, "successfully created")
	return dbName
}

func ephemeralDBName(t testing.TB) string {
	buf := [8]byte{}
	n, err := rand.Reader.Read(buf[:])
	require.NoError(t, err)
	require.Equal(t, n, 8)

	// TODO: it looks like postgres is truncating identifiers to 32 bytes,
	// it should be 64 but we might be passing the name as non-ascii, i'm not really sure.
	// for now just use a random int, but it would be nice to go back to names with a timestamp.
	return fmt.Sprintf("test_%08x", buf)
	// now := time.Now()
	// test_<date>T<time>_<random int>
	// return fmt.Sprintf("test_%04d%02d%02dT%02d%02d%02d_%04x",
	// 	now.Year(), now.Month(), now.Day(),
	// 	now.Hour(), now.Minute(), now.Second(),
	// 	rand.Uint32())
}
