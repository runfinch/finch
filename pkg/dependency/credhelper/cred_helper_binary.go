// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package credhelper

import (
	"encoding/json"
	"fmt"
	"os"
	"strings"

	"github.com/opencontainers/go-digest"
	"github.com/spf13/afero"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/dependency"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/path"

	"github.com/docker/cli/cli/config/configfile"
)

type binaries struct {
	fp         path.Finch
	fs         afero.Fs
	cmdCreator command.Creator
	l          flog.Logger
	fc         *config.Finch
	user       string
	hcfg       helperConfig
}

var _ dependency.Dependency = (*binaries)(nil)

func newCredHelperBinary(fp path.Finch, fs afero.Fs, cmdCreator command.Creator, l flog.Logger, fc *config.Finch,
	user string, hcfg helperConfig,
) *binaries {
	return &binaries{
		// TODO: consider replacing fp with only the strings that are used instead of the entire type
		fp:         fp,
		fs:         fs,
		cmdCreator: cmdCreator,
		l:          l,
		fc:         fc,
		user:       user,
		hcfg:       hcfg,
	}
}

func updateConfigFile(bin *binaries) error {
	cfgPath := fmt.Sprintf("%s%s", bin.hcfg.finchPath, "config.json")
	binCfgName := bin.credHelperConfigName()
	fileExists, err := afero.Exists(bin.fs, cfgPath)
	if err != nil {
		return err
	}
	if !fileExists {
		file, err := bin.fs.Create(cfgPath)
		if err != nil {
			return err
		}
		JSONstr := fmt.Sprintf("{\"credsStore\":\"%s\"}", binCfgName)
		JSON := []byte(JSONstr)
		_, err = file.Write(JSON)
		if err != nil {
			return err
		}
	} else {
		fileRead, err := bin.fs.Open(cfgPath)
		if err != nil {
			return err
		}
		bytes, err := afero.ReadAll(fileRead)
		if err != nil {
			return err
		}
		var cfg configfile.ConfigFile
		err = json.Unmarshal(bytes, &cfg)
		if err != nil {
			return err
		}
		credsStore := cfg.CredentialsStore
		defer fileRead.Close() //nolint:errcheck // closing the file
		if strings.Compare(credsStore, binCfgName) != 0 {
			file, err := bin.fs.OpenFile(cfgPath, os.O_RDWR|os.O_CREATE|os.O_TRUNC, 0o755)
			if err != nil {
				return err
			}
			cfg.CredentialsStore = binCfgName
			finalCfgBytes, err := json.Marshal(&cfg)
			if err != nil {
				return err
			}
			_, err = file.Write(finalCfgBytes)
			if err != nil {
				return err
			}
			defer file.Close() //nolint:errcheck // closing the file before exit
		}
	}

	return nil
}

func (bin *binaries) credHelperConfigName() string {
	return strings.ReplaceAll(bin.hcfg.binaryName, "docker-credential-", "")
}

func (bin *binaries) fullInstallPath() string {
	return fmt.Sprintf("%s%s", bin.hcfg.installFolder, bin.hcfg.binaryName)
}

func (bin *binaries) Installed() bool {
	dirExists, err := afero.DirExists(bin.fs, bin.hcfg.installFolder)
	if err != nil {
		bin.l.Errorf("failed to get status of binaries directory: %v", err)
		return false
	}
	if !dirExists {
		return false
	}
	fileExists, err := afero.Exists(bin.fs, bin.fullInstallPath())
	if err != nil {
		bin.l.Errorf("failed to get status of credential helper binary: %v", err)
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
	hash, err := digest.FromReader(file)
	if err != nil {
		bin.l.Error(err)
		return false
	}
	defer file.Close() //nolint:errcheck // closing the file
	if strings.Compare(hash.String(), bin.hcfg.hash) != 0 {
		bin.l.Info("Hash of the installed credential helper binary does not match")
		err := bin.fs.Remove(bin.fullInstallPath())
		if err != nil {
			bin.l.Error(err)
		}
		return false
	}
	return true
}

func (bin *binaries) Install() error {
	credsHelper := bin.fc.CredsHelper
	if credsHelper == nil {
		return nil
	}
	if strings.Compare(*credsHelper, bin.credHelperConfigName()) != 0 {
		return nil
	}
	bin.l.Info("Installing credential helper")
	mkdirCmd := bin.cmdCreator.Create("mkdir", "-p", bin.hcfg.installFolder)
	_, err := mkdirCmd.Output()
	if err != nil {
		return fmt.Errorf("error creating installation directory %s, err: %w", bin.hcfg.installFolder, err)
	}

	curlCmd := bin.cmdCreator.Create("curl", "--retry", "5", "--retry-max-time", "30", "--url",
		bin.hcfg.credHelperURL, "--output", bin.fullInstallPath())

	_, err = curlCmd.Output()
	if err != nil {
		return fmt.Errorf("error installation binary %s, err: %w", bin.hcfg.binaryName, err)
	}
	err = bin.fs.Chmod(bin.fullInstallPath(), 0o755)
	if err != nil {
		return err
	}
	err = updateConfigFile(bin)
	if err != nil {
		return err
	}
	return nil
}

func (bin *binaries) RequiresRoot() bool {
	return false
}
