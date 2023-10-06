// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package main

import (
	"github.com/spf13/afero"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/dependency"
	"github.com/runfinch/finch/pkg/dependency/credhelper"
	"github.com/runfinch/finch/pkg/dependency/vmnet"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/path"
	"github.com/runfinch/finch/pkg/system"
)

func dependencies(
	ecc *command.ExecCmdCreator,
	fc *config.Finch,
	fp path.Finch,
	fs afero.Fs,
	lcc command.LimaCmdCreator,
	logger flog.Logger,
	finchRootPath string,
) []*dependency.Group {
	return []*dependency.Group{
		credhelper.NewDependencyGroup(
			ecc,
			fs,
			fp,
			logger,
			fc,
			finchRootPath,
			system.NewStdLib().Arch(),
		),
		vmnet.NewDependencyGroup(ecc, lcc, fs, fp, logger),
	}
}
