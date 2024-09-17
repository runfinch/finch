// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package support

import (
	"path"
	"path/filepath"
	"runtime"
)

func (bc *bundleConfig) LogFiles() []string {
	files := []string{
		filepath.Join(bc.finch.LimaInstancePath(), "ha.stderr.log"),
		filepath.Join(bc.finch.LimaInstancePath(), "ha.stdout.log"),
	}

	if runtime.GOOS != "windows" {
		files = append(files, filepath.Join(bc.finch.LimaInstancePath(), "serial.log"))
	}
	return files
}

func (bc *bundleConfig) ConfigFiles() []string {
	return []string{
		path.Join(bc.finch.LimaInstancePath(), "lima.yaml"),
		bc.finch.ConfigFilePath(bc.rootDir),
	}
}
