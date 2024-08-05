// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

// Package disk manages the persistent disk used to save containerd user data
//
//go:generate mockgen -copyright_file=../../copyright_header -destination=../mocks/pkg_disk_disk.go -package=mocks -mock_names UserDataDiskManager=UserDataDiskManager,diskFS=MockdiskFS -source=disk.go .
package disk

import (
	"github.com/spf13/afero"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/flog"
	fpath "github.com/runfinch/finch/pkg/path"
)

// UserDataDiskManager is used to check the user data disk configuration and create it if needed.
type UserDataDiskManager interface {
	EnsureUserDataDisk() error
	DetachUserDataDisk() error
}

// fs functions required for setting up the user data disk.
type diskFS interface {
	afero.Fs
	afero.Linker
	afero.LinkReader
}

type userDataDiskManager struct {
	ncc     command.NerdctlCmdCreator
	ecc     command.Creator
	fs      diskFS
	finch   fpath.Finch
	rootDir string
	config  *config.Finch
	logger  flog.Logger
}

// NewUserDataDiskManager is a constructor for UserDataDiskManager.
func NewUserDataDiskManager(
	ncc command.NerdctlCmdCreator,
	ecc command.Creator,
	fs diskFS,
	finch fpath.Finch,
	rootDir string,
	config *config.Finch,
	logger flog.Logger,
) UserDataDiskManager {
	return &userDataDiskManager{
		ncc:     ncc,
		ecc:     ecc,
		fs:      fs,
		finch:   finch,
		rootDir: rootDir,
		config:  config,
		logger:  logger,
	}
}
