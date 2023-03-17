// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package disk manages the persistent disk used to save containerd user data
package disk

import (
	"encoding/json"
	"errors"
	"fmt"
	"io/fs"
	"os"
	"path"

	limaStore "github.com/lima-vm/lima/pkg/store"
	"github.com/spf13/afero"

	"github.com/runfinch/finch/pkg/command"
	fpath "github.com/runfinch/finch/pkg/path"
)

const (
	// diskName must always be consistent with the value under additionalDisks in finch.yaml.
	diskName = "finch"
	diskSize = "50G"
)

// UserDataDiskManager is used to check the user data disk configuration and create it if needed.
type UserDataDiskManager interface {
	EnsureUserDataDisk() error
}

// fs functions required for setting up the user data disk.
type diskFS interface {
	afero.Fs
	afero.Linker
	afero.LinkReader
}

type userDataDiskManager struct {
	lcc     command.LimaCmdCreator
	fs      diskFS
	finch   fpath.Finch
	homeDir string
}

// NewUserDataDiskManager is a constructor for UserDataDiskManager.
func NewUserDataDiskManager(
	lcc command.LimaCmdCreator,
	fs diskFS,
	finch fpath.Finch,
	homeDir string,
) UserDataDiskManager {
	return &userDataDiskManager{
		lcc:     lcc,
		fs:      fs,
		finch:   finch,
		homeDir: homeDir,
	}
}

// EnsureUserDataDisk checks the current disk configuration and fixes it if needed.
func (m *userDataDiskManager) EnsureUserDataDisk() error {
	if m.limaDiskExists() {
		limaPath := fmt.Sprintf("%s/_disks/%s/datadisk", m.finch.LimaHomePath(), diskName)
		loc, err := m.fs.ReadlinkIfPossible(limaPath)
		if err != nil {
			return err
		}
		// if the file is not a symlink, loc will be an empty string
		// both os.Readlink() and UserDataDiskPath return absolute paths, so they will be equal if equivalent
		if loc != m.finch.UserDataDiskPath(m.homeDir) {
			err := m.attachPersistentDiskToLimaDisk()
			if err != nil {
				return err
			}
		}
	} else {
		if err := m.createLimaDisk(); err != nil {
			return err
		}
		err := m.attachPersistentDiskToLimaDisk()
		if err != nil {
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

func (m *userDataDiskManager) persistentDiskExists() bool {
	_, err := m.fs.Stat(m.finch.UserDataDiskPath(m.homeDir))
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

func (m *userDataDiskManager) createLimaDisk() error {
	cmd := m.lcc.CreateWithoutStdio("disk", "create", diskName, "--size", diskSize)
	if logs, err := cmd.CombinedOutput(); err != nil {
		return fmt.Errorf("failed to create disk, debug logs:\n%s", logs)
	}
	return nil
}

func (m *userDataDiskManager) attachPersistentDiskToLimaDisk() error {
	limaPath := fmt.Sprintf("%s/_disks/%s/datadisk", m.finch.LimaHomePath(), diskName)
	if !m.persistentDiskExists() {
		disksDir := path.Dir(m.finch.UserDataDiskPath(m.homeDir))
		_, err := m.fs.Stat(disksDir)
		if os.IsNotExist(err) {
			err := m.fs.MkdirAll(disksDir, 0o755)
			if err != nil {
				return fmt.Errorf("could not create persistent disk directory: %w", err)
			}
		}
		err = m.fs.Rename(limaPath, m.finch.UserDataDiskPath(m.homeDir))
		if err != nil {
			return err
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

	err = m.fs.SymlinkIfPossible(m.finch.UserDataDiskPath(m.homeDir), limaPath)
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
