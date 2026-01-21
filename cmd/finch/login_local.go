//go:build darwin || windows

/*
   Copyright The containerd Authors.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// Copy of nerdctl login command with minor changes.

package main

import (
	"errors"
	"fmt"
	"io"
	"os"
	"path/filepath"
	"strings"

	"github.com/spf13/cobra"

	"github.com/containerd/log"

	"github.com/containerd/nerdctl/v2/pkg/api/types"
	"github.com/containerd/nerdctl/v2/pkg/cmd/login"

	"github.com/runfinch/finch/pkg/credserver"
)

func newLoginLocalCommand() *cobra.Command {
	cmd := &cobra.Command{
		Use:           "login [flags] [SERVER]",
		Args:          cobra.MaximumNArgs(1),
		Short:         "Log in to a container registry",
		RunE:          loginAction,
		SilenceUsage:  true,
		SilenceErrors: true,
	}
	cmd.Flags().StringP("username", "u", "", "Username")
	cmd.Flags().StringP("password", "p", "", "Password")
	cmd.Flags().Bool("password-stdin", false, "Take the password from stdin")
	// containerd namespace flag (typically a global flag in nerdctl)
	cmd.Flags().StringP("namespace", "", "", "Namespace")
	return cmd
}

func loginOptions(cmd *cobra.Command) (types.LoginCommandOptions, error) {
	namespace, _ := cmd.Flags().GetString("namespace")
	globalOptions := types.GlobalCommandOptions{
		Namespace: namespace,
	}

	username, err := cmd.Flags().GetString("username")
	if err != nil {
		return types.LoginCommandOptions{}, err
	}
	password, err := cmd.Flags().GetString("password")
	if err != nil {
		return types.LoginCommandOptions{}, err
	}
	passwordStdin, err := cmd.Flags().GetBool("password-stdin")
	if err != nil {
		return types.LoginCommandOptions{}, err
	}

	if strings.Contains(username, ":") {
		return types.LoginCommandOptions{}, errors.New("username cannot contain colons")
	}

	if password != "" {
		log.L.Warn("WARNING! Using --password via the CLI is insecure. Use --password-stdin.")
		if passwordStdin {
			return types.LoginCommandOptions{}, errors.New("--password and --password-stdin are mutually exclusive")
		}
	}

	if passwordStdin {
		if username == "" {
			return types.LoginCommandOptions{}, errors.New("must provide --username with --password-stdin")
		}

		contents, err := io.ReadAll(cmd.InOrStdin())
		if err != nil {
			return types.LoginCommandOptions{}, err
		}

		password = strings.TrimSuffix(string(contents), "\n")
		password = strings.TrimSuffix(password, "\r")
	}
	return types.LoginCommandOptions{
		GOptions: globalOptions,
		Username: username,
		Password: password,
	}, nil
}

func loginAction(cmd *cobra.Command, args []string) error {
	// Ensure config exists with appropriate credential storage
	home, err := os.UserHomeDir()
	if err != nil {
		return err
	}
	finchDir := filepath.Join(home, ".finch")
	if err := credserver.EnsureConfigExists(finchDir); err != nil {
		return err
	}

	options, err := loginOptions(cmd)
	if err != nil {
		return err
	}

	if len(args) == 1 {
		options.ServerAddress = args[0]
	}

	// Capture both stdout and stderr to control output order
	var stdoutBuf, stderrBuf strings.Builder
	origStderr := os.Stderr
	rStderr, wStderr, err := os.Pipe()
	if err != nil {
		return err
	}
	os.Stderr = wStderr

	err = login.Login(cmd.Context(), options, &stdoutBuf)

	_ = wStderr.Close()
	os.Stderr = origStderr
	if _, err := io.Copy(&stderrBuf, rStderr); err != nil {
		return err
	}

	// Print stderr first (warnings with replaced link), then stdout (success message)
	if stderrBuf.Len() > 0 {
		output := strings.ReplaceAll(stderrBuf.String(), "https://docs.docker.com/go/credential-store/",
			"https://runfinch.com/docs/container-images/authentication/")
		_, _ = fmt.Fprint(cmd.ErrOrStderr(), output)
	}
	_, _ = fmt.Fprint(cmd.OutOrStdout(), stdoutBuf.String())

	return err
}
