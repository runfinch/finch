// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"bytes"
	"errors"
	"testing"

	"github.com/runfinch/finch/pkg/mocks"

	"github.com/spf13/cobra"
	"github.com/stretchr/testify/assert"
	"go.uber.org/mock/gomock"
)

func TestNewUpdateCommand(t *testing.T) {
	t.Parallel()

	ctrl := gomock.NewController(t)
	logger := mocks.NewLogger(ctrl)
	var stdOut bytes.Buffer
	cmd := newUpdateCommand(logger, &stdOut)

	assert.Equal(t, "update-finch", cmd.Name())
	assert.Equal(t, "Check for Finch updates to install", cmd.Short)
	assert.Equal(t, "Check for available updates to Finch. Use --install to download and install updates.", cmd.Long)
	assert.NotNil(t, cmd.RunE)

	// Check that the install flag exists and is configured correctly
	flag := cmd.Flags().Lookup("install")
	assert.NotNil(t, flag)
	assert.Equal(t, "i", flag.Shorthand)
	assert.Equal(t, "false", flag.DefValue)
	assert.Equal(t, "Download and install the update if available", flag.Usage)
}

func TestNewUpdateAction(t *testing.T) {
	t.Parallel()

	ctrl := gomock.NewController(t)
	logger := mocks.NewLogger(ctrl)
	var stdOut bytes.Buffer

	action := newUpdateAction(logger, &stdOut)
	assert.NotNil(t, action)
	assert.Equal(t, logger, action.logger)
	assert.Equal(t, &stdOut, action.stdOut)
}

func TestUpdateAction_runAdapter(t *testing.T) {
	t.Parallel()
	originalFunctions := updatefinchFunctions
	defer func() { updatefinchFunctions = originalFunctions }()

	testCases := []struct {
		name    string
		wantErr error
		cmd     func(t *testing.T) *cobra.Command
		args    []string
		mockSvc func(*mocks.Logger, *gomock.Controller)
	}{
		{
			name:    "success with default behavior (check only)",
			wantErr: nil,
			cmd: func(_ *testing.T) *cobra.Command {
				c := &cobra.Command{
					Use: "update-finch",
				}
				c.Flags().BoolP("install", "i", false, "Download and install the update if available")
				return c
			},
			args: []string{},
			mockSvc: func(logger *mocks.Logger, _ *gomock.Controller) {
				logger.EXPECT().Info("Checking for updates...").Times(1)
				logger.EXPECT().Infof(gomock.Any(), gomock.Any(), gomock.Any()).Times(1)
				logger.EXPECT().Info("Run 'finch update-finch --install' to install the latest version.").Times(1)
				updatefinchFunctions.CheckForUpdate = func() (bool, string, error) {
					return true, "1.1.0", nil
				}
				updatefinchFunctions.GetFinchVersion = func() string {
					return "1.0.0"
				}
			},
		},
		{
			name:    "error getting install flag",
			wantErr: errors.New("flag accessed but not defined: install"),
			cmd: func(_ *testing.T) *cobra.Command {
				return &cobra.Command{
					Use: "update-finch",
				}
			},
			args: []string{},
			mockSvc: func(_ *mocks.Logger, _ *gomock.Controller) {
			},
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()
			ctrl := gomock.NewController(t)
			logger := mocks.NewLogger(ctrl)
			var stdOut bytes.Buffer
			tc.mockSvc(logger, ctrl)

			err := newUpdateAction(logger, &stdOut).runAdapter(tc.cmd(t), tc.args)
			if tc.wantErr != nil {
				assert.Equal(t, tc.wantErr.Error(), err.Error())
			} else {
				assert.Equal(t, tc.wantErr, err)
			}
		})
	}
}

//nolint:paralleltest // This function manipulates variables to facilitate mocking.
func TestUpdateAction_run(t *testing.T) {
	t.Parallel()

	originalFunctions := updatefinchFunctions
	defer func() { updatefinchFunctions = originalFunctions }()

	testCases := []struct {
		name      string
		wantErr   error
		checkOnly bool
		mockSvc   func(*mocks.Logger, *gomock.Controller)
	}{
		{
			name:      "no update available",
			wantErr:   nil,
			checkOnly: true,
			mockSvc: func(logger *mocks.Logger, _ *gomock.Controller) {
				logger.EXPECT().Info("Checking for updates...").Times(1)
				logger.EXPECT().Info("Finch is already up to date.").Times(1)
				updatefinchFunctions.CheckForUpdate = func() (bool, string, error) {
					return false, "1.0.0", nil
				}
				updatefinchFunctions.GetFinchVersion = func() string {
					return "1.0.0"
				}
			},
		},
		{
			name:      "update available with default behavior (check only)",
			wantErr:   nil,
			checkOnly: true,
			mockSvc: func(logger *mocks.Logger, _ *gomock.Controller) {
				logger.EXPECT().Info("Checking for updates...").Times(1)
				logger.EXPECT().Infof(gomock.Any(), gomock.Any(), gomock.Any()).Times(1)
				logger.EXPECT().Info("Run 'finch update-finch --install' to install the latest version.").Times(1)
				updatefinchFunctions.CheckForUpdate = func() (bool, string, error) {
					return true, "1.1.0", nil
				}
				updatefinchFunctions.GetFinchVersion = func() string {
					return "1.0.0"
				}
			},
		},
		{
			name:      "update available with install flag",
			wantErr:   nil,
			checkOnly: false,
			mockSvc: func(logger *mocks.Logger, _ *gomock.Controller) {
				logger.EXPECT().Info("Checking for updates...").Times(1)
				logger.EXPECT().Infof(gomock.Any(), gomock.Any(), gomock.Any()).Times(1)
				logger.EXPECT().Info("Downloading and installing update...").Times(1)
				logger.EXPECT().Infof(gomock.Any(), gomock.Any()).Times(1)
				updatefinchFunctions.CheckForUpdate = func() (bool, string, error) {
					return true, "1.1.0", nil
				}
				updatefinchFunctions.GetFinchVersion = func() string {
					return "1.0.0"
				}
				updatefinchFunctions.DownloadAndInstallUpdate = func(_ string) error {
					return nil
				}
			},
		},
		{
			name:      "error checking for update",
			wantErr:   errors.New("failed to check for updates: network error"),
			checkOnly: true,
			mockSvc: func(logger *mocks.Logger, _ *gomock.Controller) {
				logger.EXPECT().Info("Checking for updates...").Times(1)
				updatefinchFunctions.CheckForUpdate = func() (bool, string, error) {
					return false, "", errors.New("network error")
				}
			},
		},
		{
			name:      "error installing update",
			wantErr:   errors.New("installation error"),
			checkOnly: false,
			mockSvc: func(logger *mocks.Logger, _ *gomock.Controller) {
				logger.EXPECT().Info("Checking for updates...").Times(1)
				logger.EXPECT().Infof(gomock.Any(), gomock.Any(), gomock.Any()).Times(1)
				logger.EXPECT().Info("Downloading and installing update...").Times(1)
				updatefinchFunctions.CheckForUpdate = func() (bool, string, error) {
					return true, "1.1.0", nil
				}
				updatefinchFunctions.GetFinchVersion = func() string {
					return "1.0.0"
				}
				updatefinchFunctions.DownloadAndInstallUpdate = func(_ string) error {
					return errors.New("installation error")
				}
			},
		},
		{
			name:      "update available with modified build",
			wantErr:   nil,
			checkOnly: true,
			mockSvc: func(logger *mocks.Logger, _ *gomock.Controller) {
				logger.EXPECT().Info("Checking for updates...").Times(1)
				logger.EXPECT().Warnf("User is on a modified build of Finch (version: %s)", "1.0.0.modified").Times(1)
				logger.EXPECT().Infof(gomock.Any(), gomock.Any(), gomock.Any()).Times(1)
				logger.EXPECT().Info("Run 'finch update-finch --install' to install the latest version.").Times(1)
				updatefinchFunctions.CheckForUpdate = func() (bool, string, error) {
					return true, "1.1.0", nil
				}
				updatefinchFunctions.GetFinchVersion = func() string {
					return "1.0.0.modified"
				}
			},
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			ctrl := gomock.NewController(t)
			logger := mocks.NewLogger(ctrl)
			var stdOut bytes.Buffer
			tc.mockSvc(logger, ctrl)

			err := newUpdateAction(logger, &stdOut).run(tc.checkOnly)
			if tc.wantErr != nil {
				assert.Equal(t, tc.wantErr.Error(), err.Error())
			} else {
				assert.Equal(t, tc.wantErr, err)
			}
		})
	}
}
