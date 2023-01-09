// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package e2e

import (
	//"fmt"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"
)

// Checks finch version
var testVersion = func(o *option.Option, m *option.Option) {
	ginkgo.FDescribe("Check finch version", func() {
		
		ginkgo.BeforeEach(func() {
			command.RemoveAll(o)
		})
		ginkgo.AfterEach(func() {
			command.RemoveAll(o)
		})

		ginkgo.FIt("Should print finch version information", func() {
			gomega.Expect(command.StdoutStr(o, "version")).ShouldNot(gomega.BeEmpty())
		})

		ginkgo.FIt("Should print finch version information", func() {
			gomega.Expect(command.StdoutStr(m, "version")).ShouldNot(gomega.BeEmpty())
		})

	})
}
