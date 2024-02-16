// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package vm

import (
	"fmt"
	"runtime"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"
)

var testCredHelper = func(o *option.Option, installed bool, registry string) {
	ginkgo.Describe("Credential Helper", func() {
		var vmType string

		ginkgo.BeforeEach(func() {
			if runtime.GOOS == "windows" {
				vmType = "wsl2"
			} else {
				vmType = "vz"
			}
		})
		ginkgo.It("should pull from container registry", func() {
			if registry == "" {
				ginkgo.Skip("No Provided Container Registry Url")
			}
			resetVM(o)
			resetDisks(o, installed)
			writeFile(finchConfigFilePath, []byte(fmt.Sprintf("cpus: 6\nmemory: 4GiB\ncreds_helpers:\n    "+
				"- ecr-login\nvmType: %s\nrosetta: true", vmType)))
			command.New(o, virtualMachineRootCmd, "init").WithoutCheckingExitCode().WithTimeoutInSeconds(160).Run()
			command.New(o, "pull", registry).WithTimeoutInSeconds(600).Run()
			gomega.Expect(command.Stdout(o, "images", "-q", registry)).NotTo(gomega.BeEmpty())
		})
	})
}
