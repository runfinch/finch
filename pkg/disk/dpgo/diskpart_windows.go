//go:build windows
// +build windows

package main

import (
	_ "embed"
	"fmt"
	"io"
	"os"

	"github.com/spf13/afero"
	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/version"
)

const diskpartRootCmd = "dpgo"

func main() {
	logger := flog.NewLogrus()
	fs := afero.NewOsFs()
	stdOut := os.Stdout
	if err := xmain(logger, fs, stdOut); err != nil {
		logger.Fatal(err)
	}
}

func xmain(logger flog.Logger, fs afero.Fs, stdOut io.Writer) error {
	rootCmd := &cobra.Command{
		Use:           fmt.Sprintf("%v <command>", diskpartRootCmd),
		Short:         "dpgo: utility to interact with diskpart",
		SilenceUsage:  true,
		SilenceErrors: true,
		Version:       version.Version,
	}

	rootCmd.PersistentFlags().Bool("debug", false, "running under debug mode")
	rootCmd.PersistentFlags().Bool("json", false, "sets logs to output in JSON rather than plaintext")

	rootCmd.PersistentPreRunE = func(cmd *cobra.Command, args []string) error {
		// running commands under debug mode will print out debug logs
		debugMode, _ := cmd.Flags().GetBool("debug")
		if debugMode {
			logger.SetLevel(flog.Debug)
		}
		// running commands under debug mode will print out debug logs
		json, _ := cmd.Flags().GetBool("json")
		if json {
			logger.SetFormatter(flog.JSON)
		}
		return nil
	}

	ecc := command.NewExecCmdCreator()

	rootCmd.AddCommand(newDiskCommand(ecc, logger, stdOut))

	return rootCmd.Execute()
}
