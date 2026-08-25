// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package main

import (
	"fmt"
	"os"
	"path/filepath"

	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/osimage"
	"github.com/runfinch/finch/pkg/path"
)

type osImageRollbackAction struct {
	logger        flog.Logger
	fp            path.Finch
	fc            *config.Finch
	finchRootPath string
}

func newOSImageRollbackCommand(logger flog.Logger, fp path.Finch, fc *config.Finch, finchRootPath string) *cobra.Command {
	action := &osImageRollbackAction{logger: logger, fp: fp, fc: fc, finchRootPath: finchRootPath}
	cmd := &cobra.Command{
		Use:   "rollback",
		Short: "Roll back to the previous OS image",
		RunE:  action.runAdapter,
	}
	return cmd
}

func (a *osImageRollbackAction) runAdapter(_ *cobra.Command, _ []string) error {
	return a.run()
}

func (a *osImageRollbackAction) run() error {
	backupEnabled := a.fc.OSImage.BackupEnabled()
	if !backupEnabled {
		return fmt.Errorf("rollback is not available because OS image backups are disabled in config")
	}

	numBackups := a.fc.OSImage.GetNumBackups()
	finchDir := a.fp.FinchDir(a.finchRootPath)
	// +1 to count for the current image.
	history, err := osimage.LoadHistory(finchDir, numBackups+1)
	if err != nil {
		return fmt.Errorf("failed to load image history: %w", err)
	}

	// Peek and see if the target image is available on-disk or not.
	entry := history.PeekSecondLast()
	if entry == nil {
		return fmt.Errorf("no previous image to roll back to")
	}
	imagePath := filepath.Join(a.fp.OSImageDir(), entry.Name)
	if _, err := os.Stat(imagePath); err != nil {
		// TODO: maybe automatically re-download the image from https://deps.runfinch.com ?
		// The url is different for windows rootfs,
		a.logger.Infof("The image may be available for download at %s%s", "https://deps.runfinch.com/", entry.Name)
		return fmt.Errorf("previous image %s not found in OS image directory", entry.Name)
	}

	if err := osimage.ApplyImage(a.fp.BaseYamlFilePath(), imagePath, entry.Digest); err != nil {
		return fmt.Errorf("failed to apply rolled-back image: %w", err)
	}

	// After rolling back to an older image, remove the current image from history and disk.
	popped := history.RemoveLast()
	if err := osimage.SaveHistory(finchDir, history); err != nil {
		return fmt.Errorf("failed to save history after rollback: %w", err)
	}
	poppedPath := filepath.Join(a.fp.OSImageDir(), popped.Name)
	if err := os.Remove(poppedPath); err != nil && !os.IsNotExist(err) {
		a.logger.Warnf("Failed to remove OS image %s: %v", popped.Name, err)
	} else if err == nil {
		a.logger.Infof("Removed OS image: %s", popped.Name)
	}
	a.logger.Infof("Rolled back to OS image: %s", entry.Name)
	a.logger.Info("Please re-initialize your Finch VM instance by running \"finch vm stop && finch vm remove && finch vm init\"")
	return nil
}
