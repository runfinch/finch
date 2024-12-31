// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"fmt"
	"path/filepath"
	"regexp"
	"strings"

	dockerops "github.com/docker/docker/opts"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/flog"
)

func (nc *nerdctlCommand) GetCmdArgs() []string {
	wd, err := nc.systemDeps.GetWd()
	if err != nil {
		nc.logger.Warnln("failed to get working directory, will default to user home with error %s", err.Error())
		return []string{"shell", limaInstanceName, "sudo", "-E"}
	}
	wslPath, err := convertToWSLPath(nc.systemDeps, wd)
	if err != nil {
		nc.logger.Warnln("failed to convert to WSL path, will default to user home with error %s", err.Error())
		return []string{"shell", limaInstanceName, "sudo", "-E"}
	}
	return []string{"shell", "--workdir", wslPath, limaInstanceName, "sudo", "-E"}
}

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

func resolveIP(host string, logger flog.Logger, ecc command.Creator) (string, error) {
	parts := strings.SplitN(host, ":", 2)
	// If the IP Address is a string called "host-gateway", replace this value with the IP address that can be used to
	// access host from the containers.
	var resolvedIP string
	if parts[1] == dockerops.HostGatewayName {
		// get ip address for adapter vEthernet (WSL) to reach host from wsl
		// https://learn.microsoft.com/en-us/windows/wsl/networking#accessing-windows-networking-apps-from-linux-host-ip
		out, err := ecc.Create("cmd", "/C", "netsh", "interface", "ipv4", "show", "addresses", "vEthernet (WSL)").Output()
		if err != nil {
			return "", err
		}
		resolvedIP = extractIPAddress(string(out))

		logger.Debugf(`Resolving special IP "host-gateway" to %q for host %q`, resolvedIP, parts[0])
		return fmt.Sprintf("%s:%s", parts[0], resolvedIP), nil
	}
	return host, nil
}

func extractIPAddress(data string) string {
	re := regexp.MustCompile(`IP Address:\s+(\d+\.\d+\.\d+\.\d+)`)
	match := re.FindStringSubmatch(data)

	if match != nil {
		return match[1]
	}
	return ""
}
