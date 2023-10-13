package v2_8_0

import (
	"context"

	col "github.com/pachyderm/pachyderm/v2/src/internal/collection"
	"github.com/pachyderm/pachyderm/v2/src/internal/migrations"
	"github.com/pachyderm/pachyderm/v2/src/internal/ppsdb"
)

func Migrate(state migrations.State) migrations.State {
	return state.
		Apply("Create pfs schema", createPFSSchema).
		Apply("Migrate collections.repos to pfs.repos", migrateRepos, migrations.Squash).
		Apply("Migrate collections.branches to pfs.branches", migrateBranches, migrations.Squash).
		Apply("Migrate collections.commits to pfs.commits", migrateCommits, migrations.Squash).
		Apply("Synthesize cluster defaults from environment variables", synthesizeClusterDefaults, migrations.Squash).
		Apply("Synthesize user and effective specs from their pipeline details", synthesizeSpecs, migrations.Squash).
		Apply("create project defaults", func(ctx context.Context, env migrations.Env) error {
			var cc []col.PostgresCollection
			cc = append(cc, ppsdb.CollectionsV2_8_0()...)
			return col.SetupPostgresCollections(ctx, env.Tx, cc...)
		})
}

func PostMigrate(state migrations.State) migrations.State {
	return state.Apply("alter pfs.commits schema post data migration", alterCommitsTablePostDataMigration)
}
