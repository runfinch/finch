// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package config

import (
	"fmt"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/spf13/afero"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"gopkg.in/yaml.v3"

	"github.com/runfinch/finch/pkg/mocks"
)

type loadTestCase struct {
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
}

func TestLoad(t *testing.T) {
	t.Parallel()
	testCases := []loadTestCase{
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

	testCases = append(testCases, loadPlatformTests(t)...)

	for _, tc := range testCases {
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
				SharedSettings: SharedSettings{
					Snapshotters: []string{"soci"},
				},
			},
			path:    "/config.yaml",
			mockSvc: func(_ *testing.T, _ afero.Fs) {},
			err:     nil,
			postRunCheck: func(t *testing.T, fs afero.Fs) {
				b, err := afero.ReadFile(fs, "/config.yaml")
				require.NoError(t, err)

				require.Equal(t, b, []byte("snapshotters:\n    - soci\n"))
			},
		},
	}

	for _, tc := range testCases {
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
