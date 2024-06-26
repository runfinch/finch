// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build linux || native

package main

import (
	"github.com/spf13/afero"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/dependency"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/path"
)

func dependencies(
	_ command.Creator,
	_ *config.Finch,
	_ path.Finch,
	_ afero.Fs,
	_ command.LimaCmdCreator,
	_ flog.Logger,
	_ string,
) []*dependency.Group {
	return []*dependency.Group{}
}
