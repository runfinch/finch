// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package update manages the download and installation process for users to update
// Finch to the newest release through CLI
package update

import (
	"errors"
	"fmt"
	"io"
	"net/http"
	"os"
	"os/exec"
	"path"
	"path/filepath"
	"runtime"
	"strings"

	"github.com/runfinch/finch/pkg/version"
)

// GetFinchVersion returns the Finch client version.
func GetFinchVersion() (clientVersion string) {
	return version.Version
}

// DownloadAndInstallUpdate downloads and installs the specified version of Finch.
func DownloadAndInstallUpdate(latestVersion string) error {
	// Get the appropriate download URL based on platform (MacOS or Windows)
	downloadURL, err := getDownloadURL(latestVersion, runtime.GOOS, runtime.GOARCH)
	if err != nil {
		return fmt.Errorf("failed to get download URL: %w", err)
	}

	// Create a temporary file to store the download
	tempDir := os.TempDir()
	defer func() {
		if err := os.Remove(tempDir); err != nil {
			return
		}
	}()
	fileName := filepath.Base(downloadURL)
	filePath := filepath.Join(tempDir, fileName)

	// Download the file
	if err := downloadFile(downloadURL, filePath); err != nil {
		return fmt.Errorf("failed to download update: %w", err)
	}

	// Install the update
	if err := installUpdate(filePath); err != nil {
		return fmt.Errorf("failed to install update: %w", err)
	}

	return nil
}

// getDownloadURL returns the appropriate download URL for the current platform.
func getDownloadURL(version, os, arch string) (string, error) {
	version = strings.TrimPrefix(version, "v")
	baseURL := fmt.Sprintf("github.com/runfinch/finch/releases/download/v%s/", version)

	switch os {
	case "darwin":
		if arch == "arm64" {
			return baseURL + fmt.Sprintf("finch-v%s-aarch64.pkg", version), nil
		}
		// runtime.GOARCH == "amd64" (x86_64)
		return baseURL + fmt.Sprintf("finch-v%s-x86_64.pkg", version), nil
	case "windows":
		return baseURL + fmt.Sprintf("finch-v%s.msi", version), nil
	case "linux":
		// For Linux, we'll use package managers, so no direct download URL
		return "", fmt.Errorf("updates on Linux should use the system package manager (yum/dnf)")
	default:
		return "", fmt.Errorf("unsupported platform: %s/%s", runtime.GOOS, runtime.GOARCH)
	}
}

// downloadFile downloads a file from a URL to a local path.
func downloadFile(url, filePath string) error {
	filePath = filepath.Clean(filePath)
	out, err := os.Create(filePath)
	if err != nil {
		return err
	}

	defer func() {
		if err := out.Close(); err != nil {
			return
		}
	}()

	resp, err := http.Get(fmt.Sprintf("https://%s", path.Clean(url)))
	if err != nil {
		return err
	}

	defer func() {
		if err := resp.Body.Close(); err != nil {
			return
		}
	}()

	if resp.StatusCode != http.StatusOK {
		return fmt.Errorf("bad status: %s", resp.Status)
	}

	_, err = io.Copy(out, resp.Body)
	return err
}

func installUpdate(filePath string) error {
	var cmd *exec.Cmd

	switch runtime.GOOS {
	case "darwin":
		cmd = exec.Command("installer", "-pkg", filePath, "-target", "/")

		if err := cmd.Run(); err != nil {
			exitError := &exec.ExitError{}
			if errors.As(err, &exitError) {
				return fmt.Errorf("installation failed due to insufficient permissions. Please run: sudo finch update-finch --install")
			}
			return err
		}
		return nil
	case "windows":
		cmd = exec.Command("msiexec", "/i", filePath, "/quiet")
	default:
		return fmt.Errorf("unsupported platform for finch update installation: %s", runtime.GOOS)
	}

	return cmd.Run()
}

// CheckForUpdate checks if an update is available for Finch.
func CheckForUpdate() (bool, string, error) {
	currentVersion := GetFinchVersion()
	currentVersion = strings.Split(currentVersion, "+")[0]

	if currentVersion == "" || strings.HasSuffix(currentVersion, ".modified") {
		// Warn but allow users who are on development/modified builds of Finch to update
		fmt.Printf("Warning: User is on a modified build of Finch (version: %s)\n", currentVersion)
		currentVersion = ""
	}

	latestVersion, err := version.GetLatestVersion()
	if err != nil {
		return false, "", err
	}

	latestVersion = strings.TrimPrefix(latestVersion, "v")

	return compareVersions(currentVersion, latestVersion), latestVersion, nil
}

// compareVerisons compares two version numbers assumed to be in the form '#.#.#'.
func compareVersions(a, b string) bool {
	aParts := strings.Split(a, ".")
	bParts := strings.Split(b, ".")

	for i := 0; i < len(aParts) && i < len(bParts); i++ {
		aNum := 0
		bNum := 0
		_, _ = fmt.Sscanf(aParts[i], "%d", &aNum)
		_, _ = fmt.Sscanf(bParts[i], "%d", &bNum)

		if aNum < bNum {
			return true
		} else if aNum > bNum {
			return false
		}
	}

	return len(aParts) < len(bParts)
}
