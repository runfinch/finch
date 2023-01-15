// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package vm

import (
	"fmt"
	"strings"

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
			// StdoutStr is not used because it trims both leading and trailing spaces,
			// while we want an exact match here.
			gomega.Expect(string(command.StdOut(o, "version"))).Should(gomega.MatchRegexp(fmt.Sprintf(`Client:
 Version:	%s
 OS\/Arch:	[A-Za-z0-9]+\/[A-Za-z0-9]+
 GitCommit:	%s
 nerdctl:
  Version:	v[0-9]+\.[0-9]+\.[0-9]+
  GitCommit:	[a-z0-9]{40}
 buildctl:
  Version:	v[0-9]+\.[0-9]+\.[0-9]+
  GitCommit:	[a-z0-9]{40}

Server:
 containerd:
  Version:	v[0-9]+\.[0-9]+\.[0-9]+
  GitCommit:	[a-z0-9]{40}
 runc:
  Version:	[0-9]+\.[0-9]+\.[0-9]+
  GitCommit:	v[0-9]+\.[0-9]+\.[0-9]+(-[0-9]+-g[a-z0-9]{8})?
`, strings.ReplaceAll(version.Version, ".", "\\."), version.GitCommit)))
		})
	})
}
