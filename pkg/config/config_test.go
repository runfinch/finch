// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package config

import (
	"errors"
	"fmt"
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
		mockSvc func(fs afero.Fs, l *mocks.Logger, deps *mocks.LoadSystemDeps, mem *mocks.Memory)
		want    *Finch
		wantErr error
	}{
		{
			name: "happy path",
			path: "/config.yaml",
			mockSvc: func(fs afero.Fs, l *mocks.Logger, deps *mocks.LoadSystemDeps, mem *mocks.Memory) {
				data := `
memory: 4GiB
cpus: 8
`
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte(data), 0o600))
				deps.EXPECT().NumCPU().Return(8)
				// 12_884_901_888 == 12GiB
				mem.EXPECT().TotalMemory().Return(uint64(12_884_901_888))
			},
			want: &Finch{
				Memory:  pointer.String("4GiB"),
				CPUs:    pointer.Int(8),
				VMType:  pointer.String("qemu"),
				Rosetta: pointer.Bool(false),
			},
			wantErr: nil,
		},
		{
			name: "config file exists, but is empty",
			path: "/config.yaml",
			mockSvc: func(fs afero.Fs, l *mocks.Logger, deps *mocks.LoadSystemDeps, mem *mocks.Memory) {
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte(""), 0o600))
				deps.EXPECT().NumCPU().Return(4).Times(2)
				mem.EXPECT().TotalMemory().Return(uint64(12_884_901_888)).Times(2)
			},
			want: &Finch{
				Memory:  pointer.String("3GiB"),
				CPUs:    pointer.Int(2),
				VMType:  pointer.String("qemu"),
				Rosetta: pointer.Bool(false),
			},
			wantErr: nil,
		},
		{
			name: "config file exists, but contains only some fields",
			path: "/config.yaml",
			mockSvc: func(fs afero.Fs, l *mocks.Logger, deps *mocks.LoadSystemDeps, mem *mocks.Memory) {
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte("memory: 2GiB"), 0o600))
				deps.EXPECT().NumCPU().Return(4).Times(2)
				mem.EXPECT().TotalMemory().Return(uint64(12_884_901_888)).Times(1)
			},
			want: &Finch{
				Memory:  pointer.String("2GiB"),
				CPUs:    pointer.Int(2),
				VMType:  pointer.String("qemu"),
				Rosetta: pointer.Bool(false),
			},
			wantErr: nil,
		},
		{
			name: "config file exists, but contains an unknown field",
			path: "/config.yaml",
			mockSvc: func(fs afero.Fs, l *mocks.Logger, deps *mocks.LoadSystemDeps, mem *mocks.Memory) {
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte("unknownField: 2GiB"), 0o600))
				deps.EXPECT().NumCPU().Return(4).Times(2)
				mem.EXPECT().TotalMemory().Return(uint64(12_884_901_888)).Times(2)
			},
			want: &Finch{
				Memory:  pointer.String("3GiB"),
				CPUs:    pointer.Int(2),
				VMType:  pointer.String("qemu"),
				Rosetta: pointer.Bool(false),
			},
			wantErr: nil,
		},
		{
			name: "config file does not exist",
			path: "/config.yaml",
			mockSvc: func(fs afero.Fs, l *mocks.Logger, deps *mocks.LoadSystemDeps, mem *mocks.Memory) {
				l.EXPECT().Infof("Using default values due to missing config file at %q", "/config.yaml")
				deps.EXPECT().NumCPU().Return(4).Times(1)
				mem.EXPECT().TotalMemory().Return(uint64(12_884_901_888)).Times(1)
			},
			want: &Finch{
				Memory:  pointer.String("3GiB"),
				CPUs:    pointer.Int(2),
				VMType:  pointer.String("qemu"),
				Rosetta: pointer.Bool(false),
			},
			wantErr: nil,
		},
		{
			name: "config file does not contain valid YAML",
			path: "/config.yaml",
			mockSvc: func(fs afero.Fs, l *mocks.Logger, deps *mocks.LoadSystemDeps, mem *mocks.Memory) {
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte("this isn't YAML"), 0o600))
			},
			want: nil,
			wantErr: fmt.Errorf(
				"failed to unmarshal config file: %w",
				&yaml.TypeError{Errors: []string{"line 1: cannot unmarshal !!str `this is...` into config.Finch"}},
			),
		},
		{
			name: "config file doesn't pass validation",
			path: "/config.yaml",
			mockSvc: func(fs afero.Fs, l *mocks.Logger, deps *mocks.LoadSystemDeps, mem *mocks.Memory) {
				require.NoError(t, afero.WriteFile(fs, "/config.yaml", []byte(`memory: 4GiB
cpus: 0
`,
				), 0o600))
			},
			want: nil,
			wantErr: fmt.Errorf(
				"failed to validate config file: %w",
				errors.New("specified number of CPUs (0) must be greater than 0"),
			),
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			l := mocks.NewLogger(ctrl)
			deps := mocks.NewLoadSystemDeps(ctrl)
			mem := mocks.NewMemory(ctrl)
			fs := afero.NewMemMapFs()

			tc.mockSvc(fs, l, deps, mem)

			got, gotErr := Load(fs, tc.path, l, deps, mem)
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
			mockSvc: func(t *testing.T, fs afero.Fs) {},
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
			mockSvc: func(t *testing.T, fs afero.Fs, l *mocks.Logger) {
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
			mockSvc: func(t *testing.T, fs afero.Fs, l *mocks.Logger) {
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
