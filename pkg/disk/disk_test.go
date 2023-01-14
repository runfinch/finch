// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package disk

import (
	"io/fs"
	"path"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/assert"

	"github.com/runfinch/finch/pkg/mocks"
	fpath "github.com/runfinch/finch/pkg/path"
)

func TestDisk_NewUserDataDiskManager(t *testing.T) {
	t.Parallel()

	ctrl := gomock.NewController(t)
	lcc := mocks.NewLimaCmdCreator(ctrl)
	dfs := mocks.NewMockdiskFS(ctrl)
	finch := fpath.Finch("mock_finch")
	homeDir := "mock_home"

	NewUserDataDiskManager(lcc, dfs, finch, homeDir)
}

func TestUserDataDiskManager_InitializeUserDataDisk(t *testing.T) {
	t.Parallel()

	finch := fpath.Finch("mock_finch")
	homeDir := "mock_home"

	limaPath := path.Join(finch.LimaHomePath(), "_disks", diskName, "datadisk")
	lockPath := path.Join(finch.LimaHomePath(), "_disks", diskName, "in_use_by")
	mockListArgs := []string{"disk", "ls", diskName, "--json"}
	mockCreateArgs := []string{"disk", "create", diskName, "--size", diskSize}
	mockUnlockArgs := []string{"disk", "unlock", diskName}

	//nolint:lll // line cannot be shortened without losing functionality
	listSuccessOutput := []byte("{\"name\":\"finch\",\"size\":5,\"dir\":\"mock_dir\",\"instance\":\"\",\"instanceDir\":\"\",\"mountPoint\":\"/mnt/lima-finch\"}")

	testCases := []struct {
		name    string
		wantErr error
		mockSvc func(*mocks.LimaCmdCreator, *mocks.MockdiskFS, *mocks.Command)
	}{
		{
			name:    "create and save disk",
			wantErr: nil,
			mockSvc: func(lcc *mocks.LimaCmdCreator, dfs *mocks.MockdiskFS, cmd *mocks.Command) {
				lcc.EXPECT().CreateWithoutStdio(mockListArgs).Return(cmd)
				cmd.EXPECT().Output().Return([]byte(""), nil)

				lcc.EXPECT().CreateWithoutStdio(mockCreateArgs).Return(cmd)
				cmd.EXPECT().Run().Return(nil)

				dfs.EXPECT().Stat(finch.UserDataDiskPath(homeDir)).Return(nil, fs.ErrNotExist)
				dfs.EXPECT().Stat(path.Dir(finch.UserDataDiskPath(homeDir))).Return(nil, nil)
				dfs.EXPECT().Rename(limaPath, finch.UserDataDiskPath(homeDir)).Return(nil)

				dfs.EXPECT().Stat(limaPath).Return(nil, fs.ErrNotExist)
				dfs.EXPECT().SymlinkIfPossible(finch.UserDataDiskPath(homeDir), limaPath).Return(nil)

				dfs.EXPECT().Stat(lockPath).Return(nil, fs.ErrNotExist)
			},
		},
		{
			name:    "disk already exists",
			wantErr: nil,
			mockSvc: func(lcc *mocks.LimaCmdCreator, dfs *mocks.MockdiskFS, cmd *mocks.Command) {
				lcc.EXPECT().CreateWithoutStdio(mockListArgs).Return(cmd)
				cmd.EXPECT().Output().Return(listSuccessOutput, nil)

				dfs.EXPECT().ReadlinkIfPossible(limaPath).Return(finch.UserDataDiskPath(homeDir), nil)

				dfs.EXPECT().Stat(lockPath).Return(nil, fs.ErrNotExist)
			},
		},
		{
			name:    "disk exists but has not been saved",
			wantErr: nil,
			mockSvc: func(lcc *mocks.LimaCmdCreator, dfs *mocks.MockdiskFS, cmd *mocks.Command) {
				lcc.EXPECT().CreateWithoutStdio(mockListArgs).Return(cmd)
				cmd.EXPECT().Output().Return(listSuccessOutput, nil)

				// not a link
				dfs.EXPECT().ReadlinkIfPossible(limaPath).Return("", nil)

				dfs.EXPECT().Stat(finch.UserDataDiskPath(homeDir)).Return(nil, fs.ErrNotExist)
				dfs.EXPECT().Stat(path.Dir(finch.UserDataDiskPath(homeDir))).Return(nil, nil)
				dfs.EXPECT().Rename(limaPath, finch.UserDataDiskPath(homeDir)).Return(nil)

				dfs.EXPECT().Stat(limaPath).Return(nil, fs.ErrNotExist)
				dfs.EXPECT().SymlinkIfPossible(finch.UserDataDiskPath(homeDir), limaPath).Return(nil)

				dfs.EXPECT().Stat(lockPath).Return(nil, fs.ErrNotExist)
			},
		},
		{
			name:    "disk does not exist but a persistent disk does",
			wantErr: nil,
			mockSvc: func(lcc *mocks.LimaCmdCreator, dfs *mocks.MockdiskFS, cmd *mocks.Command) {
				lcc.EXPECT().CreateWithoutStdio(mockListArgs).Return(cmd)
				cmd.EXPECT().Output().Return([]byte(""), nil)

				lcc.EXPECT().CreateWithoutStdio(mockCreateArgs).Return(cmd)
				cmd.EXPECT().Run().Return(nil)

				dfs.EXPECT().Stat(finch.UserDataDiskPath(homeDir)).Return(nil, nil)

				dfs.EXPECT().Stat(limaPath).Return(nil, nil)
				dfs.EXPECT().Remove(limaPath).Return(nil)

				dfs.EXPECT().SymlinkIfPossible(finch.UserDataDiskPath(homeDir), limaPath).Return(nil)

				dfs.EXPECT().Stat(lockPath).Return(nil, fs.ErrNotExist)
			},
		},
		{
			name:    "disk already exists but is locked",
			wantErr: nil,
			mockSvc: func(lcc *mocks.LimaCmdCreator, dfs *mocks.MockdiskFS, cmd *mocks.Command) {
				lcc.EXPECT().CreateWithoutStdio(mockListArgs).Return(cmd)
				cmd.EXPECT().Output().Return(listSuccessOutput, nil)

				dfs.EXPECT().ReadlinkIfPossible(limaPath).Return(finch.UserDataDiskPath(homeDir), nil)

				dfs.EXPECT().Stat(lockPath).Return(nil, nil)
				lcc.EXPECT().CreateWithoutStdio(mockUnlockArgs).Return(cmd)
				cmd.EXPECT().Run().Return(nil)
			},
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			lcc := mocks.NewLimaCmdCreator(ctrl)
			dfs := mocks.NewMockdiskFS(ctrl)
			cmd := mocks.NewCommand(ctrl)
			tc.mockSvc(lcc, dfs, cmd)
			dm := NewUserDataDiskManager(lcc, dfs, finch, homeDir)
			err := dm.EnsureUserDataDisk()
			assert.Equal(t, tc.wantErr, err)
		})
	}
}
