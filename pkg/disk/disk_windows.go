// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows
// +build windows

package disk

import (
	"errors"
	"fmt"
	"io/fs"
	"path/filepath"
)

// EnsureUserDataDisk checks the current disk configuration and fixes it if needed.
// on Windows, this is a no-op.
func (m *userDataDiskManager) EnsureUserDataDisk() error {
	diskPath := m.finch.UserDataDiskPath(m.rootDir)
	disksDir := filepath.Dir(diskPath)

	m.logger.Debugf("diskPath: %s", diskPath)
	m.logger.Debugf("disksDir: %s", disksDir)

	if _, err := m.fs.Stat(disksDir); errors.Is(err, fs.ErrNotExist) {
		if err := m.fs.MkdirAll(disksDir, 0o755); err != nil {
			return fmt.Errorf("could not create persistent disk directory: %w", err)
		}
	}

	if _, err := m.fs.Stat(diskPath); errors.Is(err, fs.ErrNotExist) {
		if err := m.createDisk(diskPath); err != nil {
			return fmt.Errorf("could not create persistent disk: %w", err)
		}
	}

	if err := m.attachDisk(diskPath); err != nil {
		return fmt.Errorf("could not attach persistent disk: %w", err)
	}

	return nil
}

// DetachUserDataDisk unmounts the disk in wsl.
func (m *userDataDiskManager) DetachUserDataDisk() error {
	cmd := m.ecc.Create(
		"wsl.exe",
		"--unmount",
		`\\?\`+m.finch.UserDataDiskPath(m.rootDir),
	)

	m.logger.Debugf("running attach cmd: %s", cmd.String())

	out, err := cmd.CombinedOutput()
	if err != nil {
		return fmt.Errorf("failed to attach disk: %w, command output: %s", err, out)
	}

	return nil
}

func (m *userDataDiskManager) diskExists(diskPath string) (bool, error) {
	disksDir := filepath.Dir(diskPath)
	_, err := m.fs.Stat(filepath.Dir(diskPath))
	if errors.Is(err, fs.ErrNotExist) {
		if err := m.fs.MkdirAll(disksDir, 0o755); err != nil {
			return false, fmt.Errorf("could not create persistent disk directory: %w", err)
		}
	}

	return true, nil
}

func (m *userDataDiskManager) createDisk(diskPath string) error {
	size, err := sizeInMB()
	if err != nil {
		return fmt.Errorf("failed to get disk size: %w", err)
	}

	m.logger.Infof("creating disk at path: %s", diskPath)

	out, err := m.ecc.Create("powershell.exe", fmt.Sprintf(`@"
create vdisk file="%s" type="expandable" maximum=%d
select vdisk file="%s"
attach vdisk
create partition primary
format quick fs=ntfs label=FinchDataDiskNTFS
detach vdisk
"@ | diskpart`, diskPath, size, diskPath),
	).CombinedOutput()
	if err != nil {
		return fmt.Errorf("failed to create disk: %w, command output: %s", err, out)
	}

	return nil
}

func (m *userDataDiskManager) attachDisk(diskPath string) error {
	m.logger.Infof("attaching disk at path: %s", diskPath)

	cmd := m.ecc.Create(
		"wsl.exe",
		"--mount",
		"--bare",
		"--vhd",
		diskPath,
	)

	m.logger.Debugf("running attach cmd: %s", cmd.String())

	out, err := cmd.CombinedOutput()
	if err != nil {
		return fmt.Errorf("failed to attach disk: %w, command output: %s", err, out)
	}

	return nil
}

func sizeInMB() (int64, error) {
	sizeB, err := diskSize()
	if err != nil {
		return 0, err
	}

	return sizeB / 1048576, nil
}
