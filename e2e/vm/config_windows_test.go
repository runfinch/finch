// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
//go:build windows

package vm

import (
	"os"
	"path/filepath"
)

var (
	finchConfigFilePath = filepath.Join(os.Getenv("LOCALAPPDATA"), ".finch", "finch.yaml")
	finchConfigJSONPath = filepath.Join(os.Getenv("LOCALAPPDATA"), ".finch", "config.json")
)
