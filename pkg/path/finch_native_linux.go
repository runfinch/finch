// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build linux

package path

import (
	"fmt"
	"path/filepath"
)

// FinchRootDir returns the path to the Finch root directory, which is $HOME on UNIX.
func (Finch) FinchRootDir(_ FinchFinderDeps) (string, error) {
	return filepath.Join("etc", "finch"), nil
}

// FinchDir returns the path to the Finch config directory.
func (Finch) FinchDir(rootDir string) string {
	return filepath.Join(rootDir)
}

// ConfigFilePath returns the path to Finch config file.
func (Finch) ConfigFilePath(rootDir string) string {
	return filepath.Join(rootDir, "finch.yaml")
}

// FindFinch finds the installation path of Finch.
func FindFinch(deps FinchFinderDeps) (Finch, error) {
	exe, err := deps.Executable()
	if err != nil {
		return "", fmt.Errorf("failed to locate the executable that starts this process: %w", err)
	}
	return Finch(exe), nil
}
