// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build linux

package path

import (
	"path/filepath"
)

func NewFinchPath() Finch {
	return Finch(filepath.Join("/", "etc", "finch"))
}

// FinchDir returns the path to the Finch config directory.
func (fp Finch) FinchDir() string {
	return string(fp)
}

// ConfigFilePath returns the path to Finch config file.
func (fp Finch) ConfigFilePath() string {
	return filepath.Join(string(fp), "finch.yaml")
}

// NerdctlConfigFilePath returns the path to Finch config file.
func (fp Finch) NerdctlConfigFilePath() string {
	return filepath.Join(string(fp), "nerdctl", "nerdctl.toml")
}

// BuildkitSocketPath returns the path to the Buildkit socket file.
func (fp Finch) BuildkitSocketPath() string {
	return filepath.Join(string(fp), "buildkit", "buildkitd.toml")
}

// FinchDependencyBinDir returns the path to Finch's local helper or dependency binaries.
// Currently used for vended version of BuildKit.
func (Finch) FinchDependencyBinDir() string {
	return filepath.Join("/", "usr", "libexec", "finch")
}
