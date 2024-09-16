// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build !windows

package command

const (
	envKeyPath       = "PATH"
	envKeyPathJoiner = ":"
)
