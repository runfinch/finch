// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build (darwin || windows) && !native

package command

import (
	"fmt"
	"io"
	"runtime"
)

const (
	envKeyLimaHome = "LIMA_HOME"
	envKeyUnixPath = "PATH"
	envKeyWinPath  = "Path"
)

func (ncc *nerdctlCmdCreator) create(stdin io.Reader, stdout, stderr io.Writer, args ...string) Command {
	ncc.logger.Debugf("Creating limactl command: ARGUMENTS: %v, %s: %s", args, envKeyLimaHome, ncc.limaHomePath)
	cmd := ncc.cmdCreator.Create(ncc.limactlPath, args...)
	limaHomeEnv := fmt.Sprintf("%s=%s", envKeyLimaHome, ncc.limaHomePath)
	var pathEnv string
	var envKeyPath string
	var path string
	if runtime.GOOS == "windows" {
		envKeyPath = envKeyWinPath
		path = ncc.systemDeps.Env(envKeyPath)
		path = fmt.Sprintf(`%s\;%s`, ncc.binPath, path)
		pathEnv = fmt.Sprintf("%s=%s", envKeyPath, path)
	} else {
		envKeyPath = envKeyUnixPath
		path = ncc.systemDeps.Env(envKeyPath)
		path = fmt.Sprintf("%s:%s", ncc.binPath, path)
		pathEnv = fmt.Sprintf("%s=%s", envKeyPath, path)
	}

	newPathEnv := replaceOrAppend(ncc.systemDeps.Environ(), envKeyLimaHome, limaHomeEnv)
	newPathEnv = replaceOrAppend(newPathEnv, envKeyPath, pathEnv)

	cmd.SetEnv(newPathEnv)
	cmd.SetStdin(stdin)
	cmd.SetStdout(stdout)
	cmd.SetStderr(stderr)
	return cmd
}
