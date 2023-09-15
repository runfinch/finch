// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package main

func handleFilePath(_ NerdctlCommandSystemDeps, path string) (string, error) {
	return path, nil
}

func handleVolume(_ NerdctlCommandSystemDeps, v string) (string, error) {
	return v, nil
}
