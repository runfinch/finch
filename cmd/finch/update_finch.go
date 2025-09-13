// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"fmt"
	"io"
	"strings"

	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/update"
)

func newUpdateCommand(logger flog.Logger, stdOut io.Writer) *cobra.Command {
	updateCommand := &cobra.Command{
		Use:   "update-finch",
		Args:  cobra.NoArgs,
		Short: "Check for Finch updates to install",
		Long:  "Check for available updates to Finch. Use --install to download and install updates.",
		RunE:  newUpdateAction(logger, stdOut).runAdapter,
	}

	updateCommand.Flags().BoolP("install", "i", false, "Download and install the update if available")

	return updateCommand
}

type updateAction struct {
	logger flog.Logger
	stdOut io.Writer
}

func newUpdateAction(logger flog.Logger, stdOut io.Writer) *updateAction {
	return &updateAction{logger: logger, stdOut: stdOut}
}

func (ua *updateAction) runAdapter(cmd *cobra.Command, _ []string) error {
	install, err := cmd.Flags().GetBool("install")
	if err != nil {
		return err
	}

	return ua.run(!install)
}

func (ua *updateAction) run(checkOnly bool) error {
	ua.logger.Info("Checking for updates...")

	updateAvailable, latestVersion, err := updatefinchFunctions.CheckForUpdate()
	if err != nil {
		return fmt.Errorf("failed to check for updates: %w", err)
	}

	if !updateAvailable {
		ua.logger.Info("Finch is already up to date.")
		return nil
	}

	currentVersion := updatefinchFunctions.GetFinchVersion()
	if currentVersion == "" || strings.HasSuffix(currentVersion, ".modified") {
		// Warn but allow users who are on development/modified builds of Finch to update
		ua.logger.Warnf("User is on a modified build of Finch (version: %s)", currentVersion)
	}

	ua.logger.Infof("A new version of Finch is available: %s (current version: %s)\n", latestVersion, currentVersion)

	if checkOnly {
		ua.logger.Info("Run 'finch update-finch --install' to install the latest version.")
		return nil
	}

	ua.logger.Info("Downloading and installing update...")
	if err := updatefinchFunctions.DownloadAndInstallUpdate(latestVersion); err != nil {
		return err
	}

	ua.logger.Infof("Finch has been updated successfully (version: %s).\n", latestVersion)
	return nil
}

// updatefinchFunctions holds the functions we need to mock for testing.
var updatefinchFunctions = struct {
	CheckForUpdate           func() (bool, string, error)
	GetFinchVersion          func() string
	DownloadAndInstallUpdate func(string) error
}{
	CheckForUpdate:           update.CheckForUpdate,
	GetFinchVersion:          update.GetFinchVersion,
	DownloadAndInstallUpdate: update.DownloadAndInstallUpdate,
}
