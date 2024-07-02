// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package credhelper

import (
	"path/filepath"
	"runtime"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/spf13/afero"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/runfinch/finch/pkg/dependency"
	"github.com/runfinch/finch/pkg/mocks"
)

func Test_NewDependencyGroup(t *testing.T) {
	t.Parallel()

	want := dependency.NewGroup(newDeps(nil, nil, "", nil, nil, "", ""), description, errMsg)
	got := NewDependencyGroup(nil, nil, "", nil, nil, "", "")
	assert.Equal(t, want, got)
}

func Test_newDeps(t *testing.T) {
	t.Parallel()

	got := newDeps(nil, nil, "", nil, nil, "", "")
	require.Equal(t, 1, len(got))
	assert.IsType(t, nil, got[0])
}

func Test_RefreshConfigFile(t *testing.T) {
	t.Parallel()

	type testCaseType struct {
		name           string
		finchDir       string
		mockSvc        func(fs afero.Fs, finchDir string)
		postRunCheck   func(fs afero.Fs, configJSONPath string) (string, error)
		errorExists    bool
		wantConfigJSON string
	}

	testCases := []testCaseType{
		{
			name: "should return no error if creds_helpers is configured in finch.yaml",
			mockSvc: func(fs afero.Fs, finchDir string) {
				data := "cpus: 2\nmemory: 6GiB\ncreds_helpers:\n    - ecr-login"
				finchConfigPath := filepath.Join(finchDir, "finch.yaml")
				require.NoError(t, afero.WriteFile(fs, finchConfigPath, []byte(data), 0o600))
			},
			postRunCheck: func(_ afero.Fs, _ string) (string, error) {
				return "", nil
			},
			errorExists:    false,
			wantConfigJSON: "",
			finchDir:       "/.finch",
		},
		{
			name: "should return no error if creds_helpers is not configured in finch.yaml and config.json does not exist",
			mockSvc: func(fs afero.Fs, finchDir string) {
				data := "cpus: 2\nmemory: 6GiB"
				finchConfigPath := filepath.Join(finchDir, "finch.yaml")
				require.NoError(t, afero.WriteFile(fs, finchConfigPath, []byte(data), 0o600))
			},
			postRunCheck: func(_ afero.Fs, _ string) (string, error) {
				return "", nil
			},
			errorExists:    false,
			wantConfigJSON: "",
			finchDir:       "/.finch",
		},
		{
			name: "should return an error if config.json already exists but is invalid",
			mockSvc: func(fs afero.Fs, finchDir string) {
				data := "cpus: 2\nmemory: 6GiB"
				finchConfigPath := filepath.Join(finchDir, "finch.yaml")
				require.NoError(t, afero.WriteFile(fs, finchConfigPath, []byte(data), 0o600))

				data = `{"credsStore":}`
				configJSONPath := filepath.Join(finchDir, "config.json")
				require.NoError(t, afero.WriteFile(fs, configJSONPath, []byte(data), 0o600))
			},
			postRunCheck: func(_ afero.Fs, _ string) (string, error) {
				return "", nil
			},
			errorExists:    true,
			wantConfigJSON: "",
			finchDir:       "/.finch",
		},
		{
			name: "should return no error if config.json is not configured with credsStore",
			mockSvc: func(fs afero.Fs, finchDir string) {
				data := "cpus: 2\nmemory: 6GiB"
				finchConfigPath := filepath.Join(finchDir, "finch.yaml")
				require.NoError(t, afero.WriteFile(fs, finchConfigPath, []byte(data), 0o600))

				data = `{}`
				configJSONPath := filepath.Join(finchDir, "config.json")
				require.NoError(t, afero.WriteFile(fs, configJSONPath, []byte(data), 0o600))
			},
			postRunCheck: func(_ afero.Fs, _ string) (string, error) {
				return "", nil
			},
			errorExists:    false,
			wantConfigJSON: "",
			finchDir:       "/.finch",
		},
		{
			name: "should refresh config.json if creds_helpers is not configured in finch.yaml, but credsStore is configured in config.json",
			mockSvc: func(fs afero.Fs, finchDir string) {
				data := "cpus: 2\nmemory: 6GiB"
				finchConfigPath := filepath.Join(finchDir, "finch.yaml")
				require.NoError(t, afero.WriteFile(fs, finchConfigPath, []byte(data), 0o600))

				data = `{"credsStore":"ecr-login"}`
				configJSONPath := filepath.Join(finchDir, "config.json")
				require.NoError(t, afero.WriteFile(fs, configJSONPath, []byte(data), 0o600))
			},
			postRunCheck: func(fs afero.Fs, configJSONPath string) (string, error) {
				fileRead, _ := fs.Open(configJSONPath)
				defer fileRead.Close() //nolint:errcheck // closing the file

				bytes, err := afero.ReadAll(fileRead)
				if err != nil {
					return "", err
				}

				return string(bytes), nil
			},
			errorExists:    false,
			wantConfigJSON: `{"auths":{}}`,
			finchDir:       "/.finch",
		},
	}

	darwinTestCases := []testCaseType{
		{
			name: "should return an error if finch.yaml is invalid",
			mockSvc: func(fs afero.Fs, finchDir string) {
				data := "cpus: 2\nmemory: 6Gi"
				finchConfigPath := filepath.Join(finchDir, "finch.yaml")
				require.NoError(t, afero.WriteFile(fs, finchConfigPath, []byte(data), 0o600))
			},
			postRunCheck: func(_ afero.Fs, _ string) (string, error) {
				return "", nil
			},
			errorExists:    true,
			wantConfigJSON: "",
			finchDir:       "/.finch",
		},
	}

	switch runtime.GOOS {
	case "windows":
		break
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

			tc.mockSvc(fs, tc.finchDir)

			finchConfigPath := filepath.Join(tc.finchDir, "finch.yaml")
			configJSONPath := filepath.Join(tc.finchDir, "config.json")
			err := RefreshConfigFile(fs, l, finchConfigPath, configJSONPath)
			require.Equal(t, tc.errorExists, err != nil)

			configJSON, _ := tc.postRunCheck(fs, configJSONPath)
			require.Equal(t, tc.wantConfigJSON, configJSON)
		})
	}
}
