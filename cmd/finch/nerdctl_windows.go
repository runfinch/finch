// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"fmt"
	"path/filepath"
	"strings"
)

func convertToWSLPath(systemDeps NerdctlCommandSystemDeps, winPath string) (string, error) {
	var path = filepath.Clean(winPath)
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

func handleFilePath(systemDeps NerdctlCommandSystemDeps, args []string, index int) error {
	var prefix = args[index]

	// If --filename="<filepath> then we need to cut <filepath> and convert that to wsl path
	if strings.Contains(args[index], "=") {
		before, after, _ := strings.Cut(prefix, "=")
		wslPath, err := convertToWSLPath(systemDeps, after)
		if err != nil {
			return err
		}
		args[index] = fmt.Sprintf("%s=%s", before, wslPath)
	} else {
		if (index + 1) < len(args) {
			wslPath, err := convertToWSLPath(systemDeps, args[index+1])
			if err != nil {
				return err
			}
			args[index+1] = wslPath
		} else {
			fmt.Errorf("invalid positional parameter for %s", prefix)
		}
	}
	return nil
}

func handleVolume(systemDeps NerdctlCommandSystemDeps, args []string, index int) error {
	var prefix = args[index]
	var v = ""
	var found = false
	var before = ""
	if strings.Contains(args[index], "=") {
		before, v, found = strings.Cut(prefix, "=")
	} else {
		if (index + 1) < len(args) {
			v = args[index+1]
		} else {
			fmt.Errorf("invalid positional parameter for %s", prefix)
		}
	}
	cleanArg := v
	readWrite := ""
	if strings.HasSuffix(v, ":ro") || strings.HasSuffix(v, ":rw") {
		readWrite = v[len(v)-3:]
		cleanArg = v[:len(v)-3]
	} else if strings.HasSuffix(v, ":rro") {
		readWrite = v[len(v)-4:]
		cleanArg = v[:len(v)-4]
	}

	colonIndex := strings.LastIndex(cleanArg, ":")
	if colonIndex < 0 {
		return nil
	}
	hostPath := cleanArg[:colonIndex]
	// This is a named volume, or an anonymous volume from https://github.com/containerd/nerdctl/blob/main/pkg/mountutil/mountutil.go#L76
	if !strings.Contains(hostPath, "\\") || len(hostPath) == 0 {
		return nil
	}

	hostPath, err := systemDeps.FilePathAbs(hostPath)
	// If it's an anonymous volume, then the path won't exist
	if err != nil {
		return err
	}

	containerPath := cleanArg[colonIndex+1:]
	wslHostPath, err := convertToWSLPath(systemDeps, hostPath)
	if err != nil {
		return fmt.Errorf("could not get volume host path for %s: %w", v, err)
	}

	if found {
		args[index] = fmt.Sprintf("%s=%s:%s%s", before, wslHostPath, containerPath, readWrite)
	} else {
		args[index+1] = fmt.Sprintf("%s:%s%s", wslHostPath, containerPath, readWrite)
	}
	return nil
}

var aliasMap = map[string]string{
	"build": "image build",
	"cp":    "container cp",
	"run":   "container run",
}

var argHandlerMap = map[string]map[string]argHandler{
	"image build": {
		"-f":     handleFilePath,
		"--file": handleFilePath,
	},
	"container run": {
		"--label-file": handleFilePath,
		"--cosign-key": handleFilePath,
		"-v":           handleVolume,
		"--volume":     handleVolume,
	},
}
