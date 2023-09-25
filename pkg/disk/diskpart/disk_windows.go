//go:build windows
// +build windows

package main

import (
	"bytes"
	_ "embed"
	"fmt"
	"io"
	"text/template"

	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/flog"
)

var createDiskCommand *cobra.Command

func newDiskCommand(ecc *command.ExecCmdCreator, logger flog.Logger, stdOut io.Writer) *cobra.Command {
	diskCommand := &cobra.Command{
		Use:   "disk",
		Args:  cobra.NoArgs,
		Short: "Interacts with diskpart.exe",
	}

	diskCommand.AddCommand(
		newCreateDiskCommand(ecc, logger, stdOut),
	)

	return diskCommand
}

func newCreateDiskCommand(ecc *command.ExecCmdCreator, logger flog.Logger, stdOut io.Writer) *cobra.Command {
	createDiskCommand = &cobra.Command{
		Use:   "create",
		Args:  cobra.NoArgs,
		Short: "Creates a new disk",
		RunE:  newDiskAction(ecc, logger, stdOut).runAdapter,
	}

	createDiskCommand.Flags().StringP("path", "p", "", "the full path to the disk")
	createDiskCommand.Flags().Int64P("size", "s", 0, "the size of the disk")

	createDiskCommand.MarkFlagRequired("path")
	createDiskCommand.MarkFlagRequired("size")

	return createDiskCommand
}

type createDiskAction struct {
	ecc    *command.ExecCmdCreator
	logger flog.Logger
	stdOut io.Writer
}

func newDiskAction(ecc *command.ExecCmdCreator, logger flog.Logger, stdOut io.Writer) *createDiskAction {
	return &createDiskAction{ecc: ecc, logger: logger, stdOut: stdOut}
}

func (cd *createDiskAction) runAdapter(_ *cobra.Command, _ []string) error {
	return cd.run()
}

func (cd *createDiskAction) run() error {
	path, err := createDiskCommand.Flags().GetString("path")
	if err != nil {
		return err
	}
	size, err := createDiskCommand.Flags().GetInt64("size")
	if err != nil {
		return err
	}
	if err := cd.createDisk(path, size); err != nil {
		return err
	}
	return nil
}

//go:embed createDisk.TEMPLATE.txt
var createDiskTmpl string

type createDiskOpts struct {
	Path string
	Size int64
}

func (cd *createDiskAction) createDisk(path string, size int64) error {
	t := template.Must(template.New("createDisk").Parse(createDiskTmpl))
	opts := createDiskOpts{
		Path: path,
		Size: size,
	}

	var tmpl, dpStdout bytes.Buffer
	if err := t.Execute(&tmpl, opts); err != nil {
		return err
	}

	cmd := cd.ecc.Create(`C:\Windows\System32\diskpart.exe`)
	dpStdin, err := cmd.StdinPipe()
	if err != nil {
		return err
	}

	cmd.SetStdout(&dpStdout)

	cd.logger.Debugln("starting diskpart to exit")
	if err := cmd.Start(); err != nil {
		return err
	}

	go func() {
		cd.logger.Debugf("writing %s to diskpart stdin", tmpl.String())
		fmt.Fprintf(dpStdin, "%s\r\n", tmpl.String())
		dpStdin.Close()
	}()

	cd.logger.Debugln("waiting for diskpart to exit")
	if err := cmd.Wait(); err != nil {
		return err
	}

	cd.logger.Infof("stdout: %s", dpStdout.String())

	return nil
}
