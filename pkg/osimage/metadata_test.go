// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package osimage

import (
	"os"
	"path/filepath"
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestWriteAndReadMetadata(t *testing.T) {
	t.Parallel()

	t.Run("round-trip preserves data", func(t *testing.T) {
		t.Parallel()
		tmpDir := t.TempDir()
		metadata := &UpdateMetadata{
			UpdateAvailable: true,
			CurrentImage:    "img-old.qcow2",
			NewImage:        "img-new.qcow2",
			CheckedAt:       time.Now().Truncate(time.Second),
		}

		err := WriteMetadata(tmpDir, metadata)
		require.NoError(t, err)

		loaded, err := ReadMetadata(tmpDir)
		require.NoError(t, err)
		require.NotNil(t, loaded)
		assert.Equal(t, metadata.UpdateAvailable, loaded.UpdateAvailable)
		assert.Equal(t, metadata.CurrentImage, loaded.CurrentImage)
		assert.Equal(t, metadata.NewImage, loaded.NewImage)
	})
}

func TestReadMetadata(t *testing.T) {
	t.Parallel()

	t.Run("returns nil when file does not exist", func(t *testing.T) {
		t.Parallel()
		tmpDir := t.TempDir()
		metadata, err := ReadMetadata(tmpDir)
		require.NoError(t, err)
		assert.Nil(t, metadata)
	})

	t.Run("returns error on corrupted file", func(t *testing.T) {
		t.Parallel()
		tmpDir := t.TempDir()
		err := os.WriteFile(filepath.Join(tmpDir, metadataFileName), []byte("not json"), 0o644)
		require.NoError(t, err)

		_, err = ReadMetadata(tmpDir)
		assert.Error(t, err)
	})
}

func TestClearMetadata(t *testing.T) {
	t.Parallel()

	t.Run("removes existing file", func(t *testing.T) {
		t.Parallel()
		tmpDir := t.TempDir()
		metadata := &UpdateMetadata{UpdateAvailable: true}
		require.NoError(t, WriteMetadata(tmpDir, metadata))

		err := ClearMetadata(tmpDir)
		require.NoError(t, err)

		loaded, err := ReadMetadata(tmpDir)
		require.NoError(t, err)
		assert.Nil(t, loaded)
	})

	t.Run("no error when file does not exist", func(t *testing.T) {
		t.Parallel()
		tmpDir := t.TempDir()
		err := ClearMetadata(tmpDir)
		assert.NoError(t, err)
	})
}
