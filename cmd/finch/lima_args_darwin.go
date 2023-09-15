// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package main

func (nc *nerdctlCommand) GetLimaArgs() []string {
	return []string{"shell", limaInstanceName, "sudo", "-E"}
}
