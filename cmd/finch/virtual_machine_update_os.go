//go:build darwin || windows

package main

import (
	"fmt"
	"runtime"

	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/update"
)

func newUpdateOSVMCommand(logger flog.Logger, finchRootPath string) *cobra.Command {
	updateOSCommand := &cobra.Command{
		Use:   "update-os",
		Short: "Check for virtual machine OS updates",
		Long:  "Check for available OS updates to the Finch virtual machine. Use --install to download and install updates.",
		RunE:  newUpdateOSVMAction(logger, finchRootPath).runAdapter,
	}
	updateOSCommand.Flags().BoolP("install", "i", false, "Download and install the update if available")
	return updateOSCommand
}

type updateOSVMAction struct {
	logger        flog.Logger
	finchRootPath string
}

func newUpdateOSVMAction(logger flog.Logger, finchRootPath string) *updateOSVMAction {
	return &updateOSVMAction{
		logger:        logger,
		finchRootPath: finchRootPath,
	}
}

func (uva *updateOSVMAction) runAdapter(cmd *cobra.Command, _ []string) error {
	install, _ := cmd.Flags().GetBool("install")
	return uva.run(!install)
}

func (uva *updateOSVMAction) run(checkOnly bool) error {
	var finchPath string
	switch runtime.GOOS {
	case "darwin":
		finchPath = "/Applications/Finch"
	case "windows":
		finchPath = "C:\\Program Files\\Finch"
	}

	updater := update.NewOSUpdater(finchPath)

	if checkOnly {
		return uva.checkForUpdates(updater)
	}

	return uva.applyUpdate(updater)
}

type osUpdater interface {
	CheckForUpdates() (*update.Status, error)
	ApplyUpdate() error
}

func (uva *updateOSVMAction) checkForUpdates(updater osUpdater) error {
	uva.logger.Info("Checking for OS updates...")

	status, err := updater.CheckForUpdates()
	if err != nil {
		return fmt.Errorf("failed to check for updates: %w", err)
	}

	if status.UpdateAvailable {
		uva.logger.Infof("OS update available: %s to %s", status.CurrentVersion, status.LatestVersion)
		uva.logger.Info("Run 'finch vm update-os --install' to apply the update")
	} else {
		if status.CurrentVersion != "" {
			uva.logger.Infof("OS is up to date: %s", status.CurrentVersion)
		} else {
			uva.logger.Info("No OS version found. Run 'finch vm init' first.")
		}
	}

	return nil
}

func (uva *updateOSVMAction) applyUpdate(updater osUpdater) error {
	uva.logger.Info("Checking for OS updates...")

	status, err := updater.CheckForUpdates()
	if err != nil {
		return fmt.Errorf("failed to check for updates: %w", err)
	}

	if !status.UpdateAvailable {
		if status.CurrentVersion != "" {
			uva.logger.Infof("OS is already up to date: %s", status.CurrentVersion)
		} else {
			uva.logger.Info("No OS version found. Run 'finch vm init' first.")
		}
		return nil
	}

	uva.logger.Infof("Updating OS from %s to %s...", status.CurrentVersion, status.LatestVersion)
	uva.logger.Warnln("This will stop and recreate the VM. All containers and data will be lost.")

	err = updater.ApplyUpdate()
	if err != nil {
		return fmt.Errorf("failed to apply OS update: %w", err)
	}

	uva.logger.Info("OS update completed successfully")
	return nil
}
