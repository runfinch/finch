// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package system

import (
	"os"
	"path/filepath"
	"runtime"
)

// StdLib implements the interfaces defined in system.go via standard library functions.
type StdLib struct{}

//revive:disable:exported The exported functions below are straightforward.

func NewStdLib() *StdLib {
	return &StdLib{}
}

func (s *StdLib) EvalSymlinks(path string) (string, error) {
	return filepath.EvalSymlinks(path)
}

func (s *StdLib) FilePathJoin(elem ...string) string {
	return filepath.Join(elem...)
}

func (s *StdLib) Executable() (string, error) {
	return os.Executable()
}

func (s *StdLib) Environ() []string {
	return os.Environ()
}

func (s *StdLib) Env(key string) string {
	return os.Getenv(key)
}

func (s *StdLib) LookupEnv(key string) (string, bool) {
	return os.LookupEnv(key)
}

func (s *StdLib) Stdin() *os.File {
	return os.Stdin
}

func (s *StdLib) Stdout() *os.File {
	return os.Stdout
}

func (s *StdLib) Stderr() *os.File {
	return os.Stderr
}

func (s *StdLib) NumCPU() int {
	return runtime.NumCPU()
}

func (s *StdLib) ReadMemStats(st *runtime.MemStats) {
	runtime.ReadMemStats(st)
}

func (s *StdLib) Arch() string {
	return runtime.GOARCH
}

func (s *StdLib) OS() string {
	return runtime.GOOS
}
