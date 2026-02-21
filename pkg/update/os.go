// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package update manages the download and installation process for users to update
// Finch to the newest release and for VM OS image updates
package update

import (
	"crypto/sha512"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"strings"

	"gopkg.in/yaml.v3"
)

const (
	// DependencyCloudFrontURL is the base URL for dependency downloads.
	DependencyCloudFrontURL = "https://deps.runfinch.com"
	// BaseOSURL is the base URL for OS artifacts manifest.
	BaseOSURL = "https://artifact.runfinch.com" + "/manifest/latest-os-artifacts.json"
	// RootfsURL is the base URL for rootfs artifacts manifest.
	RootfsURL = "https://artifact.runfinch.com" + "/manifest/latest-rootfs-artifacts.json"
)

// Status represents the status of an OS update check.
type Status struct {
	UpdateAvailable bool   `json:"updateAvailable"`
	CurrentVersion  string `json:"currentVersion"`
	LatestVersion   string `json:"latestVersion"`
}

// OSImage represents an OS image configuration.
type OSImage struct {
	Location string `yaml:"location"`
	Arch     string `yaml:"arch"`
	Digest   string `yaml:"digest"`
}

// FinchYAML represents the structure of the finch.yaml file.
type FinchYAML struct {
	Images []OSImage `yaml:"images"`
}

// OSManifest represents the OS manifest file structure.
type OSManifest struct {
	AARCH64 struct {
		Filename  string `json:"filename"`
		SHA512Sum string `json:"sha512sum"`
	} `json:"aarch64"`
	X8664 struct {
		Filename  string `json:"filename"`
		SHA512Sum string `json:"sha512sum"`
	} `json:"x86_64"`
}

// RootfsManifest represents the rootfs manifest file structure.
type RootfsManifest struct {
	Filename  string `json:"filename"`
	SHA512Sum string `json:"sha512sum"`
}

// OSUpdater handles OS update operations.
type OSUpdater struct {
	ProjectRoot   string
	OutputDir     string
	FinchYAMLPath string
	HTTPClient    *http.Client
}

// NewOSUpdater creates a new OSUpdater instance.
func NewOSUpdater(projectRoot string) *OSUpdater {
	return &OSUpdater{
		ProjectRoot:   projectRoot,
		OutputDir:     filepath.Join(projectRoot, "os"),
		FinchYAMLPath: filepath.Join(projectRoot, "os", "finch.yaml"),
		HTTPClient:    http.DefaultClient,
	}
}

// CheckForUpdates checks if OS updates are available.
func (u *OSUpdater) CheckForUpdates() (*Status, error) {
	return u.CheckForUpdatesWithOS(runtime.GOOS, runtime.GOARCH)
}

// CheckForUpdatesWithOS checks if OS updates are available with specified OS and architecture.
func (u *OSUpdater) CheckForUpdatesWithOS(goos, goarch string) (*Status, error) {
	// Get current OS version from finch.yaml
	currentVersion, err := u.getCurrentOSVersion()
	if err != nil {
		return nil, fmt.Errorf("failed to get current OS version: %w", err)
	}

	// Get the latest OS version based on platform and architecture
	var latestFilename string

	if goos == "windows" {
		rootfsManifest, err := u.getRootfsManifest()
		if err != nil {
			return nil, fmt.Errorf("failed to get rootfs manifest: %w", err)
		}
		latestFilename = rootfsManifest.Filename
	} else {
		osManifest, err := u.getOSManifest()
		if err != nil {
			return nil, fmt.Errorf("failed to get OS manifest: %w", err)
		}

		if goarch == "arm64" {
			latestFilename = osManifest.AARCH64.Filename
		} else {
			latestFilename = osManifest.X8664.Filename
		}
	}

	// Compare versions
	updateAvailable := currentVersion != latestFilename && latestFilename != ""

	return &Status{
		UpdateAvailable: updateAvailable,
		CurrentVersion:  currentVersion,
		LatestVersion:   latestFilename,
	}, nil
}

// ApplyUpdate downloads and applies the OS update.
func (u *OSUpdater) ApplyUpdate() error {
	return u.applyUpdateWithBinary(runtime.GOOS, runtime.GOARCH, u.getFinchBinaryPath())
}

// ApplyUpdateWithOS downloads and applies the OS update with specified OS and architecture.
func (u *OSUpdater) ApplyUpdateWithOS(goos, goarch string) error {
	return u.applyUpdateWithBinary(goos, goarch, u.getFinchBinaryPathForOS(goos))
}

// getFinchBinaryPath returns the platform-specific path to the finch binary.
func (u *OSUpdater) getFinchBinaryPath() string {
	return u.getFinchBinaryPathForOS(runtime.GOOS)
}

// getFinchBinaryPathForOS returns the platform-specific path to the finch binary for a given OS.
func (u *OSUpdater) getFinchBinaryPathForOS(goos string) string {
	switch goos {
	case "darwin":
		return "/Applications/Finch/bin/finch"
	case "windows":
		return "C:\\Program Files\\Finch\\bin\\finch.exe"
	default:
		return "finch"
	}
}

// applyUpdateWithBinary downloads and applies the OS update using a custom binary path.
func (u *OSUpdater) applyUpdateWithBinary(goos, goarch, finchBinPath string) error {
	status, err := u.CheckForUpdatesWithOS(goos, goarch)
	if err != nil {
		return fmt.Errorf("failed to check for updates: %w", err)
	}

	if !status.UpdateAvailable {
		return fmt.Errorf("no OS updates available to apply")
	}

	var artifactFilename, artifactShasum, arch string

	if goos == "windows" {
		rootfsManifest, err := u.getRootfsManifest()
		if err != nil {
			return fmt.Errorf("failed to get rootfs manifest: %w", err)
		}
		artifactFilename = rootfsManifest.Filename
		artifactShasum = rootfsManifest.SHA512Sum
		arch = "x86_64"
	} else {
		osManifest, err := u.getOSManifest()
		if err != nil {
			return fmt.Errorf("failed to get OS manifest: %w", err)
		}

		if goarch == "arm64" {
			artifactFilename = osManifest.AARCH64.Filename
			artifactShasum = osManifest.AARCH64.SHA512Sum
			arch = "aarch64"
		} else {
			artifactFilename = osManifest.X8664.Filename
			artifactShasum = osManifest.X8664.SHA512Sum
			arch = "x86_64"
		}
	}

	if artifactShasum == "" {
		return fmt.Errorf("failed to find shasum for artifact %s", artifactFilename)
	}

	// Create output directory if it doesn't exist
	err = os.MkdirAll(u.OutputDir, 0o750)
	if err != nil {
		return fmt.Errorf("failed to create output directory: %w", err)
	}

	// Find old OS images
	oldImages, err := u.findOldOSImages(artifactFilename)
	if err != nil {
		return fmt.Errorf("failed to find old OS images: %w", err)
	}

	// Download the OS image
	imageLocation := filepath.Join(u.OutputDir, artifactFilename)
	err = u.downloadOSImage(DependencyCloudFrontURL, artifactFilename, artifactShasum, imageLocation)
	if err != nil {
		return fmt.Errorf("failed to download OS image: %w", err)
	}

	// Update the finch.yaml file
	err = u.updateFinchYAML(imageLocation, arch, "sha512:"+artifactShasum)
	if err != nil {
		return fmt.Errorf("failed to update finch.yaml: %w", err)
	}

	limaDataDir := filepath.Join(u.ProjectRoot, "lima", "data", "finch")

	u.stopAndRemoveVM(finchBinPath)

	// Clean up Lima data directory
	if _, err := os.Stat(limaDataDir); err == nil {
		err = os.RemoveAll(limaDataDir)
		if err != nil {
			return fmt.Errorf("failed to clean up Lima data directory: %w", err)
		}
	}

	// Initialize the VM with the new OS
	err = u.initVM(finchBinPath)
	if err != nil {
		return fmt.Errorf("failed to initialize VM: %w", err)
	}

	// Remove old OS images
	err = u.removeOldOSImages(oldImages)
	if err != nil {
		return fmt.Errorf("failed to remove old OS images: %w", err)
	}

	return nil
}

// getCurrentOSVersion gets the current OS version from finch.yaml.
func (u *OSUpdater) getCurrentOSVersion() (string, error) {
	// Check if finch.yaml exists
	if _, err := os.Stat(u.FinchYAMLPath); os.IsNotExist(err) {
		return "", nil // No current version
	}

	// Read the finch.yaml file
	data, err := os.ReadFile(u.FinchYAMLPath)
	if err != nil {
		return "", fmt.Errorf("failed to read finch.yaml: %w", err)
	}

	// Parse the YAML
	var finchYAML FinchYAML
	err = yaml.Unmarshal(data, &finchYAML)
	if err != nil {
		return "", fmt.Errorf("failed to parse finch.yaml: %w", err)
	}

	// Check if there are any images
	if len(finchYAML.Images) == 0 {
		return "", nil
	}

	// Get the current OS version
	currentVersion := filepath.Base(finchYAML.Images[0].Location)
	return currentVersion, nil
}

// getOSManifest retrieves the OS manifest file in s3 through Cloudfront.
func (u *OSUpdater) getOSManifest() (*OSManifest, error) {
	resp, err := u.HTTPClient.Get(BaseOSURL)
	if err != nil {
		return nil, fmt.Errorf("failed to get OS manifest: %w", err)
	}
	defer func() {
		_ = resp.Body.Close()
	}()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("failed to get OS manifest: status code %d", resp.StatusCode)
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, fmt.Errorf("failed to read OS manifest: %w", err)
	}

	var manifest OSManifest
	err = json.Unmarshal(body, &manifest)
	if err != nil {
		return nil, fmt.Errorf("failed to unmarshal OS manifest: %w", err)
	}

	return &manifest, nil
}

// getRootfsManifest retrieves the rootfs manifest file.
func (u *OSUpdater) getRootfsManifest() (*RootfsManifest, error) {
	resp, err := u.HTTPClient.Get(RootfsURL)
	if err != nil {
		return nil, fmt.Errorf("failed to get rootfs manifest: %w", err)
	}
	defer func() {
		_ = resp.Body.Close()
	}()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("failed to get rootfs manifest: status code %d", resp.StatusCode)
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, fmt.Errorf("failed to read rootfs manifest: %w", err)
	}

	var manifest RootfsManifest
	err = json.Unmarshal(body, &manifest)
	if err != nil {
		return nil, fmt.Errorf("failed to unmarshal rootfs manifest: %w", err)
	}

	return &manifest, nil
}

// findOldOSImages finds old OS images in the output directory.
func (u *OSUpdater) findOldOSImages(currentImage string) ([]string, error) {
	var oldImages []string

	entries, err := os.ReadDir(u.OutputDir)
	if err != nil {
		if os.IsNotExist(err) {
			return oldImages, nil
		}
		return nil, fmt.Errorf("failed to read output directory: %w", err)
	}

	for _, entry := range entries {
		if entry.IsDir() {
			continue
		}
		name := entry.Name()
		if (strings.HasSuffix(name, ".qcow2") || strings.HasSuffix(name, ".tar.gz")) && name != currentImage {
			oldImages = append(oldImages, filepath.Join(u.OutputDir, name))
		}
	}

	return oldImages, nil
}

// constructDownloadURL constructs the download URL based on the artifact type.
func (u *OSUpdater) constructDownloadURL(baseURL, osBasename string) string {
	if strings.Contains(osBasename, "finch-rootfs") {
		return fmt.Sprintf("%s/common/x86-64/%s", baseURL, osBasename)
	}
	return fmt.Sprintf("%s/%s", baseURL, osBasename)
}

// downloadOSImage downloads the OS image.
func (u *OSUpdater) downloadOSImage(baseURL, osBasename, osDigest, destination string) error {
	url := u.constructDownloadURL(baseURL, osBasename)

	// Create a temporary file
	tempFile, err := os.CreateTemp("", "finch-os-*.qcow2")
	if err != nil {
		return fmt.Errorf("failed to create temporary file: %w", err)
	}
	defer func() {
		_ = os.Remove(tempFile.Name())
	}()
	defer func() {
		_ = tempFile.Close()
	}()

	// Download the file
	resp, err := u.HTTPClient.Get(url)
	if err != nil {
		return fmt.Errorf("failed to download OS image: %w", err)
	}
	defer func() {
		_ = resp.Body.Close()
	}()

	if resp.StatusCode != http.StatusOK {
		return fmt.Errorf("failed to download OS image: status code %d", resp.StatusCode)
	}

	// Create a hash writer
	hash := sha512.New()
	writer := io.MultiWriter(tempFile, hash)

	// Copy the response body to the file and hash
	_, err = io.Copy(writer, resp.Body)
	if err != nil {
		return fmt.Errorf("failed to write OS image: %w", err)
	}

	// Verify the digest
	actualDigest := hex.EncodeToString(hash.Sum(nil))
	if actualDigest != osDigest {
		return fmt.Errorf("digest mismatch: expected %s, got %s", osDigest, actualDigest)
	}

	// Close the temporary file
	err = tempFile.Close()
	if err != nil {
		return fmt.Errorf("failed to close temporary file: %w", err)
	}

	// Move the temporary file to the destination
	err = os.Rename(tempFile.Name(), destination)
	if err != nil {
		return fmt.Errorf("failed to move OS image: %w", err)
	}

	return nil
}

// updateFinchYAML updates the finch.yaml file with the new OS image.
func (u *OSUpdater) updateFinchYAML(imageLocation, arch, digest string) error {
	// Create a FinchYAML struct
	finchYAML := FinchYAML{
		Images: []OSImage{
			{
				Location: imageLocation,
				Arch:     arch,
				Digest:   digest,
			},
		},
	}

	// Read the existing finch.yaml if it exists
	if _, err := os.Stat(u.FinchYAMLPath); err == nil {
		data, err := os.ReadFile(u.FinchYAMLPath)
		if err != nil {
			return fmt.Errorf("failed to read finch.yaml: %w", err)
		}

		// Parse the YAML
		var existingYAML map[string]interface{}
		err = yaml.Unmarshal(data, &existingYAML)
		if err != nil {
			return fmt.Errorf("failed to parse finch.yaml: %w", err)
		}

		// Update only the images section
		existingYAML["images"] = finchYAML.Images

		// Marshal the updated YAML
		data, err = yaml.Marshal(existingYAML)
		if err != nil {
			return fmt.Errorf("failed to marshal finch.yaml: %w", err)
		}

		// Write the updated YAML
		return os.WriteFile(u.FinchYAMLPath, data, 0o644)
	}

	// If the file doesn't exist, create a new one
	data, err := yaml.Marshal(finchYAML)
	if err != nil {
		return fmt.Errorf("failed to marshal finch.yaml: %w", err)
	}

	return os.WriteFile(u.FinchYAMLPath, data, 0o644)
}

// stopAndRemoveVM stops and removes the VM.
func (u *OSUpdater) stopAndRemoveVM(finchBinPath string) {
	// Stop the VM
	stopCmd := exec.Command(finchBinPath, "vm", "stop")
	_ = stopCmd.Run() // Ignore error as VM might not be running

	// Remove the VM
	removeCmd := exec.Command(finchBinPath, "vm", "remove", "--force")
	_ = removeCmd.Run() // Ignore error as VM might not exist
}

// initVM initializes the VM.
func (u *OSUpdater) initVM(finchBinPath string) error {
	initCmd := exec.Command(finchBinPath, "vm", "init")
	err := initCmd.Run()
	if err != nil {
		return fmt.Errorf("failed to initialize VM: %w", err)
	}

	return nil
}

// removeOldOSImages removes old OS images.
func (u *OSUpdater) removeOldOSImages(oldImages []string) error {
	for _, image := range oldImages {
		err := os.Remove(image)
		if err != nil {
			return fmt.Errorf("failed to remove old OS image %s: %w", image, err)
		}
	}

	return nil
}
