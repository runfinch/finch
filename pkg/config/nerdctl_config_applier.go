// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package config

import (
	"errors"
	"fmt"
	"path"
	"path/filepath"
	"strings"

	toml "github.com/pelletier/go-toml"
	"github.com/pkg/sftp"
	"github.com/spf13/afero"
	"github.com/spf13/afero/sftpfs"

	"github.com/runfinch/finch/pkg/fssh"
)

const (
	nerdctlNamespace      = "finch"
	nerdctlRootfulCfgPath = "/etc/nerdctl/nerdctl.toml"
)

type nerdctlConfigApplier struct {
	dialer           fssh.Dialer
	fs               afero.Fs
	privateKeyPath   string
	finchDir         string
	homeDir          string
	limaInstancePath string
	fc               *Finch
}

var _ NerdctlConfigApplier = (*nerdctlConfigApplier)(nil)

// NewNerdctlApplier creates a new NerdctlConfigApplier that
// applies nerdctl configuration changes by SSHing to the lima VM to update the nerdctl configuration file in it.
func NewNerdctlApplier(
	dialer fssh.Dialer,
	fs afero.Fs,
	privateKeyPath,
	finchDir,
	homeDir string,
	limaInstancePath string,
	fc *Finch,
) NerdctlConfigApplier {
	return &nerdctlConfigApplier{
		dialer:           dialer,
		fs:               fs,
		privateKeyPath:   privateKeyPath,
		finchDir:         finchDir,
		homeDir:          homeDir,
		limaInstancePath: limaInstancePath,
		fc:               fc,
	}
}

func addLineToBashrc(fs afero.Fs, profileFilePath string, profStr string, cmd string) (string, error) {
	if !strings.Contains(profStr, cmd) {
		profBufWithCmd := fmt.Sprintf("%s\n%s", profStr, cmd)
		if err := afero.WriteFile(fs, profileFilePath, []byte(profBufWithCmd), 0o644); err != nil {
			return "", fmt.Errorf("failed to write to profile file: %w", err)
		}
		return profBufWithCmd, nil
	}
	return profStr, nil
}

// updateEnvironment adds variables to the user's shell's environment. Currently it uses ~/.bashrc because
// Bash is the default shell and Bash will not load ~/.profile if ~/.bash_profile exists (which it does).
// ~/.bash_profile sources ~/.bashrc, so ~/.bashrc is currently the best place to define additional variables.
// The [GNU docs for Bash] explain how these files work together in more details.
// The default location of DOCKER_CONFIG is ~/.docker/config.json. This config change sets the location to
// ~/.finch/config.json, but from the perspective of macOS (/Users/<user>/.finch/config.json).
// The reason that we don't set environment variables inside /root/.bashrc is that the vars inside it are
// not able to be picked up even if we specify `sudo -E`. We have to switch to root user in order to access them, while
// normally we would access the VM as the regular user.
// For more information on the variable, see the registry nerdctl docs.
//
// [GNU docs for Bash]: https://www.gnu.org/software/bash/manual/html_node/Bash-Startup-Files.html
//
// [registry nerdctl docs]: https://github.com/containerd/nerdctl/blob/master/docs/registry.md

func updateEnvironment(fs afero.Fs, fc *Finch, finchDir, homeDir, limaVMHomeDir string) error {
	cmdArr := []string{
		`export DOCKER_CONFIG="$FINCH_DIR"`,
		"[ -L /usr/local/bin/docker-credential-ecr-login ] " +
			`|| sudo ln -s "$FINCH_DIR"/cred-helpers/docker-credential-ecr-login /usr/local/bin/`,
		`[ -L /root/.aws ] || sudo ln -fs "$AWS_DIR" /root/.aws`,
	}

	awsDir := fmt.Sprintf("%s/.aws", homeDir)

	if *fc.VMType == "wsl2" {
		cmdArr = append([]string{
			fmt.Sprintf(`FINCH_DIR="$(/usr/bin/wslpath '%s')"`, finchDir),
			fmt.Sprintf(`AWS_DIR="$(/usr/bin/wslpath '%s')"`, awsDir),
		}, cmdArr...)
	} else {
		cmdArr = append([]string{
			fmt.Sprintf(`FINCH_DIR=%s`, finchDir),
			fmt.Sprintf(`AWS_DIR=%s`, awsDir),
		}, cmdArr...)
	}

	profileFilePath := fmt.Sprintf("%s/.bashrc", limaVMHomeDir)
	profBuf, err := afero.ReadFile(fs, profileFilePath)
	if err != nil {
		return fmt.Errorf("failed to read config file %q: %w", profileFilePath, err)
	}
	profStr := string(profBuf)
	for _, element := range cmdArr {
		profStr, err = addLineToBashrc(fs, profileFilePath, profStr, element)
		if err != nil {
			return err
		}
	}

	return nil
}

// updateNerdctlConfig reads from the nerdctl config and updates values.
func updateNerdctlConfig(fs afero.Fs, homeDir string, rootless bool) error {
	nerdctlRootlessCfgPath := fmt.Sprintf("%s/.config/nerdctl/nerdctl.toml", homeDir)

	var cfgPath string
	if rootless {
		cfgPath = nerdctlRootlessCfgPath
	} else {
		cfgPath = nerdctlRootfulCfgPath
	}

	if err := fs.MkdirAll(path.Dir(cfgPath), 0o755); err != nil {
		return fmt.Errorf("failed to create config dir (dir(filepath)) %s: %w", cfgPath, err)
	}

	if _, err := fs.Stat(cfgPath); errors.Is(err, afero.ErrFileNotFound) {
		if err := afero.WriteFile(fs, cfgPath, []byte{}, 0o644); err != nil {
			return fmt.Errorf("failed to create %q with afero.WriteFile: %w", cfgPath, err)
		}
	}

	var cfg Nerdctl
	cfgBuf, err := afero.ReadFile(fs, cfgPath)
	if err != nil {
		return fmt.Errorf("failed to read config file %q: %w", cfgPath, err)
	}

	if err := toml.Unmarshal(cfgBuf, &cfg); err != nil {
		return fmt.Errorf("failed to unmarshal config file %q: %w", cfgPath, err)
	}

	cfg.Namespace = nerdctlNamespace

	updatedCfg, err := toml.Marshal(cfg)
	if err != nil {
		return fmt.Errorf("failed to marshal config file %q: %w", cfgPath, err)
	}

	if err := afero.WriteFile(fs, cfgPath, updatedCfg, 0o644); err != nil {
		return fmt.Errorf("failed to write to config file %q: %w", cfgPath, err)
	}

	return nil
}

func getLimaHomeDir(localFs afero.Fs, remoteFs afero.Fs, limaInstanceDir string, cfg *Finch) (string, error) {
	var envB []byte
	var envErr error

	if *cfg.VMType == "wsl2" {
		envB, envErr = afero.ReadFile(localFs, filepath.Join(limaInstanceDir, "cidata", "lima.env"))
	} else {
		envB, envErr = afero.ReadFile(remoteFs, "/mnt/lima-cidata/lima.env")
	}

	if envErr != nil {
		return "", envErr
	}

	var user, home string
	lines := strings.Split(string(envB), "\n")
	for _, l := range lines {
		if strings.Contains(l, "LIMA_CIDATA_USER") {
			user = strings.Split(l, "=")[1]
		} else if strings.Contains(l, "LIMA_CIDATA_HOME") {
			home = strings.Split(l, "=")[1]
		}
	}

	if home != "" {
		return home, nil
	}

	return "/home/" + user + ".linux", nil
}

// Apply gets SSH and SFTP clients and uses them to update the nerdctl config.
func (nca *nerdctlConfigApplier) Apply(remoteAddr string) error {
	user := "root"
	sshCfg, err := fssh.NewClientConfig(nca.fs, user, nca.privateKeyPath)
	if err != nil {
		return fmt.Errorf("failed to create ssh client config: %w", err)
	}

	sshClient, err := nca.dialer.Dial("tcp", remoteAddr, sshCfg)
	if err != nil {
		return fmt.Errorf("failed to setup ssh client: %w", err)
	}

	sftpClient, err := sftp.NewClient(sshClient)
	if err != nil {
		return fmt.Errorf("failed to setup sftp client: %w", err)
	}

	sftpFs := sftpfs.New(sftpClient)

	limaHomeDir, err := getLimaHomeDir(nca.fs, sftpFs, nca.limaInstancePath, nca.fc)
	if err != nil {
		return fmt.Errorf("failed to get lima home dir: %w", err)
	}

	// rootless hardcoded to false for now to match our finch.yaml file
	if err := updateNerdctlConfig(sftpFs, limaHomeDir, false); err != nil {
		return fmt.Errorf("failed to update the nerdctl config file: %w", err)
	}

	if err := updateEnvironment(sftpFs, nca.fc, nca.finchDir, nca.homeDir, limaHomeDir); err != nil {
		return fmt.Errorf("failed to update the user's .profile file: %w", err)
	}
	return nil
}
