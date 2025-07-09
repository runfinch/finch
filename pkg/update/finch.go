// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package update manages the download and installation process for users to update
// Finch to the newest release and for VM OS image updates
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
	defer os.Remove(tempDir) //nolint:errcheck // removing directory

	fileName := filepath.Base(downloadURL)
	filePath := filepath.Join(tempDir, fileName)

	// Download the file
	if err := downloadFile(downloadURL, filePath); err != nil {
		return fmt.Errorf("failed to download update: %w", err)
	}

	// Verify the signature of the downloaded file
	if err := verifySignature(runtime.GOOS, filePath); err != nil {
		return fmt.Errorf("signature verification failed: %w", err)
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

	defer out.Close() //nolint:errcheck // closing file handle

	resp, err := http.Get(fmt.Sprintf("https://%s", path.Clean(url)))
	if err != nil {
		return err
	}

	defer resp.Body.Close() //nolint:errcheck // closing HTTP response body

	if resp.StatusCode != http.StatusOK {
		return fmt.Errorf("bad status: %s", resp.Status)
	}

	_, err = io.Copy(out, resp.Body)
	return err
}

func installUpdate(filePath string) error {
	var cmd *exec.Cmd
	filePath = filepath.Clean(filePath)

	switch runtime.GOOS {
	case "darwin":
		script := fmt.Sprintf(`do shell script "installer -pkg %s -target /" with administrator privileges with `+
			`prompt "Finch is requesting permission to install version update"`, filePath)
		cmd = exec.Command("osascript", "-e", script) //nolint:gosec // osascript subprocess

		if err := cmd.Run(); err != nil {
			return fmt.Errorf("installation failed: %w", err)
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

	// Check if version parts length match
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

// verifySignature verifies the digital signature of the downloaded installer file.
func verifySignature(os, filePath string) error {
	switch os {
	case "darwin":
		return verifyPKGSignature(filePath)
	case "windows":
		return verifyMSISignature(filePath)
	default:
		fmt.Printf("Warning: Signature verification not supported on %s\n", runtime.GOOS)
		return nil
	}
}

// verifyPKGSignature verifies the signature of a macOS PKG file using pkgutil.
func verifyPKGSignature(filePath string) error {
	cmd := exec.Command("pkgutil", "--check-signature", filePath)
	output, err := cmd.CombinedOutput()
	if err != nil {
		return fmt.Errorf("signature verification failed: %w\nOutput: %s", err, string(output))
	}

	outputStr := string(output)

	// Check for key indicators of a valid signature
	if !strings.Contains(outputStr, "signed by a developer certificate issued by Apple for distribution") {
		return errors.New("package is not signed by a valid Apple developer certificate")
	}

	if !strings.Contains(outputStr, "trusted by the Apple notary service") {
		return errors.New("package is not notarized by Apple")
	}

	// Check for AMZN Mobile LLC (Amazon's certificate)
	if !strings.Contains(outputStr, "AMZN Mobile LLC") {
		return errors.New("package is not signed by the expected Amazon certificate")
	}

	// Check for Amazon's Team ID or SHA256 fingerprint
	expectedTeamID := "94KV3E626L"
	expectedFingerprint := "49 68 39 4A BA 83 3B F0 CC 5E 98 3B E7 C1 72 AC 85 97 65 18 B9 4C BA 34 62 BF E9 23 76 98 C5 DA"

	if !strings.Contains(outputStr, expectedTeamID) && !strings.Contains(outputStr, expectedFingerprint) {
		return fmt.Errorf("package is not signed by the expected Amazon certificate (Team ID: %s or Fingerprint: %s)",
			expectedTeamID, expectedFingerprint)
	}

	// PKG signature verification successful
	return nil
}

// verifyMSISignature verifies the signature of a Windows MSI file using Get-AuthenticodeSignature.
func verifyMSISignature(filePath string) error {
	// Use PowerShell Get-AuthenticodeSignature cmdlet to verify the signature
	cleanPath := filepath.Clean(filePath)
	cmd := exec.Command("powershell", "-Command", "Get-AuthenticodeSignature", "-FilePath", cleanPath) //nolint:gosec // run subprocess
	output, err := cmd.CombinedOutput()
	if err != nil {
		return fmt.Errorf("signature verification failed: %w\nOutput: %s", err, string(output))
	}

	outputStr := string(output)

	// Check that the signature status is Valid
	if !strings.Contains(outputStr, "Valid") {
		return fmt.Errorf("MSI signature is not valid. Output: %s", outputStr)
	}

	// Check for the expected Amazon certificate thumbprint
	expectedThumbprint := "54B5CD96A30F1D26FA5CE8F11B874123893CACB1"
	if !strings.Contains(outputStr, expectedThumbprint) {
		return fmt.Errorf("MSI is not signed by the expected Amazon certificate (thumbprint: %s)", expectedThumbprint)
	}

	// MSI signature verification successful
	return nil
}
