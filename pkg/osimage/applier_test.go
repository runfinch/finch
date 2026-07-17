// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package osimage

import (
	"os"
	"path/filepath"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestApplyImage(t *testing.T) {
	t.Parallel()

	t.Run("updates location and digest in finch.yaml", func(t *testing.T) {
		t.Parallel()
		tmpDir := t.TempDir()
		yamlPath := filepath.Join(tmpDir, "finch.yaml")
		content := `images:
  - location: "/old/path/old-image.qcow2"
    arch: "aarch64"
    digest: "sha512:olddigest"
`
		require.NoError(t, os.WriteFile(yamlPath, []byte(content), 0o644))

		err := ApplyImage(yamlPath, "/new/path/new-image.qcow2", "sha512:newdigest")
		require.NoError(t, err)

		result, err := os.ReadFile(yamlPath)
		require.NoError(t, err)
		assert.Contains(t, string(result), `"/new/path/new-image.qcow2"`)
		assert.Contains(t, string(result), `"sha512:newdigest"`)
		assert.NotContains(t, string(result), "old-image")
	})

	t.Run("returns error when no images section found", func(t *testing.T) {
		t.Parallel()
		tmpDir := t.TempDir()
		yamlPath := filepath.Join(tmpDir, "finch.yaml")
		content := `containerd:
  system: true
`
		require.NoError(t, os.WriteFile(yamlPath, []byte(content), 0o644))

		err := ApplyImage(yamlPath, "/new/path/img.qcow2", "sha512:abc")
		assert.Error(t, err)
	})

	t.Run("returns error when file does not exist", func(t *testing.T) {
		t.Parallel()
		err := ApplyImage("/nonexistent/finch.yaml", "/new/img.qcow2", "sha512:abc")
		assert.Error(t, err)
	})
}

func TestUpdateFinchYAMLImage(t *testing.T) {
	t.Parallel()

	t.Run("preserves other yaml content", func(t *testing.T) {
		t.Parallel()
		input := `images:
  - location: "/old/image.qcow2"
    arch: "aarch64"
    digest: "sha512:old"
containerd:
  system: true
`
		result, err := updateFinchYAMLImage([]byte(input), "/new/image.qcow2", "sha512:new")
		require.NoError(t, err)
		assert.Contains(t, string(result), "containerd:")
		assert.Contains(t, string(result), "system: true")
	})
}
