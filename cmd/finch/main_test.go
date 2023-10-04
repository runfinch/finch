// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"errors"
	"fmt"
	"os"
	"runtime"
	"testing"

	"gopkg.in/yaml.v3"

	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/mocks"
	"github.com/runfinch/finch/pkg/path"
	"github.com/runfinch/finch/pkg/version"

	"github.com/golang/mock/gomock"
	"github.com/spf13/afero"
	"github.com/spf13/cobra"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

const configStr = `
memory: 4GiB
cpus: 8
`

//nolint:paralleltest // It may not be a good idea to run main() with other tests in parallel.
func TestMainFunc(_ *testing.T) {
	main()
}

func TestXmain(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		mockSvc func(*mocks.Logger, *mocks.FinchFinderDeps, afero.Fs, *mocks.LoadSystemDeps, *mocks.Memory)
		wantErr error
	}{
		{
			name: "failed to find the finch path from path.FindFinch",
			wantErr: fmt.Errorf("failed to find the installation path of Finch: %w",
				fmt.Errorf("failed to locate the executable that starts this process: %w", errors.New("failed to find executable path")),
			),
			mockSvc: func(
				_ *mocks.Logger,
				ffd *mocks.FinchFinderDeps,
				_ afero.Fs,
				_ *mocks.LoadSystemDeps,
				_ *mocks.Memory,
			) {
				ffd.EXPECT().Executable().Return("", errors.New("failed to find executable path"))
			},
		},
	}

	darwinTestCases := []struct {
		name    string
		mockSvc func(*mocks.Logger, *mocks.FinchFinderDeps, afero.Fs, *mocks.LoadSystemDeps, *mocks.Memory)
		wantErr error
	}{
		{
			name:    "happy path",
			wantErr: nil,
			mockSvc: func(
				logger *mocks.Logger,
				ffd *mocks.FinchFinderDeps,
				fs afero.Fs,
				loadCfgDeps *mocks.LoadSystemDeps,
				mem *mocks.Memory,
			) {
				require.NoError(t, afero.WriteFile(fs, "/home/.finch/finch.yaml", []byte(configStr), 0o600))

				ffd.EXPECT().GetUserHome().Return("/home", nil)
				ffd.EXPECT().Executable().Return("/bin/path", nil)
				ffd.EXPECT().EvalSymlinks("/bin/path").Return("/real/bin/path", nil)
				ffd.EXPECT().FilePathJoin("/real/bin/path", "..", "..").Return("/real")
				loadCfgDeps.EXPECT().NumCPU().Return(16)
				// 12_884_901_888 == 12GiB
				mem.EXPECT().TotalMemory().Return(uint64(12_884_901_888))
			},
		},
		{
			name: "failed to load finch config because of invalid YAML",
			wantErr: fmt.Errorf("failed to load config: %w",
				fmt.Errorf("failed to unmarshal config file: %w",
					&yaml.TypeError{Errors: []string{"line 1: cannot unmarshal !!str `this is...` into config.Finch"}},
				),
			),
			mockSvc: func(
				_ *mocks.Logger,
				ffd *mocks.FinchFinderDeps,
				fs afero.Fs,
				_ *mocks.LoadSystemDeps,
				_ *mocks.Memory,
			) {
				require.NoError(t, afero.WriteFile(fs, "/home/.finch/finch.yaml", []byte("this isn't YAML"), 0o600))

				ffd.EXPECT().GetUserHome().Return("/home", nil)
				ffd.EXPECT().Executable().Return("/bin/path", nil)
				ffd.EXPECT().EvalSymlinks("/bin/path").Return("/real/bin/path", nil)
				ffd.EXPECT().FilePathJoin("/real/bin/path", "..", "..").Return("/real")
			},
		},
	}

	windowsTestCases := []struct {
		name    string
		mockSvc func(*mocks.Logger, *mocks.FinchFinderDeps, afero.Fs, *mocks.LoadSystemDeps, *mocks.Memory)
		wantErr error
	}{
		{
			name:    "happy path",
			wantErr: nil,
			mockSvc: func(
				logger *mocks.Logger,
				ffd *mocks.FinchFinderDeps,
				fs afero.Fs,
				loadCfgDeps *mocks.LoadSystemDeps,
				mem *mocks.Memory,
			) {
				require.NoError(t, afero.WriteFile(fs, "/home/.finch/finch.yaml", []byte(configStr), 0o600))

				ffd.EXPECT().GetUserHome().Return("/home", nil)
				ffd.EXPECT().Env("LOCALAPPDATA").Return("/home/")
				ffd.EXPECT().Executable().Return("/bin/path", nil)
				ffd.EXPECT().EvalSymlinks("/bin/path").Return("/real/bin/path", nil)
				ffd.EXPECT().FilePathJoin("/real/bin/path", "..", "..").Return("/real")
			},
		},
		{
			name: "failed to load finch config because of invalid YAML",
			wantErr: fmt.Errorf("failed to load config: %w",
				fmt.Errorf("failed to unmarshal config file: %w",
					&yaml.TypeError{Errors: []string{"line 1: cannot unmarshal !!str `this is...` into config.Finch"}},
				),
			),
			mockSvc: func(
				_ *mocks.Logger,
				ffd *mocks.FinchFinderDeps,
				fs afero.Fs,
				_ *mocks.LoadSystemDeps,
				_ *mocks.Memory,
			) {
				require.NoError(t, afero.WriteFile(fs, "/home/.finch/finch.yaml", []byte("this isn't YAML"), 0o600))

				ffd.EXPECT().GetUserHome().Return("/home", nil)
				ffd.EXPECT().Env("LOCALAPPDATA").Return("/home/")
				ffd.EXPECT().Executable().Return("/bin/path", nil)
				ffd.EXPECT().EvalSymlinks("/bin/path").Return("/real/bin/path", nil)
				ffd.EXPECT().FilePathJoin("/real/bin/path", "..", "..").Return("/real")
			},
		},
	}

	if runtime.GOOS == "windows" {
		testCases = append(testCases, windowsTestCases...)
	} else {
		testCases = append(testCases, darwinTestCases...)
	}
	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			ffd := mocks.NewFinchFinderDeps(ctrl)
			logger := mocks.NewLogger(ctrl)
			loadCfgDeps := mocks.NewLoadSystemDeps(ctrl)
			mem := mocks.NewMemory(ctrl)
			fs := afero.NewMemMapFs()
			stdOut := os.Stdout
			tc.mockSvc(logger, ffd, fs, loadCfgDeps, mem)
			err := xmain(logger, ffd, fs, loadCfgDeps, mem, stdOut)
			assert.Equal(t, err, tc.wantErr)
		})
	}
}

func TestNewApp(t *testing.T) {
	t.Parallel()

	ctrl := gomock.NewController(t)
	l := mocks.NewLogger(ctrl)
	fp := path.Finch("")
	fs := afero.NewMemMapFs()
	stdOut := os.Stdout

	require.NoError(t, afero.WriteFile(fs, "/real/config.yaml", []byte(configStr), 0o600))

	cmd := newApp(l, fp, fs, &config.Finch{}, stdOut, "", "")

	assert.Equal(t, cmd.Name(), finchRootCmd)
	assert.Equal(t, cmd.Version, version.Version)
	assert.Equal(t, cmd.SilenceUsage, true)
	assert.Equal(t, cmd.SilenceErrors, true)
	// confirm the number of command, comprised of nerdctl commands + finch commands (version, vm, support-bundle)
	assert.Equal(t, len(cmd.Commands()), len(nerdctlCmds)+3)

	// PersistentPreRunE should set logger level to debug if the debug flag exists.
	mockCmd := &cobra.Command{}
	mockCmd.Flags().Bool("debug", true, "")
	l.EXPECT().SetLevel(flog.Debug)

	require.NoError(t, cmd.PersistentPreRunE(mockCmd, nil))
}
