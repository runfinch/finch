// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows

package credserver

import "github.com/docker/docker-credential-helpers/credentials"

// GetCredentials is a stub on Windows that returns empty credentials.
func GetCredentials(registryHostname string, _ ...map[string]string) (*credentials.Credentials, error) {
	return &credentials.Credentials{ServerURL: registryHostname}, nil
}

// EnsureConfigExists is a no-op on Windows.
func EnsureConfigExists(_ string) error {
	return nil
}
