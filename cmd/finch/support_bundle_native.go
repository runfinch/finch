// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build linux

package main

// canCreateBundle returns an error if there's any issue preventing creating of
// a support bundle.
// This is used in "remote" mode to gate creation to the VM being online.
func (gsa *generateSupportBundleAction) canCreateBundle() error {
	return nil
}
