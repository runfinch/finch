// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package e2e

import (
	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"

	"github.com/runfinch/finch/pkg/version"
)

// Checks finch version.
var testVersion = func(o *option.Option) {
	ginkgo.FDescribe("Check finch version", func() {
		ginkgo.BeforeEach(func() {
			command.RemoveAll(o)
		})
		ginkgo.AfterEach(func() {
			command.RemoveAll(o)
		})

		ginkgo.FIt("Should print finch version information", func() {
			versionInfo := command.StdOut(o, "version")
			gomega.Expect(versionInfo).Should(gomega.ContainSubstring(version.Version))
			gomega.Expect(versionInfo).Should(gomega.ContainSubstring(version.GitCommit))
		})
	})
}
