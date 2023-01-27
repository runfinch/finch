// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"fmt"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/lima"

	"github.com/spf13/cobra"
)

func newStopVMCommand(limaCmdCreator command.LimaCmdCreator, logger flog.Logger) *cobra.Command {
	stopVMCommand := &cobra.Command{
		Use:   "stop",
		Short: "Stop the virtual machine",
		RunE:  newStopVMAction(limaCmdCreator, logger).runAdapter,
	}

	stopVMCommand.Flags().BoolP("force", "f", false, "forcibly stop finch VM")

	return stopVMCommand
}

type stopVMAction struct {
	creator command.LimaCmdCreator
	logger  flog.Logger
}

func newStopVMAction(creator command.LimaCmdCreator, logger flog.Logger) *stopVMAction {
	return &stopVMAction{creator: creator, logger: logger}
}

func (sva *stopVMAction) runAdapter(cmd *cobra.Command, args []string) error {
	force, err := cmd.Flags().GetBool("force")
	if err != nil {
		return err
	}
	return sva.run(force)
}

func (sva *stopVMAction) run(force bool) error {
	if force {
		return sva.stopVM(force)
	}

	err := sva.assertVMIsRunning(sva.creator, sva.logger)
	if err != nil {
		return err
	}

	return sva.stopVM(false)
}

func (sva *stopVMAction) assertVMIsRunning(creator command.LimaCmdCreator, logger flog.Logger) error {
	status, err := lima.GetVMStatus(creator, logger, limaInstanceName)
	if err != nil {
		return err
	}
	switch status {
	case lima.Nonexistent:
		return fmt.Errorf("the instance %q does not exist", limaInstanceName)
	case lima.Stopped:
		return fmt.Errorf("the instance %q is already stopped", limaInstanceName)
	default:
		return nil
	}
}

func (sva *stopVMAction) stopVM(force bool) error {
	limaCmd := sva.createLimaStopCommand(force)
	if force {
		sva.logger.Info("Forcibly stopping Finch virtual machine...")
	} else {
		sva.logger.Info("Stopping existing Finch virtual machine...")
	}
	logs, err := limaCmd.CombinedOutput()
	if err != nil {
		sva.logger.Errorf("Finch virtual machine failed to stop, debug logs: %s", logs)
		return err
	}
	sva.logger.Info("Finch virtual machine stopped successfully")
	return nil
}

func (sva *stopVMAction) createLimaStopCommand(force bool) command.Command {
	if force {
		return sva.creator.CreateWithoutStdio("stop", "--force", limaInstanceName)
	}
	return sva.creator.CreateWithoutStdio("stop", limaInstanceName)
}
