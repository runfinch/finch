// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build !windows

package vmnet

import (
	"bytes"
	"errors"
	"fmt"
	"io/fs"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/dependency"
	"github.com/runfinch/finch/pkg/flog"

	"github.com/spf13/afero"
)

type sudoersFile struct {
	fs             afero.Fs
	execCmdCreator command.Creator
	limaCmdCreator command.LimaCmdCreator
	l              flog.Logger
}

var _ dependency.Dependency = (*sudoersFile)(nil)

func newSudoersFile(fs afero.Fs, execCmdCreator command.Creator, limaCmdCreator command.LimaCmdCreator, l flog.Logger) *sudoersFile {
	return &sudoersFile{
		fs:             fs,
		execCmdCreator: execCmdCreator,
		limaCmdCreator: limaCmdCreator,
		l:              l,
	}
}

// path returns a path that must match the path in [networks.yaml].
func (s *sudoersFile) path() string {
	return "/etc/sudoers.d/finch-lima"
}

// Installed checks if any file at `s.path()` matches the output of `lima sudoers`.
func (s *sudoersFile) Installed() bool {
	b, err := afero.ReadFile(s.fs, s.path())
	if err != nil {
		if errors.Is(err, fs.ErrNotExist) {
			s.l.Infof("sudoers file not found: %v", err)
		} else {
			s.l.Errorf("failed to read sudoers file: %v", err)
		}
		return false
	}
	cmd := s.limaCmdCreator.CreateWithoutStdio("sudoers")
	out, err := cmd.Output()
	if err != nil {
		s.l.Errorf("failed to run lima sudoers command: %v", err)
		return false
	}
	return bytes.Equal(b, out)
}

// Install creates the sudoers file at `s.path()` with the contents of `lima sudoers`.
func (s *sudoersFile) Install() error {
	sudoers, err := s.limaCmdCreator.CreateWithoutStdio("sudoers").Output()
	if err != nil {
		return fmt.Errorf("failed to get lima sudoers: %w", err)
	}

	cmd := s.execCmdCreator.Create("sudo", "tee", s.path())
	cmd.SetStdin(bytes.NewReader(sudoers))
	// Although we do not care about stdout, we still use Output() instead of Run()
	// so that the returned error can be populated with stderr.
	_, err = cmd.Output()
	if err != nil {
		return fmt.Errorf("failed to write to the sudoers file: %w", err)
	}

	// explicitly set permissions to ensure that the file is readable by the user
	_, err = s.execCmdCreator.Create("sudo", "chmod", "644", s.path()).Output()
	if err != nil {
		return fmt.Errorf("failed to set correct permissions for sudoers file: %w", err)
	}

	return nil
}

// RequiresRoot returns true because creating the new sudoers file at `s.path()` requires root.
func (s *sudoersFile) RequiresRoot() bool {
	return true
}
