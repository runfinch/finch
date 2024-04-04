// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"bytes"
	"errors"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/runfinch/finch/pkg/mocks"
	"github.com/spf13/afero"
	"github.com/spf13/cobra"
	"github.com/stretchr/testify/assert"
)

func TestNewSettingsMCommand(t *testing.T) {
	t.Parallel()

	cmd := newSettingsVMCommand(nil, nil, nil, nil)
	assert.Equal(t, cmd.Name(), "settings")
}

func TestSettingsVMAction_runAdapter(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		wantErr error
		command *cobra.Command
		args    []string
		mockSvc func(
			*mocks.Logger,
			*mocks.LimaConfigApplier,
			afero.Fs,
			*gomock.Controller,
		)
	}{
		{
			name:    "should configure the instance for invalid values",
			wantErr: errors.New("specified number of CPUs or specified amount of memory should be valid values"),
			command: &cobra.Command{
				Use: "settings",
			},
			args: []string{},
			mockSvc: func(
				logger *mocks.Logger,
				lca *mocks.LimaConfigApplier,
				fs afero.Fs,
				ctrl *gomock.Controller,
			) {
				lca.EXPECT().ModifyFinchConfig(fs, logger, 0, "").Return(false, errors.New("specified number of CPUs or specified amount of memory should be valid values"))
			},
		},
		{
			name:    "should configure the instance for valid CPU and memory values",
			wantErr: nil,
			command: &cobra.Command{
				Use: "settings",
			},
			args: []string{
				"--cpus=6",
				"--memory=8GiB",
			},
			mockSvc: func(
				logger *mocks.Logger,
				lca *mocks.LimaConfigApplier,
				fs afero.Fs,
				ctrl *gomock.Controller,
			) {
				lca.EXPECT().ModifyFinchConfig(fs, logger, 6, "8GiB").Return(true, nil)
			},
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			logger := mocks.NewLogger(ctrl)
			lca := mocks.NewLimaConfigApplier(ctrl)
			fs := afero.NewMemMapFs()
			stdout := bytes.Buffer{}

			tc.mockSvc(logger, lca, fs, ctrl)

			cmd := newSettingsVMCommand(logger, lca, fs, &stdout)
			cmd.SetArgs(tc.args)
			err := cmd.Execute()
			assert.Equal(t, err, tc.wantErr)
		})
	}
}

func TestSettingsVMAction_run(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name             string
		wantErr          error
		wantStatusOutput string
		mockSvc          func(
			*mocks.Logger,
			*mocks.LimaConfigApplier,
			afero.Fs,
			*gomock.Controller,
			int,
			string,
		)
		cpus   int
		memory string
	}{
		{
			name:             "should update vm settings",
			wantErr:          nil,
			wantStatusOutput: "Configurations have been successfully updated.\n",
			mockSvc: func(
				logger *mocks.Logger,
				lca *mocks.LimaConfigApplier,
				fs afero.Fs,
				ctrl *gomock.Controller,
				cpus int,
				memory string,
			) {
				lca.EXPECT().ModifyFinchConfig(fs, logger, cpus, memory).Return(true, nil)
			},
			cpus:   4,
			memory: "6GiB",
		},
		{
			name:             "should not update vm settings if the configuration is not updated",
			wantErr:          nil,
			wantStatusOutput: "Input values were unchanged from the configuration file, so changes were not applied.\n",
			mockSvc: func(
				logger *mocks.Logger,
				lca *mocks.LimaConfigApplier,
				fs afero.Fs,
				ctrl *gomock.Controller,
				cpus int,
				memory string,
			) {
				lca.EXPECT().ModifyFinchConfig(fs, logger, cpus, memory).Return(false, nil)
			},
			cpus:   4,
			memory: "6GiB",
		},
		{
			name:             "should return error if the configuration of CPU or memory is invalid",
			wantErr:          errors.New("specified number of CPUs or specified amount of memory should be valid values"),
			wantStatusOutput: "",
			mockSvc: func(
				logger *mocks.Logger,
				lca *mocks.LimaConfigApplier,
				fs afero.Fs,
				ctrl *gomock.Controller,
				cpus int,
				memory string,
			) {
				lca.EXPECT().ModifyFinchConfig(fs, logger, cpus, memory).Return(false, errors.New("specified number of CPUs or specified amount of memory should be valid values"))
			},
			cpus:   0,
			memory: "",
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			logger := mocks.NewLogger(ctrl)
			lca := mocks.NewLimaConfigApplier(ctrl)
			fs := afero.NewMemMapFs()
			stdout := bytes.Buffer{}

			tc.mockSvc(logger, lca, fs, ctrl, tc.cpus, tc.memory)

			err := newSettingsVMAction(logger, lca, fs, &stdout).run(tc.cpus, tc.memory)
			assert.Equal(t, err, tc.wantErr)
			assert.Equal(t, tc.wantStatusOutput, stdout.String())
		})
	}
}
