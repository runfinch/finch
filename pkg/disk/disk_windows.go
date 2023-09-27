// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows
// +build windows

package disk

// EnsureUserDataDisk checks the current disk configuration and fixes it if needed.
// on Windows, this is a no-op.
func (m *userDataDiskManager) EnsureUserDataDisk() error {
	return nil
}
