// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package command

import (
	"fmt"
	"io"

	"github.com/runfinch/finch/pkg/flog"
)

// EnvKeyLimaHome is the name of the environment variable that Lima uses to set the "lima home" path.
// This is exported to facilitate unit testing, since it uses a different package (command_test).
const EnvKeyLimaHome = "LIMA_HOME"

type nerdctlCmdCreator struct {
	cmdCreator   Creator
	logger       flog.Logger
	systemDeps   NerdctlCmdCreatorSystemDeps
	limaHomePath string
	limactlPath  string
	binPath      string
}

// NewNerdctlCmdCreator returns a NerdctlCmdCreator that creates nerdctl commands.
// In "remote" mode, it uses limactl commands, configured to use binaries at lima-related paths and then executes nerdctl.
// In "native" mode, it directly executes nerdctl from the user's PATH.
func NewNerdctlCmdCreator(
	cmdCreator Creator,
	logger flog.Logger,
	limaHomePath,
	limactlPath string,
	binPath string,
	systemDeps NerdctlCmdCreatorSystemDeps,
) NerdctlCmdCreator {
	return &nerdctlCmdCreator{
		cmdCreator:   cmdCreator,
		logger:       logger,
		limaHomePath: limaHomePath,
		limactlPath:  limactlPath,
		binPath:      binPath,
		systemDeps:   systemDeps,
	}
}

func (ncc *nerdctlCmdCreator) create(stdin io.Reader, stdout, stderr io.Writer, args ...string) Command {
	ncc.logger.Debugf("Creating limactl command: ARGUMENTS: %v, %s: %s", args, EnvKeyLimaHome, ncc.limaHomePath)
	cmd := ncc.cmdCreator.Create(ncc.limactlPath, args...)
	limaHomeEnv := fmt.Sprintf("%s=%s", EnvKeyLimaHome, ncc.limaHomePath)

	path := ncc.systemDeps.Env(EnvKeyPath)
	path = fmt.Sprintf(`%s%s%s`, ncc.binPath, EnvKeyPathJoiner, path)
	pathEnv := fmt.Sprintf("%s=%s", EnvKeyPath, path)

	newPathEnv := replaceOrAppend(ncc.systemDeps.Environ(), EnvKeyLimaHome, limaHomeEnv)
	newPathEnv = replaceOrAppend(newPathEnv, EnvKeyPath, pathEnv)

	cmd.SetEnv(newPathEnv)
	cmd.SetStdin(stdin)
	cmd.SetStdout(stdout)
	cmd.SetStderr(stderr)
	return cmd
}
