// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package path

import (
	"errors"
	"fmt"
	"path/filepath"
	"runtime"
	"testing"

	"github.com/runfinch/finch/pkg/mocks"

	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/assert"
)

var mockFinch = Finch("mock_finch")

func TestFinch_ConfigFilePath(t *testing.T) {
	t.Parallel()

	res := mockFinch.ConfigFilePath("homeDir")
	assert.Equal(t, res, filepath.Join("homeDir", ".finch", "finch.yaml"))
}

func TestFinch_UserDataDiskPath(t *testing.T) {
	t.Parallel()

	res := mockFinch.UserDataDiskPath("homeDir")
	if runtime.GOOS == "windows" {
		assert.Equal(t, res, filepath.Join("homeDir", ".finch", ".disks", mockFinch.generatePathSum()+".vhdx"))
	} else {
		assert.Equal(t, res, filepath.Join("homeDir", ".finch", ".disks", mockFinch.generatePathSum()))

	}
}

func TestFinch_LimaHomePath(t *testing.T) {
	t.Parallel()

	res := mockFinch.LimaHomePath()
	assert.Equal(t, res, filepath.Join("mock_finch", "lima", "data"))
}

func TestFinch_LimaInstancePath(t *testing.T) {
	t.Parallel()

	res := mockFinch.LimaInstancePath()
	assert.Equal(t, res, filepath.Join("mock_finch", "lima", "data", "finch"))
}

func TestFinch_LimactlPath(t *testing.T) {
	t.Parallel()

	res := mockFinch.LimactlPath()
	assert.Equal(t, res, filepath.Join("mock_finch", "lima", "bin", "limactl"))
}

func TestFinch_BaseYamlFilePath(t *testing.T) {
	t.Parallel()

	res := mockFinch.BaseYamlFilePath()
	assert.Equal(t, res, filepath.Join("mock_finch", "os", "finch.yaml"))
}

func TestFinch_LimaConfigDirectoryPath(t *testing.T) {
	t.Parallel()

	res := mockFinch.LimaConfigDirectoryPath()
	assert.Equal(t, res, filepath.Join("mock_finch", "lima", "data", "_config"))
}

func TestFinch_LimaOverrideConfigPath(t *testing.T) {
	t.Parallel()

	res := mockFinch.LimaOverrideConfigPath()
	assert.Equal(t, res, filepath.Join("mock_finch", "lima", "data", "_config", "override.yaml"))
}

func TestFinch_LimaSSHPrivateKeyPath(t *testing.T) {
	t.Parallel()

	res := mockFinch.LimaSSHPrivateKeyPath()
	assert.Equal(t, res, filepath.Join("mock_finch", "lima", "data", "_config", "user"))
}

func TestFinch_QemuBinDir(t *testing.T) {
	t.Parallel()

	res := mockFinch.QEMUBinDir()
	assert.Equal(t, res, filepath.Join("mock_finch", "lima", "bin"))
}

func TestFindFinch(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		mockSvc func(*mocks.FinchFinderDeps)
		wantErr error
		want    Finch
	}{
		{
			name:    "happy path",
			wantErr: nil,
			want:    Finch("/real"),
			mockSvc: func(deps *mocks.FinchFinderDeps) {
				deps.EXPECT().Executable().Return("/bin/path", nil)
				deps.EXPECT().EvalSymlinks("/bin/path").Return("/real/bin/path", nil)
				deps.EXPECT().FilePathJoin("/real/bin/path", "..", "..").Return("/real")
			},
		},
		{
			name: "failed to find the executable path",
			want: "",
			wantErr: fmt.Errorf("failed to locate the executable that starts this process: %w",
				errors.New("failed to find executable path"),
			),
			mockSvc: func(deps *mocks.FinchFinderDeps) {
				deps.EXPECT().Executable().Return("", errors.New("failed to find executable path"))
			},
		},
		{
			name:    "failed to find the real path of the executable",
			want:    "",
			wantErr: fmt.Errorf("failed to find the real path of the executable: %w", errors.New("failed to find real path")),
			mockSvc: func(deps *mocks.FinchFinderDeps) {
				deps.EXPECT().Executable().Return("/bin/path", nil)
				deps.EXPECT().EvalSymlinks("/bin/path").Return("", errors.New("failed to find real path"))
			},
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			deps := mocks.NewFinchFinderDeps(ctrl)
			tc.mockSvc(deps)
			got, err := FindFinch(deps)
			assert.Equal(t, err, tc.wantErr)
			assert.Equal(t, got, tc.want)
		})
	}
}
