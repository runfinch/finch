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

	testCases = append(testCases, platformLoadTests(t)...)

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
 		{
-			name: "config file exists, but contains experimental features",
+			name: "config file exists, but contains experimental flags",
 			path: "/config.yaml",
 			mockSvc: func(
 				fs afero.Fs,
 				_ *mocks.Logger,
 				deps *mocks.LoadSystemDeps,
 				mem *mocks.Memory,
 				ecc *mocks.CommandCreator,
 				ctrl *gomock.Controller,
 			) {
-					require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte("experimental_features:\n  mountInotify: true"), 0o600))
+					require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte("experimental:\n  mountInotify: true"), 0o600))
 				deps.EXPECT().NumCPU().Return(4).Times(2)
 				mem.EXPECT().TotalMemory().Return(uint64(12_884_901_888)).Times(2)
 				c := mocks.NewCommand(ctrl)
 				ecc.EXPECT().Create("sw_vers", "-productVersion").Return(c)
 				c.EXPECT().Output().Return([]byte("14.0.0"), nil)
 			},
 			want:    makeExperimentalConfig("vz", "3GiB", 2, false, SharedExperimentalSettings{MountInotify: true}),
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
 
 	switch runtime.GOOS {
 	case "windows":
 		testCases = append(testCases, windowsTestCases...)
 	case "darwin":
 		testCases = append(testCases, darwinTestCases...)
 	default:
 		t.Skip("Not running tests for " + runtime.GOOS)
 	}
>>>>>>> Conflict 2 of 2 ends

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
