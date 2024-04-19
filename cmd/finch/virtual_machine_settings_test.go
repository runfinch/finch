// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"bytes"
	"errors"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/spf13/afero"
	"github.com/spf13/cobra"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/mocks"
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
			*mocks.LimaConfigApplier,
			afero.Fs,
		)
	}{
		{
			name:    "should configure the instance for valid CPU and memory values",
			wantErr: nil,
			command: &cobra.Command{
				Use: "settings",
			},
			args: []string{
				"--cpus=1",
				"--memory=2GiB",
			},
			mockSvc: func(
				lca *mocks.LimaConfigApplier,
				fs afero.Fs,
			) {
				finchConfigPath := "/config.yaml"
				data := "cpus: 2\nmemory: 6GiB"
				require.NoError(t, afero.WriteFile(fs, finchConfigPath, []byte(data), 0o600))

				lca.EXPECT().GetFinchConfigPath().Return(finchConfigPath)
			},
		},
		{
			name:    "should configure the instance for valid CPU value",
			wantErr: nil,
			command: &cobra.Command{
				Use: "settings",
			},
			args: []string{
				"--cpus=1",
			},
			mockSvc: func(
				lca *mocks.LimaConfigApplier,
				fs afero.Fs,
			) {
				finchConfigPath := "/config.yaml"
				data := "cpus: 2\nmemory: 6GiB"
				require.NoError(t, afero.WriteFile(fs, finchConfigPath, []byte(data), 0o600))

				lca.EXPECT().GetFinchConfigPath().Return(finchConfigPath)
			},
		},
		{
			name:    "should configure the instance for valid memory value",
			wantErr: nil,
			command: &cobra.Command{
				Use: "settings",
			},
			args: []string{
				"--memory=2GiB",
			},
			mockSvc: func(
				lca *mocks.LimaConfigApplier,
				fs afero.Fs,
			) {
				finchConfigPath := "/config.yaml"
				data := "cpus: 2\nmemory: 6GiB"
				require.NoError(t, afero.WriteFile(fs, finchConfigPath, []byte(data), 0o600))

				lca.EXPECT().GetFinchConfigPath().Return(finchConfigPath)
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

			tc.mockSvc(lca, fs)

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
			*mocks.LimaConfigApplier,
			afero.Fs,
		)
		cpus   int
		memory string
	}{
		{
			name:             "should update vm settings",
			wantErr:          nil,
			wantStatusOutput: "Configurations have been successfully updated.\n",
			mockSvc: func(
				lca *mocks.LimaConfigApplier,
				fs afero.Fs,
			) {
				finchConfigPath := "/config.yaml"
				data := "cpus: 2\nmemory: 6GiB"
				require.NoError(t, afero.WriteFile(fs, finchConfigPath, []byte(data), 0o600))

				lca.EXPECT().GetFinchConfigPath().Return(finchConfigPath)
			},
			cpus:   1,
			memory: "2GiB",
		},
		{
			name:             "should return an error if the configuration of CPU or memory is invalid",
			wantErr:          errors.New("the number of CPUs or the amount of memory should be at least one valid value"),
			wantStatusOutput: "",
			mockSvc: func(
				lca *mocks.LimaConfigApplier,
				fs afero.Fs,
			) {
				finchConfigPath := "/config.yaml"
				data := "cpus: 2\nmemory: 6GiB"
				require.NoError(t, afero.WriteFile(fs, finchConfigPath, []byte(data), 0o600))

				lca.EXPECT().GetFinchConfigPath().Return(finchConfigPath)
			},
			cpus:   0,
			memory: "",
		},
		{
			name:             "should return an error if the configuration of CPU or memory is invalid",
			wantErr:          errors.New("the number of CPUs or the amount of memory should be at least one valid value"),
			wantStatusOutput: "",
			mockSvc: func(
				lca *mocks.LimaConfigApplier,
				fs afero.Fs,
			) {
				finchConfigPath := "/config.yaml"
				data := "cpus: 2\nmemory: 6GiB"
				require.NoError(t, afero.WriteFile(fs, finchConfigPath, []byte(data), 0o600))

				lca.EXPECT().GetFinchConfigPath().Return(finchConfigPath)
			},
			cpus:   2,
			memory: "6GiB",
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
			opts := config.VMConfigOpts{
				CPUs:   tc.cpus,
				Memory: tc.memory,
			}

			tc.mockSvc(lca, fs)

			err := newSettingsVMAction(logger, lca, fs, &stdout).run(opts)
			assert.Equal(t, err, tc.wantErr)
			assert.Equal(t, tc.wantStatusOutput, stdout.String())
		})
	}
}
