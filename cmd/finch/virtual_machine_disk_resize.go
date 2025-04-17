// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package main

import (
	"fmt"

	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/lima"
)

func newDiskResizeVMCommand(limaCmdCreator command.NerdctlCmdCreator, logger flog.Logger) *cobra.Command {
	cmd := &cobra.Command{
		Use:   "disk-resize",
		Short: "Resize the virtual machine disk",
		RunE:  newDiskResizeVMAction(limaCmdCreator, logger).runAdapter,
	}

	cmd.Flags().String("size", "", "New disk size (e.g., 60GiB)")
	_ = cmd.MarkFlagRequired("size")

	return cmd
}

type diskResizeVMAction struct {
	logger  flog.Logger
	creator command.NerdctlCmdCreator
}

func newDiskResizeVMAction(limaCmdCreator command.NerdctlCmdCreator, logger flog.Logger) *diskResizeVMAction {
	return &diskResizeVMAction{
		logger:  logger,
		creator: limaCmdCreator,
	}
}

func (dva *diskResizeVMAction) runAdapter(cmd *cobra.Command, _ []string) error {
	size, err := cmd.Flags().GetString("size")
	if err != nil {
		return err
	}
	return dva.run(size)
}

func (dva *diskResizeVMAction) run(size string) error {
	if err := dva.assertVMExistsAndStopped(dva.creator, dva.logger); err != nil {
		return err
	}
	dva.logger.Infof("Resizing disk to %s...", size)

	limaCmd := dva.creator.CreateWithoutStdio("disk", "resize", limaInstanceName, "--size", size)
	output, err := limaCmd.CombinedOutput()
	if err != nil {
		return fmt.Errorf("failed to resize disk: %w\n%s", err, output)
	}

	dva.logger.Info("Disk resized successfully.")
	return nil
}

func (dva *diskResizeVMAction) assertVMExistsAndStopped(creator command.NerdctlCmdCreator, logger flog.Logger) error {
	status, err := lima.GetVMStatus(creator, logger, limaInstanceName)
	if err != nil {
		return err
	}

	switch status {
	case lima.Nonexistent:
		return fmt.Errorf("virtual machine %q does not exist", limaInstanceName)
	case lima.Running:
		return fmt.Errorf("virtual machine %q must be in stopped state to resize disk", limaInstanceName)
	default:
		return nil
	}
}
