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

func newStatusVMCommand(limaCmdCreator command.LimaCmdCreator, logger flog.Logger) *cobra.Command {
	statusVMCommand := &cobra.Command{
		Use:   "status",
		Short: "Status of the virtual machine",
		RunE:  newStatusVMAction(limaCmdCreator, logger).runAdapter,
	}

	return statusVMCommand
}

type statusVMAction struct {
	creator command.LimaCmdCreator
	logger  flog.Logger
}

func newStatusVMAction(creator command.LimaCmdCreator, logger flog.Logger) *statusVMAction {
	return &statusVMAction{creator: creator, logger: logger}
}

func (sva *statusVMAction) runAdapter(cmd *cobra.Command, args []string) error {
	return sva.run()
}

func (sva *statusVMAction) run() error {
	err := sva.assertVMIsRunning(sva.creator, sva.logger)
	if err != nil {
		return err
	}

	limaCmd := sva.creator.CreateWithoutStdio("ls", limaInstanceName)
	logs, err := limaCmd.CombinedOutput()
	if err != nil {
		sva.logger.Errorf("Finch virtual machine status failed, debug logs: %s", logs)
		return err
	}
	sva.logger.Infof("%s", logs)
	return nil
}

func (sva *statusVMAction) assertVMIsRunning(creator command.LimaCmdCreator, logger flog.Logger) error {
	status, err := lima.GetVMStatus(creator, logger, limaInstanceName)
	if err != nil {
		return err
	}
	switch status {
	case lima.Nonexistent:
		return fmt.Errorf("the instance %q does not exist", limaInstanceName)
	case lima.Stopped:
		return fmt.Errorf("the instance %q is stopped. run `finch %s start` to start the instance", limaInstanceName, virtualMachineRootCmd)
	default:
		return nil
	}
}
