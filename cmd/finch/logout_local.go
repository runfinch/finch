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
// Copy of nerdctl logout command with minor changes

package main

import (
	"os"
	"path/filepath"

	"github.com/spf13/cobra"

	"github.com/containerd/log"

	"github.com/containerd/nerdctl/v2/pkg/cmd/logout"

	"github.com/runfinch/finch/pkg/credserver"
)

func newLogoutLocalCommand() *cobra.Command {
	cmd := &cobra.Command{
		Use:               "logout [flags] [SERVER]",
		Args:              cobra.MaximumNArgs(1),
		Short:             "Log out from a container registry",
		RunE:              logoutAction,
		ValidArgsFunction: logoutShellComplete,
		SilenceUsage:      true,
		SilenceErrors:     true,
	}
	cmd.Flags().StringP("namespace", "", "", "namespace")
	return cmd
}

func logoutAction(cmd *cobra.Command, args []string) error {
	log.L.Debug("logoutAction: starting")
	if home, err := os.UserHomeDir(); err == nil {
		finchDir := filepath.Join(home, ".finch")
		log.L.Debugf("logoutAction: ensuring config exists at %s", finchDir)
		if err := credserver.EnsureConfigExists(finchDir); err != nil {
			log.L.Debugf("logoutAction: EnsureConfigExists failed: %v", err)
		}
	}

	logoutServer := ""
	if len(args) > 0 {
		logoutServer = args[0]
		log.L.Debugf("logoutAction: server set to %s", logoutServer)
	}

	log.L.Debug("logoutAction: calling nerdctl logout")
	errGroup, err := logout.Logout(cmd.Context(), logoutServer)
	log.L.Debugf("logoutAction: nerdctl logout returned with err=%v, errGroup=%v", err, errGroup)
	if err != nil {
		log.L.WithError(err).Errorf("Failed to erase credentials for: %s", logoutServer)
	}
	if errGroup != nil {
		log.L.Error("None of the following entries could be found")
		for _, v := range errGroup {
			log.L.Errorf("%s", v)
		}
	}

	return err
}

func logoutShellComplete(_ *cobra.Command, _ []string, _ string) ([]string, cobra.ShellCompDirective) {
	candidates, err := logout.ShellCompletion()
	if err != nil {
		return nil, cobra.ShellCompDirectiveError
	}

	return candidates, cobra.ShellCompDirectiveNoFileComp
}
