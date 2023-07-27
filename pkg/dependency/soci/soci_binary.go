// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package soci

import (
	"fmt"
	"strings"

	"github.com/spf13/afero"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/dependency"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/path"
)

type socibin struct {
	fp         path.Finch
	fs         afero.Fs
	cmdCreator command.Creator
	l          flog.Logger
	user       string
	hcfg       helperConfig
}

var _ dependency.Dependency = (*socibin)(nil)

func newSociBinary(fp path.Finch, fs afero.Fs, cmdCreator command.Creator, l flog.Logger,
	user string, hcfg helperConfig,
) *socibin {
	return &socibin{
		// TODO: consider replacing fp with only the strings that are used instead of the entire type
		fp:         fp,
		fs:         fs,
		cmdCreator: cmdCreator,
		l:          l,
		user:       user,
		hcfg:       hcfg,
	}
}

const sociInstallationProvision = ``

// credHelperConfigName returns the name of the credential helper binary that will be used
// inside the config.json.
func (bin *socibin) credHelperConfigName() string {
	return strings.ReplaceAll(bin.hcfg.binaryName, "docker-credential-", "")
}

// fullInstallPath returns the full installation path of the credential helper binary.
func (bin *socibin) fullInstallPath() string {
	return fmt.Sprintf("%s%s", bin.hcfg.installFolder, bin.hcfg.binaryName)
}

// Installed checks if the credential helper already exists in the specified
// folder and checks if the hash of the installed binary is correct.
func (bin *socibin) Installed() bool {
	bin.l.Infof("Checking if SOCI is installed")
	dirExists, err := afero.DirExists(bin.fs, bin.hcfg.installFolder)
	if err != nil {
		bin.l.Errorf("failed to get status of SOCI directory: %v", err)
		return false
	}
	if !dirExists {
		return false
	}
	fileExists, err := afero.Exists(bin.fs, bin.fullInstallPath())
	if err != nil {
		bin.l.Errorf("failed to get status of SOCI binary: %v", err)
		return false
	}
	if !fileExists {
		return false
	}
	file, err := bin.fs.Open(bin.fullInstallPath())
	if err != nil {
		bin.l.Error(err)
		return false
	}
	defer file.Close() //nolint:errcheck // closing the file

	return true
}

// Install installs SOCI.
func (bin *socibin) Install() error {
	bin.l.Infof("Installing SOCI")
	//installation of SOCI occurs in apply() of lima_config_applier.go

	// mkdirCmd := bin.cmdCreator.Create("mkdir", "-p", bin.hcfg.installFolder)
	// _, err := mkdirCmd.Output()
	// if err != nil {
	// 	return fmt.Errorf("error creating installation directory %s, err: %w", bin.hcfg.installFolder, err)
	// }

	// /*wgetInstall, err := bin.cmdCreator.Create("sudo", "yum", "install", "wget", "-y").Output()
	// bin.l.Infof("wget install output: %s", wgetInstall)
	// if err != nil {
	// 	return fmt.Errorf("failed to install wget: %w", err)
	// }*/
	// curlCmd := bin.cmdCreator.Create("curl", "-OL", bin.hcfg.sociURL)

	// sociInstall, err := curlCmd.Output()
	// bin.l.Infof("soci install output: %s", sociInstall)
	// if err != nil {
	// 	return fmt.Errorf("error installing binary %s, err: %w", bin.hcfg.binaryName, err)
	// }

	// tarCmd := bin.cmdCreator.Create("sudo", "tar", "-C", bin.hcfg.installFolder, "-xvf", bin.hcfg.binaryName, "./soci", "./soci-snapshotter-grpc")
	// sociArchive, err := tarCmd.Output()
	// bin.l.Infof("tar command result:", string(sociArchive))
	// if err != nil {
	// 	return fmt.Errorf("error archiving binary %s, err: %w", bin.hcfg.binaryName, err)
	// }

	// /*err = bin.fs.Chmod(bin.fullInstallPath(), 0o755)
	// if err != nil {
	// 	return err
	// }*/
	// //err = updateConfigFile(bin)
	// if err != nil {
	// 	return err
	// }
	return nil
}

/*
func (bin *socibin) addProvisioningScript(filePath string){
	f, err := bin.fs.OpenFile(filePath, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0o644)
	if err != nil {
		return fmt.Errorf("error opening file at path %s, error: %w", filePath, err)
	}
	defer func() {
		if err := f.Close(); err != nil {
			overConf.l.Errorf("error closing file at path %s, error: %v", filePath, err)
		}
	}()
	if _, err := f.WriteString(sociInstallationProvision); err != nil {
		return fmt.Errorf("error writing to file at path %s", filePath)
	}

	return nil

}
*/
// RequiresRoot returns whether the installation of the binary needs root permissions.
func (bin *socibin) RequiresRoot() bool {
	return false
}
