// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"errors"
	"testing"

	"github.com/runfinch/finch/pkg/mocks"

	"github.com/spf13/cobra"
	"github.com/stretchr/testify/assert"
	"go.uber.org/mock/gomock"
)

func TestNewCheckUpdateCommand(t *testing.T) {
	t.Parallel()

	ctrl := gomock.NewController(t)
	logger := mocks.NewLogger(ctrl)
	cmd := newCheckUpdateCommand(logger)

	assert.Equal(t, "check-update", cmd.Name())
	assert.Equal(t, "Check for Finch updates", cmd.Short)
	assert.NotNil(t, cmd.RunE)
}

func TestCheckUpdateAction(t *testing.T) {
	t.Parallel()

	ctrl := gomock.NewController(t)
	logger := mocks.NewLogger(ctrl)

	action := newCheckUpdateAction(logger, defaultFuncs)
	assert.NotNil(t, action)
	assert.Equal(t, logger, action.logger)
}

func TestCheckUpdateAction_runAdapter(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		wantErr error
		cmd     func(t *testing.T) *cobra.Command
		args    []string
		mockSvc func(*mocks.Logger, *gomock.Controller)
		funcs   updateInfoFuncs
	}{
		{
			name:    "update available",
			wantErr: nil,
			cmd: func(_ *testing.T) *cobra.Command {
				c := &cobra.Command{
					Use: "check-update",
				}
				return c
			},
			args: []string{},
			mockSvc: func(logger *mocks.Logger, _ *gomock.Controller) {
				logger.EXPECT().Info("Checking for updates...").Times(1)
				logger.EXPECT().Infof(gomock.Any(), gomock.Any(), gomock.Any()).Times(1)
				logger.EXPECT().Infof(gomock.Any(), gomock.Any()).Times(1)
			},
			funcs: updateInfoFuncs{
				checkForUpdate: func() (bool, string, error) {
					return true, "1.1.0", nil
				},
				getFinchVersion: func() string {
					return "1.0.0"
				},
			},
		},
		{
			name:    "update not available",
			wantErr: nil,
			cmd: func(_ *testing.T) *cobra.Command {
				c := &cobra.Command{
					Use: "check-update",
				}
				return c
			},
			args: []string{},
			mockSvc: func(logger *mocks.Logger, _ *gomock.Controller) {
				logger.EXPECT().Info("Checking for updates...").Times(1)
				logger.EXPECT().Info("Finch is already up to date.").Times(1)
			},
			funcs: updateInfoFuncs{
				checkForUpdate: func() (bool, string, error) {
					return false, "1.0.0", nil
				},
				getFinchVersion: func() string {
					return "1.0.0"
				},
			},
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()
			ctrl := gomock.NewController(t)
			logger := mocks.NewLogger(ctrl)
			tc.mockSvc(logger, ctrl)

			err := newCheckUpdateAction(logger, tc.funcs).runAdapter(tc.cmd(t), tc.args)
			if tc.wantErr != nil {
				assert.Equal(t, tc.wantErr.Error(), err.Error())
			} else {
				assert.Equal(t, tc.wantErr, err)
			}
		})
	}
}

func TestCheckUpdateAction_run(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name      string
		wantErr   error
		checkOnly bool
		mockSvc   func(*mocks.Logger, *gomock.Controller)
		funcs     updateInfoFuncs
	}{
		{
			name:      "no update available",
			wantErr:   nil,
			checkOnly: true,
			mockSvc: func(logger *mocks.Logger, _ *gomock.Controller) {
				logger.EXPECT().Info("Checking for updates...").Times(1)
				logger.EXPECT().Info("Finch is already up to date.").Times(1)
			},
			funcs: updateInfoFuncs{
				checkForUpdate: func() (bool, string, error) {
					return false, "1.0.0", nil
				},
				getFinchVersion: func() string {
					return "1.0.0"
				},
			},
		},
		{
			name:      "update available",
			wantErr:   nil,
			checkOnly: true,
			mockSvc: func(logger *mocks.Logger, _ *gomock.Controller) {
				logger.EXPECT().Info("Checking for updates...").Times(1)
				logger.EXPECT().Infof(gomock.Any(), gomock.Any(), gomock.Any()).Times(1)
				logger.EXPECT().Infof(gomock.Any(), gomock.Any()).Times(1)
			},
			funcs: updateInfoFuncs{
				checkForUpdate: func() (bool, string, error) {
					return true, "1.1.0", nil
				},
				getFinchVersion: func() string {
					return "1.0.0"
				},
			},
		},
		{
			name:      "error checking for update",
			wantErr:   errors.New("failed to check for updates: network error"),
			checkOnly: true,
			mockSvc: func(logger *mocks.Logger, _ *gomock.Controller) {
				logger.EXPECT().Info("Checking for updates...").Times(1)
			},
			funcs: updateInfoFuncs{
				checkForUpdate: func() (bool, string, error) {
					return false, "", errors.New("network error")
				},
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
				logger.EXPECT().Infof(gomock.Any(), gomock.Any()).Times(1)
			},
			funcs: updateInfoFuncs{
				checkForUpdate: func() (bool, string, error) {
					return true, "1.1.0", nil
				},
				getFinchVersion: func() string {
					return "1.0.0.modified"
				},
			},
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()
			ctrl := gomock.NewController(t)
			logger := mocks.NewLogger(ctrl)
			tc.mockSvc(logger, ctrl)

			err := newCheckUpdateAction(logger, tc.funcs).run()
			if tc.wantErr != nil {
				assert.Equal(t, tc.wantErr.Error(), err.Error())
			} else {
				assert.Equal(t, tc.wantErr, err)
			}
		})
	}
}
