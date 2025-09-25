// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"fmt"
	"strings"

	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/update"
)

var defaultFuncs = updateInfoFuncs{
	checkForUpdate:  update.CheckForUpdate,
	getFinchVersion: update.GetFinchVersion,
}

func newCheckUpdateCommand(logger flog.Logger) *cobra.Command {
	updateCheckCommand := &cobra.Command{
		Use:   "check-update",
		Args:  cobra.NoArgs,
		Short: "Check for Finch updates",
		RunE:  newCheckUpdateAction(logger, defaultFuncs).runAdapter,
	}

	return updateCheckCommand
}

type checkUpdateAction struct {
	logger flog.Logger
	funcs  updateInfoFuncs
}

type updateInfoFuncs struct {
	checkForUpdate  func() (bool, string, error)
	getFinchVersion func() string
}

func newCheckUpdateAction(logger flog.Logger, funcs updateInfoFuncs) *checkUpdateAction {
	return &checkUpdateAction{logger: logger, funcs: funcs}
}

func (uca *checkUpdateAction) runAdapter(_ *cobra.Command, _ []string) error {
	return uca.run()
}

func (uca *checkUpdateAction) run() error {
	releasesURL := "https://github.com/runfinch/finch/releases"

	uca.logger.Info("Checking for updates...")

	updateAvailable, latestVersion, err := uca.funcs.checkForUpdate()
	if err != nil {
		return fmt.Errorf("failed to check for updates: %w", err)
	}

	if !updateAvailable {
		uca.logger.Info("Finch is already up to date.")
		return nil
	}

	currentVersion := uca.funcs.getFinchVersion()
	if currentVersion == "" || strings.HasSuffix(currentVersion, ".modified") {
		// Warn but allow users who are on development/modified builds of Finch to update
		uca.logger.Warnf("User is on a modified build of Finch (version: %s)", currentVersion)
	}

	uca.logger.Infof("A new version of Finch is available: %s (current version: %s)\n", latestVersion, currentVersion)
	uca.logger.Infof("Go to %s to get the latest version of Finch\n", releasesURL)
	return nil
}
