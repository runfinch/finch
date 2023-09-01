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
	"github.com/runfinch/finch/pkg/path"

	"github.com/spf13/afero"
)

type binaries struct {
	fp         path.Finch
	fs         afero.Fs
	cmdCreator command.Creator
	l          flog.Logger
}

var _ dependency.Dependency = (*binaries)(nil)

func newBinaries(fp path.Finch, fs afero.Fs, cmdCreator command.Creator, l flog.Logger) *binaries {
	return &binaries{
		// TODO: consider replacing fp with only the strings that are used instead of the entire type
		fp:         fp,
		fs:         fs,
		cmdCreator: cmdCreator,
		l:          l,
	}
}

// installationPath returns the installation path under /opt/ (/opt/ was chosen since /opt/ is owned by root).
func (bin *binaries) installationPath() string {
	return "/opt/finch"
}

// socketVmnetBinPath returns a partial path to the socket_vmnet executable.
func (bin *binaries) socketVmnetBinPath() string {
	return "/bin/socket_vmnet"
}

// installationPathSocketVmnetExe retunrs the full path to correctly installed socket_vmnet executable.
func (bin *binaries) installationPathSocketVmnetExe() string {
	return fmt.Sprintf("%s%s", bin.installationPath(), bin.socketVmnetBinPath())
}

// Path to the build output of socket_vmnet. Must match path in [Makefile].
func (bin *binaries) buildArtifactPath() string {
	return fmt.Sprintf("%s/dependencies/lima-socket_vmnet", bin.fp)
}

// buildArtifactSocketVmnetExe returns the full path to socket_vmnet executable in the build output directory.
func (bin *binaries) buildArtifactSocketVmnetExe() string {
	return fmt.Sprintf("%s%s", bin.buildArtifactPath(), bin.installationPathSocketVmnetExe())
}

// Installed checks if a specific file is installed in the privileged location by comparing file contents from the build
// output and where the file should exist in the privileged location.
func (bin *binaries) Installed() bool {
	dirExists, err := afero.DirExists(bin.fs, bin.installationPath())
	if err != nil {
		bin.l.Errorf("failed to get status of binaries directory: %v", err)
		return false
	}
	if !dirExists {
		bin.l.Info("binaries directory doesn't exist")
		return false
	}
	buildArtifactFileBytes, err := afero.ReadFile(bin.fs, bin.buildArtifactSocketVmnetExe())
	if err != nil {
		if errors.Is(err, fs.ErrNotExist) {
			bin.l.Infof("dependency socket_vmnet file not found: %v", err)
		} else {
			bin.l.Errorf("failed to read dependency socket_vmnet file: %v", err)
		}
		return false
	}
	installedFileBytes, err := afero.ReadFile(bin.fs, bin.installationPathSocketVmnetExe())
	if err != nil {
		if errors.Is(err, fs.ErrNotExist) {
			bin.l.Infof("installed socket_vmnet file not found: %v", err)
		} else {
			bin.l.Errorf("failed to read installed socket_vmnet file: %v", err)
		}
		return false
	}
	return bytes.Equal(buildArtifactFileBytes, installedFileBytes)
}

// Install creates the privileged location (`bin.installationPath()`), copies socket_vmnet files from the build output
// directory to said location, and sets the correct permissions.
func (bin *binaries) Install() error {
	mkdirCmd := bin.cmdCreator.Create("sudo", "mkdir", "-p", bin.installationPath())
	_, err := mkdirCmd.Output()
	if err != nil {
		return fmt.Errorf("error creating installation directory %s, err: %w", bin.installationPath(), err)
	}

	copyCmd := bin.cmdCreator.Create("sudo", "cp", "-rp", fmt.Sprintf("%s%s", bin.buildArtifactPath(), bin.installationPath()), "/opt")
	_, err = copyCmd.Output()
	if err != nil {
		return fmt.Errorf("error copying files to directory %s, err: %w", bin.installationPath(), err)
	}

	chownFinchCmd := bin.cmdCreator.Create("sudo", "chown", "root:wheel", bin.installationPath())
	_, err = chownFinchCmd.Output()
	if err != nil {
		return fmt.Errorf("error changing owner of directory %s, err: %w", bin.installationPath(), err)
	}

	installationPathBinDir := fmt.Sprintf("%s/bin", bin.installationPath())
	chownBinCmd := bin.cmdCreator.Create("sudo", "chown", "-R", "root:wheel", installationPathBinDir)
	_, err = chownBinCmd.Output()
	if err != nil {
		return fmt.Errorf("error changing owner of files in directory %s, err: %w", installationPathBinDir, err)
	}

	// in most cases this should not be needed, as the permissions should be copied from the build artifacts,
	// but the permissions can end up being wrong when Finch is built on a shell that has a restrictive umask.
	chmodBinCmd := bin.cmdCreator.Create("sudo", "chmod", "755", bin.installationPathSocketVmnetExe())
	_, err = chmodBinCmd.Output()
	if err != nil {
		return fmt.Errorf("error setting correct permissions for socket_vmnet binary, err: %w", err)
	}

	return nil
}

// RequiresRoot returns true because creating writing to `bin.installationPath()` requires root.
func (bin *binaries) RequiresRoot() bool {
	return true
}
