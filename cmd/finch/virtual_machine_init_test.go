// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package main

import (
	"errors"
	"fmt"
	"runtime"
	"testing"

	"github.com/runfinch/finch/pkg/dependency"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/mocks"

	"github.com/golang/mock/gomock"
	"github.com/spf13/cobra"
	"github.com/stretchr/testify/assert"
)

const mockBaseYamlFilePath = "/os/os.yaml"

func TestNewInitVMCommand(t *testing.T) {
	t.Parallel()

	cmd := newInitVMCommand(nil, nil, nil, nil, nil, "", nil, "", nil)
	assert.Equal(t, cmd.Name(), "init")
}

func TestInitVMAction_runAdapter(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		command *cobra.Command
		args    []string
		groups  func(*gomock.Controller) []*dependency.Group
		mockSvc func(
			*mocks.NerdctlCmdCreator,
			*mocks.Logger,
			*mocks.LimaConfigApplier,
			*mocks.UserDataDiskManager,
			*gomock.Controller,
		)
	}{
		{
			name: "should init instance with correct BaseYamlFilePath",
			command: &cobra.Command{
				Use: "init",
			},
			args: []string{},
			groups: func(ctrl *gomock.Controller) []*dependency.Group {
				dep := mocks.NewDependency(ctrl)
				deps := dependency.NewGroup([]dependency.Dependency{dep}, "", "")
				groups := []*dependency.Group{deps}

				dep.EXPECT().Installed().Return(false)
				dep.EXPECT().Install().Return(nil)
				dep.EXPECT().RequiresRoot().Return(false)

				return groups
			},
			mockSvc: func(
				ncc *mocks.NerdctlCmdCreator,
				logger *mocks.Logger,
				lca *mocks.LimaConfigApplier,
				dm *mocks.UserDataDiskManager,
				ctrl *gomock.Controller,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte(""), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "")

				command := mocks.NewCommand(ctrl)
				lca.EXPECT().ConfigureDefaultLimaYaml().Return(nil)
				lca.EXPECT().ConfigureOverrideLimaYaml().Return(nil)
				dm.EXPECT().DetachUserDataDisk().Return(nil)
				dm.EXPECT().EnsureUserDataDisk().Return(nil)
				ncc.EXPECT().CreateWithoutStdio("start", fmt.Sprintf("--name=%s", limaInstanceName),
					mockBaseYamlFilePath, "--tty=false").Return(command)
				command.EXPECT().CombinedOutput()

				logger.EXPECT().Info("Initializing and starting Finch virtual machine...")
				if runtime.GOOS == "windows" {
					logger.EXPECT().Warnln("Finch on Windows uses WSL, which mounts the C Drive in read-write mode by default. " +
						"To run finch with more restricted access, follow " +
						"https://runfinch.com/docs/managing-finch/windows/wsl-configuration/")
				}
				logger.EXPECT().Info("Finch virtual machine started successfully")
			},
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			logger := mocks.NewLogger(ctrl)
			ncc := mocks.NewNerdctlCmdCreator(ctrl)
			lca := mocks.NewLimaConfigApplier(ctrl)
			dm := mocks.NewUserDataDiskManager(ctrl)

			groups := tc.groups(ctrl)
			tc.mockSvc(ncc, logger, lca, dm, ctrl)

			assert.NoError(t, newInitVMAction(ncc, logger, groups, lca, mockBaseYamlFilePath, dm).runAdapter(tc.command, tc.args))
		})
	}
}

func TestInitVMAction_run(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		wantErr error
		groups  func(*gomock.Controller) []*dependency.Group
		mockSvc func(
			*mocks.NerdctlCmdCreator,
			*mocks.Logger,
			*mocks.LimaConfigApplier,
			*mocks.UserDataDiskManager,
			*gomock.Controller,
		)
	}{
		{
			name:    "should init instance with correct BaseYamlFilePath",
			wantErr: nil,
			groups: func(_ *gomock.Controller) []*dependency.Group {
				return nil
			},
			mockSvc: func(
				ncc *mocks.NerdctlCmdCreator,
				logger *mocks.Logger,
				lca *mocks.LimaConfigApplier,
				dm *mocks.UserDataDiskManager,
				ctrl *gomock.Controller,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte(""), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "")

				lca.EXPECT().ConfigureDefaultLimaYaml().Return(nil)
				lca.EXPECT().ConfigureOverrideLimaYaml().Return(nil)
				dm.EXPECT().DetachUserDataDisk().Return(nil)
				dm.EXPECT().EnsureUserDataDisk().Return(nil)

				command := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("start", fmt.Sprintf("--name=%s", limaInstanceName),
					mockBaseYamlFilePath, "--tty=false").Return(command)
				command.EXPECT().CombinedOutput()

				logger.EXPECT().Info("Initializing and starting Finch virtual machine...")
				if runtime.GOOS == "windows" {
					logger.EXPECT().Warnln("Finch on Windows uses WSL, which mounts the C Drive in read-write mode by default. " +
						"To run finch with more restricted access, follow " +
						"https://runfinch.com/docs/managing-finch/windows/wsl-configuration/")
				}
				logger.EXPECT().Info("Finch virtual machine started successfully")
			},
		},
		{
			name:    "running VM",
			wantErr: fmt.Errorf("the instance %q is already running", limaInstanceName),
			groups: func(_ *gomock.Controller) []*dependency.Group {
				return nil
			},
			mockSvc: func(
				ncc *mocks.NerdctlCmdCreator,
				logger *mocks.Logger,
				_ *mocks.LimaConfigApplier,
				_ *mocks.UserDataDiskManager,
				ctrl *gomock.Controller,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")
			},
		},
		{
			name: "stopped VM",
			wantErr: fmt.Errorf(
				"the instance %q already exists but is stopped, run `finch %s start` to start the existing instance",
				limaInstanceName, virtualMachineRootCmd),
			groups: func(_ *gomock.Controller) []*dependency.Group {
				return nil
			},
			mockSvc: func(
				ncc *mocks.NerdctlCmdCreator,
				logger *mocks.Logger,
				_ *mocks.LimaConfigApplier,
				_ *mocks.UserDataDiskManager,
				ctrl *gomock.Controller,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Stopped"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Stopped")
			},
		},
		{
			name:    "unknown VM status",
			wantErr: errors.New("unrecognized system status"),
			groups: func(_ *gomock.Controller) []*dependency.Group {
				return nil
			},
			mockSvc: func(
				ncc *mocks.NerdctlCmdCreator,
				logger *mocks.Logger,
				_ *mocks.LimaConfigApplier,
				_ *mocks.UserDataDiskManager,
				ctrl *gomock.Controller,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Broken"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Broken")
			},
		},
		{
			name:    "status command returns an error",
			wantErr: errors.New("get status error"),
			groups: func(_ *gomock.Controller) []*dependency.Group {
				return nil
			},
			mockSvc: func(
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.Logger,
				_ *mocks.LimaConfigApplier,
				_ *mocks.UserDataDiskManager,
				ctrl *gomock.Controller,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Broken"), errors.New("get status error"))
			},
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
				ncc *mocks.NerdctlCmdCreator,
				logger *mocks.Logger,
				lca *mocks.LimaConfigApplier,
				dm *mocks.UserDataDiskManager,
				ctrl *gomock.Controller,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte(""), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "")

				lca.EXPECT().ConfigureDefaultLimaYaml().Return(nil)
				lca.EXPECT().ConfigureOverrideLimaYaml().Return(nil)

				logger.EXPECT().Errorf("Dependency error: %v",
					fmt.Errorf("failed to install dependencies: %w",
						errors.Join(fmt.Errorf("%s: %w", "mock_error_msg", errors.Join(errors.New("dependency error occurs")))),
					),
				)
				dm.EXPECT().DetachUserDataDisk().Return(nil)
				dm.EXPECT().EnsureUserDataDisk().Return(nil)

				command := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("start", fmt.Sprintf("--name=%s", limaInstanceName),
					mockBaseYamlFilePath, "--tty=false").Return(command)
				command.EXPECT().CombinedOutput()

				logger.EXPECT().Info("Initializing and starting Finch virtual machine...")
				if runtime.GOOS == "windows" {
					logger.EXPECT().Warnln("Finch on Windows uses WSL, which mounts the C Drive in read-write mode by default. " +
						"To run finch with more restricted access, follow " +
						"https://runfinch.com/docs/managing-finch/windows/wsl-configuration/")
				}
				logger.EXPECT().Info("Finch virtual machine started successfully")
			},
		},
		{
			// should succeed even if some optional dependencies fail to be installed
			// return an error if Lima config fails to be applied
			name:    "return error if LoadAndApplyLimaConfig fails",
			wantErr: errors.New("load config fails"),
			groups: func(_ *gomock.Controller) []*dependency.Group {
				return nil
			},
			mockSvc: func(
				ncc *mocks.NerdctlCmdCreator,
				logger *mocks.Logger,
				lca *mocks.LimaConfigApplier,
				_ *mocks.UserDataDiskManager,
				ctrl *gomock.Controller,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte(""), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "")

				lca.EXPECT().ConfigureDefaultLimaYaml().Return(errors.New("load config fails"))
			},
		},

		{
			name:    "should print error if instance fails to initialize",
			wantErr: errors.New("failed to init instance"),
			groups: func(_ *gomock.Controller) []*dependency.Group {
				return nil
			},
			mockSvc: func(
				ncc *mocks.NerdctlCmdCreator,
				logger *mocks.Logger,
				lca *mocks.LimaConfigApplier,
				dm *mocks.UserDataDiskManager,
				ctrl *gomock.Controller,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte(""), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "")

				lca.EXPECT().ConfigureDefaultLimaYaml().Return(nil)
				lca.EXPECT().ConfigureOverrideLimaYaml().Return(nil)
				dm.EXPECT().DetachUserDataDisk().Return(nil)
				dm.EXPECT().EnsureUserDataDisk().Return(nil)

				logs := []byte("stdout + stderr")
				command := mocks.NewCommand(ctrl)
				command.EXPECT().CombinedOutput().Return(logs, errors.New("failed to init instance"))
				ncc.EXPECT().CreateWithoutStdio("start", fmt.Sprintf("--name=%s", limaInstanceName),
					mockBaseYamlFilePath, "--tty=false").Return(command)

				logger.EXPECT().Info("Initializing and starting Finch virtual machine...")
				logger.EXPECT().SetFormatter(flog.TextWithoutTruncation)
				logger.EXPECT().Errorf("Finch virtual machine failed to start, debug logs:\n%s", logs)
				logger.EXPECT().SetFormatter(flog.Text)
				dm.EXPECT().DetachUserDataDisk().Return(nil)
			},
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			logger := mocks.NewLogger(ctrl)
			ncc := mocks.NewNerdctlCmdCreator(ctrl)
			lca := mocks.NewLimaConfigApplier(ctrl)
			dm := mocks.NewUserDataDiskManager(ctrl)

			groups := tc.groups(ctrl)
			tc.mockSvc(ncc, logger, lca, dm, ctrl)

			err := newInitVMAction(ncc, logger, groups, lca, mockBaseYamlFilePath, dm).run()
			assert.Equal(t, err, tc.wantErr)
		})
	}
}
