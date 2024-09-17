// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build linux

package main

import (
	"fmt"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/spf13/afero"
	"github.com/spf13/cobra"
	"github.com/stretchr/testify/assert"

	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/mocks"
)

func TestNerdctlCommand_runAdaptor(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		cmd     *cobra.Command
		args    []string
		mockSvc func(*mocks.NerdctlCmdCreator, *mocks.Logger, *gomock.Controller, *mocks.NerdctlCommandSystemDeps)
	}{
		{
			name: "happy path",
			cmd: &cobra.Command{
				Use: "info",
			},
			args: []string{},
			mockSvc: func(ncc *mocks.NerdctlCmdCreator, _ *mocks.Logger, ctrl *gomock.Controller, _ *mocks.NerdctlCommandSystemDeps) {
				c := mocks.NewCommand(ctrl)
				ncc.EXPECT().Create("info").Return(c)
				c.EXPECT().Run()
			},
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			ncc := mocks.NewNerdctlCmdCreator(ctrl)
			ecc := mocks.NewCommandCreator(ctrl)
			ncsd := mocks.NewNerdctlCommandSystemDeps(ctrl)
			logger := mocks.NewLogger(ctrl)
			tc.mockSvc(ncc, logger, ctrl, ncsd)

			assert.NoError(t, newNerdctlCommand(ncc, ecc, ncsd, logger, nil, &config.Finch{}).runAdapter(tc.cmd, tc.args))
		})
	}
}

func TestNerdctlCommand_run(t *testing.T) {
	t.Parallel()
	testCases := []struct {
		name    string
		cmdName string
		fc      *config.Finch
		args    []string
		wantErr error
		mockSvc func(
			t *testing.T,
			ncc *mocks.NerdctlCmdCreator,
			ecc *mocks.CommandCreator,
			ncsd *mocks.NerdctlCommandSystemDeps,
			logger *mocks.Logger,
			ctrl *gomock.Controller,
			fs afero.Fs,
		)
	}{
		{
			name:    "happy path",
			cmdName: "build",
			fc:      &config.Finch{},
			args:    []string{"-t", "demo", "."},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				c := mocks.NewCommand(ctrl)
				ncc.EXPECT().Create("build", "-t", "demo", ".").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with --debug flag",
			cmdName: "pull",
			fc:      &config.Finch{},
			args:    []string{"test:tag", "--debug"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				logger.EXPECT().SetLevel(flog.Debug)
				c := mocks.NewCommand(ctrl)
				ncc.EXPECT().Create("pull", "test:tag").Return(c)
				c.EXPECT().Run()
			},
		},
		{
			name:    "with --help flag",
			cmdName: "pull",
			fc:      &config.Finch{},
			args:    []string{"test:tag", "--help"},
			wantErr: nil,
			mockSvc: func(
				_ *testing.T,
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				ncc.EXPECT().RunWithReplacingStdout(
					testStdoutRs, "pull", "test:tag", "--help").Return(nil)
			},
		},
		{
			name:    "with --help flag but replacing returns error",
			cmdName: "pull",
			fc:      &config.Finch{},
			args:    []string{"test:tag", "--help"},
			wantErr: fmt.Errorf("failed to replace"),
			mockSvc: func(
				_ *testing.T,
				ncc *mocks.NerdctlCmdCreator,
				_ *mocks.CommandCreator,
				ncsd *mocks.NerdctlCommandSystemDeps,
				logger *mocks.Logger,
				ctrl *gomock.Controller,
				_ afero.Fs,
			) {
				ncc.EXPECT().RunWithReplacingStdout(
					testStdoutRs, "pull", "test:tag", "--help").
					Return(fmt.Errorf("failed to replace"))
			},
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			ncc := mocks.NewNerdctlCmdCreator(ctrl)
			ecc := mocks.NewCommandCreator(ctrl)
			ncsd := mocks.NewNerdctlCommandSystemDeps(ctrl)
			logger := mocks.NewLogger(ctrl)
			fs := afero.NewMemMapFs()
			tc.mockSvc(t, ncc, ecc, ncsd, logger, ctrl, fs)

			assert.Equal(t, tc.wantErr, newNerdctlCommand(ncc, ecc, ncsd, logger, fs, tc.fc).run(tc.cmdName, tc.args))
		})
	}
}
