// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package config

import (
	"fmt"
	"runtime"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/spf13/afero"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"github.com/xorcare/pointer"
	"gopkg.in/yaml.v3"

	"github.com/runfinch/finch/pkg/mocks"
)

func TestLoad(t *testing.T) {
	t.Parallel()
	testCases := []struct {
		name    string
		path    string
		mockSvc func(
			fs afero.Fs,
			l *mocks.Logger,
			deps *mocks.LoadSystemDeps,
			mem *mocks.Memory,
			ecc *mocks.CommandCreator,
			ctrl *gomock.Controller,
		)
		want    *Finch
		wantErr error
	}{
		{
			name: "config file does not contain valid YAML",
			path: "/config.yaml",
			mockSvc: func(
				fs afero.Fs,
				_ *mocks.Logger,
				_ *mocks.LoadSystemDeps,
				_ *mocks.Memory,
				_ *mocks.CommandCreator,
				_ *gomock.Controller,
			) {
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte("this isn't YAML"), 0o600))
			},
			want: nil,
			wantErr: fmt.Errorf(
				"failed to unmarshal config file: %w",
				&yaml.TypeError{Errors: []string{"line 1: cannot unmarshal !!str `this is...` into config.Finch"}},
			),
		},
	}

	darwinTestCases := []struct {
		name    string
		path    string
		mockSvc func(
			fs afero.Fs,
			l *mocks.Logger,
			deps *mocks.LoadSystemDeps,
			mem *mocks.Memory,
			ecc *mocks.CommandCreator,
			ctrl *gomock.Controller,
		)
		want    *Finch
		wantErr error
	}{
		{
			name: "happy path",
			path: "/config.yaml",
			mockSvc: func(
				fs afero.Fs,
				_ *mocks.Logger,
				deps *mocks.LoadSystemDeps,
				mem *mocks.Memory,
				ecc *mocks.CommandCreator,
				ctrl *gomock.Controller,
			) {
				data := `
memory: 4GiB
cpus: 8
`
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte(data), 0o600))
				deps.EXPECT().NumCPU().Return(8)
				// 12_884_901_888 == 12GiB
				mem.EXPECT().TotalMemory().Return(uint64(12_884_901_888))
				c := mocks.NewCommand(ctrl)
				ecc.EXPECT().Create("sw_vers", "-productVersion").Return(c)
				c.EXPECT().Output().Return([]byte("14.0.0"), nil)
			},
			want: &Finch{
				Memory:  pointer.String("4GiB"),
				CPUs:    pointer.Int(8),
				VMType:  pointer.String("vz"),
				Rosetta: pointer.Bool(false),
			},
			wantErr: nil,
		},
		{
			name: "config file exists, but is empty",
			path: "/config.yaml",
			mockSvc: func(
				fs afero.Fs,
				_ *mocks.Logger,
				deps *mocks.LoadSystemDeps,
				mem *mocks.Memory,
				ecc *mocks.CommandCreator,
				ctrl *gomock.Controller,
			) {
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte(""), 0o600))
				deps.EXPECT().NumCPU().Return(4).Times(2)
				mem.EXPECT().TotalMemory().Return(uint64(12_884_901_888)).Times(2)
				c := mocks.NewCommand(ctrl)
				ecc.EXPECT().Create("sw_vers", "-productVersion").Return(c)
				c.EXPECT().Output().Return([]byte("14.0.0"), nil)
			},
			want: &Finch{
				Memory:  pointer.String("3GiB"),
				CPUs:    pointer.Int(2),
				VMType:  pointer.String("vz"),
				Rosetta: pointer.Bool(false),
			},
			wantErr: nil,
		},
		{
			name: "config file exists, but contains only some fields",
			path: "/config.yaml",
			mockSvc: func(
				fs afero.Fs,
				_ *mocks.Logger,
				deps *mocks.LoadSystemDeps,
				mem *mocks.Memory,
				ecc *mocks.CommandCreator,
				ctrl *gomock.Controller,
			) {
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte("memory: 2GiB\nrosetta: true"), 0o600))
				deps.EXPECT().NumCPU().Return(4).Times(2)
				mem.EXPECT().TotalMemory().Return(uint64(12_884_901_888)).Times(1)
				c := mocks.NewCommand(ctrl)
				ecc.EXPECT().Create("sw_vers", "-productVersion").Return(c)
				c.EXPECT().Output().Return([]byte("14.0.0"), nil)
			},
			want: &Finch{
				Memory:  pointer.String("2GiB"),
				CPUs:    pointer.Int(2),
				VMType:  pointer.String("vz"),
				Rosetta: pointer.Bool(true),
			},
			wantErr: nil,
		},
		{
			name: "config file exists, but contains an unknown field",
			path: "/config.yaml",
			mockSvc: func(
				fs afero.Fs,
				_ *mocks.Logger,
				deps *mocks.LoadSystemDeps,
				mem *mocks.Memory,
				ecc *mocks.CommandCreator,
				ctrl *gomock.Controller,
			) {
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte("unknownField: 2GiB"), 0o600))
				deps.EXPECT().NumCPU().Return(4).Times(2)
				mem.EXPECT().TotalMemory().Return(uint64(12_884_901_888)).Times(2)
				c := mocks.NewCommand(ctrl)
				ecc.EXPECT().Create("sw_vers", "-productVersion").Return(c)
				c.EXPECT().Output().Return([]byte("14.0.0"), nil)
			},
			want: &Finch{
				Memory:  pointer.String("3GiB"),
				CPUs:    pointer.Int(2),
				VMType:  pointer.String("vz"),
				Rosetta: pointer.Bool(false),
			},
			wantErr: nil,
		},
		{
			name: "config file does not exist",
			path: "/config.yaml",
			mockSvc: func(
				_ afero.Fs,
				l *mocks.Logger,
				deps *mocks.LoadSystemDeps,
				mem *mocks.Memory,
				ecc *mocks.CommandCreator,
				ctrl *gomock.Controller,
			) {
				l.EXPECT().Infof("Using default values due to missing config file at %q", "/config.yaml")
				deps.EXPECT().NumCPU().Return(4).Times(1)
				mem.EXPECT().TotalMemory().Return(uint64(12_884_901_888)).Times(1)
				c := mocks.NewCommand(ctrl)
				ecc.EXPECT().Create("sw_vers", "-productVersion").Return(c)
				c.EXPECT().Output().Return([]byte("14.0.0"), nil)
			},
			want: &Finch{
				Memory:  pointer.String("3GiB"),
				CPUs:    pointer.Int(2),
				VMType:  pointer.String("vz"),
				Rosetta: pointer.Bool(false),
			},
			wantErr: nil,
		},
	}

	windowsTestCases := []struct {
		name    string
		path    string
		mockSvc func(
			fs afero.Fs,
			l *mocks.Logger,
			deps *mocks.LoadSystemDeps,
			mem *mocks.Memory,
			ecc *mocks.CommandCreator,
			ctrl *gomock.Controller,
		)
		want    *Finch
		wantErr error
	}{
		{
			name: "happy path",
			path: "/config.yaml",
			mockSvc: func(
				fs afero.Fs,
				_ *mocks.Logger,
				_ *mocks.LoadSystemDeps,
				_ *mocks.Memory,
				_ *mocks.CommandCreator,
				_ *gomock.Controller,
			) {
				data := `
memory: 4GiB
cpus: 8
`
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte(data), 0o600))
			},
			want: &Finch{
				Memory: pointer.String("4GiB"),
				CPUs:   pointer.Int(8),
				VMType: pointer.String("wsl2"),
			},
			wantErr: nil,
		},
		{
			name: "config file exists, but is empty",
			path: "/config.yaml",
			mockSvc: func(
				fs afero.Fs,
				_ *mocks.Logger,
				_ *mocks.LoadSystemDeps,
				_ *mocks.Memory,
				_ *mocks.CommandCreator,
				_ *gomock.Controller,
			) {
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte(""), 0o600))
			},
			want: &Finch{
				VMType: pointer.String("wsl2"),
			},
			wantErr: nil,
		},
		{
			name: "config file exists, but contains only some fields",
			path: "/config.yaml",
			mockSvc: func(
				fs afero.Fs,
				_ *mocks.Logger,
				_ *mocks.LoadSystemDeps,
				_ *mocks.Memory,
				_ *mocks.CommandCreator,
				_ *gomock.Controller,
			) {
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte("memory: 2GiB"), 0o600))
			},
			want: &Finch{
				Memory: pointer.String("2GiB"),
				VMType: pointer.String("wsl2"),
			},
			wantErr: nil,
		},
		{
			name: "config file exists, but contains an unknown field",
			path: "/config.yaml",
			mockSvc: func(
				fs afero.Fs,
				_ *mocks.Logger,
				_ *mocks.LoadSystemDeps,
				_ *mocks.Memory,
				_ *mocks.CommandCreator,
				_ *gomock.Controller,
			) {
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte("unknownField: 2GiB"), 0o600))
			},
			want: &Finch{
				VMType: pointer.String("wsl2"),
			},
			wantErr: nil,
		},
		{
			name: "config file does not exist",
			path: "/config.yaml",
			mockSvc: func(
				_ afero.Fs,
				l *mocks.Logger,
				_ *mocks.LoadSystemDeps,
				_ *mocks.Memory,
				_ *mocks.CommandCreator,
				_ *gomock.Controller,
			) {
				l.EXPECT().Infof("Using default values due to missing config file at %q", "/config.yaml")
			},
			want: &Finch{
				VMType: pointer.String("wsl2"),
			},
			wantErr: nil,
		},
	}

	switch runtime.GOOS {
	case "windows":
		testCases = append(testCases, windowsTestCases...)
	case "darwin":
		testCases = append(testCases, darwinTestCases...)
	default:
		t.Skip("Not running tests for " + runtime.GOOS)
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			l := mocks.NewLogger(ctrl)
			deps := mocks.NewLoadSystemDeps(ctrl)
			mem := mocks.NewMemory(ctrl)
			ecc := mocks.NewCommandCreator(ctrl)
			fs := afero.NewMemMapFs()

			tc.mockSvc(fs, l, deps, mem, ecc, ctrl)

			got, gotErr := Load(fs, tc.path, l, deps, mem, ecc)
			require.Equal(t, tc.wantErr, gotErr)
			assert.Equal(t, tc.want, got)
		})
	}
}

func Test_writeConfig(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name         string
		cfg          *Finch
		path         string
		mockSvc      func(t *testing.T, fs afero.Fs)
		postRunCheck func(t *testing.T, fs afero.Fs)
		err          error
	}{
		{
			name: "happy path",
			cfg: &Finch{
				CPUs:   pointer.Int(4),
				Memory: pointer.String("4GiB"),
			},
			path:    "/config.yaml",
			mockSvc: func(_ *testing.T, _ afero.Fs) {},
			err:     nil,
			postRunCheck: func(t *testing.T, fs afero.Fs) {
				b, err := afero.ReadFile(fs, "/config.yaml")
				require.NoError(t, err)

				require.Equal(t, b, []byte("cpus: 4\nmemory: 4GiB\n"))
			},
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			fs := afero.NewMemMapFs()

			tc.mockSvc(t, fs)

			err := writeConfig(tc.cfg, fs, tc.path)
			require.Equal(t, tc.err, err)

			tc.postRunCheck(t, fs)
		})
	}
}

func Test_ensureConfigDir(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name         string
		path         string
		mockSvc      func(t *testing.T, fs afero.Fs, l *mocks.Logger)
		postRunCheck func(t *testing.T, fs afero.Fs)
		err          error
	}{
		{
			name: "happy path",
			path: "/.finch",
			mockSvc: func(t *testing.T, fs afero.Fs, _ *mocks.Logger) {
				require.NoError(t, fs.Mkdir("/.finch", 0o600))
			},
			err: nil,
			postRunCheck: func(t *testing.T, fs afero.Fs) {
				_, err := afero.DirExists(fs, "/.finch")
				require.NoError(t, err)
			},
		},
		{
			name: "directory doesn't exist",
			path: "/.finch",
			mockSvc: func(_ *testing.T, _ afero.Fs, l *mocks.Logger) {
				l.EXPECT().Infof("%q directory doesn't exist, attempting to create it", "/.finch")
			},
			err: nil,
			postRunCheck: func(t *testing.T, fs afero.Fs) {
				_, err := afero.DirExists(fs, "/.finch")
				require.NoError(t, err)
			},
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()
			ctrl := gomock.NewController(t)

			fs := afero.NewMemMapFs()
			l := mocks.NewLogger(ctrl)

			tc.mockSvc(t, fs, l)

			err := ensureConfigDir(fs, tc.path, l)
			require.Equal(t, tc.err, err)

			tc.postRunCheck(t, fs)
		})
	}
}

func Test_ModifyFinchConfig(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name            string
		path            string
		mockSvc         func(fs afero.Fs)
		postRunCheck    func(t *testing.T, fs afero.Fs)
		want            bool
		errMsg          string
		opts            VMConfigOpts
		cpus            int
		memory          string
		isConfigUpdated bool
	}{
		{
			name: "should update vm settings",
			path: "/config.yaml",
			mockSvc: func(fs afero.Fs) {
				data := "cpus: 2\nmemory: 6GiB"
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte(data), 0o600))
			},
			cpus:   1,
			memory: "2GiB",
			want:   true,
			errMsg: "",
		},
		{
			name: "should return an error if the configurations of CPU and memory are invalid",
			path: "/config.yaml",
			mockSvc: func(fs afero.Fs) {
				data := "cpus: 2\nmemory: 6GiB"
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte(data), 0o600))
			},
			cpus:   0,
			memory: "",
			want:   false,
			errMsg: "the number of CPUs or the amount of memory should be at least one valid value",
		},
	}

	darwinTestCases := []struct {
		name            string
		path            string
		mockSvc         func(fs afero.Fs)
		postRunCheck    func(t *testing.T, fs afero.Fs)
		want            bool
		errMsg          string
		opts            VMConfigOpts
		cpus            int
		memory          string
		isConfigUpdated bool
	}{
		{
			name:    "should return an error if the configuration file does not exist",
			path:    "/config.yaml",
			mockSvc: func(_ afero.Fs) {},
			cpus:    2,
			memory:  "2GiB",
			want:    false,
			errMsg:  "failed to read config file: open /config.yaml: file does not exist",
		},
		{
			name: "should return an error if the configuration of CPU is invalid",
			path: "/config.yaml",
			mockSvc: func(fs afero.Fs) {
				data := "cpus: 2\nmemory: 6GiB"
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte(data), 0o600))
			},
			cpus:   -1,
			memory: "2GiB",
			want:   false,
			errMsg: "failed to validate config file: specified number of CPUs (-1) must be greater than 0",
		},
		{
			name: "should return an error if the configuration of memory is invalid",
			path: "/config.yaml",
			mockSvc: func(fs afero.Fs) {
				data := "cpus: 2\nmemory: 6GiB"
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte(data), 0o600))
			},
			cpus:   2,
			memory: "2Gi",
			want:   false,
			errMsg: "failed to validate config file: failed to parse memory to uint: invalid suffix: 'gi'",
		},
	}

	windowsTestCases := []struct {
		name            string
		path            string
		mockSvc         func(fs afero.Fs)
		postRunCheck    func(t *testing.T, fs afero.Fs)
		want            bool
		errMsg          string
		opts            VMConfigOpts
		cpus            int
		memory          string
		isConfigUpdated bool
	}{
		{
			name:    "should return an error if the configuration file does not exist",
			path:    "/config.yaml",
			mockSvc: func(_ afero.Fs) {},
			cpus:    2,
			memory:  "2GiB",
			want:    false,
			errMsg:  "failed to read config file: open \\config.yaml: file does not exist",
		},
	}

	switch runtime.GOOS {
	case "windows":
		testCases = append(testCases, windowsTestCases...)
	case "darwin":
		testCases = append(testCases, darwinTestCases...)
	default:
		t.Skip("Not running tests for " + runtime.GOOS)
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			fs := afero.NewMemMapFs()
			l := mocks.NewLogger(ctrl)

			opts := VMConfigOpts{
				CPUs:   tc.cpus,
				Memory: tc.memory,
			}

			tc.mockSvc(fs)

			isConfigUpdated, err := ModifyFinchConfig(fs, l, tc.path, opts)
			errMsg := ""
			if err != nil {
				errMsg = err.Error()
			}
			require.Equal(t, tc.want, isConfigUpdated)
			require.Equal(t, tc.errMsg, errMsg)
		})
	}
}

func Test_LoadFinchConfig(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name         string
		path         string
		mockSvc      func(fs afero.Fs, l *mocks.Logger, deps *mocks.LoadSystemDeps, mem *mocks.Memory)
		postRunCheck func(t *testing.T, fs afero.Fs)
		want         *Finch
		errMsg       string
	}{
		{
			name: "config file exists, but is invalid yaml format",
			path: "/config.yaml",
			mockSvc: func(fs afero.Fs, _ *mocks.Logger, _ *mocks.LoadSystemDeps, _ *mocks.Memory) {
				data := "cpus: 2\nmemory 6Gi"
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte(data), 0o600))
			},
			want:   nil,
			errMsg: "failed to unmarshal config file: yaml: line 2: could not find expected ':'",
		},
	}

	darwinTestCases := []struct {
		name         string
		path         string
		mockSvc      func(fs afero.Fs, l *mocks.Logger, deps *mocks.LoadSystemDeps, mem *mocks.Memory)
		postRunCheck func(t *testing.T, fs afero.Fs)
		want         *Finch
		errMsg       string
	}{
		{
			name: "successfully loads config.yaml",
			path: "/config.yaml",
			mockSvc: func(fs afero.Fs, _ *mocks.Logger, deps *mocks.LoadSystemDeps, mem *mocks.Memory) {
				data := "cpus: 2\nmemory: 6GiB"
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte(data), 0o600))

				deps.EXPECT().NumCPU().Return(4)
				mem.EXPECT().TotalMemory().Return(uint64(6_442_450_944))
			},
			want: &Finch{
				CPUs:   pointer.Int(2),
				Memory: pointer.String("6GiB"),
			},
			errMsg: "",
		},
		{
			name:    "config file does not exist",
			path:    "/config.yaml",
			mockSvc: func(_ afero.Fs, _ *mocks.Logger, _ *mocks.LoadSystemDeps, _ *mocks.Memory) {},
			want:    nil,
			errMsg:  "failed to read config file: open /config.yaml: file does not exist",
		},
		{
			name: "should return an error if the configuration of CPU is invalid",
			path: "/config.yaml",
			mockSvc: func(fs afero.Fs, _ *mocks.Logger, _ *mocks.LoadSystemDeps, _ *mocks.Memory) {
				data := "cpus: 0\nmemory: 6GiB"
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte(data), 0o600))
			},
			want:   nil,
			errMsg: "failed to validate config file: specified number of CPUs (0) must be greater than 0",
		},
		{
			name: "should return an error if the configuration of memory is invalid",
			path: "/config.yaml",
			mockSvc: func(fs afero.Fs, _ *mocks.Logger, _ *mocks.LoadSystemDeps, _ *mocks.Memory) {
				data := "cpus: 2\nmemory: 6Gi"
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte(data), 0o600))
			},
			want:   nil,
			errMsg: "failed to validate config file: failed to parse memory to uint: invalid suffix: 'gi'",
		},
	}

	windowsTestCases := []struct {
		name         string
		path         string
		mockSvc      func(fs afero.Fs, l *mocks.Logger, deps *mocks.LoadSystemDeps, mem *mocks.Memory)
		postRunCheck func(t *testing.T, fs afero.Fs)
		want         *Finch
		errMsg       string
	}{
		{
			name: "successfully loads config.yaml",
			path: "/config.yaml",
			mockSvc: func(fs afero.Fs, _ *mocks.Logger, _ *mocks.LoadSystemDeps, _ *mocks.Memory) {
				data := "cpus: 2\nmemory: 6GiB"
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte(data), 0o600))
			},
			want: &Finch{
				CPUs:   pointer.Int(2),
				Memory: pointer.String("6GiB"),
			},
			errMsg: "",
		},
		{
			name:    "config file does not exist",
			path:    "/config.yaml",
			mockSvc: func(_ afero.Fs, _ *mocks.Logger, _ *mocks.LoadSystemDeps, _ *mocks.Memory) {},
			want:    nil,
			errMsg:  "failed to read config file: open \\config.yaml: file does not exist",
		},
	}

	switch runtime.GOOS {
	case "windows":
		testCases = append(testCases, windowsTestCases...)
	case "darwin":
		testCases = append(testCases, darwinTestCases...)
	default:
		t.Skip("Not running tests for " + runtime.GOOS)
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()
			ctrl := gomock.NewController(t)

			fs := afero.NewMemMapFs()
			l := mocks.NewLogger(ctrl)
			deps := mocks.NewLoadSystemDeps(ctrl)
			mem := mocks.NewMemory(ctrl)

			tc.mockSvc(fs, l, deps, mem)

			finchCfg, err := LoadFinchConfig(fs, tc.path, l, deps, mem)
			errMsg := ""
			if err != nil {
				errMsg = err.Error()
			}
			require.Equal(t, tc.want, finchCfg)
			require.Equal(t, tc.errMsg, errMsg)
		})
	}
}
