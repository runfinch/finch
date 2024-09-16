// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build linux

package main

import (
	"fmt"
	"os"
	"testing"

	"gopkg.in/yaml.v3"

	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/mocks"
	"github.com/runfinch/finch/pkg/path"
	"github.com/runfinch/finch/pkg/version"

	"github.com/golang/mock/gomock"
	"github.com/spf13/afero"
	"github.com/spf13/cobra"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

var nativeConfigStr = ""

func TestNewApp(t *testing.T) {
	t.Parallel()

	ctrl := gomock.NewController(t)
	l := mocks.NewLogger(ctrl)
	fp := path.Finch("")
	fs := afero.NewMemMapFs()
	stdOut := os.Stdout
	ecc := mocks.NewCommandCreator(ctrl)

	require.NoError(t, afero.WriteFile(fs, "/real/config.yaml", []byte(nativeConfigStr), 0o600))

	cmd := newApp(l, fp, fs, &config.Finch{}, stdOut, ecc)

	assert.Equal(t, cmd.Name(), finchRootCmd)
	assert.Equal(t, cmd.Version, version.Version)
	assert.Equal(t, cmd.SilenceUsage, true)
	assert.Equal(t, cmd.SilenceErrors, true)
	// confirm the number of command, comprised of nerdctl commands + finch commands
	// one less than "remote", because there are no VM commands on native
	assert.Equal(t, len(cmd.Commands()), len(nerdctlCmds)+3)

	// PersistentPreRunE should set logger level to debug if the debug flag exists.
	mockCmd := &cobra.Command{}
	mockCmd.Flags().Bool("debug", true, "")
	l.EXPECT().SetLevel(flog.Debug)

	require.NoError(t, cmd.PersistentPreRunE(mockCmd, nil))
}

func TestXmain(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		wantErr error
		mockSvc func(afero.Fs)
	}{
		{
			name:    "happy path",
			wantErr: nil,
			mockSvc: func(fs afero.Fs) {
				require.NoError(t, afero.WriteFile(fs, "/etc/finch/finch.yaml", []byte(nativeConfigStr), 0o600))
			},
		},
		{
			name: "failed to load finch config because of invalid YAML",
			wantErr: fmt.Errorf("failed to load config: %w",
				fmt.Errorf("failed to unmarshal config file: %w",
					&yaml.TypeError{Errors: []string{"line 1: cannot unmarshal !!str `this is...` into config.Finch"}},
				),
			),
			mockSvc: func(
				fs afero.Fs,
			) {
				require.NoError(t, afero.WriteFile(fs, "/etc/finch/finch.yaml", []byte("this isn't YAML"), 0o600))
			},
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			fs := afero.NewMemMapFs()
			tc.mockSvc(fs)
			err := xmain(nil, nil, fs, nil, nil, nil)
			assert.Equal(t, err, tc.wantErr)
		})
	}
}
