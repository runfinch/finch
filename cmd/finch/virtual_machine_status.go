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
	status, err := lima.GetVMStatus(sva.creator, sva.logger, limaInstanceName)
	if err != nil {
		return err
	}
	switch status {
	case lima.Running:
		fmt.Println("Running")
		return nil
	case lima.Nonexistent:
		fmt.Println("Notexistent")
		return nil
	case lima.Stopped:
		fmt.Println("Stopped")
		return nil
	case lima.Unknown:
		return fmt.Errorf("instance state of %q is unknown", limaInstanceName)
	default:
		return fmt.Errorf("instance state of %q is undefined", limaInstanceName)
	}
}
