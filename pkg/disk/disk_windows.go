// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows

package disk

import (
	"bytes"
	"encoding/json"
	"errors"
	"fmt"
	"io/fs"
	"os"
	"path/filepath"
	"strings"

	"github.com/spf13/afero"

	"github.com/runfinch/finch/pkg/flog"
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

	m.logger.Debugf("running detach cmd: %v", cmd)

	out, err := cmd.CombinedOutput()
	if err != nil {
		return fmt.Errorf("failed to detach disk: %w, command output: %s", err, out)
	}

	return nil
}

func (m *userDataDiskManager) createDisk(diskPath string) error {
	size, err := sizeInMB()
	if err != nil {
		return fmt.Errorf("failed to get disk size: %w", err)
	}

	m.logger.Infof("creating disk at path: %s", diskPath)

	execPath, err := os.Executable()
	if err != nil {
		return fmt.Errorf("failed to get executable path: %w", err)
	}

	tempOut, _ := afero.TempFile(m.fs, "", "finchCreateDiskOutput*")
	// Put all paths in quotes, since they are being passed to cmd.exe.
	dpgoPath := fmt.Sprintf(`"%s"`, filepath.Join(string(m.finch), "bin", "dpgo.exe"))
	diskPathQuoted := fmt.Sprintf(`"%s"`, diskPath)
	tempPathQuoted := fmt.Sprintf(`"%s"`, tempOut.Name())
	wdPathQuoted := fmt.Sprintf(`"%s"`, filepath.Dir(execPath))
	sizeStr := fmt.Sprint(size)

	_ = tempOut.Close()

	if err := winutil.RunElevated(
		dpgoPath,
		wdPathQuoted,
		[]string{
			"--json",
			"--debug",
			"disk",
			"create",
			"--path",
			diskPathQuoted,
			"--size",
			sizeStr,
			">",
			tempPathQuoted,
			"2>&1",
		},
	); err != nil {
		return fmt.Errorf("failed to run dpgo command: %w", err)
	}

	tempOutContents, _ := afero.ReadFile(m.fs, tempOut.Name())
	dpGoOutStr := strings.TrimSpace(string(tempOutContents))
	m.logger.Debugf("create disk cmd stdout: %s", dpGoOutStr)
	_ = m.fs.Remove(tempOut.Name())

	lines := strings.Split(dpGoOutStr, "\n")
	var logs []flog.Log
	for _, l := range lines {
		// Fix new lines
		nl := strings.ReplaceAll(l, `\r\n`, `\n`)
		nl = strings.ReplaceAll(nl, `\r`, `\n`)
		var logParsed flog.Log
		if err = json.Unmarshal([]byte(l), &logParsed); err != nil {
			return fmt.Errorf("error parsing create disk log: %w, log string: %s", err, nl)
		}
		logs = append(logs, logParsed)
	}
	m.logger.Debugf("create disk cmd stdout parsed: %v", logs)

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

func sizeInMB() (int64, error) {
	sizeB, err := diskSize()
	if err != nil {
		return 0, err
	}

	return sizeB / 1048576, nil
}
