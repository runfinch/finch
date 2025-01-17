// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package support provides functions and methods to produce Finch support bundles
package support

import (
	"archive/zip"
	"bufio"
	"bytes"
	"errors"
	"fmt"
	"io"
	"path"
	"path/filepath"
	"runtime"
	"strings"
	"time"

	"github.com/spf13/afero"
	"gopkg.in/yaml.v3"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/lima/wrapper"
	fpath "github.com/runfinch/finch/pkg/path"
	"github.com/runfinch/finch/pkg/system"
	"github.com/runfinch/finch/pkg/version"
)

const (
	bundlePrefix     = "finch-support"
	platformFileName = "platform.yaml"
	versionFileName  = "version-output.txt"
	logPrefix        = "logs"
	configPrefix     = "configs"
	additionalPrefix = "misc"
)

// PlatformData defines the YAML structure for the platform data included in a support bundle.
type PlatformData struct {
	Os    string `yaml:"os"`
	Arch  string `yaml:"arch"`
	Finch string `yaml:"finch"`
}

// BundleBuilder provides methods to generate support bundles.
type BundleBuilder interface {
	GenerateSupportBundle([]string, []string) (string, error)
}

// SystemDeps provides methods to get system dependencies.
//
//go:generate mockgen -copyright_file=../../copyright_header -destination=../mocks/pkg_support.go -package=mocks -mock_names SystemDeps=SupportSystemDeps . SystemDeps
type SystemDeps interface {
	system.ExecutableFinder
}

type bundleBuilder struct {
	logger     flog.Logger
	fs         afero.Fs
	config     BundleConfig
	finch      fpath.Finch
	ecc        command.Creator
	ncc        command.NerdctlCmdCreator
	lima       wrapper.LimaWrapper
	systemDeps SystemDeps
}

// NewBundleBuilder produces a new BundleBuilder.
func NewBundleBuilder(
	logger flog.Logger,
	fs afero.Fs,
	config BundleConfig,
	finch fpath.Finch,
	ecc command.Creator,
	ncc command.NerdctlCmdCreator,
	lima wrapper.LimaWrapper,
	systemDeps SystemDeps,
) BundleBuilder {
	return &bundleBuilder{
		logger:     logger,
		fs:         fs,
		config:     config,
		finch:      finch,
		ecc:        ecc,
		ncc:        ncc,
		lima:       lima,
		systemDeps: systemDeps,
	}
}

// GenerateSupportBundle generates a new support bundle.
func (bb *bundleBuilder) GenerateSupportBundle(additionalFiles []string, excludeFiles []string) (string, error) {
	zipFileName := bundleFileName()
	bb.logger.Debugf("Creating %s...", zipFileName)
	zipFile, err := bb.fs.Create(zipFileName)
	if err != nil {
		return "", err
	}

	zipPrefix := strings.TrimSuffix(zipFileName, filepath.Ext(zipFileName))

	writer := zip.NewWriter(zipFile)

	_, err = writer.Create(fmt.Sprintf("%s/", zipPrefix))
	if err != nil {
		return "", err
	}

	platform, err := bb.getPlatformData()
	if err != nil {
		return "", err
	}

	bb.logger.Debugln("Gathering platform data...")
	err = writePlatformData(writer, platform, zipPrefix)
	if err != nil {
		return "", err
	}

	bb.logger.Debugln("Collecting finch version output...")
	version := bb.getFinchVersion()
	err = writeVersionOutput(writer, version, zipPrefix)
	if err != nil {
		return "", err
	}

	bb.logger.Debugln("Copying in log files...")
	for _, file := range bb.config.LogFiles() {
		if fileShouldBeExcluded(file, excludeFiles) {
			bb.logger.Infof("Excluding %s...", file)
			continue
		}
		bb.logger.Debugf("Copying %s...", file)
		err = bb.copyFileFromVMOrLocal(writer, file, path.Join(zipPrefix, logPrefix))
		if err != nil {
			bb.logger.Warnf("Could not copy in %q. Error: %s", file, err)
		}
	}

	bb.logger.Debugln("Copying in config files...")
	for _, file := range bb.config.ConfigFiles() {
		if fileShouldBeExcluded(file, excludeFiles) {
			bb.logger.Infof("Excluding %s...", file)
			continue
		}
		bb.logger.Debugf("Copying %s...", file)
		err = bb.copyFileFromVMOrLocal(writer, file, path.Join(zipPrefix, configPrefix))
		if err != nil {
			bb.logger.Warnf("Could not copy in %q. Error: %s", file, err)
		}
	}

	bb.logger.Debugln("Copying in additional files...")
	for _, file := range additionalFiles {
		if fileShouldBeExcluded(file, excludeFiles) {
			bb.logger.Infof("Excluding %s...", file)
			continue
		}
		bb.logger.Debugf("Copying %s...", file)
		err = bb.copyFileFromVMOrLocal(writer, file, filepath.Join(zipPrefix, additionalPrefix))
		if err != nil {
			bb.logger.Warnf("Could not add additional file %s. Error: %s", file, err)
		}
	}

	err = writer.Close()
	if err != nil {
		return "", err
	}

	return zipFileName, nil
}

type bufReader interface {
	ReadBytes(delim byte) ([]byte, error)
}

func (bb *bundleBuilder) copyFileFromVMOrLocal(writer *zip.Writer, filename, zipPath string) error {
	if runtime.GOOS != "linux" && isFileFromVM(filename) {
		return bb.streamFileFromVM(writer, filename, zipPath)
	}
	return bb.copyInFile(writer, filename, zipPath)
}

func (bb *bundleBuilder) copyAndRedactFile(writer io.Writer, reader bufReader) error {
	var bufErr error
	for bufErr == nil {
		var line []byte
		line, bufErr = reader.ReadBytes('\n')
		if bufErr != nil && !errors.Is(bufErr, io.EOF) {
			bb.logger.Error(bufErr.Error())
			continue
		}

		line, err := redactFinchInstall(line, bb.finch)
		if err != nil {
			return err
		}

		user := bb.lima.LimaUser(false)
		line, err = redactUsername(line, user.Username)
		if err != nil {
			return err
		}

		line = redactNetworkAddresses(line)
		line = redactPorts(line)
		line = redactSSHKeys(line)

		_, err = writer.Write(line)
		if err != nil {
			return err
		}
	}

	return nil
}

func (bb *bundleBuilder) copyInFile(writer *zip.Writer, fileName string, prefix string) error {
	// check filename validity?
	f, err := bb.fs.Open(fileName)
	if err != nil {
		return err
	}

	baseName := filepath.Base(fileName)
	zipCopy, err := writer.Create(path.Join(prefix, baseName))
	if err != nil {
		return err
	}

	buf := new(bytes.Buffer)
	_, err = buf.ReadFrom(f)
	if err != nil {
		return err
	}
	return bb.copyAndRedactFile(zipCopy, buf)
}

func (bb *bundleBuilder) streamFileFromVM(writer *zip.Writer, filename, prefix string) error {
	pipeReader, pipeWriter := io.Pipe()
	errBuf := new(bytes.Buffer)

	_, filePathInVM, _ := strings.Cut(filename, ":")
	cmd := bb.ncc.CreateWithoutStdio("shell", "finch", "sudo", "cat", filePathInVM)
	cmd.SetStdout(pipeWriter)
	cmd.SetStderr(errBuf)

	err := cmd.Start()
	if err != nil {
		return err
	}

	waitStatus := make(chan error)
	go func() {
		err := cmd.Wait()
		if err != nil {
			errorMsg, readErr := io.ReadAll(errBuf)
			if readErr == nil && len(errorMsg) > 0 {
				err = errors.New(string(errorMsg))
			}
		}
		_ = pipeWriter.Close()
		waitStatus <- err
	}()

	baseName := filepath.Base(filename)
	zipCopy, err := writer.Create(path.Join(prefix, baseName))
	if err != nil {
		return err
	}

	bufReader := bufio.NewReader(pipeReader)

	err = bb.copyAndRedactFile(zipCopy, bufReader)
	if err != nil {
		return err
	}

	return <-waitStatus
}

func (bb *bundleBuilder) getPlatformData() (*PlatformData, error) {
	platform := &PlatformData{}

	// populate OS version
	os, err := bb.getOSVersion()
	if err != nil {
		return nil, err
	}
	platform.Os = os

	// populate arch
	platform.Arch = bb.getArch()

	// populate Finch version
	platform.Finch = getFinchVersion()

	return platform, nil
}

func (bb *bundleBuilder) getOSVersion() (string, error) {
	var cmd command.Command
	switch runtime.GOOS {
	case "windows":
		cmd = bb.ecc.Create("cmd", "/c", "ver")
	case "darwin":
		cmd = bb.ecc.Create("sw_vers", "-productVersion")
	case "linux":
		cmd = bb.ecc.Create("uname", "-r")
	default:
		cmd = nil
	}

	if cmd == nil {
		return "unknown", nil
	}

	out, err := cmd.Output()
	if err != nil {
		return "", err
	}

	os := strings.TrimSuffix(string(out), "\n")
	return os, nil
}

func (bb *bundleBuilder) getArch() string {
	return system.NewStdLib().Arch()
}

func getFinchVersion() string {
	return version.Version
}

func (bb *bundleBuilder) getFinchVersion() string {
	// get current finch executable
	executable, err := bb.systemDeps.Executable()
	if err != nil {
		return ""
	}
	cmd := bb.ecc.Create(executable, "version")
	out, err := cmd.Output()
	if err != nil {
		return ""
	}
	output := string(out)
	return output
}

func writePlatformData(writer *zip.Writer, platform *PlatformData, prefix string) error {
	platformFile, err := writer.Create(path.Join(prefix, platformFileName))
	if err != nil {
		return err
	}

	platformYaml, err := yaml.Marshal(&platform)
	if err != nil {
		return err
	}

	_, err = platformFile.Write(platformYaml)
	if err != nil {
		return err
	}

	return nil
}

func bundleFileName() string {
	timestamp := time.Now().Format("20060102150405")
	return fmt.Sprintf("%s-%s.zip", bundlePrefix, timestamp)
}

func fileShouldBeExcluded(filename string, exclude []string) bool {
	realFilename := filename
	if isFileFromVM(filename) {
		_, realFilename, _ = strings.Cut(filename, ":")
	}
	fileAbs, err := filepath.Abs(realFilename)
	if err != nil {
		return true
	}
	for _, excludeFile := range exclude {
		excludeAbs, err := filepath.Abs(excludeFile)
		if err != nil {
			continue
		}
		if fileAbs == excludeAbs {
			return true
		}
		if filepath.Base(realFilename) == excludeFile {
			return true
		}
	}
	return false
}

func isFileFromVM(filename string) bool {
	return strings.HasPrefix(filename, "vm:")
}

func writeVersionOutput(writer *zip.Writer, version, prefix string) error {
	versionFile, err := writer.Create(path.Join(prefix, versionFileName))
	if err != nil {
		return err
	}

	_, err = versionFile.Write([]byte(version))
	if err != nil {
		return err
	}

	return nil
}
