// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package command

import (
	"errors"
	"fmt"
	"os/exec"
)

type exitError struct {
	wrapped *exec.ExitError
}

func newExitError(wrapped *exec.ExitError) *exitError {
	return &exitError{wrapped: wrapped}
}

// wrapIfExitError makes the returned error's Error() print stderr along with the exit code if err is of type *exec.ExitError.
// That's useful because *exec.ExitError by default only prints the exit code, while stderr is usually needed to help debug.
func wrapIfExitError(err error) error {
	var exitErr *exec.ExitError
	if !errors.As(err, &exitErr) {
		return err
	}
	return newExitError(exitErr)
}

func (e *exitError) Error() string {
	return fmt.Sprintf("%s, stderr: %s", e.wrapped.Error(), e.wrapped.Stderr)
}

func (e *exitError) Unwrap() error {
	return e.wrapped
}
