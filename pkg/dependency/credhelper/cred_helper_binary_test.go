// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package credhelper

import (
	"fmt"
	"io/fs"
	"path/filepath"
	"testing"

	"github.com/runfinch/finch/pkg/mocks"
	"github.com/runfinch/finch/pkg/path"

	"github.com/golang/mock/gomock"
	"github.com/spf13/afero"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

const (
	mockFinchPathString = "mock_prefix"
	mockFinchPath       = path.Finch(mockFinchPathString)
)

func Test_credHelperConfigName(t *testing.T) {
	t.Parallel()

	got := newCredHelperBinary("", nil, nil, nil, "", "user",
		helperConfig{
			"docker-credential-cred-helper", "", "",
			"", "",
		}).credHelperConfigName()
	assert.Equal(t, "cred-helper", got)
}

func Test_fullInstallPath(t *testing.T) {
	t.Parallel()

	got := newCredHelperBinary("", nil, nil, nil, "", "user",
		helperConfig{
			"docker-credential-cred-helper", "", "", "/folder/",
			"",
		}).fullInstallPath()
	assert.Equal(t, filepath.Join(string(filepath.Separator), "folder", "docker-credential-cred-helper"), got)
}

func Test_updateConfigFile(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name         string
		mockSvc      func(t *testing.T, mFs afero.Fs, l *mocks.Logger)
		postRunCheck func(t *testing.T, fs afero.Fs)
		want         error
	}{
		{
			name: "happy path",
			mockSvc: func(t *testing.T, mFs afero.Fs, l *mocks.Logger) {
				require.NoError(t, mFs.MkdirAll("/mock_prefix/.finch/", fs.ModeDir))
				JSONstr := fmt.Sprintf("{\"credsStore\":\"%s\"}", "ecr-login")
				fileData := []byte(JSONstr)
				_, err := mFs.Create("mock_prefix/.finch/config.json")
				require.NoError(t, err)
				err = afero.WriteFile(mFs, "mock_prefix/.finch/config.json",
					fileData, 0o666)

				require.NoError(t, err)
			},
			postRunCheck: func(t *testing.T, fs afero.Fs) {},
			want:         nil,
		},
		{
			name: "file doesn't exist",
			mockSvc: func(t *testing.T, mFs afero.Fs, l *mocks.Logger) {
				require.NoError(t, mFs.MkdirAll("/mock_prefix/.finch/", fs.ModeDir))
			},
			postRunCheck: func(t *testing.T, fs afero.Fs) {
				fileBytes, err := afero.ReadFile(fs, "mock_prefix/.finch/config.json")
				require.NoError(t, err)
				JSONstr := fmt.Sprintf("{\"credsStore\":\"%s\"}", "ecr-login")
				fileData := []byte(JSONstr)
				assert.Equal(t, fileData, fileBytes)

				require.NoError(t, err)
			},
			want: nil,
		},
		{
			name: "file exists incorrect content",
			mockSvc: func(t *testing.T, mFs afero.Fs, l *mocks.Logger) {
				require.NoError(t, mFs.MkdirAll("/mock_prefix/.finch/", fs.ModeDir))
				JSONstr := fmt.Sprintf("{\"credsStore\":\"%s\"}", "abcd")
				fileData := []byte(JSONstr)
				_, err := mFs.Create("mock_prefix/.finch/config.json")
				require.NoError(t, err)
				err = afero.WriteFile(mFs, "mock_prefix/.finch/config.json",
					fileData, 0o666)

				require.NoError(t, err)
			},
			postRunCheck: func(t *testing.T, fs afero.Fs) {
				fileBytes, err := afero.ReadFile(fs, "mock_prefix/.finch/config.json")
				require.NoError(t, err)
				JSONstr := fmt.Sprintf("{\"auths\":null,\"credsStore\":\"%s\"}", "ecr-login")
				fileData := []byte(JSONstr)
				assert.Equal(t, fileData, fileBytes)

				require.NoError(t, err)
			},
			want: nil,
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			mFs := afero.NewMemMapFs()
			l := mocks.NewLogger(ctrl)
			tc.mockSvc(t, mFs, l)
			hc := helperConfig{
				"docker-credential-ecr-login", "",
				"sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855", "mock_prefix/cred-helpers/",
				"mock_prefix/.finch/",
			}
			// hash of an empty file
			got := updateConfigFile(newCredHelperBinary(mockFinchPath, mFs, nil, l, "ecr-login", "", hc))

			assert.Equal(t, tc.want, got)
			tc.postRunCheck(t, mFs)
		})
	}
}

func TestBinaries_Installed(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		mockSvc func(t *testing.T, mFs afero.Fs, l *mocks.Logger)
		want    bool
	}{
		{
			name: "happy path",
			mockSvc: func(t *testing.T, mFs afero.Fs, l *mocks.Logger) {
				require.NoError(t, mFs.MkdirAll("/mock_prefix/cred-helpers/", fs.ModeDir))
				fileData := []byte("")
				_, err := mFs.Create("mock_prefix/cred-helpers/docker-credential-binary")
				require.NoError(t, err)
				err = afero.WriteFile(mFs, "mock_prefix/cred-helpers/docker-credential-binary",
					fileData, 0o666)

				require.NoError(t, err)
			},
			want: true,
		},
		{
			name: "installation folder doesn't exist",
			mockSvc: func(t *testing.T, mFs afero.Fs, l *mocks.Logger) {
			},
			want: false,
		},
		{
			name: "folder exists file doesn't exist",
			mockSvc: func(t *testing.T, mFs afero.Fs, l *mocks.Logger) {
				require.NoError(t, mFs.MkdirAll("/mock_prefix/cred-helpers/", fs.ModeDir))
			},
			want: false,
		},
		{
			name: "file and folder exist hash doesn't match ",
			mockSvc: func(t *testing.T, mFs afero.Fs, l *mocks.Logger) {
				require.NoError(t, mFs.MkdirAll("/mock_prefix/cred-helpers/", fs.ModeDir))
				fileData := []byte("123")
				_, err := mFs.Create("mock_prefix/cred-helpers/docker-credential-binary")
				require.NoError(t, err)
				err = afero.WriteFile(mFs, "mock_prefix/cred-helpers/docker-credential-binary",
					fileData, 0o666)

				require.NoError(t, err)
				l.EXPECT().Info("Hash of the installed credential helper binary does not match")
			},
			want: false,
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			mFs := afero.NewMemMapFs()
			l := mocks.NewLogger(ctrl)
			tc.mockSvc(t, mFs, l)
			hc := helperConfig{
				"docker-credential-binary", "",
				"sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855", "mock_prefix/cred-helpers/",
				"mock_prefix/.finch/",
			}
			// hash of an empty file
			got := newCredHelperBinary(mockFinchPath, mFs, nil, l, "", "", hc).Installed()

			assert.Equal(t, tc.want, got)
		})
	}
}

func TestBinaries_Install(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		mockSvc func(
			l *mocks.Logger,
			cmd *mocks.Command,
			creator *mocks.CommandCreator,
			mFs afero.Fs)
		want error
	}{
		{
			name: "happy path",
			mockSvc: func(l *mocks.Logger, cmd *mocks.Command, creator *mocks.CommandCreator, mFs afero.Fs) {
				_, err := mFs.Create(filepath.Join("", "mock_prefix", "cred-helpers", "docker-credential-ecr-login"))
				require.NoError(t, err)
				cmd.EXPECT().Output().Times(2)
				l.EXPECT().Infof("Installing %s credential helper", "ecr")
				creator.EXPECT().Create("mkdir", "-p", filepath.Join("mock_prefix", "cred-helpers")).Return(cmd)
				creator.EXPECT().Create("curl", "--retry", "5", "--retry-max-time", "30", "--url",
					"https://amazon-ecr-credential-helper-releases.s3.us-east-2.amazonaws.com"+
						"/0.7.0/linux-arm64/docker-credential-ecr-login", "--output",
					filepath.Join("mock_prefix", "cred-helpers", "docker-credential-ecr-login")).Return(cmd)
			},
			want: nil,
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			cmd := mocks.NewCommand(ctrl)
			mFs := afero.NewMemMapFs()
			l := mocks.NewLogger(ctrl)
			creator := mocks.NewCommandCreator(ctrl)
			tc.mockSvc(l, cmd, creator, mFs)

			credHelperURL := "https://amazon-ecr-credential-helper-releases.s3.us-east-2.amazonaws.com" +
				"/0.7.0/linux-arm64/docker-credential-ecr-login"

			hc := helperConfig{
				"docker-credential-ecr-login", credHelperURL,
				"sha256:ff14a4da40d28a2d2d81a12a7c9c36294ddf8e6439780c4ccbc96622991f3714",
				filepath.Join("mock_prefix", "cred-helpers"),
				"mock_prefix/.finch/",
			}
			fc := "ecr-login"
			got := newCredHelperBinary(mockFinchPath, mFs, creator, l, fc, "", hc).Install()
			// fmt.Printf("Error is %s", got.Error())
			assert.Equal(t, tc.want, got)
		})
	}
}

func TestBinaries_RequiresRoot(t *testing.T) {
	t.Parallel()

	got := newCredHelperBinary(mockFinchPath, nil, nil, nil, "", "",
		helperConfig{}).RequiresRoot()
	assert.Equal(t, false, got)
}
