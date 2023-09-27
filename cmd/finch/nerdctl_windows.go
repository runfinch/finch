// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"fmt"
	"path/filepath"
	"strings"
)

func convertToWSLPath(systemDeps NerdctlCommandSystemDeps, winPath string) (string, error) {
	path, err := systemDeps.FilePathAbs(filepath.Clean(winPath))
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

// substitues wsl path for the provided option in place for nerdctl args
func handleFilePath(systemDeps NerdctlCommandSystemDeps, nerdctlCmdArgs []string, index int) error {
	var prefix = nerdctlCmdArgs[index]

	// If --filename="<filepath> then we need to cut <filepath> and convert that to wsl path
	if strings.Contains(nerdctlCmdArgs[index], "=") {
		before, after, _ := strings.Cut(prefix, "=")
		wslPath, err := convertToWSLPath(systemDeps, after)
		if err != nil {
			return err
		}
		nerdctlCmdArgs[index] = fmt.Sprintf("%s=%s", before, wslPath)
	} else {
		if (index + 1) < len(nerdctlCmdArgs) {
			wslPath, err := convertToWSLPath(systemDeps, nerdctlCmdArgs[index+1])
			if err != nil {
				return err
			}
			nerdctlCmdArgs[index+1] = wslPath
		} else {
			return fmt.Errorf("invalid positional parameter for %s", prefix)
		}
	}
	return nil
}

// hanldes -v/--volumes option. For anonymous volumes and named volumes this is no-op. For bind mounts path is converted to wsl path.
func handleVolume(systemDeps NerdctlCommandSystemDeps, nerdctlCmdArgs []string, index int) error {
	var prefix = nerdctlCmdArgs[index]
	var v = ""
	var found = false
	var before = ""
	if strings.Contains(nerdctlCmdArgs[index], "=") {
		before, v, found = strings.Cut(prefix, "=")
	} else {
		if (index + 1) < len(nerdctlCmdArgs) {
			v = nerdctlCmdArgs[index+1]
		} else {
			return fmt.Errorf("invalid positional parameter for %s", prefix)
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
		nerdctlCmdArgs[index] = fmt.Sprintf("%s=%s:%s%s", before, wslHostPath, containerPath, readWrite)
	} else {
		nerdctlCmdArgs[index+1] = fmt.Sprintf("%s:%s%s", wslHostPath, containerPath, readWrite)
	}
	return nil
}

// translates source path of the bind mount to wslpath for --mount option
func handleBindMounts(systemDeps NerdctlCommandSystemDeps, nerdctlCmdArgs []string, index int) error {
	var prefix = nerdctlCmdArgs[index]
	var v = ""
	var found = false
	var before = ""
	if strings.Contains(nerdctlCmdArgs[index], "=") {
		before, v, found = strings.Cut(prefix, "=")
	} else {
		if (index + 1) < len(nerdctlCmdArgs) {
			v = nerdctlCmdArgs[index+1]
		} else {
			return fmt.Errorf("invalid positional parameter for %s", prefix)
		}
	}

	// https://docs.docker.com/storage/bind-mounts/#choose-the--v-or---mount-flag  order does not matter, so convert to a map
	entries := strings.Split(v, ",")
	m := make(map[string]string)
	ro := []string{}
	for _, e := range entries {
		parts := strings.Split(e, "=")
		// eg --mount type=bind,source="$(pwd)"/target,target=/app,readonly
		if len(parts) < 2 {
			ro = append(ro, parts...)
		} else {
			m[strings.TrimSpace(parts[0])] = strings.TrimSpace(parts[1])
		}
	}
	// Check if type is bind mount, else return
	if m["type"] != "bind" {
		return nil
	}
	var k string
	path, ok := m["src"]
	if !ok {
		path, ok = m["source"]
		k = "source"
	} else {
		k = "src"
	}
	// If there is no src or source or not a windows path, do nothing, let nerdctl handle error
	if !ok || !strings.Contains(path, `\`) {
		return nil
	}
	wslPath, err := convertToWSLPath(systemDeps, path)
	if err != nil {
		return err
	}
	m[k] = wslPath

	// Convert to string representation
	s := mapToString(m)
	// append read-only key if present
	if len(ro) > 0 {
		s = s + "," + strings.Join(ro, ",")
	}
	if found {
		nerdctlCmdArgs[index] = fmt.Sprintf("%s=%s", before, s)
	} else {
		nerdctlCmdArgs[index+1] = s
	}

	return nil
}

// handles --output/-o for build command
func handleOutputOption(systemDeps NerdctlCommandSystemDeps, nerdctlCmdArgs []string, index int) error {
	var prefix = nerdctlCmdArgs[index]
	var v = ""
	var found = false
	var before = ""
	if strings.Contains(nerdctlCmdArgs[index], "=") {
		before, v, found = strings.Cut(prefix, "=")
	} else {
		if (index + 1) < len(nerdctlCmdArgs) {
			v = nerdctlCmdArgs[index+1]
		} else {
			return fmt.Errorf("invalid positional parameter for %s", prefix)
		}
	}

	// https://docs.docker.com/engine/reference/commandline/build/ order does not matter, so convert to a map
	entries := strings.Split(v, ",")
	m := make(map[string]string)
	for _, e := range entries {
		parts := strings.Split(e, "=")
		m[strings.TrimSpace(parts[0])] = strings.TrimSpace(parts[1])
	}
	dest, ok := m["dest"]
	if !ok {
		return nil
	}
	wslPath, err := convertToWSLPath(systemDeps, dest)
	if err != nil {
		return err
	}
	m["dest"] = wslPath

	// Convert to string representation
	s := mapToString(m)

	if found {
		nerdctlCmdArgs[index] = fmt.Sprintf("%s=%s", before, s)
	} else {
		nerdctlCmdArgs[index+1] = s
	}

	return nil
}

// handles --secret option for build command.
func handleSecretOption(systemDeps NerdctlCommandSystemDeps, nerdctlCmdArgs []string, index int) error {
	var prefix = nerdctlCmdArgs[index]
	var v = ""
	var found = false
	var before = ""
	if strings.Contains(nerdctlCmdArgs[index], "=") {
		before, v, found = strings.Cut(prefix, "=")
	} else {
		if (index + 1) < len(nerdctlCmdArgs) {
			v = nerdctlCmdArgs[index+1]
		} else {
			return fmt.Errorf("invalid positional parameter for %s", prefix)
		}
	}

	entries := strings.Split(v, ",")
	m := make(map[string]string)
	for _, e := range entries {
		parts := strings.Split(e, "=")
		m[strings.TrimSpace(parts[0])] = strings.TrimSpace(parts[1])
	}
	sp, ok := m["src"]
	if !ok {
		return nil
	}
	wslPath, err := convertToWSLPath(systemDeps, sp)
	if err != nil {
		return err
	}
	m["src"] = wslPath

	// Convert to string representation
	s := mapToString(m)

	if found {
		nerdctlCmdArgs[index] = fmt.Sprintf("%s=%s", before, s)
	} else {
		nerdctlCmdArgs[index+1] = s
	}

	return nil
}

// cp command handler, takes command arguments and converts hostpath to wsl path in place. It ignores all other arguments
func cpHandler(systemDeps NerdctlCommandSystemDeps, nerdctlCmdArgs []string) error {
	for i, arg := range nerdctlCmdArgs {
		// -L and --follow-symlink don't have to be processed
		if strings.HasPrefix(arg, "-") || arg == "cp" {
			continue
		} else {
			// If argument contains container path, then continue
			colon := strings.Index(arg, ":")

			// this is a container path
			if colon > 1 {
				continue
			}
			wslPath, err := convertToWSLPath(systemDeps, arg)
			if err != nil {
				return err
			}
			nerdctlCmdArgs[i] = wslPath
		}
	}
	return nil
}

// this is the handler for image build command. It translates build context to wsl path.
func imageBuildHandler(systemDeps NerdctlCommandSystemDeps, nerdctlCmdArgs []string) error {
	var err error
	argLen := len(nerdctlCmdArgs) - 1
	// -h/--help don't have buildcontext, just return
	for _, a := range nerdctlCmdArgs {
		if a == "--help" || a == "-h" {
			return nil
		}
	}
	if nerdctlCmdArgs[argLen] != "--debug" {
		nerdctlCmdArgs[argLen], err = convertToWSLPath(systemDeps, nerdctlCmdArgs[argLen])
		if err != nil {
			return err
		}
	} else {
		nerdctlCmdArgs[argLen-1], err = convertToWSLPath(systemDeps, nerdctlCmdArgs[argLen-1])
		if err != nil {
			return err
		}
	}
	return nil
}

var aliasMap = map[string]string{
	"build": "image build",
	"save":  "image save",
	"load":  "image load",
	"cp":    "container cp",
	"run":   "container run",
}

var argHandlerMap = map[string]map[string]argHandler{
	"image build": {
		"-f":        handleFilePath,
		"--file":    handleFilePath,
		"--iidfile": handleFilePath,
		"-o":        handleOutputOption,
		"--output":  handleOutputOption,
		"--secret":  handleSecretOption,
	},
	"image save": {
		"-o":       handleFilePath,
		"--output": handleFilePath,
	},
	"image load": {
		"-i":      handleFilePath,
		"--input": handleFilePath,
	},
	"container run": {
		"--label-file": handleFilePath,
		"--cosign-key": handleFilePath,
		"--cidfile":    handleFilePath,
		"-v":           handleVolume,
		"--volume":     handleVolume,
		"--mount":      handleBindMounts,
	},
	"compose": {
		"--file": handleFilePath,
	},
}

var commandHandlerMap = map[string]commandHandler{
	"container cp": cpHandler,
	"image build":  imageBuildHandler,
}

func mapToString(m map[string]string) string {
	var parts []string
	for k, v := range m {
		part := fmt.Sprintf("%s=%s", k, v)
		parts = append(parts, part)
	}
	return strings.Join(parts, ",")
}
