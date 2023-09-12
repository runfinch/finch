// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build !windows

package disk

import (
	"fmt"
	"io/fs"
	"path"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/assert"
	"github.com/xorcare/pointer"

	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/mocks"
	fpath "github.com/runfinch/finch/pkg/path"
)

func TestDisk_NewUserDataDiskManager(t *testing.T) {
	t.Parallel()

	ctrl := gomock.NewController(t)
	lcc := mocks.NewLimaCmdCreator(ctrl)
	ecc := mocks.NewCommandCreator(ctrl)
	dfs := mocks.NewMockdiskFS(ctrl)
	finch := fpath.Finch("mock_finch")
	homeDir := "mock_home"

	NewUserDataDiskManager(lcc, ecc, dfs, finch, homeDir, &config.Finch{})
}

func TestUserDataDiskManager_InitializeUserDataDisk(t *testing.T) {
	t.Parallel()

	finch := fpath.Finch("mock_finch")
	homeDir := "mock_home"

	size, err := sizeString()
	assert.NoError(t, err)

	limaPath := path.Join(finch.LimaHomePath(), "_disks", diskName, "datadisk")
	lockPath := path.Join(finch.LimaHomePath(), "_disks", diskName, "in_use_by")
	mockListArgs := []string{"disk", "ls", diskName, "--json"}
	mockCreateArgs := []string{"disk", "create", diskName, "--size", size, "--format", "raw"}
	mockUnlockArgs := []string{"disk", "unlock", diskName}
	mockQemuImgExePath := "mock_finch/lima/bin/qemu-img"
	mockDiskInfoArgs := []string{
		"info",
		"--output=json",
		finch.UserDataDiskPath(homeDir),
	}
	mockQemuBackupDiskPath := fmt.Sprintf("%s.qcow2", finch.UserDataDiskPath(homeDir))
	mockDiskConvertArgs := []string{
		"convert",
		"-f",
		"qcow2",
		"-O",
		"raw",
		mockQemuBackupDiskPath,
		finch.UserDataDiskPath(homeDir),
	}

	//nolint:lll // line cannot be shortened without losing functionality
	listSuccessOutput := []byte("{\"name\":\"finch\",\"size\":5,\"dir\":\"mock_dir\",\"instance\":\"\",\"instanceDir\":\"\",\"mountPoint\":\"/mnt/lima-finch\"}")

	diskInfoQCOW2SuccessOutput := []byte(`
{
	"virtual-size": 53687091200,
	"filename": "mock_home/.finch/.disks/datadisk",
	"format": "qcow2",
	"actual-size": 6107136,
	"dirty-flag": false
}
`)

	testCases := []struct {
		name    string
		cfg     *config.Finch
		wantErr error
		mockSvc func(lcc *mocks.LimaCmdCreator, dfs *mocks.MockdiskFS, cmd *mocks.Command, ecc *mocks.CommandCreator)
	}{
		{
			name: "create and save disk",
			cfg: &config.Finch{
				VMType: pointer.String("qemu"),
			},
			wantErr: nil,
			mockSvc: func(lcc *mocks.LimaCmdCreator, dfs *mocks.MockdiskFS, cmd *mocks.Command, ecc *mocks.CommandCreator) {
				lcc.EXPECT().CreateWithoutStdio(mockListArgs).Return(cmd)
				cmd.EXPECT().Output().Return([]byte(""), nil)

				lcc.EXPECT().CreateWithoutStdio(mockCreateArgs).Return(cmd)
				cmd.EXPECT().CombinedOutput().Return(nil, nil)

				dfs.EXPECT().Stat(finch.UserDataDiskPath(homeDir)).Return(nil, fs.ErrNotExist)
				dfs.EXPECT().Stat(path.Dir(finch.UserDataDiskPath(homeDir))).Return(nil, nil)
				dfs.EXPECT().Rename(limaPath, finch.UserDataDiskPath(homeDir)).Return(nil)

				dfs.EXPECT().Stat(limaPath).Return(nil, fs.ErrNotExist)
				dfs.EXPECT().SymlinkIfPossible(finch.UserDataDiskPath(homeDir), limaPath).Return(nil)

				dfs.EXPECT().Stat(lockPath).Return(nil, fs.ErrNotExist)
			},
		},
		{
			name: "disk already exists",
			cfg: &config.Finch{
				VMType: pointer.String("qemu"),
			},
			wantErr: nil,
			mockSvc: func(lcc *mocks.LimaCmdCreator, dfs *mocks.MockdiskFS, cmd *mocks.Command, ecc *mocks.CommandCreator) {
				lcc.EXPECT().CreateWithoutStdio(mockListArgs).Return(cmd)
				cmd.EXPECT().Output().Return(listSuccessOutput, nil)

				dfs.EXPECT().ReadlinkIfPossible(limaPath).Return(finch.UserDataDiskPath(homeDir), nil)

				dfs.EXPECT().Stat(lockPath).Return(nil, fs.ErrNotExist)
			},
		},
		{
			name: "disk exists but has not been saved",
			cfg: &config.Finch{
				VMType: pointer.String("qemu"),
			},
			wantErr: nil,
			mockSvc: func(lcc *mocks.LimaCmdCreator, dfs *mocks.MockdiskFS, cmd *mocks.Command, ecc *mocks.CommandCreator) {
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
			name: "disk does not exist but a persistent disk does",
			cfg: &config.Finch{
				VMType: pointer.String("qemu"),
			},
			wantErr: nil,
			mockSvc: func(lcc *mocks.LimaCmdCreator, dfs *mocks.MockdiskFS, cmd *mocks.Command, ecc *mocks.CommandCreator) {
				lcc.EXPECT().CreateWithoutStdio(mockListArgs).Return(cmd)
				cmd.EXPECT().Output().Return([]byte(""), nil)

				lcc.EXPECT().CreateWithoutStdio(mockCreateArgs).Return(cmd)
				cmd.EXPECT().CombinedOutput().Return(nil, nil)

				dfs.EXPECT().Stat(finch.UserDataDiskPath(homeDir)).Return(nil, nil)

				dfs.EXPECT().Stat(limaPath).Return(nil, nil)
				dfs.EXPECT().Remove(limaPath).Return(nil)

				dfs.EXPECT().SymlinkIfPossible(finch.UserDataDiskPath(homeDir), limaPath).Return(nil)

				dfs.EXPECT().Stat(lockPath).Return(nil, fs.ErrNotExist)
			},
		},
		{
			name: "disk already exists but is locked",
			cfg: &config.Finch{
				VMType: pointer.String("qemu"),
			},
			wantErr: nil,
			mockSvc: func(lcc *mocks.LimaCmdCreator, dfs *mocks.MockdiskFS, cmd *mocks.Command, ecc *mocks.CommandCreator) {
				lcc.EXPECT().CreateWithoutStdio(mockListArgs).Return(cmd)
				cmd.EXPECT().Output().Return(listSuccessOutput, nil)

				dfs.EXPECT().ReadlinkIfPossible(limaPath).Return(finch.UserDataDiskPath(homeDir), nil)

				dfs.EXPECT().Stat(lockPath).Return(nil, nil)
				lcc.EXPECT().CreateWithoutStdio(mockUnlockArgs).Return(cmd)
				cmd.EXPECT().CombinedOutput().Return(nil, nil)
			},
		},
		{
			name: "disk exists and using vz mode, but disk is the wrong format",
			cfg: &config.Finch{
				VMType: pointer.String("vz"),
			},
			wantErr: nil,
			mockSvc: func(lcc *mocks.LimaCmdCreator, dfs *mocks.MockdiskFS, cmd *mocks.Command, ecc *mocks.CommandCreator) {
				lcc.EXPECT().CreateWithoutStdio(mockListArgs).Return(cmd)
				cmd.EXPECT().Output().Return(listSuccessOutput, nil)

				ecc.EXPECT().Create(mockQemuImgExePath, mockDiskInfoArgs).Return(cmd)
				cmd.EXPECT().CombinedOutput().Return(diskInfoQCOW2SuccessOutput, nil)

				dfs.EXPECT().Rename(finch.UserDataDiskPath(homeDir), mockQemuBackupDiskPath).Return(nil)

				ecc.EXPECT().Create(mockQemuImgExePath, mockDiskConvertArgs).Return(cmd)
				cmd.EXPECT().CombinedOutput().Return([]byte(""), nil)

				dfs.EXPECT().Stat(finch.UserDataDiskPath(homeDir)).Return(nil, fs.ErrNotExist)
				dfs.EXPECT().Stat(path.Dir(finch.UserDataDiskPath(homeDir))).Return(nil, nil)
				dfs.EXPECT().Rename(limaPath, finch.UserDataDiskPath(homeDir)).Return(nil)

				dfs.EXPECT().ReadlinkIfPossible(limaPath).Return(finch.UserDataDiskPath(homeDir), nil)

				dfs.EXPECT().Stat(limaPath).Return(nil, fs.ErrNotExist)
				dfs.EXPECT().SymlinkIfPossible(finch.UserDataDiskPath(homeDir), limaPath).Return(nil)

				dfs.EXPECT().Stat(lockPath).Return(nil, fs.ErrNotExist)
			},
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			lcc := mocks.NewLimaCmdCreator(ctrl)
			ecc := mocks.NewCommandCreator(ctrl)
			dfs := mocks.NewMockdiskFS(ctrl)
			cmd := mocks.NewCommand(ctrl)
			tc.mockSvc(lcc, dfs, cmd, ecc)
			dm := NewUserDataDiskManager(lcc, ecc, dfs, finch, homeDir, tc.cfg)
			err := dm.EnsureUserDataDisk()
			assert.Equal(t, tc.wantErr, err)
		})
	}
}
