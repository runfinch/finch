// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build !windows
// +build !windows

// Ensures that output of `lima sudoers` is output to the correct directory.
// This is necessary for networking to work without prompting the user
// for their root password every time the VM is start / stopped.
// More information here: https://github.com/lima-vm/lima/blob/master/docs/network.md#managed-vmnet-networks-192168105024
package vmnet

import (
	"bytes"
	"errors"
	"fmt"
	"io/fs"
	"runtime"
	"testing"

	"github.com/runfinch/finch/pkg/mocks"

	"github.com/golang/mock/gomock"
	"github.com/spf13/afero"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestSudoers_path(t *testing.T) {
	if runtime.GOOS == "windows" {
		t.Skip()
	}
	t.Parallel()

	got := newSudoersFile(nil, nil, nil, nil).path()
	assert.Equal(t, "/etc/sudoers.d/finch-lima", got)
}

func TestSudoers_Installed(t *testing.T) {
	if runtime.GOOS == "windows" {
		t.Skip()
	}
	t.Parallel()

	testCases := []struct {
		name    string
		mockSvc func(t *testing.T, cmd *mocks.Command, mFs afero.Fs, lc *mocks.LimaCmdCreator, l *mocks.Logger)
		want    bool
	}{
		{
			name: "happy path",
			mockSvc: func(t *testing.T, cmd *mocks.Command, mFs afero.Fs, lc *mocks.LimaCmdCreator, l *mocks.Logger) {
				sudoersData := []byte("test data")

				err := afero.WriteFile(mFs, "/etc/sudoers.d/finch-lima", sudoersData, 0o666)
				require.NoError(t, err)

				lc.EXPECT().CreateWithoutStdio("sudoers").Return(cmd)
				cmd.EXPECT().Output().Return(sudoersData, nil)
			},
			want: true,
		},
		{
			name: "sudoers path doesn't exist",
			mockSvc: func(t *testing.T, cmd *mocks.Command, mFs afero.Fs, lc *mocks.LimaCmdCreator, l *mocks.Logger) {
				var pathErr fs.PathError
				pathErr.Op = "open"
				pathErr.Path = "/etc/sudoers.d/finch-lima"
				pathErr.Err = errors.New("file does not exist")

				l.EXPECT().Infof("sudoers file not found: %v", &pathErr)
			},
			want: false,
		},
		{
			name: "sudoers command throws an error",
			mockSvc: func(t *testing.T, cmd *mocks.Command, mFs afero.Fs, lc *mocks.LimaCmdCreator, l *mocks.Logger) {
				sudoersData := []byte("test data")
				wantErr := errors.New("some error")

				err := afero.WriteFile(mFs, "/etc/sudoers.d/finch-lima", sudoersData, 0o666)
				require.NoError(t, err)

				lc.EXPECT().CreateWithoutStdio("sudoers").Return(cmd)
				cmd.EXPECT().Output().Return([]byte{}, wantErr)
				l.EXPECT().Errorf("failed to run lima sudoers command: %v", wantErr)
			},
			want: false,
		},
		{
			name: "paths exist, but contents don't match",
			mockSvc: func(t *testing.T, cmd *mocks.Command, mFs afero.Fs, lc *mocks.LimaCmdCreator, l *mocks.Logger) {
				sudoersData1 := []byte("test data")
				sudoersData2 := []byte("different test data")

				err := afero.WriteFile(mFs, "/etc/sudoers.d/finch-lima", sudoersData1, 0o666)
				require.NoError(t, err)

				lc.EXPECT().CreateWithoutStdio("sudoers").Return(cmd)
				cmd.EXPECT().Output().Return(sudoersData2, nil)
			},
			want: false,
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			cmd := mocks.NewCommand(ctrl)
			l := mocks.NewLogger(ctrl)
			mFs := afero.NewMemMapFs()
			mLimaCreator := mocks.NewLimaCmdCreator(ctrl)
			tc.mockSvc(t, cmd, mFs, mLimaCreator, l)

			got := newSudoersFile(mFs, nil, mLimaCreator, l).Installed()
			assert.Equal(t, tc.want, got)
		})
	}
}

func TestSudoers_Install(t *testing.T) {
	if runtime.GOOS == "windows" {
		t.Skip()
	}
	t.Parallel()

	testCases := []struct {
		name    string
		mockSvc func(t *testing.T, cmd *mocks.Command, mFs afero.Fs, ec *mocks.CommandCreator, lc *mocks.LimaCmdCreator)
		want    error
	}{
		{
			name: "happy path",
			mockSvc: func(t *testing.T, cmd *mocks.Command, mFs afero.Fs, ec *mocks.CommandCreator, lc *mocks.LimaCmdCreator) {
				sudoersData := []byte("test data")
				mockSudoersOut := []byte("mock_sudoers_out")

				err := afero.WriteFile(mFs, "/etc/sudoers.d/finch-lima", sudoersData, 0o666)
				require.NoError(t, err)

				lc.EXPECT().CreateWithoutStdio("sudoers").Return(cmd)
				cmd.EXPECT().Output().Return(mockSudoersOut, nil)
				ec.EXPECT().Create("sudo", "tee", "/etc/sudoers.d/finch-lima").Return(cmd)
				cmd.EXPECT().SetStdin(bytes.NewReader(mockSudoersOut))
				cmd.EXPECT().Output().Return(mockSudoersOut, nil)
				ec.EXPECT().Create("sudo", "chmod", "644", "/etc/sudoers.d/finch-lima").Return(cmd)
				cmd.EXPECT().Output().Return([]byte{}, nil)
			},
			want: nil,
		},
		{
			name: "lima sudoers command throws err",
			mockSvc: func(t *testing.T, cmd *mocks.Command, mFs afero.Fs, ec *mocks.CommandCreator, lc *mocks.LimaCmdCreator) {
				sudoersData := []byte("test data")

				err := afero.WriteFile(mFs, "/etc/sudoers.d/finch-lima", sudoersData, 0o666)
				require.NoError(t, err)

				lc.EXPECT().CreateWithoutStdio("sudoers").Return(cmd)
				cmd.EXPECT().Output().Return(sudoersData, errors.New("sudoers command error"))
			},
			want: fmt.Errorf("failed to get lima sudoers: %w", errors.New("sudoers command error")),
		},
		{
			name: "sudo tee command throws err",
			mockSvc: func(t *testing.T, cmd *mocks.Command, mFs afero.Fs, ec *mocks.CommandCreator, lc *mocks.LimaCmdCreator) {
				sudoersData := []byte("test data")
				mockSudoersOut := []byte("mock_sudoers_out")

				err := afero.WriteFile(mFs, "/etc/sudoers.d/finch-lima", sudoersData, 0o666)
				require.NoError(t, err)

				lc.EXPECT().CreateWithoutStdio("sudoers").Return(cmd)
				cmd.EXPECT().Output().Return(mockSudoersOut, nil)
				ec.EXPECT().Create("sudo", "tee", "/etc/sudoers.d/finch-lima").Return(cmd)
				cmd.EXPECT().SetStdin(bytes.NewReader(mockSudoersOut))
				cmd.EXPECT().Output().Return(mockSudoersOut, errors.New("sudo tee command error"))
			},
			want: fmt.Errorf("failed to write to the sudoers file: %w", errors.New("sudo tee command error")),
		},
		{
			name: "sudo chmod command throws err",
			mockSvc: func(t *testing.T, cmd *mocks.Command, mFs afero.Fs, ec *mocks.CommandCreator, lc *mocks.LimaCmdCreator) {
				sudoersData := []byte("test data")
				mockSudoersOut := []byte("mock_sudoers_out")

				err := afero.WriteFile(mFs, "/etc/sudoers.d/finch-lima", sudoersData, 0o666)
				require.NoError(t, err)

				lc.EXPECT().CreateWithoutStdio("sudoers").Return(cmd)
				cmd.EXPECT().Output().Return(mockSudoersOut, nil)
				ec.EXPECT().Create("sudo", "tee", "/etc/sudoers.d/finch-lima").Return(cmd)
				cmd.EXPECT().SetStdin(bytes.NewReader(mockSudoersOut))
				cmd.EXPECT().Output().Return(mockSudoersOut, nil)
				ec.EXPECT().Create("sudo", "chmod", "644", "/etc/sudoers.d/finch-lima").Return(cmd)
				cmd.EXPECT().Output().Return([]byte{}, errors.New("sudo chmod command error"))
			},
			want: fmt.Errorf("failed to set correct permissions for sudoers file: %w", errors.New("sudo chmod command error")),
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			cmd := mocks.NewCommand(ctrl)
			mFs := afero.NewMemMapFs()
			mExecCreator := mocks.NewCommandCreator(ctrl)
			mLimaCreator := mocks.NewLimaCmdCreator(ctrl)
			tc.mockSvc(t, cmd, mFs, mExecCreator, mLimaCreator)

			got := newSudoersFile(mFs, mExecCreator, mLimaCreator, nil).Install()
			assert.Equal(t, tc.want, got)
		})
	}
}

func TestSudoers_RequiresRoot(t *testing.T) {
	if runtime.GOOS == "windows" {
		t.Skip()
	}
	t.Parallel()

	got := newSudoersFile(nil, nil, nil, nil).RequiresRoot()
	assert.Equal(t, true, got)
}
