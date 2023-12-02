// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package config

import (
	"errors"
	"fmt"
	"io/fs"
	"os/user"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/spf13/afero"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/runfinch/finch/pkg/mocks"
)

// disclaimer: this key has never been and should never be used for anything
var fakeSSHKey = `
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
QyNTUxOQAAACAfR367TtAGV+abvj4pRDcFdU2enKE+iC4qF3LNJF9eyQAAAKjEIxhXxCMY
VwAAAAtzc2gtZWQyNTUxOQAAACAfR367TtAGV+abvj4pRDcFdU2enKE+iC4qF3LNJF9eyQ
AAAEANzWA32dcyDqkfg7zbzt7D76PTyyaX0n1/goKJNPLYyB9HfrtO0AZX5pu+PilENwV1
TZ6coT6ILioXcs0kX17JAAAAI2FsdmFqdXNAODg2NjVhMGJmN2NhLmFudC5hbWF6b24uY2
9tAQI=
-----END OPENSSH PRIVATE KEY-----`

func TestNerdctlConfigApplier_updateEnvironment(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name         string
		hostUser     string
		mockSvc      func(t *testing.T, fs afero.Fs, lima *mocks.MockLimaWrapper)
		postRunCheck func(t *testing.T, fs afero.Fs)
		want         error
	}{
		{
			name:     "happy path",
			hostUser: "mock_user",
			mockSvc: func(t *testing.T, fs afero.Fs, lima *mocks.MockLimaWrapper) {
				require.NoError(t, afero.WriteFile(fs, "/home/mock_user.linux/.bashrc", []byte(""), 0o644))

				mockUser := &user.User{
					Username: "mock_user",
				}
				lima.EXPECT().LimaUser(false).Return(mockUser, nil).AnyTimes()
			},
			postRunCheck: func(t *testing.T, fs afero.Fs) {
				fileBytes, err := afero.ReadFile(fs, "/home/mock_user.linux/.bashrc")
				require.NoError(t, err)
				assert.Equal(t,
					[]byte("\nexport DOCKER_CONFIG=\"/Users/mock_user/.finch\""+
						"\n[ -L /usr/local/bin/docker-credential-ecr-login ] || sudo ln -s "+
						"/Users/mock_user/.finch/cred-helpers/docker-credential-ecr-login /usr/local/bin/"+
						"\n"+"[ -L /root/.aws ] || sudo ln -fs  /Users/mock_user/.aws /root/.aws"), fileBytes)
			},
			want: nil,
		},
		{
			name:     "happy path, file already exists and already contains expected variables",
			hostUser: "mock_user",
			mockSvc: func(t *testing.T, fs afero.Fs, lima *mocks.MockLimaWrapper) {
				require.NoError(
					t,
					afero.WriteFile(
						fs,
						"/home/mock_user.linux/.bashrc",
						[]byte("export DOCKER_CONFIG=\"/Users/mock_user/.finch\""+"\n"+"[ -L /usr/local/bin/docker-credential-ecr-login ] "+
							"|| sudo ln -s /Users/mock_user/.finch/cred-helpers/docker-credential-ecr-login /usr/local/bin/"+
							"\n"+"[ -L /root/.aws ] || sudo ln -fs  /Users/mock_user/.aws /root/.aws"),
						0o644,
					),
				)

				mockUser := &user.User{
					Username: "mock_user",
				}
				lima.EXPECT().LimaUser(false).Return(mockUser, nil).AnyTimes()
			},
			postRunCheck: func(t *testing.T, fs afero.Fs) {
				fileBytes, err := afero.ReadFile(fs, "/home/mock_user.linux/.bashrc")
				require.NoError(t, err)
				assert.Equal(t, []byte(`export DOCKER_CONFIG="/Users/mock_user/.finch"`+"\n"+
					"[ -L /usr/local/bin/docker-credential-ecr-login ] "+
					"|| sudo ln -s /Users/mock_user/.finch/cred-helpers/docker-credential-ecr-login /usr/local/bin/"+
					"\n"+"[ -L /root/.aws ] || sudo ln -fs  /Users/mock_user/.aws /root/.aws"), fileBytes)
			},
			want: nil,
		},
		{
			name:     ".bashrc file doesn't exist",
			hostUser: "mock_user",
			mockSvc: func(t *testing.T, fs afero.Fs, lima *mocks.MockLimaWrapper) {
				mockUser := &user.User{
					Username: "mock_user",
				}
				lima.EXPECT().LimaUser(false).Return(mockUser, nil).AnyTimes()
			},
			postRunCheck: func(t *testing.T, fs afero.Fs) {},
			want: fmt.Errorf(
				"failed to read config file: %w",
				&fs.PathError{Op: "open", Path: "/home/mock_user.linux/.bashrc", Err: errors.New("file does not exist")},
			),
		},
		{
			name:     "host user is not a valid linux username",
			hostUser: "invalid.user",
			mockSvc: func(t *testing.T, fs afero.Fs, lima *mocks.MockLimaWrapper) {
				require.NoError(t, afero.WriteFile(fs, "/home/lima.linux/.bashrc", []byte(""), 0o644))

				mockUser := &user.User{
					Username: "lima",
				}
				lima.EXPECT().LimaUser(false).Return(mockUser, nil).AnyTimes()
			},
			postRunCheck: func(t *testing.T, fs afero.Fs) {
				fileBytes, err := afero.ReadFile(fs, "/home/lima.linux/.bashrc")
				require.NoError(t, err)
				assert.Equal(t,
					[]byte("\nexport DOCKER_CONFIG=\"/Users/invalid.user/.finch\""+
						"\n[ -L /usr/local/bin/docker-credential-ecr-login ] || sudo ln -s "+
						"/Users/invalid.user/.finch/cred-helpers/docker-credential-ecr-login /usr/local/bin/"+
						"\n"+"[ -L /root/.aws ] || sudo ln -fs  /Users/invalid.user/.aws /root/.aws"), fileBytes)
			},
			want: nil,
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			fs := afero.NewMemMapFs()
			d := mocks.NewDialer(ctrl)
			lima := mocks.NewMockLimaWrapper(ctrl)

			tc.mockSvc(t, fs, lima)
			nca, _ := NewNerdctlApplier(d, fs, "/private-key", tc.hostUser, lima).(*nerdctlConfigApplier)
			got := nca.updateEnvironment(fs)
			require.Equal(t, tc.want, got)

			tc.postRunCheck(t, fs)
		})
	}
}

func Test_updateNerdctlConfig(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name         string
		user         string
		rootless     bool
		mockSvc      func(t *testing.T, fs afero.Fs)
		postRunCheck func(t *testing.T, fs afero.Fs)
		want         error
	}{
		{
			name:     "happy path, rootless",
			user:     "mock_user",
			rootless: true,
			mockSvc:  func(t *testing.T, fs afero.Fs) {},
			postRunCheck: func(t *testing.T, fs afero.Fs) {
				fileBytes, err := afero.ReadFile(fs, "/home/mock_user.linux/.config/nerdctl/nerdctl.toml")
				require.NoError(t, err)
				assert.Equal(t, []byte(`namespace = "finch"`+"\n"), fileBytes)
			},
			want: nil,
		},
		{
			name:     "happy path, rootful",
			user:     "mock_user",
			rootless: false,
			mockSvc:  func(t *testing.T, fs afero.Fs) {},
			postRunCheck: func(t *testing.T, fs afero.Fs) {
				fileBytes, err := afero.ReadFile(fs, "/etc/nerdctl/nerdctl.toml")
				require.NoError(t, err)
				assert.Equal(t, []byte(`namespace = "finch"`+"\n"), fileBytes)
			},
			want: nil,
		},
		{
			name:     "happy path, config already exists",
			user:     "mock_user",
			rootless: true,
			mockSvc: func(t *testing.T, fs afero.Fs) {
				err := afero.WriteFile(fs, "/home/mock_user.linux/.config/nerdctl/nerdctl.toml",
					[]byte(`namespace = "something-else"`), 0o644)
				require.NoError(t, err)
			},
			postRunCheck: func(t *testing.T, fs afero.Fs) {
				fileBytes, err := afero.ReadFile(fs, "/home/mock_user.linux/.config/nerdctl/nerdctl.toml")
				require.NoError(t, err)
				assert.Equal(t, []byte(`namespace = "finch"`+"\n"), fileBytes)
			},
			want: nil,
		},
		{
			name:     "config contains invalid TOML",
			user:     "mock_user",
			rootless: true,
			mockSvc: func(t *testing.T, fs afero.Fs) {
				err := afero.WriteFile(fs, "/home/mock_user.linux/.config/nerdctl/nerdctl.toml", []byte("{not toml}"), 0o644)
				require.NoError(t, err)
			},
			postRunCheck: func(t *testing.T, fs afero.Fs) {},
			want: fmt.Errorf(
				"failed to unmarshal config file %s: %w",
				"/home/mock_user.linux/.config/nerdctl/nerdctl.toml",
				errors.New("(1, 1): parsing error: keys cannot contain { character"),
			),
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			fs := afero.NewMemMapFs()

			tc.mockSvc(t, fs)
			got := updateNerdctlConfig(fs, tc.user, tc.rootless)
			require.Equal(t, tc.want, got)

			tc.postRunCheck(t, fs)
		})
	}
}

func TestNerdctlConfigApplier_Apply(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name       string
		path       string
		hostUser   string
		remoteAddr string
		mockSvc    func(t *testing.T, fs afero.Fs, d *mocks.Dialer)
		want       error
	}{
		{
			name:       "private key path doesn't exist",
			path:       "/private-key",
			remoteAddr: "",
			hostUser:   "mock-host-user",
			mockSvc: func(t *testing.T, fs afero.Fs, d *mocks.Dialer) {
			},
			want: fmt.Errorf(
				"failed to create ssh client config: %w",
				fmt.Errorf(
					"failed to open private key file: %w",
					&fs.PathError{Op: "open", Path: "/private-key", Err: errors.New("file does not exist")},
				),
			),
		},
		{
			name:       "dialer fails to create the ssh connection",
			path:       "/private-key",
			remoteAddr: "deadbeef",
			mockSvc: func(t *testing.T, fs afero.Fs, d *mocks.Dialer) {
				err := afero.WriteFile(fs, "/private-key", []byte(fakeSSHKey), 0o600)
				require.NoError(t, err)

				d.EXPECT().Dial("tcp", "deadbeef", gomock.Any()).Return(nil, fmt.Errorf("some error"))
			},
			want: fmt.Errorf("failed to setup ssh client: %w", fmt.Errorf("some error")),
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			fs := afero.NewMemMapFs()
			d := mocks.NewDialer(ctrl)
			lima := mocks.NewMockLimaWrapper(ctrl)

			tc.mockSvc(t, fs, d)
			got := NewNerdctlApplier(d, fs, tc.path, tc.hostUser, lima).Apply(tc.remoteAddr)

			assert.Equal(t, tc.want, got)
		})
	}
}
