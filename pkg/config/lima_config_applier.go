// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package config

import (
	"github.com/spf13/afero"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/system"
)

// LimaConfigApplierSystemDeps contains the system dependencies for LimaConfigApplier.
//
//go:generate mockgen -copyright_file=../../copyright_header -destination=../mocks/pkg_config_lima_config_applier_system_deps.go -package=mocks -mock_names LimaConfigApplierSystemDeps=LimaConfigApplierSystemDeps . LimaConfigApplierSystemDeps
type LimaConfigApplierSystemDeps interface {
	system.RuntimeArchGetter
	system.RuntimeOSGetter
}

type limaConfigApplier struct {
	cfg                    *Finch
	cmdCreator             command.Creator
	fs                     afero.Fs
	limaDefaultConfigPath  string
	limaOverrideConfigPath string
	systemDeps             LimaConfigApplierSystemDeps
	finchConfigPath        string
}

var _ LimaConfigApplier = (*limaConfigApplier)(nil)
