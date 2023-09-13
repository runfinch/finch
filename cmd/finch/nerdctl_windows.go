// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"fmt"
	"path/filepath"
	"strings"
)

func convertToWSLPath(systemDeps NerdctlCommandSystemDeps, winPath string) (string, error) {
	path := filepath.Clean(winPath)
	var err error

	path, err = systemDeps.FilePathAbs(winPath)
	if err != nil {
		return "", err
	}
	if len(path) >= 2 && path[1] == ':' {
		drive := strings.ToLower(string(path[0]))
		remainingPath := ""
		if len(path) > 3 {
			remainingPath = path[3:]
		}
		return systemDeps.FilePathToSlash(systemDeps.FilePathJoin(string(filepath.Separator), "mnt", drive, remainingPath)), nil
	}
	return path, nil
}

func handleFilePath(systemDeps NerdctlCommandSystemDeps, filePath string) (string, error) {
	return convertToWSLPath(systemDeps, filePath)
}

func handleVolume(systemDeps NerdctlCommandSystemDeps, v string) (string, error) {
	cleanArg := v
	readWrite := ""
	if strings.HasSuffix(v, ":ro") || strings.HasSuffix(v, ":rw") {
		readWrite = v[len(v)-3:]
		cleanArg = v[:len(v)-3]
	}
	// For now, assume the container path doesn't contain colons.
	colonIndex := strings.LastIndex(cleanArg, ":")
	if colonIndex < 0 {
		return "", fmt.Errorf("invalid volume mount: %s does not contain : separator", v)
	}
	hostPath := cleanArg[:colonIndex]
	hostPath, err := systemDeps.FilePathAbs(hostPath)
	// If it's an anonymous volume, then the path won't exist
	if err != nil {
		return v, nil
	}

	containerPath := cleanArg[colonIndex+1:]
	wslHostPath, err := convertToWSLPath(systemDeps, hostPath)
	if err != nil {
		return "", fmt.Errorf("could not get volume host path for %s: %w", v, err)
	}
	return wslHostPath + ":" + containerPath + readWrite, nil
}
