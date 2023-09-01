// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package path contains functions to find/calculate path used in the project.
package path

import (
	"crypto/sha256"
	"fmt"

	"github.com/runfinch/finch/pkg/system"
)

// Finch provides a set of methods that calculate paths relative to the Finch path.
type Finch string

// ConfigFilePath returns the path to Finch config file.
func (Finch) ConfigFilePath(homeDir string) string {
	return fmt.Sprintf("%s/.finch/finch.yaml", homeDir)
}

// UserDataDiskPath returns the path to the permanent storage location of the Finch
// user data disk.
func (w Finch) UserDataDiskPath(homeDir string) string {
	return fmt.Sprintf("%s/.finch/.disks/%s", homeDir, w.generatePathSum())
}

// LimaHomePath returns the path that should be set to LIMA_HOME for Finch.
func (w Finch) LimaHomePath() string {
	return fmt.Sprintf("%s/lima/data", w)
}

// LimaInstancePath returns the path to the Lima instance of the Finch VM.
func (w Finch) LimaInstancePath() string {
	return fmt.Sprintf("%s/lima/data/finch", w)
}

// LimactlPath returns the limactl path.
func (w Finch) LimactlPath() string {
	return fmt.Sprintf("%s/lima/bin/limactl", w)
}

// QEMUBinDir returns the path to the directory that contains all the binaries QEMU depends on.
// It's used to enable users to always use the pinned versions of the binaries.
func (w Finch) QEMUBinDir() string {
	return fmt.Sprintf("%s/lima/bin", w)
}

// BaseYamlFilePath returns the base yaml file path.
func (w Finch) BaseYamlFilePath() string {
	return fmt.Sprintf("%s/os/finch.yaml", w)
}

// LimaConfigDirectoryPath returns the lima config directory path.
func (w Finch) LimaConfigDirectoryPath() string {
	return fmt.Sprintf("%s/lima/data/_config", w)
}

// LimaOverrideConfigPath returns the lima override config file path.
func (w Finch) LimaOverrideConfigPath() string {
	return fmt.Sprintf("%s/lima/data/_config/override.yaml", w)
}

// LimaSSHPrivateKeyPath returns the lima user key path.
func (w Finch) LimaSSHPrivateKeyPath() string {
	return fmt.Sprintf("%s/lima/data/_config/user", w)
}

func (w Finch) generatePathSum() string {
	sum := sha256.Sum256([]byte(w.LimaInstancePath()))
	return fmt.Sprintf("%x", sum[:8])
}

// FinchFinderDeps provides all the dependencies FindFinch needs to find Finch.
//
//go:generate mockgen -copyright_file=../../copyright_header -destination=../mocks/finch_finder_deps.go -package=mocks -mock_names FinchFinderDeps=FinchFinderDeps . FinchFinderDeps
type FinchFinderDeps interface {
	system.SymlinksEvaluator
	system.ExecutableFinder
	system.FilePathJoiner
	system.EnvGetter
	system.UserHomeDir
}

// FindFinch finds the installation path of Finch.
func FindFinch(deps FinchFinderDeps) (Finch, error) {
	exe, err := deps.Executable()
	if err != nil {
		return "", fmt.Errorf("failed to locate the executable that starts this process: %w", err)
	}
	realPath, err := deps.EvalSymlinks(exe)
	if err != nil {
		return "", fmt.Errorf("failed to find the real path of the executable: %w", err)
	}
	// The directory structure is finch_home/bin/finch,
	// where the last path comment (i.e., finch) is the executable that starts this process.
	res := deps.FilePathJoin(realPath, "../../")
	return Finch(res), nil
}
