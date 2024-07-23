// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows

package main

import (
	"io"

	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/flog"

	"github.com/spf13/afero"
	"github.com/spf13/cobra"
)

func newSettingsVMCommand(
	logger flog.Logger,
	lca config.LimaConfigApplier,
	fs afero.Fs,
	stdout io.Writer,
) *cobra.Command {
	settingsVMCommand := &cobra.Command{
		Use:    "settings",
		Short:  "Disabled on Windows as there are currently no configurable VM settings",
		Hidden: true,
		RunE:   newSettingsVMAction(logger, lca, fs, stdout).runAdapter,
	}

	return settingsVMCommand
}

type settingsVMAction struct {
	logger            flog.Logger
	limaConfigApplier config.LimaConfigApplier
	fs                afero.Fs
	stdout            io.Writer
}

func newSettingsVMAction(
	logger flog.Logger,
	lca config.LimaConfigApplier,
	fs afero.Fs,
	stdout io.Writer,
) *settingsVMAction {
	return &settingsVMAction{
		logger:            logger,
		limaConfigApplier: lca,
		fs:                fs,
		stdout:            stdout,
	}
}

func (sva *settingsVMAction) runAdapter(_ *cobra.Command, _ []string) error {
	return sva.run(config.VMConfigOpts{})
}

func (sva *settingsVMAction) run(_ config.VMConfigOpts) error {
	return nil
}
