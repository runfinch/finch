// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package vm

import (
	"github.com/onsi/ginkgo/v2"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"
)

var testPlatform = func(o *option.Option) {
	ginkgo.Describe("Platform", func() {
		ginkgo.BeforeEach(func() {
			command.New(o, "platform", "pass-delete").WithoutCheckingExitCode().WithTimeoutInSeconds(90).Run()
		})
		ginkgo.It("Pass Init and deletion are Successful", func() {
			command.New(o, "platform", "pass-init").Run()
			command.New(o, "platform", "pass-delete").Run()
		})
	})
}
