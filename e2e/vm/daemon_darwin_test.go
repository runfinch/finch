// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package vm

import (
	"context"
	"path/filepath"
	"sync"
	"time"

	"github.com/docker/docker/api/types/image"
	"github.com/docker/docker/client"
	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/option"
)

var testDaemon = func(_ *option.Option, installed bool) {
	imageRef := "public.ecr.aws/docker/library/alpine:latest"
	ginkgo.Describe("Daemon smoke test", func() {
		ginkgo.It("docker client should be able to pull and list images", func(gCtx ginkgo.SpecContext) {
			// create a context which is cancelled with the ginkgo test timeout
			testCtx, cancelCtx := context.WithCancel(context.Background())
			defer cancelCtx()
			go func() {
				defer cancelCtx()
				<-gCtx.Done()
			}()

			daemonSocketPath := filepath.Join(limaDataDirPath(installed), "finch", "sock", "finch.sock")
			apiClient, err := client.NewClientWithOpts(
				client.WithHost("unix://"+daemonSocketPath),
				client.WithVersion("v1.43"),
			)
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
			defer func() {
				gomega.Expect(apiClient.Close()).ShouldNot(gomega.HaveOccurred())
			}()

			_, err = apiClient.ImagePull(testCtx, imageRef, image.PullOptions{})
			gomega.Expect(err).ShouldNot(gomega.HaveOccurred())

			// ImagePull is asynchronous -- poll to check that the image has been pulled every second
			imagePulled := false
			wg := sync.WaitGroup{}
			wg.Add(1)
			go func(wg *sync.WaitGroup) {
				for {
					time.Sleep(1 * time.Second)
					images, err := apiClient.ImageList(testCtx, image.ListOptions{})
					if err != nil {
						gomega.Expect(err).ShouldNot(gomega.HaveOccurred())
					}
					for _, img := range images {
						for _, tag := range img.RepoTags {
							if tag == imageRef {
								imagePulled = true
								wg.Done()
								return
							}
						}
					}
				}
			}(&wg)
			wg.Wait()

			gomega.Expect(imagePulled).Should(gomega.BeTrue())
		})
	})
}
