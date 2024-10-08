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

	const versionEcr = "0.9.0"
	const hashARM64 = "sha256:76aa3bb223d4e64dd4456376334273f27830c8d818efe278ab6ea81cb0844420"
	const hashAMD64 = "sha256:dd6bd933e439ddb33b9f005ad5575705a243d4e1e3d286b6c82928bcb70e949a"
	credHelperURLEcr := fmt.Sprintf("https://amazon-ecr-credential-helper-releases.s3.us-east-2.amazonaws.com"+
		"/%s/linux-%s/docker-credential-ecr-login", versionEcr, arch)

	hcEcr := helperConfig{
		binaryName:    "docker-credential-ecr-login",
		credHelperURL: credHelperURLEcr,
		installFolder: installFolder,
		finchPath:     finchDir,
	}

	if arch == "arm64" {
		hcEcr.hash = hashARM64
	} else {
		hcEcr.hash = hashAMD64
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
