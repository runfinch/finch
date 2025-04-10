// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package wrapper

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestNewLimaWrapper(t *testing.T) {
	t.Parallel()
	testCases := []struct {
		name string
	}{
		{
			name: "Test NewLimaWrapper happy path",
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()
			got := NewLimaWrapper()
			assert.NotNil(t, got)
		})
	}
}

func TestLimaWrapper_LimaUser(t *testing.T) {
	t.Parallel()
	testCases := []struct {
		name string
	}{
		{
			name: "Test NewLimaWrapper happy path",
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()
			lw := NewLimaWrapper()
			assert.NotNil(t, lw.LimaUser(false))
		})
	}
}
