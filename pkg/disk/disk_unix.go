// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build !windows
// +build !windows

package disk

import (
	"encoding/json"
	"errors"
	"fmt"
	"io/fs"
	"path"

	"github.com/docker/go-units"
	limaStore "github.com/lima-vm/lima/pkg/store"
)

// EnsureUserDataDisk checks the current disk configuration and fixes it if needed.
func (m *userDataDiskManager) EnsureUserDataDisk() error {
	if m.limaDiskExists() {
		diskPath := m.finch.UserDataDiskPath(m.rootDir)

		if *m.config.VMType == "vz" {
			info, err := m.getDiskInfo(diskPath)
			if err != nil {
				return err
			}

			// Convert the persistent disk file to RAW before Lima starts.
			// Lima also does this, but since Finch uses a symlink to this file, lima won't create the new RAW file
			// in the persistent location, but in its own _disks directory.
			if info.Format != "raw" {
				if err := m.convertToRaw(diskPath); err != nil {
					return err
				}

				// since convertToRaw moves the disk, the symlink needs to be recreated
				if err := m.attachPersistentDiskToLimaDisk(); err != nil {
					return err
				}
			}
		}

		// if the file is not a symlink, loc will be an empty string
		// both os.Readlink() and UserDataDiskPath return absolute paths, so they will be equal if equivalent
		limaPath := fmt.Sprintf("%s/_disks/%s/datadisk", m.finch.LimaHomePath(), diskName)
		loc, err := m.fs.ReadlinkIfPossible(limaPath)
		if err != nil {
			return err
		}

		if loc != diskPath {
			if err := m.attachPersistentDiskToLimaDisk(); err != nil {
				return err
			}
		}
	} else {
		if err := m.createLimaDisk(); err != nil {
			return err
		}
		if err := m.attachPersistentDiskToLimaDisk(); err != nil {
			return err
		}
	}

	if m.limaDiskIsLocked() {
		err := m.unlockLimaDisk()
		if err != nil {
			return err
		}
	}

	return nil
}

// DetachUserDataDisk is a no-op on Unix because Lima does the detaching.
func (m *userDataDiskManager) DetachUserDataDisk() error {
	return nil
}

func (m *userDataDiskManager) persistentDiskExists() bool {
	_, err := m.fs.Stat(m.finch.UserDataDiskPath(m.rootDir))
	return err == nil
}

func (m *userDataDiskManager) limaDiskExists() bool {
	cmd := m.lcc.CreateWithoutStdio("disk", "ls", diskName, "--json")
	out, err := cmd.Output()
	if err != nil {
		return false
	}
	diskListOutput := &limaStore.Disk{}
	err = json.Unmarshal(out, diskListOutput)
	if err != nil {
		return false
	}
	return diskListOutput.Name == diskName
}

func (m *userDataDiskManager) getDiskInfo(diskPath string) (*qemuDiskInfo, error) {
	out, err := m.ecc.Create(
		path.Join(m.finch.QEMUBinDir(), "qemu-img"),
		"info",
		"--output=json",
		diskPath,
	).CombinedOutput()
	if err != nil {
		return nil, fmt.Errorf("failed to get disk info for disk at %q: %w", diskPath, err)
	}

	var diskInfoJSON qemuDiskInfo
	if err = json.Unmarshal(out, &diskInfoJSON); err != nil {
		return nil, fmt.Errorf("failed to unmarshal disk info JSON for disk at %q: %w", diskPath, err)
	}

	return &diskInfoJSON, nil
}

func (m *userDataDiskManager) convertToRaw(diskPath string) error {
	qcowPath := fmt.Sprintf("%s.qcow2", diskPath)
	if err := m.fs.Rename(diskPath, qcowPath); err != nil {
		return fmt.Errorf("faied to rename disk: %w", err)
	}
	if _, err := m.ecc.Create(
		path.Join(m.finch.QEMUBinDir(), "qemu-img"),
		"convert",
		"-f",
		"qcow2",
		"-O",
		"raw",
		qcowPath,
		diskPath,
	).CombinedOutput(); err != nil {
		return fmt.Errorf("failed to convert disk %q from qcow2 to raw: %w", diskPath, err)
	}

	return nil
}

func (m *userDataDiskManager) createLimaDisk() error {
	size, err := sizeString()
	if err != nil {
		return fmt.Errorf("failed to get disk size: %w", err)
	}
	cmd := m.lcc.CreateWithoutStdio("disk", "create", diskName, "--size", size, "--format", "raw")
	if logs, err := cmd.CombinedOutput(); err != nil {
		return fmt.Errorf("failed to create disk, debug logs:\n%s", logs)
	}
	return nil
}

func (m *userDataDiskManager) attachPersistentDiskToLimaDisk() error {
	limaPath := fmt.Sprintf("%s/_disks/%s/datadisk", m.finch.LimaHomePath(), diskName)
	if !m.persistentDiskExists() {
		disksDir := path.Dir(m.finch.UserDataDiskPath(m.rootDir))
		_, err := m.fs.Stat(disksDir)
		if errors.Is(err, fs.ErrNotExist) {
			if err := m.fs.MkdirAll(disksDir, 0o755); err != nil {
				return fmt.Errorf("could not create persistent disk directory: %w", err)
			}
		}
		if err = m.fs.Rename(limaPath, m.finch.UserDataDiskPath(m.rootDir)); err != nil {
			return fmt.Errorf("could not move data disk to persistent path: %w", err)
		}
	}

	// if a datadisk already exists in the lima path, SymlinkIfPossible will no-op.
	// to ensure that it symlinks properly, we have to delete the disk in the lima path
	_, err := m.fs.Stat(limaPath)
	if err != nil {
		if !errors.Is(err, fs.ErrNotExist) {
			return err
		}
	} else {
		err = m.fs.Remove(limaPath)
		if err != nil {
			return err
		}
	}

	err = m.fs.SymlinkIfPossible(m.finch.UserDataDiskPath(m.rootDir), limaPath)
	if err != nil {
		return err
	}
	return nil
}

func (m *userDataDiskManager) limaDiskIsLocked() bool {
	lockPath := path.Join(m.finch.LimaHomePath(), "_disks", diskName, "in_use_by")
	_, err := m.fs.Stat(lockPath)
	return err == nil
}

func (m *userDataDiskManager) unlockLimaDisk() error {
	cmd := m.lcc.CreateWithoutStdio("disk", "unlock", diskName)
	if logs, err := cmd.CombinedOutput(); err != nil {
		return fmt.Errorf("failed to unlock disk, debug logs:\n%s", logs)
	}
	return nil
}

func sizeString() (string, error) {
	sizeB, err := diskSize()
	if err != nil {
		return "", err
	}

	return units.BytesSize(float64(sizeB)), nil
}
