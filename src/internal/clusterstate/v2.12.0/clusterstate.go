package v2_12_0

import (
	"github.com/pachyderm/pachyderm/v2/src/internal/migrations"
)

func Migrate(state migrations.State) migrations.State {
	return state.
		Apply("Create PJS Schema", createPJSSchema).
		Apply("Create Branch Propagation Specs Table", createBranchPropagationSpecsTable)
}
