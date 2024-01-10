// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows

package main

func (nc *nerdctlCommand) GetLimaArgs() []string {
	wd, err := nc.systemDeps.GetWd()
	if err != nil {
		nc.logger.Warnln("failed to get working directory, will default to user home with error %s", err.Error())
		return []string{"shell", limaInstanceName, "sudo", "-E"}
	}
	wslPath, err := convertToWSLPath(nc.systemDeps, wd)
	if err != nil {
		nc.logger.Warnln("failed to convert to WSL path, will default to user home with error %s", err.Error())
		return []string{"shell", limaInstanceName, "sudo", "-E"}
	}
	return []string{"shell", "--workdir", wslPath, limaInstanceName, "sudo", "-E"}
}
