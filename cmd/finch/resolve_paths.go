// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package main

import (
	"fmt"
	"os"
	"path/filepath"
	"strings"
)

// resolveBaseYamlPaths reads the base YAML template, detects the baked-in
// install root, replaces it with the current install root, and writes the
// resolved copy to outputPath. The original template is never modified.
func resolveBaseYamlPaths(templatePath, outputPath string) error {
	absTemplatePath, err := filepath.Abs(templatePath)
	if err != nil {
		return fmt.Errorf("failed to resolve base YAML path: %w", err)
	}

	currentRoot := filepath.Dir(filepath.Dir(absTemplatePath))

	content, err := os.ReadFile(absTemplatePath) //nolint:gosec // known internal path
	if err != nil {
		return fmt.Errorf("failed to read base YAML template: %w", err)
	}

	oldRoot := detectRoot(string(content))

	var resolved []byte
	if oldRoot == "" || oldRoot == currentRoot {
		resolved = content
	} else {
		resolved = []byte(strings.ReplaceAll(string(content), oldRoot, currentRoot))
	}

	if err := os.MkdirAll(filepath.Dir(outputPath), 0o750); err != nil {
		return fmt.Errorf("failed to create output directory: %w", err)
	}

	//nolint:gosec // outputPath is the internal lima config directory
	if err := os.WriteFile(outputPath, resolved, 0o644); err != nil {
		return fmt.Errorf("failed to write resolved base YAML: %w", err)
	}

	return nil
}

// detectRoot finds the baked-in install root by locating the first "/os/"
// path in the content. The image location is always present and uses this
// pattern: "<root>/os/<image>.qcow2".
func detectRoot(content string) string {
	idx := strings.Index(content, "/os/")
	if idx < 0 {
		return ""
	}
	start := strings.LastIndexAny(content[:idx], "\"' \n")
	if start < 0 {
		return ""
	}
	root := content[start+1 : idx]
	if len(root) == 0 || root[0] != '/' {
		return ""
	}
	return root
}
