// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package update manages the download and installation process for users to update
// Finch to the newest release and for VM OS image updates
package update

import (
	"fmt"
	"strings"

	"github.com/runfinch/finch/pkg/version"
)

// GetFinchVersion returns the Finch client version.
func GetFinchVersion() (clientVersion string) {
	return version.Version
}

// CheckForUpdate checks if an update is available for Finch.
func CheckForUpdate() (bool, string, error) {
	currentVersion := GetFinchVersion()
	currentVersion = strings.Split(currentVersion, "+")[0]

	if currentVersion == "" || strings.HasSuffix(currentVersion, ".modified") {
		// Warn but allow users who are on development/modified builds of Finch to update
		currentVersion = ""
	}

	latestVersion, err := version.GetLatestVersion()
	if err != nil {
		return false, "", err
	}

	latestVersion = strings.TrimPrefix(latestVersion, "v")

	updateAvailable, err := compareVersions(currentVersion, latestVersion)
	if err != nil {
		return false, "", err
	}

	return updateAvailable, latestVersion, nil
}

// compareVersions compares two version numbers assumed to be in the form '#.#.#'.
func compareVersions(a, b string) (bool, error) {
	// Handle empty current version (development builds)
	if a == "" {
		return true, nil
	}

	aParts := strings.Split(a, ".")
	bParts := strings.Split(b, ".")

	if len(aParts) != len(bParts) {
		return false, fmt.Errorf("version format mismatch: current version '%s' has %d parts, latest version '%s' has %d parts",
			a, len(aParts), b, len(bParts))
	}

	for i := 0; i < len(aParts); i++ {
		aNum := 0
		bNum := 0
		_, _ = fmt.Sscanf(aParts[i], "%d", &aNum)
		_, _ = fmt.Sscanf(bParts[i], "%d", &bNum)

		if aNum < bNum {
			return true, nil
		} else if aNum > bNum {
			return false, nil
		}
	}

	// Versions are equal
	return false, nil
}
