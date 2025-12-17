// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package config

import (
	"testing"

	"github.com/lima-vm/lima/pkg/limayaml"
	"github.com/spf13/afero"
	"github.com/stretchr/testify/require"
	"github.com/xorcare/pointer"
	"go.uber.org/mock/gomock"

	"github.com/runfinch/finch/pkg/mocks"
)

func makeConfig(vmType limayaml.VMType, memory string, cpus int, rosetta bool) *Finch {
	fc := Finch{}
	fc.VMType = pointer.String(vmType)
	fc.Memory = pointer.String(memory)
	fc.CPUs = pointer.Int(cpus)
	fc.Rosetta = pointer.Bool(rosetta)
	return &fc
}

func makeExperimentalConfig(
	vmType limayaml.VMType,
	memory string, cpus int,
	rosetta bool,
	experimentalSettings SharedExperimentalSettings,
) *Finch {
	fc := Finch{}
	fc.VMType = pointer.String(vmType)
	fc.Memory = pointer.String(memory)
	fc.CPUs = pointer.Int(cpus)
	fc.Rosetta = pointer.Bool(rosetta)
	fc.Experimental = experimentalSettings
	return &fc
}

func platformLoadTests(t *testing.T) []loadTestCase {
	return []loadTestCase{
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
			want:    makeConfig("vz", "4GiB", 8, false),
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
			want:    makeConfig("vz", "6GiB", 2, false),
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
			want:    makeConfig("vz", "2GiB", 2, true),
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
			want:    makeConfig("vz", "6GiB", 2, false),
			wantErr: nil,
		},
		{
			name: "config file exists, but contains experimental setting",
			path: "/config.yaml",
			mockSvc: func(
				fs afero.Fs,
				_ *mocks.Logger,
				deps *mocks.LoadSystemDeps,
				mem *mocks.Memory,
				ecc *mocks.CommandCreator,
				ctrl *gomock.Controller,
			) {
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte("experimental:\n  mountInotify: true"), 0o600))
				deps.EXPECT().NumCPU().Return(4).Times(2)
				mem.EXPECT().TotalMemory().Return(uint64(12_884_901_888)).Times(2)
				c := mocks.NewCommand(ctrl)
				ecc.EXPECT().Create("sw_vers", "-productVersion").Return(c)
				c.EXPECT().Output().Return([]byte("14.0.0"), nil)
			},
			want:    makeExperimentalConfig("vz", "6GiB", 2, false, SharedExperimentalSettings{MountInotify: true}),
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
			want:    makeConfig("vz", "6GiB", 2, false),
			wantErr: nil,
		},
	}
}

type modifyFinchConfigTestCase struct {
	name    string
	path    string
	mockSvc func(fs afero.Fs)
	want    bool
	errMsg  string
	cpus    *int
	memory  *string
}

func Test_ModifyFinchConfig(t *testing.T) {
	t.Parallel()

	intPtr := func(i int) *int {
		return &i
	}
	stringPtr := func(str string) *string {
		return &str
	}

	testCases := []modifyFinchConfigTestCase{
		{
			name: "should update vm settings",
			path: "/config.yaml",
			mockSvc: func(fs afero.Fs) {
				data := "cpus: 2\nmemory: 6GiB"
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte(data), 0o600))
			},
			want:   true,
			errMsg: "",
			cpus:   intPtr(1),
			memory: stringPtr("2GiB"),
		},
		{
			name: "should not error if one flag is specified",
			path: "/config.yaml",
			mockSvc: func(fs afero.Fs) {
				data := "cpus: 2\nmemory: 6GiB"
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte(data), 0o600))
			},
			want:   true,
			errMsg: "",
			cpus:   nil,
			memory: stringPtr("2GiB"),
		},
		{
			name: "should not error if the configurations of both CPU and memory match existing config",
			path: "/config.yaml",
			mockSvc: func(fs afero.Fs) {
				data := "cpus: 2\nmemory: 6GiB"
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte(data), 0o600))
			},
			want:   false,
			errMsg: "",
			cpus:   intPtr(2),
			memory: stringPtr("6GiB"),
		},
		{
			name:    "should return an error if the configuration file does not exist",
			path:    "/config.yaml",
			mockSvc: func(_ afero.Fs) {},
			want:    false,
			errMsg:  "failed to read config file: open /config.yaml: file does not exist",
			cpus:    intPtr(2),
			memory:  stringPtr("6GiB"),
		},
		{
			name: "should return an error if the configuration of CPU is invalid",
			path: "/config.yaml",
			mockSvc: func(fs afero.Fs) {
				data := "cpus: 2\nmemory: 6GiB"
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte(data), 0o600))
			},
			want:   false,
			errMsg: "failed to validate config file: specified number of CPUs (0) must be greater than 0",
			cpus:   intPtr(0),
			memory: stringPtr("6GiB"),
		},
		{
			name: "should return an error if the configuration of memory is invalid",
			path: "/config.yaml",
			mockSvc: func(fs afero.Fs) {
				data := "cpus: 2\nmemory: 6GiB"
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte(data), 0o600))
			},
			want:   false,
			errMsg: "failed to validate config file: failed to parse memory to uint: invalid suffix: 'gi'",
			cpus:   intPtr(2),
			memory: stringPtr("6gi"),
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			fs := afero.NewMemMapFs()
			l := mocks.NewLogger(ctrl)

			tc.mockSvc(fs)

			opts := VMConfigOpts{
				CPUs:   tc.cpus,
				Memory: tc.memory,
			}

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

type loadFinchConfigTestCase struct {
	name    string
	path    string
	mockSvc func(fs afero.Fs, l *mocks.Logger, deps *mocks.LoadSystemDeps, mem *mocks.Memory)
	want    *Finch
	errMsg  string
}

func Test_loadFinchConfig(t *testing.T) {
	t.Parallel()

	testCases := []loadFinchConfigTestCase{
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
				SystemSettings: SystemSettings{
					CPUs:   pointer.Int(2),
					Memory: pointer.String("6GiB"),
				},
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

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()
			ctrl := gomock.NewController(t)

			fs := afero.NewMemMapFs()
			l := mocks.NewLogger(ctrl)
			deps := mocks.NewLoadSystemDeps(ctrl)
			mem := mocks.NewMemory(ctrl)

			tc.mockSvc(fs, l, deps, mem)

			finchCfg, err := loadFinchConfig(fs, tc.path, l, deps, mem)
			errMsg := ""
			if err != nil {
				errMsg = err.Error()
			}
			require.Equal(t, tc.want, finchCfg)
			require.Equal(t, tc.errMsg, errMsg)
		})
	}
}
