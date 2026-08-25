// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

// Package osimage provies osimage related utilities.
package osimage

import (
	"bytes"
	"crypto"
	"encoding/json"
	"fmt"
	"os"
	"path"
	"path/filepath"
	"runtime"
	"strings"
	"time"

	"github.com/goccy/go-yaml"

	"github.com/runfinch/finch/pkg/flog"
	finchPath "github.com/runfinch/finch/pkg/path"
)

// Manifest represents an os image manifest.
// A manifest is the source of truth for all os updates.
type Manifest struct {
	PublishedAt time.Time           `json:"published_at"`
	ExpiresAt   time.Time           `json:"expires_at"`
	Artifacts   []*ManifestArtifact `json:"artifacts"`
}

// ManifestArtifact represents an os image artifact in the manifest.
type ManifestArtifact struct {
	Platform string `json:"platform"`
	Arch     string `json:"arch"`
	URL      string `json:"url"`
	Digest   string `json:"digest"`
	Size     int64  `json:"size"`
}

// FinchYAML represents finch.yaml file.
type FinchYAML struct {
	Images []*OSImage `yaml:"images"`
}

// OSImage is an os image in the FinchYAML.
type OSImage struct {
	Location string `yaml:"location"`
	Arch     string `yaml:"arch"`
	Digest   string `yaml:"digest"`
}

// CheckUpdateResult is the result of an update check action.
type CheckUpdateResult struct {
	Available     bool
	CurrentImage  string
	CurrentDigest string
	NewImage      string
	Artifact      *ManifestArtifact
}

const (
	manifestFileName       = "manifest.json"
	manifestBundleFileName = "manifest.json.bundle"
)

// DepsURLs are the url's from which Finch will download os image manifest.
type DepsURLs struct {
	ManifestURL       string
	ManifestBundleURL string
}

// Environment variables are honored only when env overrides are enabled.
// This lets the os-image e2e tests redirect the updater to a local test server.
const (
	EnvDepsURL        = "FINCH_DEPS_URL"
	EnvCosignIssuer   = "FINCH_DEPS_COSIGN_ISSUER"
	EnvCosignIdentity = "FINCH_DEPS_COSIGN_IDENTITY"
)

// allowEnvOverrides controls whether the FINCH_DEPS_* environment variables are honored.
// It defaults to false and is set to true only for e2e builds via ldflags.
var allowEnvOverrides = "false"

var depsBaseURL = "https://deps.runfinch.com"

func envOverridesAllowed() bool {
	return allowEnvOverrides == "true"
}

// GetDepsURLs returns properly formed urls from where manifests can be downloaded.
func GetDepsURLs() DepsURLs {
	base := depsBaseURL
	if envOverridesAllowed() {
		if v := os.Getenv(EnvDepsURL); v != "" {
			base = v
		}
	}
	base = strings.TrimSuffix(base, "/")
	return DepsURLs{
		ManifestURL:       base + "/" + manifestFileName,
		ManifestBundleURL: base + "/" + manifestBundleFileName,
	}
}

// CheckForUpdate checks from an os image update from ManifestURL.
func CheckForUpdate(logger flog.Logger, fp finchPath.Finch, urls DepsURLs, verifier ManifestVerifier) (*CheckUpdateResult, error) {
	manifest, err := fetchManifest(logger, urls, verifier)
	if err != nil {
		return nil, fmt.Errorf("failed to fetch manifest: %w", err)
	}

	artifact, err := findMatchingArtifact(manifest)
	if err != nil {
		return nil, fmt.Errorf("failed to find matching OS image artifact: %w", err)
	}

	logger.Info("Checking current config...")
	currentImage, err := GetCurrentImage(fp)
	if err != nil {
		return nil, fmt.Errorf("failed to get current os image")
	}
	currentImageName := filepath.Base(currentImage.Location)

	newImageName := path.Base(artifact.URL)
	isNewer, err := verifyImageIsNewer(newImageName, currentImageName)
	if err != nil {
		return nil, fmt.Errorf("failed to validate if new OS image is newer: %w", err)
	}
	return &CheckUpdateResult{
		Available:     isNewer,
		CurrentImage:  currentImageName,
		CurrentDigest: currentImage.Digest,
		NewImage:      newImageName,
		Artifact:      artifact,
	}, nil
}

// Update updates finch.yaml with a newer os image from result if available.
func Update(logger flog.Logger, fp finchPath.Finch, result *CheckUpdateResult) error {
	if !result.Available {
		return nil
	}

	artifact := result.Artifact
	osImageDir := fp.OSImageDir()
	newImagePath := filepath.Join(osImageDir, result.NewImage)

	// TODO: maybe skip download if the file already exists?
	if err := downloadToFile(
		artifact.URL,
		newImagePath,
		withProgressBar("Downloading new OS image..."),
		withMaxBytes(MaxImageSize),
	); err != nil {
		return fmt.Errorf("failed to download OS image artifact: %w", err)
	}

	logger.Info("Verifying downloaded OS image...")
	// #nosec G304 -- path is not a user input
	newImageFile, err := os.Open(newImagePath)
	if err != nil {
		return fmt.Errorf("failed to read downloaded OS image: %w", err)
	}
	defer func() {
		_ = newImageFile.Close()
	}()

	if err := verifyDigest(newImageFile, strings.TrimPrefix(artifact.Digest, "sha512:"), crypto.SHA512); err != nil {
		_ = newImageFile.Close()
		_ = os.Remove(newImagePath)
		return fmt.Errorf("failed to verify downloaded OS image: %w", err)
	}

	logger.Info("Updating current config with new OS image...")
	if err := ApplyImage(fp.BaseYamlFilePath(), newImagePath, artifact.Digest); err != nil {
		return err
	}
	return nil
}

func fetchManifest(logger flog.Logger, urls DepsURLs, verifier ManifestVerifier) (*Manifest, error) {
	logger.Info("Fetching manifest...")
	var manifestBuf bytes.Buffer
	if err := download(urls.ManifestURL, &manifestBuf, withMaxBytes(MaxManifestSize)); err != nil {
		return nil, fmt.Errorf("failed to download manifest: %w", err)
	}
	manifestBytes := manifestBuf.Bytes()

	logger.Info("Validating manifest...")
	var manifestBundleBuf bytes.Buffer
	if err := download(urls.ManifestBundleURL, &manifestBundleBuf, withMaxBytes(MaxManifestSize)); err != nil {
		return nil, fmt.Errorf("failed to download manifest bundle: %w", err)
	}
	manifestBundleBytes := manifestBundleBuf.Bytes()

	if err := verifier.Verify(manifestBytes, manifestBundleBytes); err != nil {
		return nil, fmt.Errorf("manifest signature validation failed: %w", err)
	}

	var manifest Manifest
	if err := json.Unmarshal(manifestBytes, &manifest); err != nil {
		return nil, fmt.Errorf("failed to unmarshal manifest: %w", err)
	}
	if err := verifyManifestExpiry(&manifest); err != nil {
		return nil, fmt.Errorf("manifest validation failed: %w", err)
	}
	return &manifest, nil
}

func findMatchingArtifact(manifest *Manifest) (*ManifestArtifact, error) {
	for _, artifact := range manifest.Artifacts {
		if artifact.Platform == runtime.GOOS && artifact.Arch == runtime.GOARCH {
			return artifact, nil
		}
	}
	return nil, fmt.Errorf("no matching OS image artifact found for platform %s and arch %s", runtime.GOOS, runtime.GOARCH)
}

// GetCurrentImage is a helper that returns the current os image in use from finch.yaml.
func GetCurrentImage(fp finchPath.Finch) (*OSImage, error) {
	finchYAML, err := readBaseFinchYaml(fp)
	if err != nil {
		return nil, err
	}
	if len(finchYAML.Images) == 0 {
		return nil, fmt.Errorf("no OS image found in finch.yaml")
	}
	return finchYAML.Images[0], nil
}

func readBaseFinchYaml(fp finchPath.Finch) (*FinchYAML, error) {
	finchYamlPath := fp.BaseYamlFilePath()
	// #nosec G304 -- path is not user input
	finchYamlBytes, err := os.ReadFile(finchYamlPath)
	if err != nil {
		return nil, fmt.Errorf("failed to read finch.yaml: %w", err)
	}
	var finchYAML FinchYAML
	if err := yaml.Unmarshal(finchYamlBytes, &finchYAML); err != nil {
		return nil, fmt.Errorf("failed to unmarshal finch.yaml: %w", err)
	}
	return &finchYAML, nil
}
