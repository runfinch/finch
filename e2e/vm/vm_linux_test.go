// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build linux

// Package vm runs tests related to the virtual machine.
package vm

import (
	"testing"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"

	"github.com/runfinch/finch/e2e"
)

//nolint:paralleltest // TestVM is like TestMain for the VM-related tests.
func TestVM(t *testing.T) {
	const description = "Finch Virtual Machine E2E Tests"

	o, err := e2e.CreateOption()
	if err != nil {
		t.Fatal(err)
	}

	ginkgo.Describe("", func() {
		testSupportBundle(o)
	})

	gomega.RegisterFailHandler(ginkgo.Fail)
	ginkgo.RunSpecs(t, description)
}
