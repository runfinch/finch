// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build !windows
// +build !windows

// Ensures that the binaries required for networking are installed in a privileged location.
// More information here: https://github.com/lima-vm/socket_vmnet
package vmnet

import (
	"errors"
	"fmt"
	"io/fs"
	"testing"

	"github.com/runfinch/finch/pkg/mocks"
	"github.com/runfinch/finch/pkg/path"

	"github.com/golang/mock/gomock"
	"github.com/spf13/afero"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

const (
	mockFinchPathString = "mock_prefix"
	mockFinchPath       = path.Finch(mockFinchPathString)
)

func TestBinaries_installationPath(t *testing.T) {
	t.Parallel()

	got := newBinaries("", nil, nil, nil).installationPath()
	assert.Equal(t, "/opt/finch", got)
}

func TestBinaries_socketVmnetBinPath(t *testing.T) {
	t.Parallel()

	got := newBinaries("", nil, nil, nil).socketVmnetBinPath()
	assert.Equal(t, "/bin/socket_vmnet", got)
}

func TestBinaries_installationPathSocketVmnetExe(t *testing.T) {
	t.Parallel()

	got := newBinaries("", nil, nil, nil).installationPathSocketVmnetExe()
	assert.Equal(t, "/opt/finch/bin/socket_vmnet", got)
}

func TestBinaries_buildArtifactPath(t *testing.T) {
	t.Parallel()

	got := newBinaries(mockFinchPath, nil, nil, nil).buildArtifactPath()
	assert.Equal(t, "mock_prefix/dependencies/lima-socket_vmnet", got)
}

func TestBinaries_buildArtifactSocketVmnetExe(t *testing.T) {
	t.Parallel()

	got := newBinaries(mockFinchPath, nil, nil, nil).buildArtifactSocketVmnetExe()
	assert.Equal(t, "mock_prefix/dependencies/lima-socket_vmnet/opt/finch/bin/socket_vmnet", got)
}

func TestBinaries_Installed(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		mockSvc func(t *testing.T, mFs afero.Fs, l *mocks.Logger)
		want    bool
	}{
		{
			name: "happy path",
			mockSvc: func(t *testing.T, mFs afero.Fs, l *mocks.Logger) {
				fileData := []byte("test data")
				err := afero.WriteFile(mFs, "mock_prefix/dependencies/lima-socket_vmnet/opt/finch/bin/socket_vmnet", fileData, 0o666)
				require.NoError(t, err)

				require.NoError(t, mFs.MkdirAll("/opt/finch", fs.ModeDir))
				require.NoError(t, afero.WriteFile(mFs, "/opt/finch/bin/socket_vmnet", fileData, 0o666))
			},
			want: true,
		},
		{
			name: "installation path doesn't exist",
			mockSvc: func(t *testing.T, mFs afero.Fs, l *mocks.Logger) {
				fileData := []byte("test data")
				err := afero.WriteFile(mFs, "mock_prefix/dependencies/lima-socket-vmnet/opt/finch/bin/socket_vmnet", fileData, 0o666)
				require.NoError(t, err)

				l.EXPECT().Info("binaries directory doesn't exist")
			},
			want: false,
		},
		{
			name: "vmnet artifact doesn't exist",
			mockSvc: func(t *testing.T, mFs afero.Fs, l *mocks.Logger) {
				fileData := []byte("test data")
				err := mFs.MkdirAll("/opt/finch", fs.ModeDir)
				require.NoError(t, err)

				err = afero.WriteFile(mFs, "/opt/finch/bin/socket_vmnet", fileData, 0o666)
				require.NoError(t, err)

				var pathErr fs.PathError
				pathErr.Op = "open"
				pathErr.Path = "mock_prefix/dependencies/lima-socket_vmnet/opt/finch/bin/socket_vmnet"
				pathErr.Err = errors.New("file does not exist")

				l.EXPECT().Infof("dependency socket_vmnet file not found: %v", &pathErr)
			},
			want: false,
		},
		{
			name: "installationPathSocketVmnetExePath path doesn't exist",
			mockSvc: func(t *testing.T, mFs afero.Fs, l *mocks.Logger) {
				fileData := []byte("test data")
				err := afero.WriteFile(mFs, "mock_prefix/dependencies/lima-socket_vmnet/opt/finch/bin/socket_vmnet", fileData, 0o666)
				require.NoError(t, err)

				err = mFs.MkdirAll("/opt/finch", fs.ModeDir)
				require.NoError(t, err)

				var pathErr fs.PathError
				pathErr.Op = "open"
				pathErr.Path = "/opt/finch/bin/socket_vmnet"
				pathErr.Err = errors.New("file does not exist")

				l.EXPECT().Infof("installed socket_vmnet file not found: %v", &pathErr)
			},
			want: false,
		},
		{
			name: "paths exist, but their contents don't match",
			mockSvc: func(t *testing.T, mFs afero.Fs, l *mocks.Logger) {
				fileData1 := []byte("test data")
				fileData2 := []byte("different test data")
				err := afero.WriteFile(mFs, "mock_prefix/dependencies/lima-socket_vmnet/opt/finch/bin/socket_vmnet", fileData1, 0o666)
				require.NoError(t, err)

				err = mFs.MkdirAll("/opt/finch", fs.ModeDir)
				require.NoError(t, err)

				err = afero.WriteFile(mFs, "/opt/finch/bin/socket_vmnet", fileData2, 0o666)
				require.NoError(t, err)
			},
			want: false,
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			mFs := afero.NewMemMapFs()
			l := mocks.NewLogger(ctrl)
			tc.mockSvc(t, mFs, l)

			got := newBinaries(mockFinchPath, mFs, nil, l).Installed()
			assert.Equal(t, tc.want, got)
		})
	}
}

func TestBinaries_Install(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		mockSvc func(
			cmd *mocks.Command,
			creator *mocks.CommandCreator)
		want error
	}{
		{
			name: "happy path",
			mockSvc: func(cmd *mocks.Command, creator *mocks.CommandCreator) {
				cmd.EXPECT().Output().Times(5)

				creator.EXPECT().Create("sudo", "mkdir", "-p", "/opt/finch").Return(cmd)
				creator.EXPECT().Create("sudo", "cp", "-rp", "mock_prefix/dependencies/lima-socket_vmnet/opt/finch", "/opt").Return(cmd)
				creator.EXPECT().Create("sudo", "chown", "root:wheel", "/opt/finch").Return(cmd)
				creator.EXPECT().Create("sudo", "chown", "-R", "root:wheel", "/opt/finch/bin").Return(cmd)
				creator.EXPECT().Create("sudo", "chmod", "755", "/opt/finch/bin/socket_vmnet").Return(cmd)
			},
			want: nil,
		},
		{
			name: "sudo mkdir throws an error",
			mockSvc: func(cmd *mocks.Command, creator *mocks.CommandCreator) {
				cmd.EXPECT().Output().Return([]byte{}, errors.New("mkdir error"))

				creator.EXPECT().Create("sudo", "mkdir", "-p", "/opt/finch").Return(cmd)
			},
			want: fmt.Errorf("error creating installation directory %s, err: %w", "/opt/finch", errors.New("mkdir error")),
		},
		{
			name: "sudo cp throws an error",
			mockSvc: func(cmd *mocks.Command, creator *mocks.CommandCreator) {
				cmd.EXPECT().Output()
				cmd.EXPECT().Output().Return([]byte{}, errors.New("cp error"))

				creator.EXPECT().Create("sudo", "mkdir", "-p", "/opt/finch").Return(cmd)
				creator.EXPECT().Create("sudo", "cp", "-rp", "mock_prefix/dependencies/lima-socket_vmnet/opt/finch", "/opt").Return(cmd)
			},
			want: fmt.Errorf("error copying files to directory %s, err: %w", "/opt/finch", errors.New("cp error")),
		},
		{
			name: "sudo chown of the installation directory throws an error",
			mockSvc: func(cmd *mocks.Command, creator *mocks.CommandCreator) {
				cmd.EXPECT().Output().Times(2)
				cmd.EXPECT().Output().Return([]byte{}, errors.New("chown failed"))

				creator.EXPECT().Create("sudo", "mkdir", "-p", "/opt/finch").Return(cmd)
				creator.EXPECT().Create("sudo", "cp", "-rp", "mock_prefix/dependencies/lima-socket_vmnet/opt/finch", "/opt").Return(cmd)
				creator.EXPECT().Create("sudo", "chown", "root:wheel", "/opt/finch").Return(cmd)
			},
			want: fmt.Errorf("error changing owner of directory %s, err: %w", "/opt/finch", errors.New("chown failed")),
		},
		{
			name: "sudo chown -R of the bin directory throws an error",
			mockSvc: func(cmd *mocks.Command, creator *mocks.CommandCreator) {
				cmd.EXPECT().Output().Times(3)
				cmd.EXPECT().Output().Return([]byte{}, errors.New("chown -R error"))

				creator.EXPECT().Create("sudo", "mkdir", "-p", "/opt/finch").Return(cmd)
				creator.EXPECT().Create("sudo", "cp", "-rp", "mock_prefix/dependencies/lima-socket_vmnet/opt/finch", "/opt").Return(cmd)
				creator.EXPECT().Create("sudo", "chown", "root:wheel", "/opt/finch").Return(cmd)
				creator.EXPECT().Create("sudo", "chown", "-R", "root:wheel", "/opt/finch/bin").Return(cmd)
			},
			want: fmt.Errorf("error changing owner of files in directory %s, err: %w", "/opt/finch/bin", errors.New("chown -R error")),
		},
		{
			name: "sudo chmod of the binary throws an error",
			mockSvc: func(cmd *mocks.Command, creator *mocks.CommandCreator) {
				cmd.EXPECT().Output().Times(4)
				cmd.EXPECT().Output().Return([]byte{}, errors.New("sudo chmod error"))

				creator.EXPECT().Create("sudo", "mkdir", "-p", "/opt/finch").Return(cmd)
				creator.EXPECT().Create("sudo", "cp", "-rp", "mock_prefix/dependencies/lima-socket_vmnet/opt/finch", "/opt").Return(cmd)
				creator.EXPECT().Create("sudo", "chown", "root:wheel", "/opt/finch").Return(cmd)
				creator.EXPECT().Create("sudo", "chown", "-R", "root:wheel", "/opt/finch/bin").Return(cmd)
				creator.EXPECT().Create("sudo", "chmod", "755", "/opt/finch/bin/socket_vmnet").Return(cmd)
			},
			want: fmt.Errorf("error setting correct permissions for socket_vmnet binary, err: %w", errors.New("sudo chmod error")),
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			cmd := mocks.NewCommand(ctrl)
			creator := mocks.NewCommandCreator(ctrl)
			tc.mockSvc(cmd, creator)

			got := newBinaries(mockFinchPath, nil, creator, nil).Install()
			assert.Equal(t, tc.want, got)
		})
	}
}

func TestBinaries_RequiresRoot(t *testing.T) {
	t.Parallel()

	got := newBinaries(mockFinchPath, nil, nil, nil).RequiresRoot()
	assert.Equal(t, true, got)
}
