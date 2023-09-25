//go:build windows
// +build windows

package main

import (
	_ "embed"
	"fmt"
	"io"
	"os"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/version"
	"github.com/spf13/afero"
	"github.com/spf13/cobra"
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
		Short:         "Finch: open-source container development tool",
		SilenceUsage:  true,
		SilenceErrors: true,
		Version:       version.Version,
	}

	rootCmd.PersistentFlags().Bool("debug", false, "running under debug mode")

	ecc := command.NewExecCmdCreator()

	rootCmd.AddCommand(newDiskCommand(ecc, logger, stdOut))

	return nil
}
