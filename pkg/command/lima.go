// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package command

import (
	"bytes"
	"fmt"
	"io"

	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/system"
)

const (
	envKeyLimaHome = "LIMA_HOME"
	envKeyPath     = "PATH"
)

// LimaCmdCreator creates a limactl command.
//
//go:generate mockgen -copyright_file=../../copyright_header -destination=../mocks/command_lima_cmd_creator.go -package=mocks -mock_names LimaCmdCreator=LimaCmdCreator . LimaCmdCreator
type LimaCmdCreator interface {
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

type limaCmdCreator struct {
	cmdCreator   Creator
	logger       flog.Logger
	systemDeps   LimaCmdCreatorSystemDeps
	limaHomePath string
	limactlPath  string
	qemuBinPath  string
}

var _ LimaCmdCreator = (*limaCmdCreator)(nil)

// LimaCmdCreatorSystemDeps contains the system dependencies for NewLimaCmdCreator.
//
//go:generate mockgen -copyright_file=../../copyright_header -destination=../mocks/lima_cmd_creator_system_deps.go -package=mocks -mock_names LimaCmdCreatorSystemDeps=LimaCmdCreatorSystemDeps . LimaCmdCreatorSystemDeps
type LimaCmdCreatorSystemDeps interface {
	system.EnvironGetter
	system.StdinGetter
	system.StdoutGetter
	system.StderrGetter
	system.EnvGetter
}

// NewLimaCmdCreator returns a LimaCmdCreator that creates limactl commands based on the provided lima-related paths.
func NewLimaCmdCreator(
	cmdCreator Creator,
	logger flog.Logger,
	limaHomePath, limactlPath string, qemuBinPath string,
	systemDeps LimaCmdCreatorSystemDeps,
) LimaCmdCreator {
	return &limaCmdCreator{
		cmdCreator:   cmdCreator,
		logger:       logger,
		limaHomePath: limaHomePath,
		limactlPath:  limactlPath,
		qemuBinPath:  qemuBinPath,
		systemDeps:   systemDeps,
	}
}

func (lcc *limaCmdCreator) Create(args ...string) Command {
	return lcc.create(lcc.systemDeps.Stdin(), lcc.systemDeps.Stdout(), lcc.systemDeps.Stderr(), args...)
}

func (lcc *limaCmdCreator) CreateWithoutStdio(args ...string) Command {
	return lcc.create(nil, nil, nil, args...)
}

func (lcc *limaCmdCreator) RunWithReplacingStdout(rs []Replacement, args ...string) error {
	var buf bytes.Buffer
	err := lcc.create(lcc.systemDeps.Stdin(),
		&buf,
		lcc.systemDeps.Stderr(),
		args...).Run()
	if err != nil {
		// Note that at this point, buf may contain something that should be replaced and then written to stdout,
		// but we decide it's fine to omit it and just return the error now because:
		// - stderr should be enough for the user to debug and retry the command.
		// - The control flow is simpler.
		return err
	}
	_, err = lcc.systemDeps.Stdout().Write(lcc.replaceBytes(buf.Bytes(), rs))
	if err != nil {
		return err
	}
	return nil
}

func (lcc *limaCmdCreator) replaceBytes(s []byte, rs []Replacement) []byte {
	for _, r := range rs {
		s = bytes.ReplaceAll(s, []byte(r.Source), []byte(r.Target))
	}
	return s
}

func (lcc *limaCmdCreator) create(stdin io.Reader, stdout, stderr io.Writer, args ...string) Command {
	lcc.logger.Debugf("Creating limactl command: ARGUMENTS: %v, %s: %s", args, envKeyLimaHome, lcc.limaHomePath)
	cmd := lcc.cmdCreator.Create(lcc.limactlPath, args...)
	limaHomeEnv := fmt.Sprintf("%s=%s", envKeyLimaHome, lcc.limaHomePath)
	path := lcc.systemDeps.Env(envKeyPath)
	// TODO: Refactor this; don't need qemuBinPath for windows
	path = fmt.Sprintf("%s:%s", lcc.qemuBinPath, path)
	pathEnv := fmt.Sprintf("%s=%s", envKeyPath, path)
	env := append(lcc.systemDeps.Environ(), limaHomeEnv, pathEnv)
	cmd.SetEnv(env)
	cmd.SetStdin(stdin)
	cmd.SetStdout(stdout)
	cmd.SetStderr(stderr)
	return cmd
}
