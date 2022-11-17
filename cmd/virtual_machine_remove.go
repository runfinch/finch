// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"fmt"

	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/lima"

	"github.com/runfinch/finch/pkg/flog"
)

func newRemoveVMCommand(limaCmdCreator command.LimaCmdCreator, logger flog.Logger) *cobra.Command {
	removeVMCommand := &cobra.Command{
		Use:   "remove",
		Short: "Remove the virtual machine instance",
		RunE:  newRemoveVMAction(limaCmdCreator, logger).runAdapter,
	}

	return removeVMCommand
}

type removeVMAction struct {
	creator command.LimaCmdCreator
	logger  flog.Logger
}

func newRemoveVMAction(creator command.LimaCmdCreator, logger flog.Logger) *removeVMAction {
	return &removeVMAction{creator: creator, logger: logger}
}

func (rva *removeVMAction) runAdapter(cmd *cobra.Command, args []string) error {
	return rva.run()
}

func (rva *removeVMAction) run() error {
	err := rva.assertVMIsStopped(rva.creator, rva.logger)
	if err != nil {
		return err
	}

	limaCmd := rva.creator.CreateWithoutStdio("remove", limaInstanceName)
	rva.logger.Info("Removing existing Finch virtual machine...")
	logs, err := limaCmd.CombinedOutput()
	if err != nil {
		rva.logger.Errorf("Finch virtual machine failed to remove, debug logs: %s", logs)
		return err
	}
	rva.logger.Info("Finch virtual machine removed successfully")
	return nil
}

func (rva *removeVMAction) assertVMIsStopped(creator command.LimaCmdCreator, logger flog.Logger) error {
	status, err := lima.GetVMStatus(creator, logger, limaInstanceName)
	if err != nil {
		return err
	}
	switch status {
	case lima.Nonexistent:
		return fmt.Errorf("the instance %q does not exist", limaInstanceName)
	case lima.Running:
		return fmt.Errorf("the instance %q is running, run `finch %s stop` to stop the instance first",
			limaInstanceName, virtualMachineRootCmd)
	default:
		return nil
	}
}
