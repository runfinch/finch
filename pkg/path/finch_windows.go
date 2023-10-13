// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows
// +build windows

package path

import (
	"golang.org/x/sys/windows/registry"
)

// FinchRootDir returns the path to the Finch root directory, which is %LOCALAPPDATA% on Windows.
// It also canonicalizes any environment variables that may be unexpanded in the path so that all
// paths based on it can be passed safely to other programs which may execute outside of the user's context.
func (Finch) FinchRootDir(ffd FinchFinderDeps) (string, error) {
	appDir := ffd.Env("LOCALAPPDATA")
	expandedPath, err := registry.ExpandString(appDir)
	if err != nil {
		return "", err
	}

	return expandedPath, nil
}
