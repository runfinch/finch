// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows

package credserver

import "github.com/docker/docker-credential-helpers/credentials"

// TODO: Windows credential utilities are currently stubs. Unlike macOS which has full
// credential helper integration with osxkeychain and socket-based communication,
// Windows lacks equivalent functionality. Implement Windows-specific credential
// retrieval that can interface with Windows Credential Manager.

// GetCredentials is a stub on Windows that returns empty credentials.
func GetCredentials(registryHostname string, _ ...map[string]string) (*credentials.Credentials, error) {
	return &credentials.Credentials{ServerURL: registryHostname}, nil
}

// EnsureConfigExists is a no-op on Windows.
func EnsureConfigExists(_ string) error {
	return nil
}

// HelperDir is a stub on Windows (no bundled credential helper directory to add to
// PATH). Returning an empty string makes the CLI's PATH-augmentation a no-op.
func HelperDir() string { return "" }
