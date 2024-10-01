// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package vm

import (
	"context"
	"fmt"
	"net/http"
	"time"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/onsi/gomega/gbytes"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"
	"golang.org/x/sync/errgroup"
)

const (
	addr         = "localhost"
	port         = "8888"
	responseBody = "ack"
	finchHost    = "host.finch.internal"
	dockerHost   = "host.docker.internal"
)

func hostWithPort(host, port string) string {
	return fmt.Sprintf("%s:%s", host, port)
}

func vmDNSValidationCommand(host, port string) []string {
	// The finch rootfs has curl but not wget
	return []string{
		"shell",
		"finch",
		"curl",
		"--silent",
		"--connect-timeout", "1",
		hostWithPort(host, port),
	}
}

func containerDNSValidationCommand(host, port string) []string {
	// The container rootfs has wget, but not curl
	return []string{
		"run",
		"public.ecr.aws/docker/library/alpine:latest",
		"wget",
		"-O", "-", // output to stdout
		"-q",      // quiet
		"-T", "1", // read timeout
		hostWithPort(host, port),
	}
}

func testVMNetwork(finchO *option.Option, installed bool) {
	limaCtlO, err := limaCtlOpt(installed)
	gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
	eg, _ := errgroup.WithContext(context.Background())
	var srv *http.Server
	ginkgo.Describe("vm networking", func() {
		ginkgo.BeforeEach(func() {
			srv = &http.Server{
				Addr:              hostWithPort(addr, port),
				ReadHeaderTimeout: 1 * time.Second,
				Handler: http.HandlerFunc(func(w http.ResponseWriter, _ *http.Request) {
					_, err := w.Write([]byte(responseBody))
					gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
				}),
			}
			eg.Go(srv.ListenAndServe)
		})
		ginkgo.AfterEach(func() {
			err := srv.Shutdown(context.Background())
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			err = eg.Wait()
			gomega.Expect(err).To(gomega.MatchError(http.ErrServerClosed))
		})
		ginkgo.It("should resolve host.finch.internal in the vm", func() {
			out := command.New(limaCtlO, vmDNSValidationCommand(finchHost, port)...).WithStdout(gbytes.NewBuffer()).Run().Out
			gomega.Expect(out).To(gbytes.Say(responseBody))
		})
		ginkgo.It("should resolve host.docker.internal in the vm", func() {
			out := command.New(limaCtlO, vmDNSValidationCommand(dockerHost, port)...).WithStdout(gbytes.NewBuffer()).Run().Out
			gomega.Expect(out).To(gbytes.Say(responseBody))
		})
		ginkgo.It("should resolve host.finch.internal in a container", func() {
			out := command.New(finchO, containerDNSValidationCommand(finchHost, port)...).WithStdout(gbytes.NewBuffer()).Run().Out
			gomega.Expect(out).To(gbytes.Say(responseBody))
		})
		ginkgo.It("should resolve host.docker.internal in a container", func() {
			out := command.New(finchO, containerDNSValidationCommand(dockerHost, port)...).WithStdout(gbytes.NewBuffer()).Run().Out
			gomega.Expect(out).To(gbytes.Say(responseBody))
		})
	})
}
