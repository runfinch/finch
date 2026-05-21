// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package main

import (
	"os"
	"path/filepath"
	"time"

	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/osimage"
	"github.com/runfinch/finch/pkg/path"
)

type osImageUpdateAction struct {
	logger        flog.Logger
	fp            path.Finch
	fc            *config.Finch
	finchRootPath string
	depsURLs      osimage.DepsURLs
	verifier      osimage.ManifestVerifier
	checkOnly     bool
}

func newOSImageUpdateCommand(logger flog.Logger, fp path.Finch, fc *config.Finch, finchRootPath string) *cobra.Command {
	action := newOSImageUpdateAction(logger, fp, fc, finchRootPath)
	cmd := &cobra.Command{
		Use:   "update",
		Short: "Update the OS image to the latest available version",
		RunE:  action.runAdapter,
	}
	cmd.Flags().BoolVar(&action.checkOnly, "check", false, "Only check if an update is available without applying it")
	return cmd
}

func newOSImageUpdateAction(logger flog.Logger, fp path.Finch, fc *config.Finch, finchRootPath string) *osImageUpdateAction {
	return &osImageUpdateAction{
		logger:        logger,
		fp:            fp,
		fc:            fc,
		finchRootPath: finchRootPath,
		depsURLs:      osimage.GetDepsURLs(),
		verifier: osimage.NewCosignVerifier(
			osimage.DefaultTrustedRootProvider{},
			osimage.GetCosignIssuer(),
			osimage.GetCosignIdentity(),
			osimage.DefaultVerifierOptions,
		),
	}
}

func (a *osImageUpdateAction) runAdapter(_ *cobra.Command, _ []string) error {
	return a.run()
}

func (a *osImageUpdateAction) run() error {
	finchDir := a.fp.FinchDir(a.finchRootPath)
	result, err := osimage.CheckForUpdate(a.logger, a.fp, a.depsURLs, a.verifier)
	if err != nil {
		return err
	}

	// This metadata is read by the root finch command to show an update notification to the user.
	metadata := &osimage.UpdateMetadata{
		UpdateAvailable: result.Available,
		CurrentImage:    result.CurrentImage,
		NewImage:        result.NewImage,
		CheckedAt:       time.Now(),
	}
	if err := osimage.WriteMetadata(finchDir, metadata); err != nil {
		a.logger.Warnf("Failed to write update metadata: %v", err)
	}

	if !result.Available {
		a.logger.Info("OS image is already up to date")
		return nil
	}
	a.logger.Infof("New OS image found: %s => %s", result.CurrentImage, result.NewImage)

	if a.checkOnly {
		return nil
	}

	if err := osimage.Update(a.logger, a.fp, result); err != nil {
		return err
	}

	// Write the history file if not available.
	// Append the new os image to the history file, if available.
	backupEnabled := a.fc.OSImage.BackupEnabled()
	numBackups := a.fc.OSImage.GetNumBackups()
	if backupEnabled {
		// +1 to count for the current image.
		// TODO: LoadHistory should read numBackups
		history, err := osimage.LoadHistory(finchDir, numBackups+1)
		if err != nil {
			// Warn and not return error because image history failing to load
			// should not cause an update failure.
			a.logger.Warnf("Failed to load image history: %v", err)
		} else {
			if history.Len() == 0 {
				// Updating for the first time, so append the existing image to history.
				history.PushLast(result.CurrentImage, result.CurrentDigest)
			}
			// Prune older images when backup limit is reached.
			for _, evicted := range history.PushLast(result.NewImage, result.Artifact.Digest) {
				imagePath := filepath.Join(a.fp.OSImageDir(), evicted.Name)
				if err := os.Remove(imagePath); err != nil && !os.IsNotExist(err) {
					a.logger.Warnf("Failed to remove old OS image %s: %v", evicted.Name, err)
				} else if err == nil {
					a.logger.Infof("Removed old OS image: %s", evicted.Name)
				}
			}
			if err := osimage.SaveHistory(finchDir, history); err != nil {
				a.logger.Warnf("Failed to save image history: %v", err)
			}
		}
	} else {
		// Backup is disabled so delete the old image and remove any stale history.
		oldImagePath := filepath.Join(a.fp.OSImageDir(), result.CurrentImage)
		if err := os.Remove(oldImagePath); err != nil {
			a.logger.Warnf("Failed to removed old OS image %s: %v", result.CurrentImage, err)
		} else {
			a.logger.Infof("Removed old OS image: %s", result.CurrentImage)
		}
		historyPath := filepath.Join(finchDir, "os-image-history.json")
		os.Remove(historyPath)
	}

	if err := osimage.ClearMetadata(finchDir); err != nil {
		a.logger.Warnf("Failed to clear update metadata: %v", err)
	}

	a.logger.Info("OS image updated successfully")
	a.logger.Info("Please re-initialize your Finch VM instance by running \"finch vm stop && finch vm remove && finch vm init\"")
	return nil
}
