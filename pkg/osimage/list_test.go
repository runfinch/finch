// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package osimage

import (
	"os"
	"path/filepath"
	"testing"

	finchPath "github.com/runfinch/finch/pkg/path"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestListImages(t *testing.T) {
	t.Parallel()

	t.Run("lists qcow2 and .tar.gz files", func(t *testing.T) {
		t.Parallel()
		tmpDir := t.TempDir()
		osDir := filepath.Join(tmpDir, "os")
		require.NoError(t, os.MkdirAll(osDir, 0o755))

		require.NoError(t, os.WriteFile(filepath.Join(osDir, "img-1.qcow2"), []byte("data"), 0o644))
		require.NoError(t, os.WriteFile(filepath.Join(osDir, "img-2.qcow2"), []byte("more data"), 0o644))
		require.NoError(t, os.WriteFile(filepath.Join(osDir, "img-3.tar.gz"), []byte("windows data"), 0o644))
		require.NoError(t, os.WriteFile(filepath.Join(osDir, "finch.yaml"), []byte("yaml"), 0o644))

		fp := finchPath.Finch(tmpDir)
		images, err := ListImages(fp)
		require.NoError(t, err)
		assert.Len(t, images, 3)
	})

	t.Run("skips directories", func(t *testing.T) {
		t.Parallel()
		tmpDir := t.TempDir()
		osDir := filepath.Join(tmpDir, "os")
		require.NoError(t, os.MkdirAll(osDir, 0o755))
		require.NoError(t, os.MkdirAll(filepath.Join(osDir, "subdir.qcow2"), 0o755))

		fp := finchPath.Finch(tmpDir)
		images, err := ListImages(fp)
		require.NoError(t, err)
		assert.Len(t, images, 0)
	})

	t.Run("returns error for non-existent directory", func(t *testing.T) {
		t.Parallel()
		fp := finchPath.Finch("/nonexistent/path")
		_, err := ListImages(fp)
		assert.Error(t, err)
	})

	t.Run("returns empty for directory with no images", func(t *testing.T) {
		t.Parallel()
		tmpDir := t.TempDir()
		osDir := filepath.Join(tmpDir, "os")
		require.NoError(t, os.MkdirAll(osDir, 0o755))
		require.NoError(t, os.WriteFile(filepath.Join(osDir, "readme.txt"), []byte("hi"), 0o644))

		fp := finchPath.Finch(tmpDir)
		images, err := ListImages(fp)
		require.NoError(t, err)
		assert.Len(t, images, 0)
	})
}
