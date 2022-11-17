// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package fssh provides functions and methods to configure and create SSH connections.
package fssh

import (
	"errors"
	"fmt"
	"net"

	"github.com/spf13/afero"
	"golang.org/x/crypto/ssh"
)

// Dialer abstracts out ssh.Dial to facilitate unit testing.
//
//go:generate mockgen -copyright_file=../../copyright_header -destination=../mocks/pkg_ssh_dialer.go -package=mocks -mock_names Dialer=Dialer . Dialer
type Dialer interface {
	Dial(network string, addr string, config *ssh.ClientConfig) (*ssh.Client, error)
}

var _ Dialer = (*dialer)(nil)

type dialer struct{}

func (*dialer) Dial(network string, addr string, config *ssh.ClientConfig) (*ssh.Client, error) {
	return ssh.Dial(network, addr, config)
}

// NewDialer returns a Dialer that calls ssh.Dial under the hood.
func NewDialer() Dialer {
	return &dialer{}
}

func hostKeyCallback() ssh.HostKeyCallback {
	return func(_ string, remote net.Addr, _ ssh.PublicKey) error {
		addr, ok := remote.(*net.TCPAddr)
		if !ok {
			return errors.New("failed to convert the remote address to a TCP address")
		}
		if !addr.IP.IsLoopback() {
			return fmt.Errorf("addresses that are not loopback addresses are not supported, address: %s", addr.String())
		}
		return nil
	}
}

// NewClientConfig returns a client config that can only connect to a loopback address.
func NewClientConfig(fs afero.Fs, user string, privateKeyPath string) (*ssh.ClientConfig, error) {
	fileBytes, err := afero.ReadFile(fs, privateKeyPath)
	if err != nil {
		return nil, fmt.Errorf("failed to open private key file: %w", err)
	}
	signer, err := ssh.ParsePrivateKey(fileBytes)
	if err != nil {
		return nil, fmt.Errorf("failed to parse private key from %s: %w", privateKeyPath, err)
	}

	auths := []ssh.AuthMethod{ssh.PublicKeys(signer)}

	return &ssh.ClientConfig{
		User:            user,
		Auth:            auths,
		HostKeyCallback: hostKeyCallback(),
	}, nil
}
