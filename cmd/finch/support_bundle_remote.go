// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build (darwin || windows) && !native

package main

import (
	"fmt"

	"github.com/runfinch/finch/pkg/lima"
)

func (gsa *generateSupportBundleAction) assertVMExists() error {
	status, err := lima.GetVMStatus(gsa.ncc, gsa.logger, limaInstanceName)
	if err != nil {
		return err
	}
	switch status {
	case lima.Nonexistent:
		return fmt.Errorf("cannot create support bundle for nonexistent VM, run `finch %s init` to create a new instance",
			virtualMachineRootCmd)
	default:
		return nil
	}
}
