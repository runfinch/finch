// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package vm

import (
	"bytes"
	"strings"
	"text/template"
	"time"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"

	"github.com/runfinch/finch/pkg/version"
)

var (
	// NerdctlVersion is filled via Makefile.
	NerdctlVersion string
	// ContainerdVersion is filled via Makefile.
	ContainerdVersion string
	// BuildKitVersion is filled via Makefile.
	BuildKitVersion string
	// RuncVersion is filled via Makefile.
	RuncVersion string
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
	NerdctlVersion:    strings.ReplaceAll(NerdctlVersion, ".", "\\."),
	BuildKitVersion:   strings.ReplaceAll(BuildKitVersion, ".", "\\."),
	ContainerdVersion: strings.ReplaceAll(ContainerdVersion, ".", "\\."),
	RuncVersion:       strings.ReplaceAll(RuncVersion, ".", "\\."),
}

// versionRegexp returns a compiled regex that matches the expected `finch version` output.
func versionRegexp() string {
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
	var buf bytes.Buffer
	err = tmpl.Execute(&buf, versions)
	gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
	return buf.String()
}

// Checks finch version.
var testVersion = func(o *option.Option) {
	ginkgo.Describe("Check finch version", func() {
		ginkgo.It("Should print finch version information", func() {
			gomega.Expect(string(command.Stdout(o, "version"))).Should(gomega.MatchRegexp(versionRegexp()))
		})

		ginkgo.It("should auto-start a stopped VM when running finch version", ginkgo.Serial, func() {
			command.New(o, virtualMachineRootCmd, "stop").WithTimeoutInSeconds(90).Run()
			gomega.Expect(command.StdoutStr(o, virtualMachineRootCmd, "status")).To(gomega.Equal("Stopped"))

			gomega.Expect(string(command.New(o, "version").WithTimeoutInSeconds(240).Run().Out.Contents())).
				Should(gomega.MatchRegexp(versionRegexp()))
			gomega.Expect(command.StdoutStr(o, virtualMachineRootCmd, "status")).To(gomega.Equal("Running"))
		})

		ginkgo.It("should auto-init a nonexistent VM when running finch version", ginkgo.Serial, func() {
			command.New(o, virtualMachineRootCmd, "stop", "-f").WithTimeoutInSeconds(90).Run()
			time.Sleep(1 * time.Second)
			command.New(o, virtualMachineRootCmd, "remove", "-f").WithTimeoutInSeconds(60).Run()
			gomega.Expect(command.StdoutStr(o, virtualMachineRootCmd, "status")).To(gomega.Equal("Nonexistent"))

			gomega.Expect(string(command.New(o, "version").WithTimeoutInSeconds(240).Run().Out.Contents())).
				Should(gomega.MatchRegexp(versionRegexp()))
			gomega.Expect(command.StdoutStr(o, virtualMachineRootCmd, "status")).To(gomega.Equal("Running"))
		})

		ginkgo.It("should not auto-start version when auto_vm_start is disabled", ginkgo.Serial, func() {
			origCfg := readFile(finchConfigFilePath)
			ginkgo.DeferCleanup(func() {
				writeFile(finchConfigFilePath, origCfg)
				command.New(o, virtualMachineRootCmd, "start").WithoutCheckingExitCode().WithTimeoutInSeconds(240).Run()
			})

			command.New(o, virtualMachineRootCmd, "stop").WithTimeoutInSeconds(90).Run()
			gomega.Expect(command.StdoutStr(o, virtualMachineRootCmd, "status")).To(gomega.Equal("Stopped"))

			writeFile(finchConfigFilePath, append(origCfg, []byte("\nauto_vm_start: false\n")...))

			command.New(o, "version").WithoutSuccessfulExit().Run()
			gomega.Expect(command.StdoutStr(o, virtualMachineRootCmd, "status")).To(gomega.Equal("Stopped"))
		})
	})
}
