// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

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

type OSImageHistoryEntry struct {
	Name      string    `json:"name"`
	Digest    string    `json:"digest"`
	AppliedAt time.Time `json:"applied_at"`
}

// OS image history is a deque (double ended queue).
// New images are pushed to the last position.
// Rollback pops from the last position.
// The oldest entry is evicted from the first position when capacity is exceeded.
type OSImageHistory struct {
	Images   []*OSImageHistoryEntry `json:"images"`
	capacity int
}

func NewHistory(capacity int) *OSImageHistory {
	return &OSImageHistory{capacity: capacity}
}

func (h *OSImageHistory) Len() int {
	return len(h.Images)
}

func (h *OSImageHistory) PeekLast() *OSImageHistoryEntry {
	if len(h.Images) == 0 {
		return nil
	}
	return h.Images[len(h.Images)-1]
}

// If capacity is exceeded, entries are evicted from the front and returned.
// When numBackups is changed, this function can return multiple entries.
// If the last entry already matches, it's a no-op.
func (h *OSImageHistory) PushLast(name, digest string) []*OSImageHistoryEntry {
	if last := h.PeekLast(); last != nil && last.Name == name {
		return nil
	}

	h.Images = append(h.Images, &OSImageHistoryEntry{
		Name:      name,
		Digest:    digest,
		AppliedAt: time.Now(),
	})

	if h.capacity > 0 && len(h.Images) > h.capacity {
		excess := len(h.Images) - h.capacity
		evicted := make([]*OSImageHistoryEntry, excess)
		copy(evicted, h.Images[:excess])
		h.Images = h.Images[excess:]
		return evicted
	}
	return nil
}

func (h *OSImageHistory) RemoveLast() *OSImageHistoryEntry {
	if len(h.Images) == 0 {
		return nil
	}
	popped := h.Images[len(h.Images)-1]
	h.Images = h.Images[:len(h.Images)-1]
	return popped
}

// PeekSecondLast is used to peek at the rollback target.
// The last entry is the currently used image.
func (h *OSImageHistory) PeekSecondLast() *OSImageHistoryEntry {
	if len(h.Images) <= 1 {
		return nil
	}
	return h.Images[len(h.Images)-2]
}

func historyFilePath(finchDir string) string {
	return filepath.Join(finchDir, historyFileName)
}

func LoadHistory(finchDir string, capacity int) (*OSImageHistory, error) {
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

func SaveHistory(finchDir string, h *OSImageHistory) error {
	data, err := json.MarshalIndent(h, "", "  ")
	if err != nil {
		return fmt.Errorf("failed to marshal image history: %w", err)
	}
	if err := os.WriteFile(historyFilePath(finchDir), data, 0o644); err != nil {
		return fmt.Errorf("failed to write image history: %w", err)
	}
	return nil
}
