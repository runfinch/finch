// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build (darwin || windows) && !native

package command

import (
	"fmt"
	"io"
	"runtime"
)

func (lcc *limaCmdCreator) create(stdin io.Reader, stdout, stderr io.Writer, args ...string) Command {
	lcc.logger.Debugf("Creating limactl command: ARGUMENTS: %v, %s: %s", args, envKeyLimaHome, lcc.limaHomePath)
	cmd := lcc.cmdCreator.Create(lcc.limactlPath, args...)
	limaHomeEnv := fmt.Sprintf("%s=%s", envKeyLimaHome, lcc.limaHomePath)
	var pathEnv string
	var envKeyPath string
	var path string
	if runtime.GOOS == "windows" {
		envKeyPath = envKeyWinPath
		path = lcc.systemDeps.Env(envKeyPath)
		path = fmt.Sprintf(`%s\;%s`, lcc.binPath, path)
		pathEnv = fmt.Sprintf("%s=%s", envKeyPath, path)
	} else {
		envKeyPath = envKeyUnixPath
		path = lcc.systemDeps.Env(envKeyPath)
		path = fmt.Sprintf("%s:%s", lcc.binPath, path)
		pathEnv = fmt.Sprintf("%s=%s", envKeyPath, path)
	}

	newPathEnv := replaceOrAppend(lcc.systemDeps.Environ(), envKeyLimaHome, limaHomeEnv)
	newPathEnv = replaceOrAppend(newPathEnv, envKeyPath, pathEnv)

	cmd.SetEnv(newPathEnv)
	cmd.SetStdin(stdin)
	cmd.SetStdout(stdout)
	cmd.SetStderr(stderr)
	return cmd
}
