// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package main

import (
	"fmt"
	"strings"

	"github.com/runfinch/finch/pkg/disk"
	"github.com/runfinch/finch/pkg/fssh"
	"github.com/runfinch/finch/pkg/system"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/path"

	"github.com/spf13/afero"
	"github.com/spf13/cobra"
)

const (
	limaInstanceName      = "finch"
	virtualMachineRootCmd = "vm"
)

// Used by the actions that call VM start to ensure that the in-VM config file options are applied after boot.
type postVMStartInitAction struct {
	creator        command.NerdctlCmdCreator
	logger         flog.Logger
	fs             afero.Fs
	privateKeyPath string
	nca            config.NerdctlConfigApplier
}

func newPostVMStartInitAction(
	logger flog.Logger,
	creator command.NerdctlCmdCreator,
	fs afero.Fs,
	privateKeyPath string,
	nca config.NerdctlConfigApplier,
) *postVMStartInitAction {
	return &postVMStartInitAction{creator: creator, logger: logger, fs: fs, privateKeyPath: privateKeyPath, nca: nca}
}

func (p *postVMStartInitAction) runAdapter(_ *cobra.Command, _ []string) error {
	return p.run()
}

func (p *postVMStartInitAction) run() error {
	p.logger.Debugln("Applying guest configuration options")

	sshPortArgs := []string{"ls", "-f", "{{.SSHLocalPort}}", limaInstanceName}
	sshPortCmd := p.creator.CreateWithoutStdio(sshPortArgs...)
	out, err := sshPortCmd.Output()
	if err != nil {
		return err
	}
	portString := strings.TrimSpace(string(out))

	if portString == "0" {
		p.logger.Warnln("SSH port = 0, is the instance running? Not able to apply VM configuration options")
		return nil
	}
	return p.nca.Apply(fmt.Sprintf("127.0.0.1:%v", portString))
}

func virtualMachineCommands(
	logger flog.Logger,
	fp path.Finch,
	ncc command.NerdctlCmdCreator,
	ecc command.Creator,
	fs afero.Fs,
	fc *config.Finch,
	home string,
	finchRootPath string,
) *cobra.Command {
	return newVirtualMachineCommand(
		ncc,
		logger,
		dependencies(ecc, fc, fp, fs, ncc, logger, fp.FinchDir(finchRootPath)),
		config.NewLimaApplier(
			fc,
			ecc,
			fs,
			fp.LimaDefaultConfigPath(),
			fp.LimaOverrideConfigPath(),
			system.NewStdLib(),
			fp.ConfigFilePath(finchRootPath),
		),
		config.NewNerdctlApplier(
			fssh.NewDialer(),
			fs,
			fp.LimaSSHPrivateKeyPath(),
			fp.FinchDir(finchRootPath),
			home,
			fp.LimaInstancePath(),
			fc,
		),
		fp,
		fs,
		disk.NewUserDataDiskManager(ncc, ecc, &afero.OsFs{}, fp, finchRootPath, fc, logger),
	)
}
