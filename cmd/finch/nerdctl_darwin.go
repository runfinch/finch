// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package main

import (
	"fmt"
	"strings"

	dockerops "github.com/docker/docker/opts"
	"github.com/lima-vm/lima/pkg/networks"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/flog"
)

func convertToWSLPath(_ NerdctlCommandSystemDeps, _ string) (string, error) {
	return "", nil
}

var osAliasMap = map[string]string{}

var osArgHandlerMap = map[string]map[string]argHandler{
	"container run": {
		"--mount": handleBindMounts,
	},
}

var osCommandHandlerMap = map[string]commandHandler{}

func (nc *nerdctlCommand) GetCmdArgs() []string {
	return []string{"shell", limaInstanceName, "sudo", "-E"}
}

func resolveIP(host string, logger flog.Logger, _ command.Creator) (string, error) {
	parts := strings.SplitN(host, ":", 2)
	// If the IP Address is a string called "host-gateway", replace this value with the IP address that can be used to
	// access host from the containers.
	// TODO: make the host gateway ip configurable.
	var resolvedIP string
	if parts[1] == dockerops.HostGatewayName {
		resolvedIP = networks.SlirpGateway

		logger.Debugf(`Resolving special IP "host-gateway" to %q for host %q`, resolvedIP, parts[0])
		return fmt.Sprintf("%s:%s", parts[0], resolvedIP), nil
	}
	return host, nil
}

// removes the consistency key-value entity from --mount.
func handleBindMounts(_ NerdctlCommandSystemDeps, _ *config.Finch, nerdctlCmdArgs []string, index int) error {
	prefix := nerdctlCmdArgs[index]
	var (
		v      string
		found  bool
		before string
	)
	if strings.Contains(nerdctlCmdArgs[index], "=") {
		before, v, found = strings.Cut(prefix, "=")
	} else {
		if (index + 1) < len(nerdctlCmdArgs) {
			v = nerdctlCmdArgs[index+1]
		} else {
			return fmt.Errorf("invalid positional parameter for %s", prefix)
		}
	}

	// This is where the 'consistency=cached' strings should be removed....
	//   "consistency will be one of the keys in the following map"

	// eg --mount type=bind,source="$(pwd)"/target,target=/app,readonly
	// eg --mount type=bind,
	//            source=/Users/stchew/projs/arbtest_devcontainers_extensions,
	//            target=/workspaces/arbtest_devcontainers_extensions,
	//            consistency=cached
	// https://docs.docker.com/storage/bind-mounts/#choose-the--v-or---mount-flag  order does not matter, so convert to a map
	entries := strings.Split(v, ",")
	m := make(map[string]string)
	ro := []string{}
	for _, e := range entries {
		parts := strings.Split(e, "=")
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

	// Remove 'consistency' key-value pair
	delete(m, "consistency")

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

func mapToString(m map[string]string) string {
	var parts []string
	for k, v := range m {
		part := fmt.Sprintf("%s=%s", k, v)
		parts = append(parts, part)
	}
	return strings.Join(parts, ",")
}
