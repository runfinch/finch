// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows

package command

// EnvKeyPath is the name of the PATH environment variable.
// EnvKeyPathJoiner is the "joiner" between directories in a PATH string.
// These are exported to facilitate unit testing, since it uses a different package (command_test).
const (
	EnvKeyPath       = "Path"
	EnvKeyPathJoiner = `\;`
)
