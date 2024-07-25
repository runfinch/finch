// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build linux

package config

// Finch represents the configuration file for Finch CLI.
type Finch struct {
	SharedSettings `yaml:",inline"`
}
