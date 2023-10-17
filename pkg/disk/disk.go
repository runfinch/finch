// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package disk manages the persistent disk used to save containerd user data
package disk

import (
	"github.com/spf13/afero"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/config"
	fpath "github.com/runfinch/finch/pkg/path"
)

const (
	// diskName must always be consistent with the value under additionalDisks in finch.yaml.
	diskName = "finch"
	diskSize = "50G"
)

// UserDataDiskManager is used to check the user data disk configuration and create it if needed.
type UserDataDiskManager interface {
	EnsureUserDataDisk() error
}

type qemuDiskInfo struct {
	VirtualSize int    `json:"virtual-size"`
	Filename    string `json:"filename"`
	Format      string `json:"format"`
	ActualSize  int    `json:"actual-size"`
	DirtyFlag   bool   `json:"dirty-flag"`
}

// fs functions required for setting up the user data disk.
type diskFS interface {
	afero.Fs
	afero.Linker
	afero.LinkReader
}

type userDataDiskManager struct {
	lcc     command.LimaCmdCreator
	ecc     command.Creator
	fs      diskFS
	finch   fpath.Finch
	homeDir string
	config  *config.Finch
}

// NewUserDataDiskManager is a constructor for UserDataDiskManager.
func NewUserDataDiskManager(
	lcc command.LimaCmdCreator,
	ecc command.Creator,
	fs diskFS,
	finch fpath.Finch,
	homeDir string,
	config *config.Finch,
) UserDataDiskManager {
	return &userDataDiskManager{
		lcc:     lcc,
		ecc:     ecc,
		fs:      fs,
		finch:   finch,
		homeDir: homeDir,
		config:  config,
	}
}
