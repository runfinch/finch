// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build linux

package credserver

// StartCredentialServer is not implemented on Linux.
func StartCredentialServer(finchRootPath string) error {
	return nil
}

// StopCredentialServer is not implemented on Linux.
func StopCredentialServer(finchRootPath string) error {
	return nil
}
