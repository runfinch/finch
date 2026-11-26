// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package main

import (
	"os"
	"path/filepath"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestDetectRoot(t *testing.T) {
	t.Parallel()

	tests := []struct {
		name     string
		content  string
		expected string
	}{
		{
			name:     "detects root from image location",
			content:  `  - location: "/Applications/Finch/os/image.qcow2"`,
			expected: "/Applications/Finch",
		},
		{
			name:     "detects root from toolbox path",
			content:  `  - location: "/home/user/.toolbox/tools/finch/1.17.0/os/image.qcow2"`,
			expected: "/home/user/.toolbox/tools/finch/1.17.0",
		},
		{
			name:     "returns empty when no /os/ marker",
			content:  `  mountType: virtiofs`,
			expected: "",
		},
	}

	for _, tc := range tests {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()
			got := detectRoot(tc.content)
			assert.Equal(t, tc.expected, got)
		})
	}
}

func TestResolveBaseYamlPaths(t *testing.T) {
	t.Parallel()

	tmpRoot := t.TempDir()
	osDir := filepath.Join(tmpRoot, "os")
	require.NoError(t, os.MkdirAll(osDir, 0o750))

	yamlContent := `images:
  - location: "/Applications/Finch/os/finch-al2023-os-image-arm64.qcow2"
    arch: "aarch64"
provision:
  - mode: user
    script: |
      sudo cp /Applications/Finch/finch-daemon/finch-daemon /usr/local/bin/finch-daemon
      sudo cp /Applications/Finch/finch-cred/docker-credential-finchhost /usr/bin/docker-credential-finchhost
mounts:
  - location: "/Applications/Finch/finch-daemon"
    writable: true
  - location: "/Applications/Finch/finch-cred"
    writable: true
`
	templatePath := filepath.Join(osDir, "finch.yaml")
	require.NoError(t, os.WriteFile(templatePath, []byte(yamlContent), 0o644))

	outputPath := filepath.Join(tmpRoot, "lima", "data", "_config", "base.yaml")

	err := resolveBaseYamlPaths(templatePath, outputPath)
	require.NoError(t, err)

	// Template is unchanged
	original, err := os.ReadFile(templatePath) //nolint:gosec // test
	require.NoError(t, err)
	assert.Equal(t, yamlContent, string(original))

	// Resolved output has correct paths
	resolved, err := os.ReadFile(outputPath) //nolint:gosec // test
	require.NoError(t, err)
	resolvedStr := string(resolved)
	assert.Contains(t, resolvedStr, tmpRoot+"/os/finch-al2023-os-image-arm64.qcow2")
	assert.Contains(t, resolvedStr, tmpRoot+"/finch-daemon/finch-daemon")
	assert.Contains(t, resolvedStr, tmpRoot+"/finch-cred/docker-credential-finchhost")
	assert.Contains(t, resolvedStr, tmpRoot+"/finch-daemon\"")
	assert.Contains(t, resolvedStr, tmpRoot+"/finch-cred\"")
	assert.NotContains(t, resolvedStr, "/Applications/Finch")
}

func TestResolveBaseYamlPaths_NoRewriteWhenPathsMatch(t *testing.T) {
	t.Parallel()

	tmpRoot := t.TempDir()
	osDir := filepath.Join(tmpRoot, "os")
	require.NoError(t, os.MkdirAll(osDir, 0o750))

	yamlContent := `images:
  - location: "` + tmpRoot + `/os/image.qcow2"
    arch: "aarch64"
`
	templatePath := filepath.Join(osDir, "finch.yaml")
	require.NoError(t, os.WriteFile(templatePath, []byte(yamlContent), 0o644))

	outputPath := filepath.Join(tmpRoot, "lima", "data", "_config", "base.yaml")

	err := resolveBaseYamlPaths(templatePath, outputPath)
	require.NoError(t, err)

	resolved, err := os.ReadFile(outputPath) //nolint:gosec // test
	require.NoError(t, err)
	assert.Equal(t, yamlContent, string(resolved))
}
