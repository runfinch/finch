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
	"github.com/runfinch/finch/pkg/dependency"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/path"

	"github.com/docker/cli/cli/config/configfile"
)

type credhelperbin struct {
	fp         path.Finch
	fs         afero.Fs
	cmdCreator command.Creator
	l          flog.Logger
	helper     string
	user       string
	hcfg       helperConfig
}

var _ dependency.Dependency = (*credhelperbin)(nil)

func newCredHelperBinary(fp path.Finch, fs afero.Fs, cmdCreator command.Creator, l flog.Logger, helper string,
	user string, hcfg helperConfig,
) *credhelperbin {
	return &credhelperbin{
		// TODO: consider replacing fp with only the strings that are used instead of the entire type
		fp:         fp,
		fs:         fs,
		cmdCreator: cmdCreator,
		l:          l,
		helper:     helper,
		user:       user,
		hcfg:       hcfg,
	}
}

// updateConfigFile updates the config.json file to configure the credential helper.
func updateConfigFile(bin *credhelperbin) error {
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
		defer fileRead.Close() //nolint:errcheck // closing the file
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
		if credsStore != binCfgName {
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

func (bin *credhelperbin) binaryInstalled() (bool, error) {
	return binaryInstalled(bin)
}

func (bin *credhelperbin) configFileInstalled() (bool, error) {
	cfgPath := fmt.Sprintf("%s%s", bin.hcfg.finchPath, "config.json")
	binCfgName := bin.credHelperConfigName()

	if fileExists, err := afero.Exists(bin.fs, cfgPath); err != nil {
		return false, err
	} else if !fileExists {
		return false, nil
	}

	fileRead, err := bin.fs.Open(cfgPath)
	if err != nil {
		return false, err
	}
	bytes, err := afero.ReadAll(fileRead)
	if err != nil {
		return false, err
	}
	var cfg configfile.ConfigFile
	err = json.Unmarshal(bytes, &cfg)
	if err != nil {
		return false, err
	}
	credsStore := cfg.CredentialsStore
	defer fileRead.Close() //nolint:errcheck // closing the file
	return credsStore == binCfgName, nil
}

// credHelperConfigName returns the name of the credential helper binary that will be used
// inside the config.json.
func (bin *credhelperbin) credHelperConfigName() string {
	return strings.ReplaceAll(bin.hcfg.binaryName, "docker-credential-", "")
}

// fullInstallPath returns the full installation path of the credential helper binary.
func (bin *credhelperbin) fullInstallPath() string {
	return fmt.Sprintf("%s%s", bin.hcfg.installFolder, bin.hcfg.binaryName)
}

// Installed checks if the credential helper already exists in the specified
// folder and checks if the hash of the installed binary is correct.
func (bin *credhelperbin) Installed() bool {
	if binInstalled, err := bin.binaryInstalled(); err != nil {
		bin.l.Error(err)
		return false
	} else if !binInstalled {
		return false
	}

	if cfgInstalled, err := bin.configFileInstalled(); err != nil {
		bin.l.Error(err)
		return false
	} else if !cfgInstalled {
		return false
	}

	return true
}

// Install installs and configures the specified credential helper.
func (bin *credhelperbin) Install() error {
	binInstalled, err := bin.binaryInstalled()
	if err != nil {
		return err
	}

	if !binInstalled {
		if bin.helper == "" {
			return nil
		}
		if bin.helper != bin.credHelperConfigName() {
			return nil
		}
		credHelperName := strings.ReplaceAll(bin.credHelperConfigName(), "-login", "")
		bin.l.Infof("Installing %s credential helper", credHelperName)
		mkdirCmd := bin.cmdCreator.Create("mkdir", "-p", bin.hcfg.installFolder)
		if _, err := mkdirCmd.Output(); err != nil {
			return fmt.Errorf("error creating installation directory %s, err: %w", bin.hcfg.installFolder, err)
		}

		curlCmd := bin.cmdCreator.Create(
			"curl",
			"--retry",
			"5",
			"--retry-max-time",
			"30",
			"--url",
			bin.hcfg.credHelperURL,
			"--output",
			bin.fullInstallPath(),
		)

		if _, err = curlCmd.Output(); err != nil {
			return fmt.Errorf("error installing binary %s, err: %w", bin.hcfg.binaryName, err)
		}
		if err := bin.fs.Chmod(bin.fullInstallPath(), 0o755); err != nil {
			return err
		}
	}

	cfgInstalled, err := bin.configFileInstalled()
	if err != nil {
		return err
	}

	if !cfgInstalled {
		if err := updateConfigFile(bin); err != nil {
			return err
		}
	}

	return nil
}

// RequiresRoot returns whether the installation of the binary needs root permissions.
func (bin *credhelperbin) RequiresRoot() bool {
	return false
}

// Using a var function allows overriding during testing.
// This is needed because the curl command directly outputs to a file, but binaryInstalled deletes
// any incorrect file that might exist at the fullInstallPath.
// This means that the mocking method that is typically used to mock filesystem will get the file it
// creates deleted, and then, since cmd.Output() is what is writing the new/correct file, and there's
// no opportunity to mock it or insert the file after it runs, the code that expects the file to exist
// then errors out because it was deleted by binaryInstalled.
var binaryInstalled = func(bin *credhelperbin) (bool, error) {
	dirExists, err := afero.DirExists(bin.fs, bin.hcfg.installFolder)
	if err != nil {
		return false, fmt.Errorf("failed to get status of credential helper directory: %w", err)
	}
	if !dirExists {
		return false, nil
	}
	fileExists, err := afero.Exists(bin.fs, bin.fullInstallPath())
	if err != nil {
		return false, fmt.Errorf("failed to get status of credential helper binary: %w", err)
	}
	if !fileExists {
		return false, nil
	}
	file, err := bin.fs.Open(bin.fullInstallPath())
	if err != nil {
		return false, fmt.Errorf("failed to open cred helper binary: %w", err)
	}
	defer file.Close() //nolint:errcheck // closing the file
	hash, err := digest.FromReader(file)
	if err != nil {
		return false, fmt.Errorf("failed to get cred helper binary hash: %w", err)
	}
	if hash.String() != bin.hcfg.hash {
		bin.l.Info("Hash of the installed credential helper binary does not match")
		if err := bin.fs.Remove(bin.fullInstallPath()); err != nil {
			return false, fmt.Errorf("failed to remove mismatched cred helper binary: %w", err)
		}
		return false, nil
	}

	return true, nil
}
