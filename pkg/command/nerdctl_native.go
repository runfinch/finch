// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build linux

package command

import (
	"fmt"
	"io"
	"path"

	"github.com/runfinch/finch/pkg/flog"
)

// EnvKeyNerdctlTOML is the name of the environment variable used to configure the path that
// nerdctl uses to load it's config file.
// EnvKeyBuildkitHost is the path to the socket which nerdctl will use for buildkit commands.
// These are exported to facilitate unit testing, since it uses a different package (command_test).
const (
	EnvKeyNerdctlTOML  = "NERDCTL_TOML"
	EnvKeyBuildkitHost = "BUILDKIT_HOST"
	EnvKeyDockerConfig = "DOCKER_CONFIG"
)

type nerdctlCmdCreator struct {
	cmdCreator         Creator
	logger             flog.Logger
	systemDeps         NerdctlCmdCreatorSystemDeps
	nerdctlConfigPath  string
	buildkitSocketPath string
	dockerConfigPath   string
	binPath            string
}

// NewNerdctlCmdCreator returns a NerdctlCmdCreator that creates nerdctl commands.
// In "remote" mode, it uses limactl commands, configured to use binaries at lima-related paths and then executes nerdctl.
// In "native" mode, it directly executes nerdctl from the user's PATH.
func NewNerdctlCmdCreator(
	cmdCreator Creator,
	logger flog.Logger,
	nerdctlConfigPath string,
	buildkitSocketPath string,
	dockerConfigPath string,
	binPath string,
	systemDeps NerdctlCmdCreatorSystemDeps,
) NerdctlCmdCreator {
	return &nerdctlCmdCreator{
		cmdCreator:         cmdCreator,
		logger:             logger,
		nerdctlConfigPath:  nerdctlConfigPath,
		buildkitSocketPath: buildkitSocketPath,
		dockerConfigPath:   dockerConfigPath,
		binPath:            binPath,
		systemDeps:         systemDeps,
	}
}

func (ncc *nerdctlCmdCreator) create(stdin io.Reader, stdout, stderr io.Writer, args ...string) Command {
	ncc.logger.Debugf("Creating nerdctl command: ARGUMENTS: %v", args)
	nerdctlBinPath := path.Join(ncc.binPath, "nerdctl")
	cmd := ncc.cmdCreator.Create(nerdctlBinPath, args...)

	path := ncc.systemDeps.Env(EnvKeyPath)
	path = fmt.Sprintf("%s:%s", ncc.binPath, path)
	pathEnv := fmt.Sprintf("%s=%s", EnvKeyPath, path)

	newPathEnv := replaceOrAppend(ncc.systemDeps.Environ(), EnvKeyPath, pathEnv)
	newPathEnv = append(
		newPathEnv,
		fmt.Sprintf("%s=%s", EnvKeyNerdctlTOML, ncc.nerdctlConfigPath),
		fmt.Sprintf("%s=%s", EnvKeyDockerConfig, ncc.dockerConfigPath),
		fmt.Sprintf("%s=unix://%s", EnvKeyBuildkitHost, ncc.buildkitSocketPath),
	)

	cmd.SetEnv(newPathEnv)
	cmd.SetStdin(stdin)
	cmd.SetStdout(stdout)
	cmd.SetStderr(stderr)
	return cmd
}
