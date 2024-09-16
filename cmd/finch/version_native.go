// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build linux

package main

import (
	"encoding/json"
	"fmt"
)

func (va *versionAction) printVersion(format string) error {
	nerdctlArgs := []string{"version", "--format", "json"}
	out, err := va.creator.CreateWithoutStdio(nerdctlArgs...).Output()
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
