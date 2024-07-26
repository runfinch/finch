// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build linux || native

package command

import (
	"fmt"
	"io"

	"github.com/runfinch/finch/pkg/flog"
)

type nerdctlCmdCreator struct {
	cmdCreator         Creator
	logger             flog.Logger
	systemDeps         NerdctlCmdCreatorSystemDeps
	nerdctlConfigPath  string
	buildkitSocketPath string
}

// NewNerdctlCmdCreator returns a NerdctlCmdCreator that creates nerdctl commands.
// In "remote" mode, it uses limactl commands, configured to use binaries at lima-related paths and then executes nerdctl.
// In "native" mode, it directly executes nerdctl from the user's PATH.
func NewNerdctlCmdCreator(
	cmdCreator Creator,
	logger flog.Logger,
	nerdctlConfigPath string,
	buildkitSocketPath string,
	systemDeps NerdctlCmdCreatorSystemDeps,
) NerdctlCmdCreator {
	return &nerdctlCmdCreator{
		cmdCreator:         cmdCreator,
		logger:             logger,
		nerdctlConfigPath:  nerdctlConfigPath,
		buildkitSocketPath: buildkitSocketPath,
		systemDeps:         systemDeps,
	}
}

func (ncc *nerdctlCmdCreator) create(stdin io.Reader, stdout, stderr io.Writer, args ...string) Command {
	ncc.logger.Debugf("Creating nerdctl command: ARGUMENTS: %v", args)
	cmd := ncc.cmdCreator.Create("nerdctl", args...)

	env := append(
		ncc.systemDeps.Environ(),
		fmt.Sprintf("NERDCTL_TOML=%s", ncc.nerdctlConfigPath),
		fmt.Sprintf("BUILDKIT_HOST=%s", ncc.buildkitSocketPath),
	)

	cmd.SetEnv(env)
	cmd.SetStdin(stdin)
	cmd.SetStdout(stdout)
	cmd.SetStderr(stderr)
	return cmd
}
