// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package config

import (
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/lima-vm/lima/pkg/limayaml"
	"github.com/runfinch/finch/pkg/mocks"
	"github.com/spf13/afero"
	"github.com/stretchr/testify/require"
	"github.com/xorcare/pointer"
)

func makeConfig(vmType limayaml.VMType, memory string, cpus int, rosetta bool) *Finch {
	fc := Finch{}
	fc.VMType = pointer.String(vmType)
	fc.Memory = pointer.String(memory)
	fc.CPUs = pointer.Int(cpus)
	fc.Rosetta = pointer.Bool(rosetta)
	return &fc
}

func loadPlatformTests(t *testing.T) []loadTestCase {
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
			want:    makeConfig("vz", "3GiB", 2, false),
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
			want:    makeConfig("vz", "3GiB", 2, false),
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
			want:    makeConfig("vz", "3GiB", 2, false),
			wantErr: nil,
		},
	}
}

func platformModifyFinchConfigTests(t *testing.T) []modifyFinchConfigTestCase {
	return []modifyFinchConfigTestCase{
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
}

func platformFinchConfigTests(t *testing.T) []loadFinchConfigTestCase {
	return []loadFinchConfigTestCase{
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
}
