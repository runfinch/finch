// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package vm

import (
	"archive/zip"
	"fmt"
	"io"
	"os"
	"path"
	"path/filepath"
	"runtime"
	"strings"
	"time"

	"github.com/onsi/ginkgo/v2"
	"github.com/onsi/gomega"
	"github.com/runfinch/common-tests/command"
	"github.com/runfinch/common-tests/option"
)

var testSupportBundle = func(o *option.Option) {
	ginkgo.Describe("Support bundles", func() {
		ginkgo.It("Should generate a support bundle", func() {
			cmd := command.Run(o, "support-bundle", "generate")
			out := string(cmd.Wait().Err.Contents())
			zipName := getZipName(out)
			gomega.Expect(zipName).ShouldNot(gomega.BeEmpty())

			bundlePath := filepath.Join(".", zipName)
			_, err := os.Stat(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())

			reader, err := zip.OpenReader(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())

			zipBaseName := filepath.Base(bundlePath)
			zipPrefix := strings.TrimSuffix(zipBaseName, filepath.Ext(zipBaseName))
			r, err := reader.Open(path.Join(zipPrefix, "logs", "journalctl", "containerd"))
			gomega.Expect(err).Should(gomega.BeNil())
			b, err := io.ReadAll(r) // just to make sure logs are populated
			gomega.Expect(err).Should(gomega.BeNil())
			gomega.Expect(b).ShouldNot(gomega.BeEmpty())
			gomega.Expect(reader.Close()).Should(gomega.BeNil())

			err = os.Remove(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())
		})
		ginkgo.It("Should generate a support bundle with an extra file included with --include flag by relative path", func() {
			includeFilename := fmt.Sprintf("tempTestfile%s", time.Now().Format("20060102150405"))
			//nolint:gosec // this file is only used for testing purposes and it does not include any user input
			tempFile, err := os.Create(includeFilename)
			gomega.Expect(err).Should(gomega.BeNil())
			defer func() {
				gomega.Expect(tempFile.Close()).Should(gomega.BeNil())
				err := os.Remove(includeFilename)
				gomega.Expect(err).Should(gomega.BeNil())
			}()

			cmd := command.Run(o, "support-bundle", "generate", "--include", includeFilename)
			out := string(cmd.Wait().Err.Contents())
			zipName := getZipName(out)
			gomega.Expect(zipName).ShouldNot(gomega.BeEmpty())

			bundlePath := filepath.Join(".", zipName)
			_, err = os.Stat(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())

			reader, err := zip.OpenReader(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())

			zipBaseName := filepath.Base(bundlePath)
			zipPrefix := strings.TrimSuffix(zipBaseName, filepath.Ext(zipBaseName))
			_, err = reader.Open(path.Join(zipPrefix, "misc", includeFilename))
			gomega.Expect(err).Should(gomega.BeNil())

			gomega.Expect(reader.Close()).Should(gomega.BeNil())
			err = os.Remove(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())
		})
		ginkgo.It("Should generate a support bundle with an extra file included with --include flag by absolute path", func() {
			includeFilename := fmt.Sprintf("tempTestfile%s", time.Now().Format("20060102150405"))
			//nolint:gosec // this file is only used for testing purposes and it does not include any user input
			tempFile, err := os.Create(includeFilename)
			gomega.Expect(err).Should(gomega.BeNil())
			defer func() {
				gomega.Expect(tempFile.Close()).Should(gomega.BeNil())
				err := os.Remove(includeFilename)
				gomega.Expect(err).Should(gomega.BeNil())
			}()

			dir, err := os.Getwd()
			gomega.Expect(err).Should(gomega.BeNil())
			includeAbsPath := filepath.Join(dir, includeFilename)

			cmd := command.Run(o, "support-bundle", "generate", "--include", includeAbsPath)
			out := string(cmd.Wait().Err.Contents())
			zipName := getZipName(out)
			gomega.Expect(zipName).ShouldNot(gomega.BeEmpty())

			bundlePath := filepath.Join(".", zipName)
			_, err = os.Stat(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())

			reader, err := zip.OpenReader(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())

			zipBaseName := filepath.Base(bundlePath)
			zipPrefix := strings.TrimSuffix(zipBaseName, filepath.Ext(zipBaseName))
			_, err = reader.Open(path.Join(zipPrefix, "misc", includeFilename))
			gomega.Expect(err).Should(gomega.BeNil())

			gomega.Expect(reader.Close()).Should(gomega.BeNil())
			err = os.Remove(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())
		})
		ginkgo.It("Should generate a support bundle with an extra journal log included with --include", func() {
			includeService := "dummy"
			cmd := command.Run(o, "support-bundle", "generate", "--include", fmt.Sprintf("service:%s", includeService))
			out := string(cmd.Wait().Err.Contents())
			zipName := getZipName(out)
			gomega.Expect(zipName).ShouldNot(gomega.BeEmpty())

			bundlePath := filepath.Join(".", zipName)
			_, err := os.Stat(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())

			reader, err := zip.OpenReader(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())

			zipBaseName := filepath.Base(bundlePath)
			zipPrefix := strings.TrimSuffix(zipBaseName, filepath.Ext(zipBaseName))
			_, err = reader.Open(path.Join(zipPrefix, "misc", includeService))
			gomega.Expect(err).Should(gomega.BeNil())
			gomega.Expect(reader.Close()).Should(gomega.BeNil())

			err = os.Remove(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())
		})
		ginkgo.It("Should generate a support bundle with no extra file included with --include flag but an invalid path", func() {
			fakeFileName := "test123+fakefile"
			cmd := command.Run(o, "support-bundle", "generate", "--include", fakeFileName)
			out := string(cmd.Wait().Err.Contents())
			zipName := getZipName(out)
			gomega.Expect(zipName).ShouldNot(gomega.BeEmpty())

			bundlePath := filepath.Join(".", zipName)
			_, err := os.Stat(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())

			reader, err := zip.OpenReader(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())

			zipBaseName := filepath.Base(bundlePath)
			zipPrefix := strings.TrimSuffix(zipBaseName, filepath.Ext(zipBaseName))
			_, err = reader.Open(path.Join(zipPrefix, "misc", fakeFileName))
			gomega.Expect(err).ShouldNot(gomega.BeNil())

			gomega.Expect(reader.Close()).Should(gomega.BeNil())
			err = os.Remove(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())
		})
		ginkgo.It("Should generate a support bundle with a default file excluded with --exclude flag by basename", func() {
			cmd := command.Run(o, "support-bundle", "generate", "--exclude", "finch.yaml")
			out := string(cmd.Wait().Err.Contents())
			zipName := getZipName(out)
			gomega.Expect(zipName).ShouldNot(gomega.BeEmpty())

			bundlePath := filepath.Join(".", zipName)
			_, err := os.Stat(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())

			reader, err := zip.OpenReader(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())

			zipBaseName := filepath.Base(bundlePath)
			zipPrefix := strings.TrimSuffix(zipBaseName, path.Ext(zipBaseName))
			_, err = reader.Open(path.Join(zipPrefix, "configs", "finch.yaml"))
			gomega.Expect(err).ShouldNot(gomega.BeNil())

			gomega.Expect(reader.Close()).Should(gomega.BeNil())
			err = os.Remove(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())
		})
		ginkgo.It("Should generate a support bundle with a default file excluded with --exclude flag by absolute path", func() {
			includeFilename := fmt.Sprintf("tempTestfile%s", time.Now().Format("20060102150405"))
			//nolint:gosec // this file is only used for testing purposes and it does not include any user input
			tempFile, err := os.Create(includeFilename)
			gomega.Expect(err).Should(gomega.BeNil())
			defer func() {
				gomega.Expect(tempFile.Close()).Should(gomega.BeNil())
				err := os.Remove(includeFilename)
				gomega.Expect(err).Should(gomega.BeNil())
			}()

			absPath, err := filepath.Abs(includeFilename)
			gomega.Expect(err).Should(gomega.BeNil())
			cmd := command.Run(o, "support-bundle", "generate", "--include", includeFilename, "--exclude", absPath)
			out := string(cmd.Wait().Err.Contents())
			zipName := getZipName(out)
			gomega.Expect(zipName).ShouldNot(gomega.BeEmpty())

			bundlePath := filepath.Join(".", zipName)
			_, err = os.Stat(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())

			reader, err := zip.OpenReader(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())

			zipBaseName := filepath.Base(bundlePath)
			zipPrefix := strings.TrimSuffix(zipBaseName, filepath.Ext(zipBaseName))
			_, err = reader.Open(path.Join(zipPrefix, "misc", includeFilename))
			gomega.Expect(err).ShouldNot(gomega.BeNil())

			gomega.Expect(reader.Close()).Should(gomega.BeNil())
			err = os.Remove(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())
		})
		ginkgo.It("Should generate a support bundle with a default file excluded with --exclude flag by relative path", func() {
			includeFilename := fmt.Sprintf("tempTestfile%s", time.Now().Format("20060102150405"))
			//nolint:gosec // this file is only used for testing purposes and it does not include any user input
			tempFile, err := os.Create(includeFilename)
			gomega.Expect(err).Should(gomega.BeNil())
			defer func() {
				gomega.Expect(tempFile.Close()).Should(gomega.BeNil())
				err := os.Remove(includeFilename)
				gomega.Expect(err).Should(gomega.BeNil())
			}()

			cmd := command.Run(o, "support-bundle", "generate", "--include", includeFilename, "--exclude", filepath.Join(".", includeFilename))
			out := string(cmd.Wait().Err.Contents())
			zipName := getZipName(out)
			gomega.Expect(zipName).ShouldNot(gomega.BeEmpty())

			bundlePath := filepath.Join(".", zipName)
			_, err = os.Stat(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())

			reader, err := zip.OpenReader(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())

			zipBaseName := filepath.Base(bundlePath)
			zipPrefix := strings.TrimSuffix(zipBaseName, filepath.Ext(zipBaseName))
			_, err = reader.Open(path.Join(zipPrefix, "misc", includeFilename))
			gomega.Expect(err).ShouldNot(gomega.BeNil())

			gomega.Expect(reader.Close()).Should(gomega.BeNil())
			err = os.Remove(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())
		})
		ginkgo.It("Should generate a support bundle with no file excluded with --exclude flag with invalid path", func() {
			fakeFileName := "test123+fakefile"
			cmd := command.Run(o, "support-bundle", "generate", "--exclude", fakeFileName)
			out := string(cmd.Wait().Err.Contents())
			zipName := getZipName(out)
			gomega.Expect(zipName).ShouldNot(gomega.BeEmpty())

			bundlePath := filepath.Join(".", zipName)
			_, err := os.Stat(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())

			reader, err := zip.OpenReader(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())

			zipBaseName := filepath.Base(bundlePath)
			zipPrefix := strings.TrimSuffix(zipBaseName, filepath.Ext(zipBaseName))
			_, err = reader.Open(path.Join(zipPrefix, "configs", "finch.yaml"))
			gomega.Expect(err).Should(gomega.BeNil())

			gomega.Expect(reader.Close()).Should(gomega.BeNil())
			err = os.Remove(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())
		})
		ginkgo.It("Should generate a support bundle with a default journal log excluded with --exclude", func() {
			excludeService := "containerd"
			cmd := command.Run(o, "support-bundle", "generate", "--exclude", fmt.Sprintf("service:%s", excludeService))
			out := string(cmd.Wait().Err.Contents())
			zipName := getZipName(out)
			gomega.Expect(zipName).ShouldNot(gomega.BeEmpty())

			bundlePath := filepath.Join(".", zipName)
			_, err := os.Stat(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())

			reader, err := zip.OpenReader(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())

			zipBaseName := filepath.Base(bundlePath)
			zipPrefix := strings.TrimSuffix(zipBaseName, filepath.Ext(zipBaseName))
			_, err = reader.Open(path.Join(zipPrefix, "logs", "journalctl", excludeService))
			gomega.Expect(err).ShouldNot(gomega.BeNil())
			gomega.Expect(reader.Close()).Should(gomega.BeNil())

			err = os.Remove(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())
		})
		ginkgo.It("Should generate a support bundle with no journal logs with --exclude service:all", func() {
			cmd := command.Run(o, "support-bundle", "generate", "--exclude", "service:all")
			out := string(cmd.Wait().Err.Contents())
			zipName := getZipName(out)
			gomega.Expect(zipName).ShouldNot(gomega.BeEmpty())

			bundlePath := filepath.Join(".", zipName)
			_, err := os.Stat(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())

			reader, err := zip.OpenReader(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())

			zipBaseName := filepath.Base(bundlePath)
			zipPrefix := strings.TrimSuffix(zipBaseName, filepath.Ext(zipBaseName))
			_, err = reader.Open(path.Join(zipPrefix, "logs", "journalctl"))
			gomega.Expect(err).ShouldNot(gomega.BeNil())
			gomega.Expect(reader.Close()).Should(gomega.BeNil())

			err = os.Remove(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())
		})
		ginkgo.It("Should generate a support bundle with a file excluded when specified with both --include and --exclude", func() {
			includeFilename := fmt.Sprintf("tempTestfile%s", time.Now().Format("20060102150405"))
			//nolint:gosec // this file is only used for testing purposes and it does not include any user input
			tempFile, err := os.Create(includeFilename)
			gomega.Expect(err).Should(gomega.BeNil())
			defer func() {
				gomega.Expect(tempFile.Close()).Should(gomega.BeNil())
				err := os.Remove(includeFilename)
				gomega.Expect(err).Should(gomega.BeNil())
			}()

			cmd := command.Run(o, "support-bundle", "generate", "--include", includeFilename, "--exclude", includeFilename)
			out := string(cmd.Wait().Err.Contents())
			zipName := getZipName(out)
			gomega.Expect(zipName).ShouldNot(gomega.BeEmpty())

			bundlePath := filepath.Join(".", zipName)
			_, err = os.Stat(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())

			reader, err := zip.OpenReader(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())

			zipBaseName := filepath.Base(bundlePath)
			zipPrefix := strings.TrimSuffix(zipBaseName, filepath.Ext(zipBaseName))
			_, err = reader.Open(path.Join(zipPrefix, "misc", includeFilename))
			gomega.Expect(err).ShouldNot(gomega.BeNil())

			gomega.Expect(reader.Close()).Should(gomega.BeNil())
			err = os.Remove(bundlePath)
			gomega.Expect(err).Should(gomega.BeNil())
		})
		ginkgo.It("Should fail to generate a support bundle when the VM is nonexistent", func() {
			if runtime.GOOS == "linux" {
				ginkgo.Skip("No VM on Linux")
			}
			command.New(o, "vm", "stop", "-f").WithoutCheckingExitCode().WithTimeoutInSeconds(30).Run()
			time.Sleep(1 * time.Second)
			command.New(o, "vm", "remove", "-f").WithoutCheckingExitCode().WithTimeoutInSeconds(20).Run()
			time.Sleep(1 * time.Second)
			defer command.New(o, "vm", "init").WithoutCheckingExitCode().WithTimeoutInSeconds(160).Run()

			cmd := command.New(o, "support-bundle", "generate").WithoutSuccessfulExit().Run()
			out := string(cmd.Wait().Err.Contents())
			zipName := getZipName(out)
			gomega.Expect(zipName).Should(gomega.BeEmpty())
		})
	})
}

func getZipName(cmdOutput string) string {
	for _, line := range strings.Split(cmdOutput, "\n") {
		if strings.Contains(line, "Bundle created: finch-support") {
			bundleLine := strings.Split(line, "\"")
			gomega.Expect(bundleLine).To(gomega.HaveLen(5))

			zipName := strings.Split(bundleLine[3], ": ")
			gomega.Expect(zipName).To(gomega.HaveLen(2))
			gomega.Expect(strings.HasPrefix(zipName[1], "finch-support")).To(gomega.BeTrue())

			return strings.TrimSpace(zipName[1])
		}
	}
	return ""
}
