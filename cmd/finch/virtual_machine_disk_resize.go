// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package main

import (
	"fmt"

	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/flog"
)

func newVMDiskResizeCommand(limaCmdCreator command.NerdctlCmdCreator, logger flog.Logger) *cobra.Command {
	var size string
	cmd := &cobra.Command{
		Use:   "resize",
		Short: "Resize the virtual machine disk",
		RunE:  newVMDiskResizeAction(limaCmdCreator, logger).runAdapter,
	}
	cmd.Flags().StringVar(&size, "size", "", "New size for the disk (required)")
	_ = cmd.MarkFlagRequired("size")
	return cmd
}

type diskResizeVMAction struct {
	logger  flog.Logger
	creator command.NerdctlCmdCreator
}

func newVMDiskResizeAction(limaCmdCreator command.NerdctlCmdCreator, logger flog.Logger) *diskResizeVMAction {
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
	dva.logger.Infof("Resizing disk to %s...", size)

	limaCmd := dva.creator.CreateWithoutStdio("disk", "resize", limaInstanceName, "--size", size)
	output, err := limaCmd.CombinedOutput()
	if err != nil {
		return fmt.Errorf("failed to resize disk: %w\n%s", err, output)
	}

	dva.logger.Info("Disk resized successfully.")
	return nil
}
