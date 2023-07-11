// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package vm

import (
	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/onsi/gomega/gexec"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"
)

var testCredHelper = func(o *option.Option, installed bool, registry string) {
	ginkgo.Describe("Credential Helper", func() {
		ginkgo.It("should pull from container registry", func() {
			resetVM(o, installed)
			resetDisks(o, installed)
			if registry == "" {
				ginkgo.Skip("No Provided Container Registry Url")
			}
			writeFile(finchConfigFilePath, []byte("memory: 4GiB\ncredsHelper: ecr-login\ncpus: 6\nvmType: vz\nrosetta: false"))
			initCmdSession := command.New(o, virtualMachineRootCmd, "init").WithTimeoutInSeconds(600).Run()
			gomega.Expect(initCmdSession).Should(gexec.Exit(0))
			command.New(o, "pull", registry).WithTimeoutInSeconds(600).Run()
			gomega.Expect(command.Stdout(o, "images", "-q", registry)).NotTo(gomega.BeEmpty())
		})
	})
}
