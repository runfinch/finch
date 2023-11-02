// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows
// +build windows

package path

import (
	"fmt"
	"path/filepath"
	"strings"

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
	// reject any paths that end with unexpected characters
	fileName := filepath.Base(expandedPath)
	if strings.Contains(fileName, "&") || strings.Contains(fileName, `"`) {
		return "", fmt.Errorf("unexpected LOCALAPPDATA path %q", expandedPath)
	}

	return expandedPath, nil
}
