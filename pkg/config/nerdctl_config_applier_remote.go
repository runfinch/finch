//go:build (darwin || windows) && !native

package config

import (
	"fmt"
	"path/filepath"
	"strings"

	"github.com/pkg/sftp"
	"github.com/spf13/afero"
	"github.com/spf13/afero/sftpfs"

	"github.com/runfinch/finch/pkg/fssh"
)

const nerdctlRootfulCfgPath = "/etc/nerdctl/nerdctl.toml"

func nerdctlFs(hostFs afero.Fs, privateKeyPath string, remoteAddr string) (afero.Fs, error) {
	user := "root"
	sshCfg, err := fssh.NewClientConfig(hostFs, user, privateKeyPath)
	if err != nil {
		return nil, fmt.Errorf("failed to create ssh client config: %w", err)
	}

	dialer := fssh.NewDialer()

	sshClient, err := dialer.Dial("tcp", remoteAddr, sshCfg)
	if err != nil {
		return nil, fmt.Errorf("failed to setup ssh client: %w", err)
	}

	sftpClient, err := sftp.NewClient(sshClient)
	if err != nil {
		return nil, fmt.Errorf("failed to setup sftp client: %w", err)
	}

	return sftpfs.New(sftpClient), nil
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

func getHomeDir(localFs afero.Fs, remoteFs afero.Fs, limaInstanceDir string, cfg *Finch, _ string) (string, error) {
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
