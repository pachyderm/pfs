// Package restart shuts down Pachyderm when someone wants it to.
package restart

import (
	"context"
	"os"
	"time"

	"github.com/pachyderm/pachyderm/v2/src/internal/admindb"
	"github.com/pachyderm/pachyderm/v2/src/internal/collection"
	"github.com/pachyderm/pachyderm/v2/src/internal/dbutil"
	"github.com/pachyderm/pachyderm/v2/src/internal/errors"
	"github.com/pachyderm/pachyderm/v2/src/internal/log"
	"github.com/pachyderm/pachyderm/v2/src/internal/pachsql"
	"github.com/pachyderm/pachyderm/v2/src/internal/pctx"
	"go.uber.org/zap"
)

var startupTime = time.Now()

// checkFn is a function that checks if pachd needs to restart right now, returning whether to
// restart and the reason for restarting.
type checkFn func(ctx context.Context) (restart bool, reason string, err error)

// restartFn is a function that restarts Pachyderm for the provided reason.
type restartFn func(ctx context.Context, reason string)

// Restarter is an object that manages restarting Pachyderm.
type Restarter struct {
	ch      listenerChan
	check   checkFn
	restart restartFn
}

// New returns a restarter suitable for use in K8s.
func New(db *pachsql.DB, listener collection.PostgresListener) (*Restarter, error) {
	ch := make(listenerChan)
	if err := listener.Register(ch); err != nil {
		return nil, errors.Wrap(err, "register restart listener")
	}
	return &Restarter{
		check: func(ctx context.Context) (restart bool, reason string, err error) {
			if err := dbutil.WithTx(ctx, db, func(ctx context.Context, tx *pachsql.Tx) error {
				var err error
				restart, reason, err = admindb.ShouldRestart(ctx, tx, startupTime, time.Now())
				if err != nil {
					return errors.Wrap(err, "ShouldRestart")
				}
				return nil
			}); err != nil {
				return false, "", errors.Wrap(err, "WithTx")
			}
			return restart, reason, nil
		},
		restart: func(ctx context.Context, reason string) {
			log.Info(ctx, "pachyderm restart requested; restarting in 10s", zap.String("reason", reason))
			select {
			case <-time.After(10 * time.Second):
			case <-ctx.Done():
			}
			if err := os.WriteFile("/dev/termination-log", []byte("automatic restart: "+reason), 0o777); err != nil {
				log.Debug(ctx, "problem writing restart reason to /dev/termination-log", zap.Error(err))
			}
			log.Exit(ctx, "restart requested; exiting now", zap.String("reason", reason))
		},
		ch: ch,
	}, nil
}

// RestartWhenRequired blocks until the context expires or the restarter callback is called.
func (r *Restarter) RestartWhenRequired(rctx context.Context) error {
	for {
		if err := r.runOnce(rctx); err != nil {
			return errors.Wrap(err, "runOnce")
		}
	}
}

func (r *Restarter) runOnce(rctx context.Context) error {
	t := time.NewTimer(time.Minute)
	defer t.Stop()
	select {
	case <-r.ch:
		if r.checkAndRestart(rctx) {
			return errors.New("restarted")
		}
	case <-t.C:
		if r.checkAndRestart(rctx) {
			return errors.New("restarted")
		}
	case <-rctx.Done():
		t.Stop()
		return errors.Wrap(context.Cause(rctx), "stop requested")
	}
	return nil
}

func (r *Restarter) checkAndRestart(rctx context.Context) (restarted bool) {
	ctx, c := context.WithTimeout(rctx, 30*time.Second)
	defer c()
	restart, reason, err := r.check(ctx)
	if err != nil {
		log.Info(ctx, "problem checking for pending restart; will retry", zap.Error(err))
		return false
	}
	if restart {
		r.restart(rctx, reason)
		return true
	}
	return false
}

// listenerChan is a chan that is sent to whenever the underlying postgres listener triggers.
type listenerChan chan struct{}

// listenerChan is a collection.Notifier.
var _ collection.Notifier = (listenerChan)(nil)

// ID implements collection.Notifier.
func (listenerChan) ID() string {
	return "restarts-listener"
}

// Channel implements collection.Notifier.
func (listenerChan) Channel() string {
	return "restarts"
}

// Notify implements collection.Notifier.
func (ch listenerChan) Notify(*collection.Notification) {
	ch <- struct{}{}
}

// Error implements collection.Notifier.
func (ch listenerChan) Error(err error) {
	log.Info(pctx.Background("restarter"), "restart listener received error; listening continues", zap.Error(err))
	ch <- struct{}{}
}
