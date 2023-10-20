// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"fmt"
	"os"
	"testing"

	"github.com/spf13/afero"
	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/mocks"

	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestNewGenDocsCommand(t *testing.T) {
	t.Parallel()

	ctrl := gomock.NewController(t)
	logger := mocks.NewLogger(ctrl)
	mFs := afero.NewMemMapFs()
	deps := mocks.NewGenDocsSystemDeps(ctrl)
	cmd := newGenDocsCommand(&cobra.Command{}, logger, mFs, deps)
	assert.Equal(t, cmd.Name(), "gen-docs")
}

func TestNewGenDocsGenerateCommand(t *testing.T) {
	t.Parallel()

	ctrl := gomock.NewController(t)
	logger := mocks.NewLogger(ctrl)
	mFs := afero.NewMemMapFs()
	deps := mocks.NewGenDocsSystemDeps(ctrl)
	cmd := newGenDocsGenerateCommand(&cobra.Command{}, logger, mFs, deps)
	assert.Equal(t, cmd.Name(), "generate")
}

var codeBlock = "```"

//nolint:paralleltest // This function manipulates stdout
func TestGenDocsAction_runAdapter(t *testing.T) {
	testCases := []struct {
		name    string
		cmd     func(t *testing.T) *cobra.Command
		mockSvc func(
			ctrl *gomock.Controller,
			t *testing.T,
			logger *mocks.Logger,
			mFs afero.Fs,
			deps *mocks.GenDocsSystemDeps,
			stdout *os.File,
		)
		want         error
		postRunCheck func(t *testing.T, fs afero.Fs)
	}{
		{
			name: "path is set and exists",
			cmd: func(t *testing.T) *cobra.Command {
				c := &cobra.Command{
					Use: "test-command",
					Run: func(_ *cobra.Command, _ []string) {},
				}
				c.Flags().StringP("path", "p", "", "Doc output directory")
				require.NoError(t, c.Flags().Set("path", "outDir"))
				require.NoError(t, c.Execute())
				return c
			},
			mockSvc: func(
				ctrl *gomock.Controller,
				t *testing.T,
				logger *mocks.Logger,
				mFs afero.Fs,
				deps *mocks.GenDocsSystemDeps,
				stdout *os.File,
			) {
				require.NoError(t, mFs.Mkdir("outDir", 0o666))
				logger.EXPECT().Infof("Creating doc for command: %s", "test-command")
				// Hijack stdout before the command does and replace it with a pipe
				stdoutR, stdoutW, err := os.Pipe()
				require.NoError(t, err)
				os.Stdout = stdoutW
				deps.EXPECT().Stdout().Return(os.Stdout)
				deps.EXPECT().Pipe().Return(stdoutR, stdoutW, nil)
				deps.EXPECT().SetStdout(stdoutW)
				deps.EXPECT().SetStdout(os.Stdout)
			},
			want: nil,
			postRunCheck: func(t *testing.T, fs afero.Fs) {
				buf, err := afero.ReadFile(fs, "outDir/test-command.md")
				require.NoError(t, err)
				require.Equal(t, string(buf), fmt.Sprintf(`---
title: "test-command"
---
## test-command

%s
  test-command [flags]
%s
`, codeBlock, codeBlock))
			},
		},
		{
			name: "path is set and exists but can't create pipe",
			cmd: func(t *testing.T) *cobra.Command {
				c := &cobra.Command{
					Use: "test-command",
					Run: func(_ *cobra.Command, _ []string) {},
				}
				c.Flags().StringP("path", "p", "", "Doc output directory")
				require.NoError(t, c.Flags().Set("path", "outDir"))
				require.NoError(t, c.Execute())
				return c
			},
			mockSvc: func(
				ctrl *gomock.Controller,
				t *testing.T,
				logger *mocks.Logger,
				mFs afero.Fs,
				deps *mocks.GenDocsSystemDeps,
				stdout *os.File,
			) {
				require.NoError(t, mFs.Mkdir("outDir", 0o666))
				logger.EXPECT().Infof("Creating doc for command: %s", "test-command")
				stdoutR, stdoutW, err := os.Pipe()
				require.NoError(t, err)
				deps.EXPECT().Stdout().Return(stdoutW)
				deps.EXPECT().Pipe().Return(stdoutR, stdoutW, fmt.Errorf("can't create pipe"))
			},
			want: fmt.Errorf("error while creating pipe to capture stdout: %w", fmt.Errorf("can't create pipe")),
			postRunCheck: func(t *testing.T, fs afero.Fs) {
				buf, err := afero.ReadFile(fs, "outDir/test-command.md")
				require.NoError(t, err)
				require.Equal(t, buf, []byte(``))
			},
		},
		{
			name: "path is set and command is not runnable",
			cmd: func(t *testing.T) *cobra.Command {
				c := &cobra.Command{
					Use: "test-command",
				}
				c.Flags().StringP("path", "p", "", "Doc output directory")
				require.NoError(t, c.Flags().Set("path", "outDir"))
				require.NoError(t, c.Execute())
				return c
			},
			mockSvc: func(
				ctrl *gomock.Controller,
				t *testing.T,
				logger *mocks.Logger,
				mFs afero.Fs,
				deps *mocks.GenDocsSystemDeps,
				stdout *os.File,
			) {
			},
			want: nil,
			postRunCheck: func(t *testing.T, fs afero.Fs) {
			},
		},
	}

	//nolint:paralleltest // This function manipulates stdout
	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			ctrl := gomock.NewController(t)
			logger := mocks.NewLogger(ctrl)
			mFs := afero.NewMemMapFs()
			deps := mocks.NewGenDocsSystemDeps(ctrl)
			rescueStdout := os.Stdout
			tc.mockSvc(ctrl, t, logger, mFs, deps, os.Stdout)
			got := newGenDocsGenerateAction(tc.cmd(t), logger, mFs, deps).runAdapter(tc.cmd(t), nil)
			os.Stdout = rescueStdout
			assert.Equal(t, tc.want, got)
			tc.postRunCheck(t, mFs)
		})
	}
}
