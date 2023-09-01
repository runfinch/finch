// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package fssh

import (
	"errors"
	"fmt"
	"io/fs"
	"net"
	"path/filepath"
	"testing"

	"github.com/spf13/afero"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"golang.org/x/crypto/ssh"
)

func Test_hostKeyCallback(t *testing.T) {
	t.Parallel()
	testCases := []struct {
		name   string
		remote net.Addr
		want   error
	}{
		{
			name:   "happy path, remote is a valid TCP loopback address",
			remote: &net.TCPAddr{IP: net.ParseIP("127.0.0.1"), Port: 8080},
			want:   nil,
		},
		{
			name:   "remote is not a valid address",
			remote: nil,
			want:   errors.New("failed to convert the remote address to a TCP address"),
		},
		{
			name:   "remote is not a loopback address",
			remote: &net.TCPAddr{IP: net.ParseIP("192.0.2.1"), Port: 8080},
			want:   errors.New("addresses that are not loopback addresses are not supported, address: 192.0.2.1:8080"),
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			got := hostKeyCallback()("", tc.remote, nil)
			assert.Equal(t, tc.want, got)
		})
	}
}

func TestNewClientConfig(t *testing.T) {
	t.Parallel()
	// Handles OS specific path delimiter
	pkPath := filepath.Join(string(filepath.Separator), "private_key")
	testCases := []struct {
		name           string
		user           string
		privateKeyPath string
		mockSvc        func(t *testing.T, fs afero.Fs)
		want           *ssh.ClientConfig
		wantErr        error
	}{
		{
			name:           "happy path",
			user:           "test",
			privateKeyPath: pkPath,
			mockSvc: func(t *testing.T, fs afero.Fs) {
				err := afero.WriteFile(fs, pkPath, []byte(`
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
QyNTUxOQAAACAfR367TtAGV+abvj4pRDcFdU2enKE+iC4qF3LNJF9eyQAAAKjEIxhXxCMY
VwAAAAtzc2gtZWQyNTUxOQAAACAfR367TtAGV+abvj4pRDcFdU2enKE+iC4qF3LNJF9eyQ
AAAEANzWA32dcyDqkfg7zbzt7D76PTyyaX0n1/goKJNPLYyB9HfrtO0AZX5pu+PilENwV1
TZ6coT6ILioXcs0kX17JAAAAI2FsdmFqdXNAODg2NjVhMGJmN2NhLmFudC5hbWF6b24uY2
9tAQI=
-----END OPENSSH PRIVATE KEY-----`), 0o644)
				require.NoError(t, err)
			},
			want: &ssh.ClientConfig{
				User: "test",
			},
			wantErr: nil,
		},
		{
			name:           "private key file doesn't exist",
			user:           "test",
			privateKeyPath: pkPath,
			mockSvc:        func(t *testing.T, fs afero.Fs) {},
			want:           nil,
			wantErr: fmt.Errorf(
				"failed to open private key file: %w",
				&fs.PathError{Op: "open", Path: pkPath, Err: errors.New("file does not exist")},
			),
		},
		{
			name:           "invalid private key file contents",
			user:           "test",
			privateKeyPath: pkPath,
			mockSvc: func(t *testing.T, fs afero.Fs) {
				err := afero.WriteFile(fs, pkPath, []byte(`not a private key`), 0o644)
				require.NoError(t, err)
			},
			want:    nil,
			wantErr: fmt.Errorf("failed to parse private key from %s: %w", pkPath, fmt.Errorf("ssh: no key found")),
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			fs := afero.NewMemMapFs()

			tc.mockSvc(t, fs)
			got, gotErr := NewClientConfig(fs, tc.user, tc.privateKeyPath)
			require.Equal(t, tc.wantErr, gotErr)

			if gotErr == nil {
				require.Len(t, got.Auth, 1)
				// Comparing functions is always false unless both are nil.
				// See https://github.com/stretchr/testify/issues/182.
				assert.NotNil(t, got.Auth[0])
				assert.NotNil(t, got.HostKeyCallback)

				// Assert all of the non-function members of the struct.
				assert.Equal(t, tc.want.User, got.User)
				assert.Equal(t, tc.want.RekeyThreshold, got.RekeyThreshold)
				assert.Equal(t, tc.want.KeyExchanges, got.KeyExchanges)
				assert.Equal(t, tc.want.Ciphers, got.Ciphers)
				assert.Equal(t, tc.want.MACs, got.MACs)
				assert.Equal(t, tc.want.ClientVersion, got.ClientVersion)
				assert.Equal(t, tc.want.HostKeyAlgorithms, got.HostKeyAlgorithms)
				assert.Equal(t, tc.want.Timeout, got.Timeout)
			}
		})
	}
}
