// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package command invokes external commands.
package command

import "io"

// Creator creates a Command. The semantics of the parameters are the same as those of exec.Command.
//
//go:generate mockgen -copyright_file=../../copyright_header -destination=../mocks/command_command_creator.go -package=mocks -mock_names Creator=CommandCreator . Creator
type Creator interface {
	Create(name string, args ...string) Command
}

// Command contains 2 sets of methods.
// The first set contains the methods to configure the command to be run (e.g., SetEnv).
// The second set contains the methods to run the command (e.g., Output).
// The semantics of the methods conform to that of the counterpart of exec.Cmd.
//
//go:generate mockgen -copyright_file=../../copyright_header -destination=../mocks/command_command.go -package=mocks -mock_names Command=Command . Command
type Command interface {
	SetEnv([]string)
	SetStdin(io.Reader)
	SetStdout(io.Writer)
	SetStderr(io.Writer)
	StdinPipe() (io.WriteCloser, error)

	Run() error
	Start() error
	Wait() error
	Output() ([]byte, error)
	CombinedOutput() ([]byte, error)
}
