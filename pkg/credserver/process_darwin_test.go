// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package credserver

import (
	"strings"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestSanitizedDaemonEnv(t *testing.T) {
	t.Setenv("PATH", "/Users/XYZ/.toolbox/bin:/Users/XYZ/bin:/usr/local/bin")
	t.Setenv("HOME", "/Users/XYZ")

	env := sanitizedDaemonEnv()

	var gotPath string
	pathCount := 0
	homePreserved := false
	for _, kv := range env {
		switch {
		case strings.HasPrefix(kv, "PATH="):
			gotPath = strings.TrimPrefix(kv, "PATH=")
			pathCount++
		case kv == "HOME=/Users/XYZ":
			homePreserved = true
		}
	}

	assert.Equal(t, 1, pathCount, "exactly one PATH entry")
	assert.Equal(t, credDaemonPath, gotPath, "PATH replaced with the fixed daemon PATH")
	assert.NotContains(t, gotPath, "/Users/", "no home-relative (guest-writable) directories on the daemon PATH")

	assert.True(t, homePreserved, "non-PATH variables preserved")
}
