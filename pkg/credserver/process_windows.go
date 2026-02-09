// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows

// Package credserver provides Windows stubs for credential server operations.
package credserver

// TODO: Windows currently has no credential server implementation. Unlike macOS which uses
// a credential server daemon with Unix socket communication, Windows relies on credential
// helper binaries running directly in WSL2. Consider implementing a Windows credential server
// that can bridge WSL2 and Windows credential stores (e.g., wincred) using named pipes or other
// IPC mechanisms to achieve consistency with the macOS socket-based architecture.

// StartCredentialServer is a no-op on Windows.
func StartCredentialServer(_ string) error {
	return nil
}

// IsDaemonRunning is a no-op on Windows, always returns false.
func IsDaemonRunning(_ string) bool {
	return false
}

// StopCredentialServer is a no-op on Windows.
func StopCredentialServer(_ string) error {
	return nil
}
