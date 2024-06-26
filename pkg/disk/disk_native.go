// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build linux || native
// +build linux native

package disk

// EnsureUserDataDisk checks the current disk configuration and fixes it if needed.
func (m *userDataDiskManager) EnsureUserDataDisk() error {
	return nil
}

// DetachUserDataDisk unmounts the disk in wsl.
func (m *userDataDiskManager) DetachUserDataDisk() error {
	return nil
}

func (m *userDataDiskManager) createDisk(_ string) error {
	return nil
}

func (m *userDataDiskManager) attachDisk(_ string) error {
	return nil
}
