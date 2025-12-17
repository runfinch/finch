// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build linux

package support

func (bc *bundleConfig) LogFiles() []string {
	// TODO: add support for dumping logs from journalctl?
	files := []string{}
	return files
}

func (bc *bundleConfig) ConfigFiles() []string {
	return []string{
		bc.finch.ConfigFilePath(),
	}
}

func (bc *bundleConfig) JournalServices() []string {
	return []string{"service:containerd", "service:finch", "service:buildkit", "service:soci"}
}
