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

const metadataFileName = "os-image-metadata.json"

type UpdateMetadata struct {
	UpdateAvailable bool      `json:"update_available"`
	CurrentImage    string    `json:"current_image"`
	NewImage        string    `json:"new_image"`
	CheckedAt       time.Time `json:"checked_at"`
}

func metadataFilePath(finchDir string) string {
	return filepath.Join(finchDir, metadataFileName)
}

func WriteMetadata(finchDir string, metadata *UpdateMetadata) error {
	data, err := json.MarshalIndent(metadata, "", "  ")
	if err != nil {
		return fmt.Errorf("failed to marshal update metadata: %w", err)
	}
	path := metadataFilePath(finchDir)
	if err := os.WriteFile(path, data, 0o644); err != nil {
		return fmt.Errorf("failed to write update metadata: %w", err)
	}
	return nil
}

func ReadMetadata(finchDir string) (*UpdateMetadata, error) {
	data, err := os.ReadFile(metadataFilePath(finchDir))
	if err != nil {
		if errors.Is(err, os.ErrNotExist) {
			return nil, nil
		}
		return nil, fmt.Errorf("failed to read update metadata: %w", err)
	}
	var metadata UpdateMetadata
	if err := json.Unmarshal(data, &metadata); err != nil {
		return nil, fmt.Errorf("failed to unmarshal update metadata: %w", err)
	}
	return &metadata, nil
}

func ClearMetadata(finchDir string) error {
	err := os.Remove(metadataFilePath(finchDir))
	if err != nil && !errors.Is(err, os.ErrNotExist) {
		return fmt.Errorf("failed to remove update metadata: %w", err)
	}
	return nil
}
