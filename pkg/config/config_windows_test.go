// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows

package config

import (
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/runfinch/finch/pkg/mocks"
	"github.com/spf13/afero"
	"github.com/stretchr/testify/require"
	"github.com/xorcare/pointer"
)

func platformLoadTests(t *testing.T) []loadTestCase {
	return []loadTestCase{
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
				SystemSettings: SystemSettings{
					SharedSystemSettings: SharedSystemSettings{
						VMType: pointer.String("wsl2"),
					},
				},
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
				SystemSettings: SystemSettings{
					SharedSystemSettings: SharedSystemSettings{
						VMType: pointer.String("wsl2"),
					},
				},
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
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte("snapshotters:\n  - soci"), 0o600))
			},
			want: &Finch{
				SharedSettings: SharedSettings{
					Snapshotters: []string{"soci"},
				},
				SystemSettings: SystemSettings{
					SharedSystemSettings: SharedSystemSettings{
						VMType: pointer.String("wsl2"),
					},
				},
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
				SystemSettings: SystemSettings{
					SharedSystemSettings: SharedSystemSettings{
						VMType: pointer.String("wsl2"),
					},
				},
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
				SystemSettings: SystemSettings{
					SharedSystemSettings: SharedSystemSettings{
						VMType: pointer.String("wsl2"),
					},
				},
			},
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
			errMsg:  "failed to read config file: open \\config.yaml: file does not exist",
		},
	}
}

func platformFinchConfigTests(t *testing.T) []loadFinchConfigTestCase {
	return []loadFinchConfigTestCase{
		{
			name: "successfully loads config.yaml",
			path: "/config.yaml",
			mockSvc: func(fs afero.Fs, _ *mocks.Logger, _ *mocks.LoadSystemDeps, _ *mocks.Memory) {
				data := "cpus: 2\nmemory: 6GiB"
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte(data), 0o600))
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
			errMsg:  "failed to read config file: open \\config.yaml: file does not exist",
		},
	}
}
