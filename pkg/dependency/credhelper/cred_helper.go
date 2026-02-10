// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package credhelper for integrating credential helpers into Finch
package credhelper

import (
	"fmt"
	"path/filepath"

	"github.com/spf13/afero"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/dependency"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/path"
)

var (
	// EcrVersion will be injected via Makefile.
	EcrVersion string
	// EcrAMD64Hash will be injected via Makefile.
	EcrAMD64Hash string
	// EcrARM64Hash will be injected via Makefile.
	EcrARM64Hash string
)

const (
	description = "Installing Credential Helper"
	errMsg      = "Failed to finish installing credential helper"
)

// NewDependencyGroup returns a dependency group that contains all the dependencies required to make credhelper work.
func NewDependencyGroup(
	execCmdCreator command.Creator,
	fs afero.Fs,
	fp path.Finch,
	logger flog.Logger,
	fc *config.Finch,
	finchDir string,
	arch string,
) *dependency.Group {
	deps := newDeps(execCmdCreator, fs, fp, logger, fc, finchDir, arch)
	return dependency.NewGroup(deps, description, errMsg)
}

type helperConfig struct {
	binaryName    string
	credHelperURL string
	hash          string
	installFolder string
	finchPath     string
}

func newDeps(
	execCmdCreator command.Creator,
	fs afero.Fs,
	fp path.Finch,
	logger flog.Logger,
	fc *config.Finch,
	finchDir string,
	arch string,
) []dependency.Dependency {
	var deps []dependency.Dependency
	empty := dependency.Dependency(nil)
	if fc == nil {
		deps = append(deps, empty)
		return deps
	}
	if fc.CredsHelpers == nil {
		deps = append(deps, empty)
		return deps
	}
	configs := map[string]helperConfig{}
	installFolder := filepath.Join(finchDir, "cred-helpers")

	credHelperURLEcr := fmt.Sprintf("https://amazon-ecr-credential-helper-releases.s3.us-east-2.amazonaws.com"+
		"/%s/linux-%s/docker-credential-ecr-login", EcrVersion, arch)

	hcEcr := helperConfig{
		binaryName:    "docker-credential-ecr-login",
		credHelperURL: credHelperURLEcr,
		installFolder: installFolder,
		finchPath:     finchDir,
	}

	if arch == "arm64" {
		hcEcr.hash = EcrARM64Hash
	} else {
		hcEcr.hash = EcrAMD64Hash
	}

	configs["ecr-login"] = hcEcr

	for _, helper := range fc.CredsHelpers {
		if configs[helper] != (helperConfig{}) {
			binaries := newCredHelperBinary(fp, fs, execCmdCreator, logger, helper, configs[helper])
			deps = append(deps, dependency.Dependency(binaries))
		}
	}

	return deps
}
