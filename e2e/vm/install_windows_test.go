// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows

package vm

import (
	"fmt"
	"os"
	"os/exec"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/option"
)

func testMSIInstallPermission(_ *option.Option, installed bool) {
	finchInstallFolder := `C:\Program Files\Finch`
	finchBin := finchInstallFolder + `\bin\finch.exe`
	ginkgo.Describe("The Finch Installer", func() {
		ginkgo.BeforeEach(func() {
			if !installed {
				ginkgo.Skip("install permissions are only checked on the installed MSI")
			}
		})
		ginkgo.It("should install finch at "+finchBin, func() {
			_, err := os.Stat(finchBin)
			gomega.Expect(err).Should(gomega.BeNil())
		})
		ginkgo.DescribeTable("should verify permissions",
			func(path string) {
				_, err := os.Stat(path)
				gomega.Expect(err).Should(gomega.BeNil())
				path = fmt.Sprintf(`"%s"`, path)
				cmd := exec.Command("powershell", "-NoProfile", `.\install_windows_permission_check.ps1`, path)
				out, err := cmd.CombinedOutput()
				// Verify that there are no explicit permissions meaning we rely on inherited permissions.
				// Note: this checks the output before checking the error because if there is a failure, the
				// output will contain the error information and the error itself will be effectively "exit status 1".
				gomega.Expect(string(out)).Should(gomega.BeEmpty())
				gomega.Expect(err).Should(gomega.BeNil())
			},
			ginkgo.Entry("when the path is the install folder", finchInstallFolder),
			ginkgo.Entry("when the path is the finch binary", finchBin),
		)
	})
}
