// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build linux

package config

import (
	"testing"

	"github.com/runfinch/finch/pkg/mocks"
	"github.com/spf13/afero"
	"github.com/stretchr/testify/require"
	"go.uber.org/mock/gomock"
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
				data := ``
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte(data), 0o600))
			},
			want: &Finch{
				SharedSettings: SharedSettings{},
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
				SharedSettings: SharedSettings{},
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
				SharedSettings: SharedSettings{},
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
				SharedSettings: SharedSettings{},
			},
			wantErr: nil,
		},
	}
}
