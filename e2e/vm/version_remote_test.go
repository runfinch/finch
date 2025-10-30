// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package vm

import (
	"bytes"
	"strings"
	"text/template"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"

	"github.com/runfinch/finch/pkg/version"
)

const (
	nerdctlVersion    = "v2.1.3"
	buildKitVersion   = "v0.23.2"
	containerdVersion = "v2.1.3"
	runcVersion       = "1.3.2"
)

type Versions struct {
	FinchVersion      string
	FinchCommit       string
	NerdctlVersion    string
	BuildKitVersion   string
	ContainerdVersion string
	RuncVersion       string
}

var versions = Versions{
	FinchVersion:      strings.ReplaceAll(version.Version, ".", "\\."),
	FinchCommit:       strings.ReplaceAll(version.GitCommit, ".", "\\."),
	NerdctlVersion:    strings.ReplaceAll(nerdctlVersion, ".", "\\."),
	BuildKitVersion:   strings.ReplaceAll(buildKitVersion, ".", "\\."),
	ContainerdVersion: strings.ReplaceAll(containerdVersion, ".", "\\."),
	RuncVersion:       strings.ReplaceAll(runcVersion, ".", "\\."),
}

// Checks finch version.
var testVersion = func(o *option.Option) {
	ginkgo.Describe("Check finch version", func() {
		ginkgo.It("Should print finch version information", func() {
			tmpl, err := template.New("versionTemplate").Parse(`Client:
 Version:	{{ .FinchVersion }}
 GitCommit:	{{ .FinchCommit }}
 OS\/Arch:	[A-Za-z0-9]+\/[A-Za-z0-9]+
 nerdctl:
  Version:	{{ .NerdctlVersion }}
  GitCommit:	[a-z0-9]{40}
 buildctl:
  Version:	{{ .BuildKitVersion }}
  GitCommit:	[a-z0-9]{40}

Server:
 containerd:
  Version:	{{ .ContainerdVersion }}
  GitCommit:	[a-z0-9]{40}
 runc:
  Version:	{{ .RuncVersion }}
  GitCommit:	v[0-9]+\.[0-9]+\.[0-9]+(-[0-9]+-g[a-z0-9]{7,8})?
`)
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			var versionMatcher bytes.Buffer
			err = tmpl.Execute(&versionMatcher, versions)
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			// command.StdoutStr is not used because it trims both leading and trailing spaces,
			// while we want an exact match here.
			gomega.Expect(string(command.Stdout(o, "version"))).Should(gomega.MatchRegexp(versionMatcher.String()))
		})
	})
}
