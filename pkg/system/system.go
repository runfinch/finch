// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package system contains interfaces for OS related APIs,
// intended to be used for dependency injection to facilitate unit testing.
//
// The naming of the methods in this package is not very Go-idiomatic because
// the user of this package usually composes the interfaces in this package into one interface.
//
// For example, the `Executable` method of `ExecutableFinder` should have been named as `Find` according to Go idiom,
// but it will be unreadable if the interface is embedded in another interface. For instance,
//
//	type SystemDeps interface {
//		system.ExecutableFinder
//		// other methods
//	}
//	var deps SystemDeps
//	deps.Executable() // in favor of deps.Find()
package system

import (
	"os"
)

// SymlinksEvaluator mocks out filepath.EvalSymlinks.
type SymlinksEvaluator interface {
	EvalSymlinks(path string) (string, error)
}

// ExecutableFinder mocks out os.Executable.
type ExecutableFinder interface {
	Executable() (string, error)
}

// FilePathJoiner mocks out filepath.Join.
type FilePathJoiner interface {
	FilePathJoin(elem ...string) string
}

// EnvironGetter mocks out os.Environ.
type EnvironGetter interface {
	Environ() []string
}

// EnvGetter mocks out os.Getenv.
type EnvGetter interface {
	Env(key string) string
}

// EnvChecker mocks out os.LookupEnv.
type EnvChecker interface {
	LookupEnv(key string) (string, bool)
}

// PipeGetter mocks out os.Pipe.
type PipeGetter interface {
	Pipe() (*os.File, *os.File, error)
}

// StdinGetter mocks out os.Stdin.
type StdinGetter interface {
	Stdin() *os.File
}

// StdoutGetter mocks out os.Stdout.
type StdoutGetter interface {
	Stdout() *os.File
}

// StdoutSetter mocks out redirecting os.Stdout.
type StdoutSetter interface {
	SetStdout(*os.File)
}

// StderrGetter mocks out os.Stderr.
type StderrGetter interface {
	Stderr() *os.File
}

// RuntimeCPUGetter mocks out runtime.NumCPU.
type RuntimeCPUGetter interface {
	NumCPU() int
}

// RuntimeArchGetter mocks out runtime.GOARCH.
type RuntimeArchGetter interface {
	Arch() string
}

// RuntimeOSGetter mocks out runtime.GOOS.
type RuntimeOSGetter interface {
	OS() string
}

// UserHomeDir mocks out os.UserHomeDir.
type UserHomeDir interface {
	GetUserHome() (string, error)
}

// WorkingDirectory mocks out os.GetWd.
type WorkingDirectory interface {
	GetWd() (string, error)
}

// AbsFilePath mocks out filepath.Abs.
type AbsFilePath interface {
	FilePathAbs(elem string) (string, error)
}

// FilePathToSlash mocks out filepath.ToSlash.
type FilePathToSlash interface {
	FilePathToSlash(elem string) string
}
