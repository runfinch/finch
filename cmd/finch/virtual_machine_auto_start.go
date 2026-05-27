// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

// VMAutoStarter ensures the VM is running, automatically initializing or starting it as needed.
type VMAutoStarter interface {
	EnsureVMRunning() error
}
