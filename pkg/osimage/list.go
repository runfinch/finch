// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package osimage

import (
	"fmt"
	"os"
	"path/filepath"
	"strings"

	finchPath "github.com/runfinch/finch/pkg/path"
)

type ImageInfo struct {
	Name string
	Path string
	Size int64
}

func ListImages(fp finchPath.Finch) ([]ImageInfo, error) {
	osImageDir := fp.OSImageDir()
	entries, err := os.ReadDir(osImageDir)
	if err != nil {
		return nil, fmt.Errorf("failed to read OS image directory %s: %w", osImageDir, err)
	}

	var images []ImageInfo
	for _, entry := range entries {
		if entry.IsDir() {
			continue
		}
		name := entry.Name()
		// .qcow2 for MacOS images and .tar.gz for Windows rootfs.
		// filepath.Ext() returns .gz and not .tar.gz for Windows.
		if filepath.Ext(name) != ".qcow2" && !strings.HasSuffix(name, ".tar.gz") {
			continue
		}
		info, err := entry.Info()
		if err != nil {
			return nil, fmt.Errorf("failed to get info for %s: %w", entry.Name(), err)
		}
		images = append(images, ImageInfo{
			Name: entry.Name(),
			Path: filepath.Join(osImageDir, entry.Name()),
			Size: info.Size(),
		})
	}

	return images, nil
}
