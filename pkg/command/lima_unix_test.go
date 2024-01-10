// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build !windows
// +build !windows

package command_test

const (
	envKeyPath = "PATH"
	finalPath  = mockQemuBinPath + ":" + mockSystemPath
)
