// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package main

import (
	"fmt"

	"github.com/spf13/afero"
	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/flog"
)

func newVMDiskResizeCommand(
	limaCmdCreator command.NerdctlCmdCreator, logger flog.Logger, lca config.LimaConfigApplier, fs afero.Fs,
) *cobra.Command {
	var size string
	cmd := &cobra.Command{
		Use:   "resize",
		Short: "Resize the virtual machine's data disk",
		RunE:  newVMDiskResizeAction(limaCmdCreator, logger, lca, fs).runAdapter,
	}
	cmd.Flags().StringVar(&size, "size", "", "New size for the disk (required)")
	_ = cmd.MarkFlagRequired("size")
	return cmd
}

type diskResizeVMAction struct {
	logger            flog.Logger
	creator           command.NerdctlCmdCreator
	limaConfigApplier config.LimaConfigApplier
	fs                afero.Fs
}

func newVMDiskResizeAction(
	limaCmdCreator command.NerdctlCmdCreator, logger flog.Logger, lca config.LimaConfigApplier, fs afero.Fs,
) *diskResizeVMAction {
	return &diskResizeVMAction{
		logger:            logger,
		creator:           limaCmdCreator,
		limaConfigApplier: lca,
		fs:                fs,
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
	dva.logger.Warnf("Increasing disk size is irreversible without losing data.")
	dva.logger.Infof("Resizing disk to %s...", size)

	configPath := dva.limaConfigApplier.GetFinchConfigPath()
	oldConfig, err := afero.ReadFile(dva.fs, configPath)
	if err != nil {
		return fmt.Errorf("failed to read finch config: %w", err)
	}

	isConfigUpdated, err := config.ModifyFinchConfig(
		dva.fs,
		dva.logger,
		configPath,
		config.VMConfigOpts{DataDisk: &size},
	)
	if err != nil {
		return fmt.Errorf("failed to update finch config: %w", err)
	}

	limaCmd := dva.creator.CreateWithoutStdio("disk", "resize", limaInstanceName, "--size", size)
	output, err := limaCmd.CombinedOutput()
	if err != nil {
		if isConfigUpdated {
			if writeErr := afero.WriteFile(dva.fs, configPath, oldConfig, 0o644); writeErr != nil {
				return fmt.Errorf("failed to rollback config (disk resize failed): %w", writeErr)
			}
			dva.logger.Info("Configuration changes rolled back.")
		}
		return fmt.Errorf("failed to resize disk: %w\n%s", err, output)
	}

	dva.logger.Info("Disk resized successfully.")
	if isConfigUpdated {
		dva.logger.Info("Configuration updated with new disk size.")
	}

	return nil
}
