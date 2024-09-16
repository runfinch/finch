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
	"github.com/runfinch/finch/pkg/flog"
)

func convertToWSLPath(_ NerdctlCommandSystemDeps, _ string) (string, error) {
	return "", nil
}

var aliasMap = map[string]string{
	"run": "container run",
}

var argHandlerMap = map[string]map[string]argHandler{}

var commandHandlerMap = map[string]commandHandler{}

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
