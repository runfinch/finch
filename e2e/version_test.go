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
	ginkgo.Describe("Check finch version", func() {
		ginkgo.It("Should print finch version information", func() {
			versionInfo := command.StdoutStr(o, "version")
			gomega.Expect(versionInfo).Should(gomega.ContainSubstring(version.Version))
			gomega.Expect(versionInfo).Should(gomega.ContainSubstring(version.GitCommit))
		})

		ginkgo.It("Should print finch version information", func() {
			//nolint: lll // Version output format is larger than 500 character
			gomega.Expect(command.StdoutStr(o, "version")).Should(gomega.MatchRegexp("Client:\\s+Version:\\s+v[0-9]+\\.[0-9]+\\.[0-9]+-[0-9]+-[A-Za-z0-9]+\\s+OS/Arch:\\s+[A-Za-z0-9]+/[A-Za-z0-9]+\\s+GitCommit:\\s+[A-Za-z0-9]+\\s+nerdctl:\\s+Version:\\s+v([0-9]+(\\.[0-9]+)+)\\s+GitCommit:\\s+[A-Za-z0-9]+\\s+buildctl:\\s+Version:\\s+v([0-9]+(\\.[0-9]+)+)\\s+GitCommit:\\s+[A-Za-z0-9]+\\s+Server:\\s+containerd:\\s+Version:\\s+v(\\d(\\.\\d)+)\\s+GitCommit:\\s+[A-Za-z0-9]+\\s+runc:\\s+Version:\\s+([A-Za-z0-9]+(\\.[A-Za-z0-9]+)+)\\s+GitCommit:\\s+v([0-9]+(\\.[0-9]+)+)-[0-9]+-[A-Za-z0-9]+"))
		})
	})
}
