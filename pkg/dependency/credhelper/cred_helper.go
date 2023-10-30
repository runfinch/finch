// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package credhelper for integrating credential helpers into Finch
package credhelper

import (
	"fmt"

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
	versionEcr  = "0.7.0"
	hashEcr     = "sha256:ff14a4da40d28a2d2d81a12a7c9c36294ddf8e6439780c4ccbc96622991f3714"
)

// NewDependencyGroup returns a dependency group that contains all the dependencies required to make credhelper work.
func NewDependencyGroup(
	execCmdCreator command.Creator,
	fs afero.Fs,
	fp path.Finch,
	logger flog.Logger,
	fc *config.Finch,
	user string,
	arch string,
) *dependency.Group {
	deps := newDeps(execCmdCreator, fs, fp, logger, fc, user, arch)
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
	user string,
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
	installFolder := fmt.Sprintf("/Users/%s/.finch/cred-helpers/", user)
	finchPath := fmt.Sprintf("/Users/%s/.finch/", user)

	credHelperURLEcr := fmt.Sprintf("https://amazon-ecr-credential-helper-releases.s3.us-east-2.amazonaws.com"+
		"/%s/linux-%s/docker-credential-ecr-login", versionEcr, arch)

	hcEcr := helperConfig{
		binaryName: "docker-credential-ecr-login", credHelperURL: credHelperURLEcr,
		hash: hashEcr, installFolder: installFolder,
		finchPath: finchPath,
	}
	configs["ecr-login"] = hcEcr

	for _, helper := range fc.CredsHelpers {
		if configs[helper] != (helperConfig{}) {
			binaries := newCredHelperBinary(fp, fs, execCmdCreator, logger, helper, user, configs[helper])
			deps = append(deps, dependency.Dependency(binaries))
		}
	}

	return deps
}
