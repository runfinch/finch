// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

// VMAutoStarter ensures the VM is running, automatically initializing or starting it as needed.
//
//go:generate mockgen -copyright_file=../../copyright_header -destination=../../pkg/mocks/vm_auto_starter.go -package=mocks -mock_names VMAutoStarter=VMAutoStarter . VMAutoStarter
type VMAutoStarter interface {
	EnsureVMRunning() error
}
