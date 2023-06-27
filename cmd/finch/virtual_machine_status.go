// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"fmt"
	"io"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/lima"

	"github.com/spf13/cobra"
)

func newStatusVMCommand(limaCmdCreator command.LimaCmdCreator, logger flog.Logger, stdout io.Writer) *cobra.Command {
	statusVMCommand := &cobra.Command{
		Use:   "status",
		Short: "Status of the virtual machine",
		RunE:  newStatusVMAction(limaCmdCreator, logger, stdout).runAdapter,
	}

	return statusVMCommand
}

type statusVMAction struct {
	creator command.LimaCmdCreator
	logger  flog.Logger
	stdout  io.Writer
}

func newStatusVMAction(creator command.LimaCmdCreator, logger flog.Logger, stdout io.Writer) *statusVMAction {
	return &statusVMAction{creator: creator, logger: logger, stdout: stdout}
}

func (sva *statusVMAction) runAdapter(_ *cobra.Command, _ []string) error {
	return sva.run()
}

func (sva *statusVMAction) run() error {
	status, err := lima.GetVMStatus(sva.creator, sva.logger, limaInstanceName)
	if err != nil {
		return err
	}
	switch status {
	case lima.Running:
		fmt.Fprintln(sva.stdout, "Running")
		return nil
	case lima.Nonexistent:
		fmt.Fprintln(sva.stdout, "Nonexistent")
		return nil
	case lima.Stopped:
		fmt.Fprintln(sva.stdout, "Stopped")
		return nil
	default:
		return fmt.Errorf("instance state of %q is unknown", limaInstanceName)
	}
}
