// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package command

import (
	"errors"
	"os/exec"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestWrapIfExitError(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name string
		in   error
		want error
	}{
		{
			name: "the original error should be returned if it is not of type *exec.ExitError",
			in:   errors.New("I am not an *exec.ExitError"),
			want: errors.New("I am not an *exec.ExitError"),
		},
		{
			name: "the error should be wrapped if it is of type *exec.ExitError",
			in:   &exec.ExitError{Stderr: []byte("stderr")},
			want: &exitError{wrapped: &exec.ExitError{Stderr: []byte("stderr")}},
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			assert.Equal(t, tc.want, wrapIfExitError(tc.in))
		})
	}
}

func TestExitError_Error(t *testing.T) {
	t.Parallel()

	want := "<nil>, stderr: some error"
	got := newExitError(&exec.ExitError{Stderr: []byte("some error")}).Error()
	assert.Equal(t, got, want)
}

func TestExitError_Unwrap(t *testing.T) {
	t.Parallel()

	want := &exec.ExitError{Stderr: []byte("some error")}
	got := newExitError(want).Unwrap()
	assert.Equal(t, got, want)
}
