// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package config

import (
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/runfinch/finch/pkg/mocks"
	"github.com/spf13/afero"
	"github.com/stretchr/testify/require"
)

type modifyFinchConfigTestCase struct {
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
}

func Test_ModifyFinchConfig(t *testing.T) {
	t.Parallel()

	testCases := []modifyFinchConfigTestCase{
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

	testCases = append(testCases, platformModifyFinchConfigTests(t)...)

	for _, tc := range testCases {
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

type loadFinchConfigTestCase struct {
	name         string
	path         string
	mockSvc      func(fs afero.Fs, l *mocks.Logger, deps *mocks.LoadSystemDeps, mem *mocks.Memory)
	postRunCheck func(t *testing.T, fs afero.Fs)
	want         *Finch
	errMsg       string
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
	}

	testCases = append(testCases, platformFinchConfigTests(t)...)

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
