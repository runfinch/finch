// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build linux

package path

import (
	"path/filepath"
	"testing"

	"github.com/stretchr/testify/assert"
)

var mockFinch = Finch("mock_finch")

func TestFinch_NewFinchPath(t *testing.T) {
	t.Parallel()
	assert.Equal(t, string(NewFinchPath()), filepath.Join("/", "etc", "finch"))
}

func TestFinch_FinchDir(t *testing.T) {
	t.Parallel()

	res := mockFinch.FinchDir()
	assert.Equal(t, res, string(mockFinch))
}

func TestFinch_ConfigFilePath(t *testing.T) {
	t.Parallel()

	res := mockFinch.ConfigFilePath()
	assert.Equal(t, res, filepath.Join("mock_finch", "finch.yaml"))
}

func TestFinch_NerdctlConfigFilePath(t *testing.T) {
	t.Parallel()

	res := mockFinch.NerdctlConfigFilePath()
	assert.Equal(t, res, filepath.Join("mock_finch", "nerdctl", "nerdctl.toml"))
}

func TestFinch_BuildkitSocketPath(t *testing.T) {
	t.Parallel()

	res := mockFinch.BuildkitSocketPath()
	assert.Equal(t, res, filepath.Join("mock_finch", "buildkit", "buildkitd.toml"))
}

func TestFinch_FinchDependencyBinDir(t *testing.T) {
	t.Parallel()

	res := mockFinch.FinchDependencyBinDir()
	assert.Equal(t, res, filepath.Join("/", "usr", "libexec", "finch"))
}
