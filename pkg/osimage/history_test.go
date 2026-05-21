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

func TestPushLast(t *testing.T) {
	t.Parallel()

	t.Run("push to empty deque", func(t *testing.T) {
		t.Parallel()
		h := NewHistory(3)
		evicted := h.PushLast("img-1", "sha512:abc")
		assert.Nil(t, evicted)
		assert.Equal(t, 1, h.Len())
		assert.Equal(t, "img-1", h.PeekLast().Name)
	})

	t.Run("push duplicate is no-op", func(t *testing.T) {
		t.Parallel()
		h := NewHistory(3)
		h.PushLast("img-1", "sha512:abc")
		evicted := h.PushLast("img-1", "sha512:abc")
		assert.Nil(t, evicted)
		assert.Equal(t, 1, h.Len())
	})

	t.Run("push evicts from front when capacity exceeded", func(t *testing.T) {
		t.Parallel()
		h := NewHistory(2)
		h.PushLast("img-1", "d1")
		h.PushLast("img-2", "d2")
		evicted := h.PushLast("img-3", "d3")

		require.Len(t, evicted, 1)
		assert.Equal(t, "img-1", evicted[0].Name)
		assert.Equal(t, 2, h.Len())
		assert.Equal(t, "img-2", h.Images[0].Name)
		assert.Equal(t, "img-3", h.Images[1].Name)
	})
}

func TestRemoveLast(t *testing.T) {
	t.Parallel()

	t.Run("pop from empty deque returns nil", func(t *testing.T) {
		t.Parallel()
		h := NewHistory(3)
		assert.Nil(t, h.RemoveLast())
	})

	t.Run("pop returns last entry", func(t *testing.T) {
		t.Parallel()
		h := NewHistory(3)
		h.PushLast("img-1", "d1")
		h.PushLast("img-2", "d2")

		popped := h.RemoveLast()
		require.NotNil(t, popped)
		assert.Equal(t, "img-2", popped.Name)
		assert.Equal(t, 1, h.Len())
		assert.Equal(t, "img-1", h.PeekLast().Name)
	})
}

func TestPeekLast(t *testing.T) {
	t.Parallel()

	t.Run("peek empty deque returns nil", func(t *testing.T) {
		t.Parallel()
		h := NewHistory(3)
		assert.Nil(t, h.PeekLast())
	})

	t.Run("peek returns last without modifying", func(t *testing.T) {
		t.Parallel()
		h := NewHistory(3)
		h.PushLast("img-1", "d1")
		h.PushLast("img-2", "d2")

		last := h.PeekLast()
		assert.Equal(t, "img-2", last.Name)
		assert.Equal(t, 2, h.Len())
	})
}

func TestPeekSecondLast(t *testing.T) {
	t.Parallel()

	t.Run("returns nil with zero entries", func(t *testing.T) {
		t.Parallel()
		h := NewHistory(3)
		assert.Nil(t, h.PeekSecondLast())
	})

	t.Run("returns nil with one entry", func(t *testing.T) {
		t.Parallel()
		h := NewHistory(3)
		h.PushLast("img-1", "d1")
		assert.Nil(t, h.PeekSecondLast())
	})

	t.Run("returns second to last entry", func(t *testing.T) {
		t.Parallel()
		h := NewHistory(3)
		h.PushLast("img-1", "d1")
		h.PushLast("img-2", "d2")
		h.PushLast("img-3", "d3")

		entry := h.PeekSecondLast()
		require.NotNil(t, entry)
		assert.Equal(t, "img-2", entry.Name)
	})
}

func TestUpdateThenRollbackFlow(t *testing.T) {
	t.Parallel()

	t.Run("update pushes, rollback pops", func(t *testing.T) {
		t.Parallel()
		h := NewHistory(3)

		// Seed with current image
		h.PushLast("img-old", "d-old")
		// Update
		h.PushLast("img-new", "d-new")

		assert.Equal(t, 2, h.Len())
		assert.Equal(t, "img-new", h.PeekLast().Name)

		// Rollback
		target := h.PeekSecondLast()
		require.NotNil(t, target)
		assert.Equal(t, "img-old", target.Name)

		popped := h.RemoveLast()
		assert.Equal(t, "img-new", popped.Name)
		assert.Equal(t, 1, h.Len())
		assert.Equal(t, "img-old", h.PeekLast().Name)
	})

	t.Run("rollback then re-update does not duplicate", func(t *testing.T) {
		t.Parallel()
		h := NewHistory(3)
		h.PushLast("img-old", "d-old")
		h.PushLast("img-new", "d-new")

		// Rollback
		h.RemoveLast()

		// Re-update to the same image
		h.PushLast("img-new", "d-new")
		assert.Equal(t, 2, h.Len())

		// Re-update to the same image again is no-op
		evicted := h.PushLast("img-new", "d-new")
		assert.Nil(t, evicted)
		assert.Equal(t, 2, h.Len())
	})
}

func TestResizeHistory(t *testing.T) {
	t.Parallel()

	t.Run("reducing capacity evicts on next push", func(t *testing.T) {
		t.Parallel()
		// Start with capacity 5: [img-1, img-2, img-3, img-4, img-5]
		h := NewHistory(5)
		h.PushLast("img-1", "d1")
		h.PushLast("img-2", "d2")
		h.PushLast("img-3", "d3")
		h.PushLast("img-4", "d4")
		h.PushLast("img-5", "d5")
		assert.Equal(t, 5, h.Len())

		// Simulate reducing numBackups: reload with capacity 2
		h.capacity = 2

		// Next push evicts 4 entries to bring size from 6 down to 2
		evicted := h.PushLast("img-6", "d6")
		require.Len(t, evicted, 4)
		assert.Equal(t, "img-1", evicted[0].Name)
		assert.Equal(t, "img-2", evicted[1].Name)
		assert.Equal(t, "img-3", evicted[2].Name)
		assert.Equal(t, "img-4", evicted[3].Name)
		assert.Equal(t, 2, h.Len())
		assert.Equal(t, "img-5", h.Images[0].Name)
		assert.Equal(t, "img-6", h.Images[1].Name)
	})

	t.Run("increasing capacity allows more entries", func(t *testing.T) {
		t.Parallel()
		h := NewHistory(2)
		h.PushLast("img-1", "d1")
		h.PushLast("img-2", "d2")

		// Would evict at capacity 2
		evicted := h.PushLast("img-3", "d3")
		require.Len(t, evicted, 1)
		assert.Equal(t, "img-1", evicted[0].Name)
		assert.Equal(t, 2, h.Len())

		// Simulate increasing numBackups: set capacity to 5
		h.capacity = 5

		// Now pushes don't evict
		evicted = h.PushLast("img-4", "d4")
		assert.Nil(t, evicted)
		assert.Equal(t, 3, h.Len())

		evicted = h.PushLast("img-5", "d5")
		assert.Nil(t, evicted)
		assert.Equal(t, 4, h.Len())
	})

	t.Run("resize via save and reload", func(t *testing.T) {
		t.Parallel()
		tmpDir := t.TempDir()

		// Create history with capacity 5
		h, err := LoadHistory(tmpDir, 5)
		require.NoError(t, err)
		h.PushLast("img-1", "d1")
		h.PushLast("img-2", "d2")
		h.PushLast("img-3", "d3")
		h.PushLast("img-4", "d4")
		require.NoError(t, SaveHistory(tmpDir, h))

		// Reload with reduced capacity 2 (simulating config change)
		h, err = LoadHistory(tmpDir, 2)
		require.NoError(t, err)
		// Entries are still loaded (4), but next push will trim
		assert.Equal(t, 4, h.Len())

		evicted := h.PushLast("img-5", "d5")
		require.Len(t, evicted, 3)
		assert.Equal(t, "img-1", evicted[0].Name)
		assert.Equal(t, "img-2", evicted[1].Name)
		assert.Equal(t, "img-3", evicted[2].Name)
		assert.Equal(t, 2, h.Len())
		assert.Equal(t, "img-4", h.Images[0].Name)
		assert.Equal(t, "img-5", h.Images[1].Name)
	})
}

func TestLoadAndSaveHistory(t *testing.T) {
	t.Parallel()

	t.Run("load from non-existent file returns empty history", func(t *testing.T) {
		t.Parallel()
		tmpDir := t.TempDir()
		h, err := LoadHistory(tmpDir, 3)
		require.NoError(t, err)
		assert.Equal(t, 0, h.Len())
	})

	t.Run("save and load round-trip preserves entries", func(t *testing.T) {
		t.Parallel()
		tmpDir := t.TempDir()
		h := NewHistory(3)
		h.PushLast("img-1", "d1")
		h.PushLast("img-2", "d2")

		err := SaveHistory(tmpDir, h)
		require.NoError(t, err)

		loaded, err := LoadHistory(tmpDir, 3)
		require.NoError(t, err)
		assert.Equal(t, 2, loaded.Len())
		assert.Equal(t, "img-1", loaded.Images[0].Name)
		assert.Equal(t, "img-2", loaded.Images[1].Name)
	})

	t.Run("load with corrupted file returns error", func(t *testing.T) {
		t.Parallel()
		tmpDir := t.TempDir()
		err := os.WriteFile(filepath.Join(tmpDir, historyFileName), []byte("not json"), 0o644)
		require.NoError(t, err)

		_, err = LoadHistory(tmpDir, 3)
		assert.Error(t, err)
	})
}
