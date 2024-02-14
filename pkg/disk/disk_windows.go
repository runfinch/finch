// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows

package disk

import (
	"archive/zip"
	"bytes"
	_ "embed"
	"errors"
	"fmt"
	"io"
	"io/fs"
	"os"
	"path/filepath"

	"github.com/runfinch/finch/pkg/winutil"
)

// EnsureUserDataDisk checks the current disk configuration and fixes it if needed.
func (m *userDataDiskManager) EnsureUserDataDisk() error {
	diskPath := m.finch.UserDataDiskPath(m.rootDir)
	disksDir := filepath.Dir(diskPath)

	m.logger.Debugf("diskPath: %s", diskPath)
	m.logger.Debugf("disksDir: %s", disksDir)

	if _, err := m.fs.Stat(disksDir); errors.Is(err, fs.ErrNotExist) {
		if err := m.fs.MkdirAll(disksDir, 0o700); err != nil {
			return fmt.Errorf("could not create persistent disk directory: %w", err)
		}
	} else if err != nil {
		return fmt.Errorf("error stating disksDir %q: %w", disksDir, err)
	}

	if _, err := m.fs.Stat(diskPath); errors.Is(err, fs.ErrNotExist) {
		if err := m.createDisk(diskPath); err != nil {
			return fmt.Errorf("could not create persistent disk: %w", err)
		}
	} else if err != nil {
		return fmt.Errorf("error stating disksDir %q: %w", diskPath, err)
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

	m.logger.Debugf("running detach cmd: %v", cmd)

	out, err := cmd.CombinedOutput()
	if err != nil {
		return fmt.Errorf("failed to detach disk: %w, command output: %s", err, out)
	}

	return nil
}

// min_win_disk.zip is a zip directory with a single file (disk.vhdx).
// disk.vhdx is a 50G max size, sparse, GPT, vhdx file created by diskpart, which contains
// a single ext4 partition. Since using diskpart requires Administrator privileges,
// we ship a pre-created disk to be used for the persistent data volume.
//
//go:embed min_win_disk.zip
var minWinDisk []byte

func (m *userDataDiskManager) createDisk(diskPath string) error {
	m.logger.Infof("creating persistent disk: %s", diskPath)
	r, err := zip.NewReader(bytes.NewReader(minWinDisk), int64(len(minWinDisk)))
	if err != nil {
		return fmt.Errorf("failed to create zip reader: %w", err)
	}

	for _, f := range r.File {
		if f.Name == "disk.vhdx" {
			compressed, err := f.Open()
			if err != nil {
				return fmt.Errorf("failed to open file inside zip: %w", err)
			}
			dest, err := os.OpenFile(filepath.Clean(diskPath), os.O_WRONLY|os.O_CREATE|os.O_TRUNC, f.Mode())
			if err != nil {
				return fmt.Errorf("failed to open persistent disk file: %w", err)
			}

			// avoid go-sec G110 by chunking
			for {
				_, err := io.CopyN(dest, compressed, 204800)
				if err != nil {
					if errors.Is(err, io.EOF) {
						break
					}
					return fmt.Errorf("failed copy compressed file to disk: %w", err)
				}
			}
			if err := dest.Close(); err != nil {
				return fmt.Errorf("failed close disk file: %w", err)
			}

			break
		}
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

	m.logger.Debugf("running attach cmd: %v", cmd)

	out, err := cmd.CombinedOutput()
	outDecoded, _ := winutil.FromUTF16leToString(bytes.NewBuffer(out))
	if err != nil {
		return fmt.Errorf("failed to attach disk: %w, command output: %s", err, outDecoded)
	}

	return nil
}
