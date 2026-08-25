// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

// Package osimage provies osimage related utilities.
package osimage

import (
	"fmt"
	"os"
	"strings"
)

// ApplyImage applies a new os image to finch.yaml.
func ApplyImage(finchYamlPath, newImagePath, newImageDigest string) error {
	// #nosec G304 -- path is from a controlled argument, not user input
	finchYamlBytes, err := os.ReadFile(finchYamlPath)
	if err != nil {
		return fmt.Errorf("failed to read finch.yaml: %w", err)
	}
	updatedYaml, err := updateFinchYAMLImage(finchYamlBytes, newImagePath, newImageDigest)
	if err != nil {
		return fmt.Errorf("failed to update finch.yaml content: %w", err)
	}
	// #nosec G703 -- path is Finch's own config location from pkg/path, not user input
	if err := os.WriteFile(finchYamlPath, updatedYaml, 0o644); err != nil {
		return fmt.Errorf("failed to write updated finch.yaml: %w", err)
	}
	return nil
}

func updateFinchYAMLImage(yamlBytes []byte, newImageLocation, newImageDigest string) ([]byte, error) {
	lines := strings.Split(string(yamlBytes), "\n")
	inImages := false
	foundFirst := false
	for i, line := range lines {
		trimmed := strings.TrimSpace(line)
		if trimmed == "images:" || strings.HasPrefix(trimmed, "images:") {
			inImages = true
			continue
		}
		if inImages && strings.HasPrefix(trimmed, "- location:") && !foundFirst {
			foundFirst = true
			indent := line[:len(line)-len(strings.TrimLeft(line, " "))]
			lines[i] = indent + fmt.Sprintf("- location: %q", newImageLocation)
			continue
		}
		if foundFirst && strings.HasPrefix(trimmed, "digest:") {
			indent := line[:len(line)-len(strings.TrimLeft(line, " "))]
			lines[i] = indent + fmt.Sprintf("digest: %q", newImageDigest)
			break
		}
	}

	if !foundFirst {
		return nil, fmt.Errorf("could not find images[0] entry in finch.yaml")
	}
	return []byte(strings.Join(lines, "\n")), nil
}
