// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"fmt"
	"strings"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/dependency"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/path"

	"github.com/spf13/afero"
	"github.com/spf13/cobra"
)

const (
	limaInstanceName      = "finch"
	virtualMachineRootCmd = "vm"
)

func newVirtualMachineCommand(
	limaCmdCreator command.LimaCmdCreator,
	logger flog.Logger,
	optionalDepGroups []*dependency.Group,
	lca config.LimaConfigApplier,
	nca config.NerdctlConfigApplier,
	fp path.Finch,
	fs afero.Fs,
) *cobra.Command {
	virtualMachineCommand := &cobra.Command{
		Use:   virtualMachineRootCmd,
		Short: "Manage the virtual machine lifecycle",
	}

	virtualMachineCommand.AddCommand(
		newStartVMCommand(limaCmdCreator, logger, optionalDepGroups, lca, nca, fs, fp.LimaSSHPrivateKeyPath()),
		newStopVMCommand(limaCmdCreator, logger),
		newRemoveVMCommand(limaCmdCreator, logger),
		newStatusVMCommand(limaCmdCreator, logger),
		newInitVMCommand(limaCmdCreator, logger, optionalDepGroups, lca, nca, fp.BaseYamlFilePath(), fs, fp.LimaSSHPrivateKeyPath()),
	)

	return virtualMachineCommand
}

// Used by the actions that call VM start to ensure that the in-VM config file options are applied after boot.
type postVMStartInitAction struct {
	creator        command.LimaCmdCreator
	logger         flog.Logger
	fs             afero.Fs
	privateKeyPath string
	nca            config.NerdctlConfigApplier
}

func newPostVMStartInitAction(
	logger flog.Logger,
	creator command.LimaCmdCreator,
	fs afero.Fs,
	privateKeyPath string,
	nca config.NerdctlConfigApplier,
) *postVMStartInitAction {
	return &postVMStartInitAction{creator: creator, logger: logger, fs: fs, privateKeyPath: privateKeyPath, nca: nca}
}

func (p *postVMStartInitAction) runAdapter(cmd *cobra.Command, args []string) error {
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
