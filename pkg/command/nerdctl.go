// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package command

import (
	"bytes"
	"fmt"
	"strings"

	"golang.org/x/exp/slices"

	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/system"
)

// NerdctlCmdCreator creates a limactl command.
//
//go:generate mockgen -copyright_file=../../copyright_header -destination=../mocks/command_nerdctl_cmd_creator.go -package=mocks -mock_names NerdctlCmdCreator=NerdctlCmdCreator . NerdctlCmdCreator
type NerdctlCmdCreator interface {
	// Create creates a new Lima command and connects the stdio of it to the stdio of the current process.
	Create(args ...string) Command
	// CreateWithoutStdio creates a new Lima command without connecting the stdio of it to the stdio of the current process.
	// It is usually used when either Output() or CombinedOutput() instead of Run() needs to be invoked on the returned command.
	CreateWithoutStdio(args ...string) Command
	// RunWithReplacingStdout runs a new Lima command,
	// connects the stdio of it to the stdio of the current process,
	// and replaces all the strings in stdout according to rs.
	//
	// The replacements are executed sequentially.
	// For example, after executing the first replacement, the resultant stdout will be executed against the second replacement, and so on.
	//
	// The reason of directly buffering the string to replace instead of having a customized replacing io.Writer is
	// that the io.Writer without buffering may fail replacing because one source string can be split to multiple writes.
	// Implementing an io.Writer with buffering will be more complicated than the current implementation.
	RunWithReplacingStdout(rs []Replacement, args ...string) error
}

// Replacement contains source string to be replaced by target string.
type Replacement struct {
	Source, Target string
}

type nerdctlCmdCreator struct {
	cmdCreator   Creator
	logger       flog.Logger
	systemDeps   NerdctlCmdCreatorSystemDeps
	limaHomePath string
	limactlPath  string
	binPath      string
}

var _ NerdctlCmdCreator = (*nerdctlCmdCreator)(nil)

// NerdctlCmdCreatorSystemDeps contains the system dependencies for NewLimaCmdCreator.
//
//go:generate mockgen -copyright_file=../../copyright_header -destination=../mocks/nerdctl_cmd_creator_system_deps.go -package=mocks -mock_names NerdctlCmdCreatorSystemDeps=NerdctlCmdCreatorSystemDeps . NerdctlCmdCreatorSystemDeps
type NerdctlCmdCreatorSystemDeps interface {
	system.EnvironGetter
	system.StdinGetter
	system.StdoutGetter
	system.StderrGetter
	system.EnvGetter
}

// NewNerdctlCmdCreator returns a LimaCmdCreator that creates limactl commands based on the provided lima-related paths.
func NewNerdctlCmdCreator(
	cmdCreator Creator,
	logger flog.Logger,
	limaHomePath, limactlPath string, binPath string,
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

func (ncc *nerdctlCmdCreator) Create(args ...string) Command {
	return ncc.create(ncc.systemDeps.Stdin(), ncc.systemDeps.Stdout(), ncc.systemDeps.Stderr(), args...)
}

func (ncc *nerdctlCmdCreator) CreateWithoutStdio(args ...string) Command {
	return ncc.create(nil, nil, nil, args...)
}

func (ncc *nerdctlCmdCreator) RunWithReplacingStdout(rs []Replacement, args ...string) error {
	var buf bytes.Buffer
	err := ncc.create(ncc.systemDeps.Stdin(),
		&buf,
		ncc.systemDeps.Stderr(),
		args...).Run()
	if err != nil {
		// Note that at this point, buf may contain something that should be replaced and then written to stdout,
		// but we decide it's fine to omit it and just return the error now because:
		// - stderr should be enough for the user to debug and retry the command.
		// - The control flow is simpler.
		return err
	}
	_, err = ncc.systemDeps.Stdout().Write(ncc.replaceBytes(buf.Bytes(), rs))
	if err != nil {
		return err
	}
	return nil
}

func (ncc *nerdctlCmdCreator) replaceBytes(s []byte, rs []Replacement) []byte {
	for _, r := range rs {
		s = bytes.ReplaceAll(s, []byte(r.Source), []byte(r.Target))
	}
	return s
}

func replaceOrAppend(orig []string, varName, newVar string) []string {
	envIdx := slices.IndexFunc(orig, func(envVar string) bool {
		return strings.HasPrefix(envVar, fmt.Sprintf("%s=", varName))
	})

	if envIdx != -1 {
		return slices.Replace(orig, envIdx, envIdx+1, newVar)
	}
	return append(orig, newVar)
}
