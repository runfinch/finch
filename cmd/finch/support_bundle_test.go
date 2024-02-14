// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"fmt"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/assert"

	"github.com/runfinch/finch/pkg/mocks"
)

func TestNewSupportBundleCommand(t *testing.T) {
	t.Parallel()

	cmd := newSupportBundleCommand(nil, nil, nil)
	assert.Equal(t, cmd.Name(), "support-bundle")
}

func TestNewSupportBundleGenerateCommand(t *testing.T) {
	t.Parallel()

	cmd := newSupportBundleGenerateCommand(nil, nil, nil)
	assert.Equal(t, cmd.Name(), "generate")
}

func TestGenerateSupportBundleAction_runAdapter(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		args    []string
		mockSvc func(*gomock.Controller, *mocks.Logger, *mocks.BundleBuilder, *mocks.LimaCmdCreator)
	}{
		{
			name: "no flags",
			args: []string{},
			mockSvc: func(
				ctrl *gomock.Controller,
				logger *mocks.Logger,
				builder *mocks.BundleBuilder,
				lcc *mocks.LimaCmdCreator,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf(gomock.Any(), gomock.Any())

				logger.EXPECT().Info(gomock.Any())
				builder.EXPECT().GenerateSupportBundle([]string{}, []string{}).Return("bundleName", nil)
				logger.EXPECT().Infof(gomock.Any(), gomock.Any())
				logger.EXPECT().Info(gomock.Any())
				logger.EXPECT().Info(gomock.Any())
				logger.EXPECT().Info(gomock.Any())
			},
		},
		{
			name: "one include flag",
			args: []string{
				"--include",
				"testfile",
			},
			mockSvc: func(
				ctrl *gomock.Controller,
				logger *mocks.Logger,
				builder *mocks.BundleBuilder,
				lcc *mocks.LimaCmdCreator,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf(gomock.Any(), gomock.Any())

				logger.EXPECT().Info(gomock.Any())
				builder.EXPECT().GenerateSupportBundle([]string{"testfile"}, []string{}).Return("bundleName", nil)
				logger.EXPECT().Infof(gomock.Any(), gomock.Any())
				logger.EXPECT().Info(gomock.Any())
				logger.EXPECT().Info(gomock.Any())
				logger.EXPECT().Info(gomock.Any())
			},
		},
		{
			name: "multiple include flags",
			args: []string{
				"--include",
				"testfile",
				"--include",
				"secondfile",
			},
			mockSvc: func(
				ctrl *gomock.Controller,
				logger *mocks.Logger,
				builder *mocks.BundleBuilder,
				lcc *mocks.LimaCmdCreator,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf(gomock.Any(), gomock.Any())

				logger.EXPECT().Info(gomock.Any())
				builder.EXPECT().GenerateSupportBundle([]string{"testfile", "secondfile"}, []string{}).Return("bundleName", nil)
				logger.EXPECT().Infof(gomock.Any(), gomock.Any())
				logger.EXPECT().Info(gomock.Any())
				logger.EXPECT().Info(gomock.Any())
				logger.EXPECT().Info(gomock.Any())
			},
		},
		{
			name: "one exclude flag",
			args: []string{
				"--exclude",
				"testfile",
			},
			mockSvc: func(
				ctrl *gomock.Controller,
				logger *mocks.Logger,
				builder *mocks.BundleBuilder,
				lcc *mocks.LimaCmdCreator,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf(gomock.Any(), gomock.Any())

				logger.EXPECT().Info(gomock.Any())
				builder.EXPECT().GenerateSupportBundle([]string{}, []string{"testfile"}).Return("bundleName", nil)
				logger.EXPECT().Infof(gomock.Any(), gomock.Any())
				logger.EXPECT().Info(gomock.Any())
				logger.EXPECT().Info(gomock.Any())
				logger.EXPECT().Info(gomock.Any())
			},
		},
		{
			name: "multiple exclude flags",
			args: []string{
				"--exclude",
				"testfile",
				"--exclude",
				"secondfile",
			},
			mockSvc: func(
				ctrl *gomock.Controller,
				logger *mocks.Logger,
				builder *mocks.BundleBuilder,
				lcc *mocks.LimaCmdCreator,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf(gomock.Any(), gomock.Any())

				logger.EXPECT().Info(gomock.Any())
				builder.EXPECT().GenerateSupportBundle([]string{}, []string{"testfile", "secondfile"}).Return("bundleName", nil)
				logger.EXPECT().Infof(gomock.Any(), gomock.Any())
				logger.EXPECT().Info(gomock.Any())
				logger.EXPECT().Info(gomock.Any())
				logger.EXPECT().Info(gomock.Any())
			},
		},
		{
			name: "combo of include and exclude flags",
			args: []string{
				"--include",
				"testfile",
				"--exclude",
				"secondfile",
			},
			mockSvc: func(
				ctrl *gomock.Controller,
				logger *mocks.Logger,
				builder *mocks.BundleBuilder,
				lcc *mocks.LimaCmdCreator,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf(gomock.Any(), gomock.Any())

				logger.EXPECT().Info(gomock.Any())
				builder.EXPECT().GenerateSupportBundle([]string{"testfile"}, []string{"secondfile"}).Return("bundleName", nil)
				logger.EXPECT().Infof(gomock.Any(), gomock.Any())
				logger.EXPECT().Info(gomock.Any())
				logger.EXPECT().Info(gomock.Any())
				logger.EXPECT().Info(gomock.Any())
			},
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			logger := mocks.NewLogger(ctrl)
			builder := mocks.NewBundleBuilder(ctrl)
			lcc := mocks.NewLimaCmdCreator(ctrl)
			tc.mockSvc(ctrl, logger, builder, lcc)

			cmd := newSupportBundleGenerateCommand(logger, builder, lcc)
			cmd.SetArgs(tc.args)
			assert.NoError(t, cmd.Execute())
		})
	}
}

func TestGenerateSupportBundleAction_run(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		wantErr error
		mockSvc func(*gomock.Controller, *mocks.Logger, *mocks.BundleBuilder, *mocks.LimaCmdCreator, []string, []string)
		include []string
		exclude []string
	}{
		{
			name:    "VM is running, no error",
			wantErr: nil,
			mockSvc: func(
				ctrl *gomock.Controller,
				logger *mocks.Logger,
				builder *mocks.BundleBuilder,
				lcc *mocks.LimaCmdCreator,
				include []string,
				exclude []string,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")

				logger.EXPECT().Info("Generating support bundle...")
				builder.EXPECT().GenerateSupportBundle(include, exclude).Return("bundleName", nil)
				logger.EXPECT().Infof("Bundle created: %s", "bundleName")
				logger.EXPECT().Info("Files posted on a Github issue can be read by anyone.")
				logger.EXPECT().Info("Please ensure there is no sensitive information in the bundle before uploading.")
				logger.EXPECT().Info("By default, this bundle contains basic logs and configs for Finch.")
			},
			include: []string{},
			exclude: []string{},
		},
		{
			name:    "VM is stopped, no error",
			wantErr: nil,
			mockSvc: func(
				ctrl *gomock.Controller,
				logger *mocks.Logger,
				builder *mocks.BundleBuilder,
				lcc *mocks.LimaCmdCreator,
				include []string,
				exclude []string,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Stopped"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Stopped")

				logger.EXPECT().Info("Generating support bundle...")
				builder.EXPECT().GenerateSupportBundle(include, exclude).Return("bundleName", nil)
				logger.EXPECT().Infof("Bundle created: %s", "bundleName")
				logger.EXPECT().Info("Files posted on a Github issue can be read by anyone.")
				logger.EXPECT().Info("Please ensure there is no sensitive information in the bundle before uploading.")
				logger.EXPECT().Info("By default, this bundle contains basic logs and configs for Finch.")
			},
			include: []string{},
			exclude: []string{},
		},
		{
			name: "VM is nonexistent",
			wantErr: fmt.Errorf("cannot create support bundle for nonexistent VM, run `finch %s init` to create a new instance",
				virtualMachineRootCmd),
			mockSvc: func(
				ctrl *gomock.Controller,
				logger *mocks.Logger,
				_ *mocks.BundleBuilder,
				lcc *mocks.LimaCmdCreator,
				_ []string,
				_ []string,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte(""), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "")
			},
			include: []string{},
			exclude: []string{},
		},
		{
			name:    "VM is running, error generating bundle",
			wantErr: fmt.Errorf("foo"),
			mockSvc: func(
				ctrl *gomock.Controller,
				logger *mocks.Logger,
				builder *mocks.BundleBuilder,
				lcc *mocks.LimaCmdCreator,
				include []string,
				exclude []string,
			) {
				getVMStatusC := mocks.NewCommand(ctrl)
				lcc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
				getVMStatusC.EXPECT().Output().Return([]byte("Running"), nil)
				logger.EXPECT().Debugf("Status of virtual machine: %s", "Running")

				logger.EXPECT().Info("Generating support bundle...")
				builder.EXPECT().GenerateSupportBundle(include, exclude).Return("", fmt.Errorf("foo"))
			},
			include: []string{},
			exclude: []string{},
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			logger := mocks.NewLogger(ctrl)
			builder := mocks.NewBundleBuilder(ctrl)
			lcc := mocks.NewLimaCmdCreator(ctrl)

			tc.mockSvc(ctrl, logger, builder, lcc, tc.include, tc.exclude)
			err := newGenerateSupportBundleAction(logger, builder, lcc).run(tc.include, tc.exclude)
			assert.Equal(t, tc.wantErr, err)
		})
	}
}
