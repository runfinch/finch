// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows

// Package credserver provides Windows stubs for credential server operations.
package credserver

// StartCredentialServer is a no-op on Windows.
func StartCredentialServer(_ string) error {
	return nil
}

// StopCredentialServer is a no-op on Windows.
func StopCredentialServer(_ string) error {
	return nil
}
