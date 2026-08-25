// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

// Package osimage provies osimage related utilities.
package osimage

import (
	"encoding/json"
	"errors"
	"fmt"
	"os"
	"path/filepath"
	"time"
)

const historyFileName = "os-image-history.json"

// HistoryEntry represents an entry in the os image history deque.
type HistoryEntry struct {
	Name      string    `json:"name"`
	Digest    string    `json:"digest"`
	AppliedAt time.Time `json:"applied_at"`
}

// History is a deque (double ended queue).
// New images are pushed to the last position.
// Rollback pops from the last position.
// The oldest entry is evicted from the first position when capacity is exceeded.
type History struct {
	Images   []*HistoryEntry `json:"images"`
	capacity int
}

// NewHistory creates a new deque with provided capacity.
func NewHistory(capacity int) *History {
	return &History{capacity: capacity}
}

// Len returns the current length of History deque.
func (h *History) Len() int {
	return len(h.Images)
}

// PeekLast returns the last entry of History deque.
func (h *History) PeekLast() *HistoryEntry {
	if len(h.Images) == 0 {
		return nil
	}
	return h.Images[len(h.Images)-1]
}

// PushLast creates a new HistoryEntry from the provided name and digest,
// and pushes it to History.
// If capacity is exceeded, entries are evicted from the front and returned.
// When numBackups is changed, this function can return multiple entries.
// If the last entry already matches, it's a no-op.
func (h *History) PushLast(name, digest string) []*HistoryEntry {
	if last := h.PeekLast(); last != nil && last.Name == name {
		return nil
	}

	h.Images = append(h.Images, &HistoryEntry{
		Name:      name,
		Digest:    digest,
		AppliedAt: time.Now(),
	})

	if h.capacity > 0 && len(h.Images) > h.capacity {
		excess := len(h.Images) - h.capacity
		evicted := make([]*HistoryEntry, 0, excess)
		evicted = append(evicted, h.Images[:excess]...)
		h.Images = h.Images[excess:]
		return evicted
	}
	return nil
}

// RemoveLast removes the last entry from History if it exists.
func (h *History) RemoveLast() *HistoryEntry {
	if len(h.Images) == 0 {
		return nil
	}
	popped := h.Images[len(h.Images)-1]
	h.Images = h.Images[:len(h.Images)-1]
	return popped
}

// PeekSecondLast is used to peek at the rollback target.
// The last entry is the currently used image.
func (h *History) PeekSecondLast() *HistoryEntry {
	if len(h.Images) <= 1 {
		return nil
	}
	return h.Images[len(h.Images)-2]
}

func historyFilePath(finchDir string) string {
	return filepath.Join(finchDir, historyFileName)
}

// LoadHistory loads the History from the local history file.
func LoadHistory(finchDir string, capacity int) (*History, error) {
	h := NewHistory(capacity)
	data, err := os.ReadFile(historyFilePath(finchDir))
	if err != nil {
		if errors.Is(err, os.ErrNotExist) {
			return h, nil
		}
		return nil, fmt.Errorf("failed to read image history: %w", err)
	}
	if err := json.Unmarshal(data, h); err != nil {
		return nil, fmt.Errorf("failed to unmarshal image history: %w", err)
	}
	return h, nil
}

// SaveHistory saves History to a local file.
func SaveHistory(finchDir string, h *History) error {
	data, err := json.MarshalIndent(h, "", "  ")
	if err != nil {
		return fmt.Errorf("failed to marshal image history: %w", err)
	}
	if err := os.WriteFile(historyFilePath(finchDir), data, 0o644); err != nil {
		return fmt.Errorf("failed to write image history: %w", err)
	}
	return nil
}
