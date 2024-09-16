// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"errors"
	"fmt"
	"path/filepath"
	"testing"

	"github.com/runfinch/finch/pkg/dependency"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/mocks"

	"github.com/golang/mock/gomock"
	"github.com/spf13/afero"
	"github.com/spf13/cobra"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestNewStartVMCommand(t *testing.T) {
	t.Parallel()

	cmd := newStartVMCommand(nil, nil, nil, nil, nil, nil, "", nil, "")
	assert.Equal(t, cmd.Name(), "start")
}

func TestStartVMAction_runAdapter(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		wantErr error
		command *cobra.Command
		args    []string
		groups  func(*gomock.Controller) []*dependency.Group
		mockSvc func(
			*mocks.LimaCmdCreator,
			*mocks.Logger,
			*mocks.LimaConfigApplier,
			afero.Fs,
			*mocks.UserDataDiskManager,
			*gomock.Controller,
			string,
		)
		finchDir string
	}{
		{
			name:    "should start instance",
			wantErr: nil,
			command: &cobra.Command{
				Use: "start",
			},
			groups: func(ctrl *gomock.Controller) []*dependency.Group {
				dep := mocks.NewDependency(ctrl)
				deps := dependency.NewGroup([]dependency.Dependency{dep}, "", "")
				groups := []*dependency.Group{deps}

				dep.EXPECT().Installed().Return(false)
				dep.EXPECT().RequiresRoot().Return(false)
				dep.EXPECT().Install().Return(nil)

				return groups
			},
			args: []string{},
			mockSvc: func(
				lcc *mocks.LimaCmdCreator,
				logger *mocks.Logger,
				lca *mocks.LimaConfigApplier,
				fs afero.Fs,
				dm *mocks.UserDataDiskManager,
				ctrl *gomock.Controller,
				finchDir string,
			) {
				data := "cpus: 2\nmemory: 6GiB"
				finchConfigPath := filepath.Join(finchDir, "finch.yaml")
				require.NoError(t, afero.WriteFile(fs, finchConfigPath, []byte(data), 0o600))

				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Stopped"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Stopped")

				lca.EXPECT().ConfigureOverrideLimaYaml().Return(nil)

				dm.EXPECT().EnsureUserDataDisk().Return(nil)

				command := mocks.NewCommand(ctrl)
				command.EXPECT().CombinedOutput()
				lcc.EXPECT().CreateWithoutStdio("start", limaInstanceName).Return(command)

				logger.EXPECT().Info("Starting existing Finch virtual machine...")
				logger.EXPECT().Info("Finch virtual machine started successfully")
			},
			finchDir: "/.finch",
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			logger := mocks.NewLogger(ctrl)
			lcc := mocks.NewLimaCmdCreator(ctrl)
			lca := mocks.NewLimaConfigApplier(ctrl)
			fs := afero.NewMemMapFs()
			dm := mocks.NewUserDataDiskManager(ctrl)

			groups := tc.groups(ctrl)
			tc.mockSvc(lcc, logger, lca, fs, dm, ctrl, tc.finchDir)

			err := newStartVMAction(lcc, logger, groups, lca, fs, dm, tc.finchDir).runAdapter(tc.command, tc.args)
			assert.Equal(t, tc.wantErr, err)
		})
	}
}

func TestStartVMAction_run(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		wantErr error
		groups  func(*gomock.Controller) []*dependency.Group
		mockSvc func(
			*mocks.LimaCmdCreator,
			*mocks.Logger,
			*mocks.LimaConfigApplier,
			afero.Fs,
			*mocks.UserDataDiskManager,
			*gomock.Controller,
			string,
		)
		finchDir string
	}{
		{
			name:    "should start instance if instance exists",
			wantErr: nil,
			groups: func(ctrl *gomock.Controller) []*dependency.Group {
				dep := mocks.NewDependency(ctrl)
				deps := dependency.NewGroup([]dependency.Dependency{dep}, "", "")
				groups := []*dependency.Group{deps}

				dep.EXPECT().Installed().Return(false)
				dep.EXPECT().RequiresRoot().Return(false)
				dep.EXPECT().Install().Return(nil)

				return groups
			},
			mockSvc: func(
				lcc *mocks.LimaCmdCreator,
				logger *mocks.Logger,
				lca *mocks.LimaConfigApplier,
				fs afero.Fs,
				dm *mocks.UserDataDiskManager,
				ctrl *gomock.Controller,
				finchDir string,
			) {
				data := "cpus: 2\nmemory: 6GiB"
				finchConfigPath := filepath.Join(finchDir, "finch.yaml")
				require.NoError(t, afero.WriteFile(fs, finchConfigPath, []byte(data), 0o600))

				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Stopped"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Stopped")

				lca.EXPECT().ConfigureOverrideLimaYaml().Return(nil)

				dm.EXPECT().EnsureUserDataDisk().Return(nil)

				command := mocks.NewCommand(ctrl)
				command.EXPECT().CombinedOutput()
				lcc.EXPECT().CreateWithoutStdio("start", limaInstanceName).Return(command)

				logger.EXPECT().Info("Starting existing Finch virtual machine...")
				logger.EXPECT().Info("Finch virtual machine started successfully")
			},
			finchDir: "/.finch",
		},
		{
			name:    "should refresh config.json based on finch.yaml and start VM",
			wantErr: nil,
			groups: func(ctrl *gomock.Controller) []*dependency.Group {
				dep := mocks.NewDependency(ctrl)
				deps := dependency.NewGroup([]dependency.Dependency{dep}, "", "")
				groups := []*dependency.Group{deps}

				dep.EXPECT().Installed().Return(false)
				dep.EXPECT().RequiresRoot().Return(false)
				dep.EXPECT().Install().Return(nil)

				return groups
			},
			mockSvc: func(
				lcc *mocks.LimaCmdCreator,
				logger *mocks.Logger,
				lca *mocks.LimaConfigApplier,
				fs afero.Fs,
				dm *mocks.UserDataDiskManager,
				ctrl *gomock.Controller,
				finchDir string,
			) {
				data := "cpus: 2\nmemory: 6GiB"
				finchConfigPath := filepath.Join(finchDir, "finch.yaml")
				require.NoError(t, afero.WriteFile(fs, finchConfigPath, []byte(data), 0o600))

				data = `{"credsStore":"ecr-login"}`
				configJSONPath := filepath.Join(finchDir, "config.json")
				require.NoError(t, afero.WriteFile(fs, configJSONPath, []byte(data), 0o600))

				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Stopped"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Stopped")

				lca.EXPECT().ConfigureOverrideLimaYaml().Return(nil)

				dm.EXPECT().EnsureUserDataDisk().Return(nil)

				command := mocks.NewCommand(ctrl)
				command.EXPECT().CombinedOutput()
				lcc.EXPECT().CreateWithoutStdio("start", limaInstanceName).Return(command)

				logger.EXPECT().Info("Starting existing Finch virtual machine...")
				logger.EXPECT().Info("Finch virtual machine started successfully")
			},
			finchDir: "/.finch",
		},
		{
			name:    "running VM",
			wantErr: fmt.Errorf("the instance %q is already running", limaInstanceName),
			groups: func(_ *gomock.Controller) []*dependency.Group {
				return nil
			},
			mockSvc: func(
				lcc *mocks.LimaCmdCreator,
				logger *mocks.Logger,
				_ *mocks.LimaConfigApplier,
				fs afero.Fs,
				_ *mocks.UserDataDiskManager,
				ctrl *gomock.Controller,
				finchDir string,
			) {
				data := "cpus: 2\nmemory: 6GiB"
				finchConfigPath := filepath.Join(finchDir, "finch.yaml")
				require.NoError(t, afero.WriteFile(fs, finchConfigPath, []byte(data), 0o600))

				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
			},
			finchDir: "/.finch",
		},
		{
			name: "nonexistent VM",
			wantErr: fmt.Errorf("the instance %q does not exist, run `finch %s init` to create a new instance",
				limaInstanceName, virtualMachineRootCmd),
			groups: func(_ *gomock.Controller) []*dependency.Group {
				return nil
			},
			mockSvc: func(
				lcc *mocks.LimaCmdCreator,
				logger *mocks.Logger,
				_ *mocks.LimaConfigApplier,
				fs afero.Fs,
				_ *mocks.UserDataDiskManager,
				ctrl *gomock.Controller,
				finchDir string,
			) {
				data := "cpus: 2\nmemory: 6GiB"
				finchConfigPath := filepath.Join(finchDir, "finch.yaml")
				require.NoError(t, afero.WriteFile(fs, finchConfigPath, []byte(data), 0o600))

				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte(""), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "")
			},
			finchDir: "/.finch",
		},
		{
			name:    "unknown VM status",
			wantErr: errors.New("unrecognized system status"),
			groups: func(_ *gomock.Controller) []*dependency.Group {
				return nil
			},
			mockSvc: func(
				lcc *mocks.LimaCmdCreator,
				logger *mocks.Logger,
				_ *mocks.LimaConfigApplier,
				fs afero.Fs,
				_ *mocks.UserDataDiskManager,
				ctrl *gomock.Controller,
				finchDir string,
			) {
				data := "cpus: 2\nmemory: 6GiB"
				finchConfigPath := filepath.Join(finchDir, "finch.yaml")
				require.NoError(t, afero.WriteFile(fs, finchConfigPath, []byte(data), 0o600))

				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Broken"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Broken")
			},
			finchDir: "/.finch",
		},
		{
			name:    "status command returns an error",
			wantErr: errors.New("get status error"),
			groups: func(_ *gomock.Controller) []*dependency.Group {
				return nil
			},
			mockSvc: func(
				lcc *mocks.LimaCmdCreator,
				_ *mocks.Logger,
				_ *mocks.LimaConfigApplier,
				fs afero.Fs,
				_ *mocks.UserDataDiskManager,
				ctrl *gomock.Controller,
				finchDir string,
			) {
				data := "cpus: 2\nmemory: 6GiB"
				finchConfigPath := filepath.Join(finchDir, "finch.yaml")
				require.NoError(t, afero.WriteFile(fs, finchConfigPath, []byte(data), 0o600))

				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Broken"), errors.New("get status error"))
			},
			finchDir: "/.finch",
		},
		{
			// TODO: split this test case up:
			// should succeed even if some optional dependencies fail to be installed
			// return an error if Lima config fails to be applied
			name:    "should return error if LoadAndApplyLimaConfig fails",
			wantErr: errors.New("load config fails"),
			groups: func(_ *gomock.Controller) []*dependency.Group {
				return nil
			},
			mockSvc: func(
				lcc *mocks.LimaCmdCreator,
				logger *mocks.Logger,
				lca *mocks.LimaConfigApplier,
				fs afero.Fs,
				_ *mocks.UserDataDiskManager,
				ctrl *gomock.Controller,
				finchDir string,
			) {
				data := "cpus: 2\nmemory: 6GiB"
				finchConfigPath := filepath.Join(finchDir, "finch.yaml")
				require.NoError(t, afero.WriteFile(fs, finchConfigPath, []byte(data), 0o600))

				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Stopped"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Stopped")

				lca.EXPECT().ConfigureOverrideLimaYaml().Return(errors.New("load config fails"))
			},
			finchDir: "/.finch",
		},
		{
			// should succeed even if some optional dependencies fail to be installed
			// return an error if Lima config fails to be applied
			name:    "should print out error if InstallOptionalDeps fails",
			wantErr: nil,
			groups: func(ctrl *gomock.Controller) []*dependency.Group {
				dep := mocks.NewDependency(ctrl)
				deps := dependency.NewGroup([]dependency.Dependency{dep}, "", "mock_error_msg")
				groups := []*dependency.Group{deps}

				dep.EXPECT().Installed().Return(false)
				dep.EXPECT().RequiresRoot().Return(false)
				dep.EXPECT().Install().Return(errors.New("dependency error occurs"))

				return groups
			},
			mockSvc: func(
				lcc *mocks.LimaCmdCreator,
				logger *mocks.Logger,
				lca *mocks.LimaConfigApplier,
				fs afero.Fs,
				dm *mocks.UserDataDiskManager,
				ctrl *gomock.Controller,
				finchDir string,
			) {
				data := "cpus: 2\nmemory: 6GiB"
				finchConfigPath := filepath.Join(finchDir, "finch.yaml")
				require.NoError(t, afero.WriteFile(fs, finchConfigPath, []byte(data), 0o600))

				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Stopped"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Stopped")

				lca.EXPECT().ConfigureOverrideLimaYaml().Return(nil)

				dm.EXPECT().EnsureUserDataDisk().Return(nil)

				command := mocks.NewCommand(ctrl)
				command.EXPECT().CombinedOutput()
				lcc.EXPECT().CreateWithoutStdio("start", limaInstanceName).Return(command)

				logger.EXPECT().Info("Starting existing Finch virtual machine...")
				logger.EXPECT().Info("Finch virtual machine started successfully")

				logger.EXPECT().Errorf("Dependency error: %v",
					fmt.Errorf("failed to install dependencies: %w",
						errors.Join(fmt.Errorf("%s: %w", "mock_error_msg", errors.Join(errors.New("dependency error occurs")))),
					),
				)
			},
			finchDir: "/.finch",
		},
		{
			name:    "should print out error if instance fails to start",
			wantErr: errors.New("start command error"),
			groups: func(ctrl *gomock.Controller) []*dependency.Group {
				dep := mocks.NewDependency(ctrl)
				deps := dependency.NewGroup([]dependency.Dependency{dep}, "", "")
				groups := []*dependency.Group{deps}

				dep.EXPECT().Installed().Return(true)

				return groups
			},
			mockSvc: func(
				lcc *mocks.LimaCmdCreator,
				logger *mocks.Logger,
				lca *mocks.LimaConfigApplier,
				fs afero.Fs,
				dm *mocks.UserDataDiskManager,
				ctrl *gomock.Controller,
				finchDir string,
			) {
				data := "cpus: 2\nmemory: 6GiB"
				finchConfigPath := filepath.Join(finchDir, "finch.yaml")
				require.NoError(t, afero.WriteFile(fs, finchConfigPath, []byte(data), 0o600))

				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Stopped"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Stopped")

				lca.EXPECT().ConfigureOverrideLimaYaml().Return(nil)

				dm.EXPECT().EnsureUserDataDisk().Return(nil)

				logs := []byte("stdout + stderr")
				command := mocks.NewCommand(ctrl)
				command.EXPECT().CombinedOutput().Return(logs, errors.New("start command error"))
				lcc.EXPECT().CreateWithoutStdio("start", limaInstanceName).Return(command)

				logger.EXPECT().Info("Starting existing Finch virtual machine...")
				logger.EXPECT().SetFormatter(flog.TextWithoutTruncation)
				logger.EXPECT().Errorf("Finch virtual machine failed to start, debug logs:\n%s", logs)
				logger.EXPECT().SetFormatter(flog.Text)
			},
			finchDir: "/.finch",
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			logger := mocks.NewLogger(ctrl)
			lcc := mocks.NewLimaCmdCreator(ctrl)
			lca := mocks.NewLimaConfigApplier(ctrl)
			fs := afero.NewMemMapFs()
			dm := mocks.NewUserDataDiskManager(ctrl)

			groups := tc.groups(ctrl)
			tc.mockSvc(lcc, logger, lca, fs, dm, ctrl, tc.finchDir)

			err := newStartVMAction(lcc, logger, groups, lca, fs, dm, tc.finchDir).run()
			assert.Equal(t, err, tc.wantErr)
		})
	}
}
