// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build !windows
// +build !windows

package path

// FinchRootDir returns the path to the Finch root directory, which is $HOME on UNIX.
func (Finch) FinchRootDir(ffd FinchFinderDeps) (string, error) {
	home, err := ffd.GetUserHome()
	if err != nil {
		return "", err
	}

	return home, nil
}
