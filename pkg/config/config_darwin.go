// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package config

import (
	"fmt"
	"strconv"
	"strings"

	"github.com/runfinch/finch/pkg/command"
)

// SupportsVirtualizationFramework checks if the user's system supports Virtualization.framework.
func SupportsVirtualizationFramework(cmdCreator command.Creator) (bool, error) {
	cmd := cmdCreator.Create("sw_vers", "-productVersion")
	out, err := cmd.Output()
	if err != nil {
		return false, fmt.Errorf("failed to run sw_vers command: %w", err)
	}

	splitVer := strings.Split(string(out), ".")
	if len(splitVer) == 0 {
		return false, fmt.Errorf("unexpected result from string split: %v", splitVer)
	}

	majorVersionInt, err := strconv.ParseInt(splitVer[0], 10, 64)
	if err != nil {
		return false, fmt.Errorf("failed to parse split sw_vers output (%s) into int: %w", splitVer[0], err)
	}

	if majorVersionInt >= 13 {
		return true, nil
	}

	return false, nil
}
