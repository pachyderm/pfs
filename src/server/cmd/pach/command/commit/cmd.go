package commit

import "github.com/urfave/cli"

// NewCommand returns group command for commit.
func NewCommand() cli.Command {
	return cli.Command{
		Name:        "commit",
		Aliases:     []string{"c"},
		Usage:       "Commits are atomic transactions on the content of a repo.",
		Description: desc,
		Subcommands: []cli.Command{
			newListCommand(),
			newInspectCommand(),
			newStartCommand(),
			newFinishCommand(),
			newDeleteCommand(),
			newSquashCommand(),
			newReplayCommand(),
			newFlushCommand(),
		},
	}
}

var desc = `Commits are atomic transactions on the content of a repo.

   Creating a commit is a multistep process:

   - start a new commit with start-commit
   - write files to it through fuse or with put-file
   - finish the new commit with finish-commit
    
   Commits that have been started but not finished are NOT durable storage.
   Commits become reliable (and immutable) when they are finished.
    
   Commits can be created with another commit as a parent.
   This layers the data in the commit over the data in the parent.`
