// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build linux || native

package main

import (
	"github.com/spf13/afero"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/path"
	"github.com/runfinch/finch/pkg/system"
)

func nerdctlCmdCreator(ecc command.Creator, logger flog.Logger, fp path.Finch, finchRootPath string) command.NerdctlCmdCreator {
	return command.NewNerdctlCmdCreator(ecc,
		logger,
		fp.NerdctlConfigFilePath(finchRootPath),
		fp.BuildkitSocketPath(finchRootPath),
		fp.FinchDependencyBinDir(),
		system.NewStdLib(),
	)
}

func configureNerdctl(fs afero.Fs) error {
	return config.NewNerdctlApplier(
		nil,
		fs,
		"",
		"",
		"",
		"",
		nil,
	).Apply("")
}
