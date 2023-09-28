// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package path contains functions to find/calculate path used in the project.
package path

import (
	"crypto/sha256"
	"fmt"
	"path/filepath"
	"runtime"

	"github.com/runfinch/finch/pkg/system"
)

// Finch provides a set of methods that calculate paths relative to the Finch path.
type Finch string

// FinchRootDir returns the path to the Finch root directory.
// $HOME on UNIX and $LocalAppData on Windows.
func (Finch) FinchRootDir(ffd FinchFinderDeps) (string, error) {
	if runtime.GOOS == "windows" {
		return ffd.Env("LOCALAPPDATA"), nil
	}

	home, err := ffd.GetUserHome()
	if err != nil {
		return "", err
	}

	return home, nil
}

// FinchDir returns the path to the Finch config directory.
func (Finch) FinchDir(rootDir string) string {
	return filepath.Join(rootDir, ".finch")
}

// ConfigFilePath returns the path to Finch config file.
func (Finch) ConfigFilePath(rootDir string) string {
	return filepath.Join(rootDir, ".finch", "finch.yaml")
}

// UserDataDiskPath returns the path to the permanent storage location of the Finch
// user data disk.
func (w Finch) UserDataDiskPath(rootDir string) string {
	disksPath := filepath.Join(rootDir, ".finch", ".disks")
	if runtime.GOOS == "windows" {
		return filepath.Join(disksPath, w.generatePathSum()+".vhdx")
	}
	return filepath.Join(disksPath, w.generatePathSum())
}

// LimaHomePath returns the path that should be set to LIMA_HOME for Finch.
func (w Finch) LimaHomePath() string {
	return filepath.Join(string(w), "lima", "data")
}

// LimaInstancePath returns the path to the Lima instance of the Finch VM.
func (w Finch) LimaInstancePath() string {
	return filepath.Join(string(w), "lima", "data", "finch")
}

// LimactlPath returns the limactl path.
func (w Finch) LimactlPath() string {
	return filepath.Join(string(w), "lima", "bin", "limactl")
}

// QEMUBinDir returns the path to the directory that contains all the binaries QEMU depends on.
// It's used to enable users to always use the pinned versions of the binaries.
func (w Finch) QEMUBinDir() string {
	return filepath.Join(string(w), "lima", "bin")
}

// BaseYamlFilePath returns the base yaml file path.
func (w Finch) BaseYamlFilePath() string {
	return filepath.Join(string(w), "os", "finch.yaml")
}

// LimaConfigDirectoryPath returns the lima config directory path.
func (w Finch) LimaConfigDirectoryPath() string {
	return filepath.Join(string(w), "lima", "data", "_config")
}

// LimaOverrideConfigPath returns the lima override config file path.
func (w Finch) LimaOverrideConfigPath() string {
	return filepath.Join(string(w), "lima", "data", "_config", "override.yaml")
}

// LimaSSHPrivateKeyPath returns the lima user key path.
func (w Finch) LimaSSHPrivateKeyPath() string {
	return filepath.Join(string(w), "lima", "data", "_config", "user")
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
	res := deps.FilePathJoin(realPath, "..", "..")
	return Finch(res), nil
}
