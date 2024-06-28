package v2_11_0

import (
	"context"

	"github.com/pachyderm/pachyderm/v2/src/internal/errors"
	"github.com/pachyderm/pachyderm/v2/src/internal/migrations"
	"github.com/pachyderm/pachyderm/v2/src/internal/pctx"
)

func addAuthPrincipals(ctx context.Context, env migrations.Env) error {
	ctx = pctx.Child(ctx, "normalizeCommitTotals")
	tx := env.Tx
	if _, err := tx.ExecContext(ctx, `CREATE TABLE auth.principals AS SELECT subject, MIN(created_at) first_seen FROM auth.auth_tokens GROUP BY subject;`); err != nil {
		return errors.Wrap(err, "create auth.principals")
	}

	if _, err := tx.ExecContext(ctx, `ALTER TABLE auth.principals ADD PRIMARY KEY (subject);`); err != nil {
		return errors.Wrap(err, "add primary key constraint to auth.principals")
	}
	if _, err := tx.ExecContext(ctx, `ALTER TABLE auth.auth_tokens ADD FOREIGN KEY (subject) REFERENCES auth.principals (subject);`); err != nil {
		return errors.Wrap(err, "add foreign key constraint to auth.auth_tokens")
	}
	return nil
}
