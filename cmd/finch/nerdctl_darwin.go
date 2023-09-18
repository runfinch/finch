// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package main

func handleFilePath(systemDeps NerdctlCommandSystemDeps, path string) (string, error) {
	return path, nil
}

func handleVolume(systemDeps NerdctlCommandSystemDeps, v string) (string, error) {
	return v, nil
}

var aliasMap = map[string]string{}

var argHandlerMap = map[string]map[string]argHandler{}
