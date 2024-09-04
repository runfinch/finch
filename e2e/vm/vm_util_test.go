// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package vm

import (
	"os"
	"os/exec"
	"path/filepath"

	"github.com/runfinch/common-tests/option"
)

func limaCtlOpt(installed bool) (*option.Option, error) {
	var limactlPath, limaHomePathEnv string
	if installed {
		fpath, err := exec.LookPath("finch")
		if err != nil {
			return nil, err
		}
		realFinchPath, err := filepath.EvalSymlinks(fpath)
		if err != nil {
			return nil, err
		}
		limactlPath = filepath.Join(realFinchPath, "../../lima/bin/limactl")
		limaHomePathEnv = "LIMA_HOME=" + filepath.Join(realFinchPath, "../../lima/data")
	} else {
		wd, err := os.Getwd()
		if err != nil {
			return nil, err
		}
		limactlPath = filepath.Join(wd, "../../_output/lima/bin/limactl")
		limaHomePathEnv = "LIMA_HOME=" + filepath.Join(wd, "../../_output/lima/data")
	}
	return option.New([]string{limactlPath}, option.Env([]string{limaHomePathEnv}))
}
