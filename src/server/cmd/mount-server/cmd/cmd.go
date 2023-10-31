package cmd

import (
	"os"
	"time"

	"github.com/pachyderm/pachyderm/v2/src/internal/client"
	"github.com/pachyderm/pachyderm/v2/src/internal/cmdutil"
	"github.com/pachyderm/pachyderm/v2/src/internal/log"
	"github.com/pachyderm/pachyderm/v2/src/internal/pctx"
	pfscmds "github.com/pachyderm/pachyderm/v2/src/server/pfs/cmds"
	"github.com/pachyderm/pachyderm/v2/src/server/pfs/fuse"

	"github.com/spf13/cobra"
)

func MountServerCmd() *cobra.Command {
	var mountDir, sockPath, logFile string
	var allowOther bool
	rootCmd := &cobra.Command{
		Use:   os.Args[0],
		Short: "Start a mount server for controlling FUSE mounts via a local REST API.",
		Long:  "Starts a REST mount server, running in the foreground and logging to stdout.",
		Run: cmdutil.RunFixedArgs(0, func(args []string) error {
			if logFile != "" {
				log.InitBatchLogger(logFile)
			} else {
				log.InitPachctlLogger()
			}
			serverOpts := &fuse.ServerOptions{
				MountDir:   mountDir,
				AllowOther: allowOther,
				SockPath:   sockPath,
			}
			pfscmds.PrintWarning()
			c, err := client.NewOnUserMachine(pctx.TODO(), "user", client.WithDialTimeout(5*time.Second))
			if err != nil {
				return fuse.Server(serverOpts, nil)
			}
			return fuse.Server(serverOpts, c)
		}),
	}
	rootCmd.Flags().StringVar(&mountDir, "mount-dir", "/pfs", "Target directory for mounts e.g /pfs")
	rootCmd.Flags().BoolVar(&allowOther, "allow-other", true, "Mount is created with allow-other option")
	rootCmd.Flags().StringVar(&sockPath, "sock-path", "", "Socket path to be used, default set to empty")
	rootCmd.Flags().StringVar(&logFile, "log-file", "", "If set, log output will be written to the given file in addition to stdout (useful if stdout/stderr isn't accessible")
	return rootCmd
}
