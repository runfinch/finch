// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package benchmark runs benchmark tests of Finch.
package benchmark

import (
	"flag"
	"fmt"
	"os"
	"path/filepath"
)

// InstalledTestSubject is the test subject when Finch is installed.
const InstalledTestSubject = "finch"

// Installed indicates whether the tests are run against installed application.
var Installed = flag.Bool("installed", false, "the flag to show whether the tests are run against installed application")

// GetSubject returns the testing subject based on INSTALLED flag.
func GetSubject() (string, error) {
	wd, err := os.Getwd()
	if err != nil {
		return "", fmt.Errorf("failed to get the current working directory: %w", err)
	}

	subject := filepath.Join(wd, "../../_output/bin/finch")
	if *Installed {
		subject = InstalledTestSubject
	}
	return subject, nil
}
