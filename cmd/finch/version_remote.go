// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build (darwin || windows) && !native

package main

import (
	"encoding/json"
	"errors"
	"fmt"

	"github.com/runfinch/finch/pkg/lima"
)

func (va *versionAction) printVersion(format string) error {
	status, err := lima.GetVMStatus(va.creator, va.logger, limaInstanceName)
	if err != nil {
		return fmt.Errorf("failed to get VM status: %w", err)
	}
	if status != lima.Running {
		return errors.New("detailed version info is unavailable because VM is not running")
	}
	// Add -E to sudo command in order to preserve existing environment variables, more info:
	// https://stackoverflow.com/questions/8633461/how-to-keep-environment-variables-when-using-sudo/8633575#8633575
	limaArgs := []string{"shell", limaInstanceName, "sudo", "-E", "nerdctl", "version", "--format", "json"}
	out, err := va.creator.CreateWithoutStdio(limaArgs...).Output()
	if err != nil {
		return fmt.Errorf("failed to create the nerdctl version command: %w", err)
	}

	var nerdctlVersion NerdctlVersionOutput
	err = json.Unmarshal(out, &nerdctlVersion)
	if err != nil {
		return fmt.Errorf("failed to JSON-unmarshal the nerdctl version output: %w", err)
	}

	tmpl, err := newVersionTemplate(format)
	if err != nil {
		return err
	}
	err = va.showVersionMessage(tmpl, nerdctlVersion)
	if err != nil {
		return err
	}

	return nil
}
