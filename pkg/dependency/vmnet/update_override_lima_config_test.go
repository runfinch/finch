// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package vmnet

import (
	"errors"
	"fmt"
	"io/fs"
	"strings"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/spf13/afero"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"gopkg.in/yaml.v3"

	"github.com/runfinch/finch/pkg/mocks"
	"github.com/runfinch/finch/pkg/path"
)

func TestOverrideLimaConfig_verifyConfigHasNetworkSection(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name     string
		filePath string
		mockSvc  func(t *testing.T, mFs afero.Fs, l *mocks.Logger)
		want     bool
	}{
		{
			name:     "happy path",
			filePath: "mock_config_file",
			mockSvc: func(t *testing.T, mFs afero.Fs, l *mocks.Logger) {
				require.NoError(t, afero.WriteFile(mFs, "mock_config_file", []byte(networkConfigString), 0o644))
			},
			want: true,
		},
		{
			name:     "config file doesn't exist",
			filePath: "mock_config_file",
			mockSvc: func(t *testing.T, mFs afero.Fs, l *mocks.Logger) {
				var pathErr fs.PathError
				pathErr.Op = "open"
				pathErr.Path = "mock_config_file"
				pathErr.Err = errors.New("file does not exist")

				l.EXPECT().Debugf("config file not found: %v", &pathErr)
			},
			want: false,
		},
		{
			name:     "config file contains invalid YAML",
			filePath: "mock_config_file",
			mockSvc: func(t *testing.T, mFs afero.Fs, l *mocks.Logger) {
				require.NoError(t, afero.WriteFile(mFs, "mock_config_file", []byte("this isn't YAML"), 0o644))

				var typeErr yaml.TypeError
				typeErr.Errors = []string{"line 1: cannot unmarshal !!str `this is...` into vmnet.NetworkConfig"}

				l.EXPECT().Errorf("failed to unmarshal YAML from override config file: %v", &typeErr)
			},
			want: false,
		},
		{
			name:     "config file contains more than one network section",
			filePath: "mock_config_file",
			mockSvc: func(t *testing.T, mFs afero.Fs, l *mocks.Logger) {
				data := `networks:
- lima: finch-shared
- not-lima: not-finch-shared
`
				require.NoError(t, afero.WriteFile(mFs, "mock_config_file", []byte(data), 0o644))

				l.EXPECT().Errorf("override config file has incorrect number of Networks defined (%d)", 2)
			},
			want: false,
		},
		{
			name:     "config file contains invalid network section",
			filePath: "mock_config_file",
			mockSvc: func(t *testing.T, mFs afero.Fs, l *mocks.Logger) {
				data := strings.ReplaceAll(networkConfigString, "finch-shared", "not-finch-shared")
				require.NoError(t, afero.WriteFile(mFs, "mock_config_file", []byte(data), 0o644))
			},
			want: false,
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			l := mocks.NewLogger(ctrl)
			mFs := afero.NewMemMapFs()
			tc.mockSvc(t, mFs, l)

			got := newOverrideLimaConfig("", nil, nil, mFs, l).verifyConfigHasNetworkSection(tc.filePath)
			assert.Equal(t, tc.want, got)
		})
	}
}

func TestOverrideLimaConfig_appendNetworkConfiguration(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name         string
		filePath     string
		mockSvc      func(mFs afero.Fs)
		want         error
		postRunCheck func(*testing.T, afero.Fs)
	}{
		{
			name:     "happy path",
			filePath: "mock_config_file",
			mockSvc:  func(mFs afero.Fs) {},
			want:     nil,
			postRunCheck: func(t *testing.T, mFs afero.Fs) {
				fileBytes, err := afero.ReadFile(mFs, "mock_config_file")
				require.NoError(t, err)
				assert.Equal(t, []byte(networkConfigString), fileBytes)
			},
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			mFs := afero.NewMemMapFs()
			tc.mockSvc(mFs)

			got := newOverrideLimaConfig("", nil, nil, mFs, nil).appendNetworkConfiguration(tc.filePath)
			require.Equal(t, tc.want, got)
			tc.postRunCheck(t, mFs)
		})
	}
}

func TestOverrideLimaConfig_shouldAddNetworksConfig(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		mockSvc func(*mocks.Dependency, *mocks.Dependency)
		want    bool
	}{
		{
			name: "happy path",
			mockSvc: func(b *mocks.Dependency, s *mocks.Dependency) {
				b.EXPECT().Installed().Return(true)
				s.EXPECT().Installed().Return(true)
			},
			want: true,
		},
		{
			name: "binaries are not installed",
			mockSvc: func(b *mocks.Dependency, s *mocks.Dependency) {
				b.EXPECT().Installed().Return(false)
			},
			want: false,
		},
		{
			name: "sudoers file is not installed",
			mockSvc: func(b *mocks.Dependency, s *mocks.Dependency) {
				b.EXPECT().Installed().Return(true)
				s.EXPECT().Installed().Return(false)
			},
			want: false,
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			b := mocks.NewDependency(ctrl)
			s := mocks.NewDependency(ctrl)
			tc.mockSvc(b, s)

			got := newOverrideLimaConfig(mockFinchPath, b, s, nil, nil).shouldAddNetworksConfig()
			assert.Equal(t, got, tc.want)
		})
	}
}

func TestOverrideLimaConfig_Installed(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		mockSvc func(t *testing.T, mFs afero.Fs, fp path.Finch)
		want    bool
	}{
		{
			name: "happy path",
			mockSvc: func(t *testing.T, mFs afero.Fs, fp path.Finch) {
				file, err := mFs.Create(fp.LimaOverrideConfigPath())
				require.NoError(t, err)

				_, err = file.WriteString(networkConfigString)
				require.NoError(t, err)
			},
			want: true,
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			mFs := afero.NewMemMapFs()
			tc.mockSvc(t, mFs, mockFinchPath)

			got := newOverrideLimaConfig(mockFinchPath, nil, nil, mFs, nil).Installed()
			assert.Equal(t, tc.want, got)
		})
	}
}

func TestOverrideLimaConfig_Install(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		mockSvc func(*testing.T, *mocks.Dependency, *mocks.Dependency, afero.Fs, path.Finch)
		want    error
	}{
		{
			name: "happy path",
			mockSvc: func(t *testing.T, b *mocks.Dependency, s *mocks.Dependency, mFs afero.Fs, fp path.Finch) {
				b.EXPECT().Installed().Return(true)
				s.EXPECT().Installed().Return(true)

				_, err := mFs.Create(fp.LimaOverrideConfigPath())
				require.NoError(t, err)
			},
			want: nil,
		},
		{
			name: "shouldAddNetwork is false",
			mockSvc: func(t *testing.T, b *mocks.Dependency, s *mocks.Dependency, mFs afero.Fs, fp path.Finch) {
				b.EXPECT().Installed().Return(false)
			},
			want: fmt.Errorf("skipping installation of network configuration because pre-requisites are missing"),
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			b := mocks.NewDependency(ctrl)
			s := mocks.NewDependency(ctrl)
			mFs := afero.NewMemMapFs()
			tc.mockSvc(t, b, s, mFs, mockFinchPath)

			overrideLimaConfig := newOverrideLimaConfig(mockFinchPath, b, s, mFs, nil)
			got := overrideLimaConfig.Install()
			assert.Equal(t, got, tc.want)
		})
	}
}

func TestOverrideLimaConfig_RequiresRoot(t *testing.T) {
	t.Parallel()

	got := newOverrideLimaConfig("", nil, nil, nil, nil).RequiresRoot()
	assert.Equal(t, false, got)
}
