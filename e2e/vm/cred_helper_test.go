// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package vm

import (
	"strings"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/onsi/gomega/gexec"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"
)

var testCredHelper = func(o *option.Option, installed bool, registry string) {
	ginkgo.Describe("Credential Helper", func() {
		ginkgo.Describe("Credential Helper", func() {
			ginkgo.FIt("should pull from container registry", ginkgo.Focus, func() {
				resetVM(o, installed)
				resetDisks(o, installed)
				if registry == "" {
					ginkgo.Skip("No Provided Container Registry Url")
				}
				writeFile(finchConfigFilePath, []byte("memory: 4GiB\ncredsHelper: ecr-login\ncpus: 6\nvmType: vz\nrosetta: false"))
				cfgJSONPath := strings.ReplaceAll(finchConfigFilePath, "finch.yaml", "config.json")
				writeFile(cfgJSONPath, []byte("{\"credsStore\":\"ecr-login\"}"))
				initCmdSession := command.New(o, virtualMachineRootCmd, "init").WithTimeoutInSeconds(600).Run()
				gomega.Expect(initCmdSession).Should(gexec.Exit(0))
				registryURL := registry

				command.New(o, "pull", registryURL).WithTimeoutInSeconds(600).Run()
				gomega.Expect(command.Stdout(o, "images", "-q", registryURL)).NotTo(gomega.BeEmpty())
			})
		})
	})
}
