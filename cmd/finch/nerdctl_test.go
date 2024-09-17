// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/assert"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/mocks"
)

var testStdoutRs = []command.Replacement{
	{Source: "nerdctl", Target: "finch"},
}

func TestNerdctlCommandCreator_create(t *testing.T) {
	t.Parallel()

	cmd := newNerdctlCommandCreator(nil, nil, nil, nil, nil, nil).create("build", "build description")
	assert.Equal(t, cmd.Name(), "build")
	assert.Equal(t, cmd.DisableFlagParsing, true)
}

func TestNerdctlCommand_shouldReplaceForHelp(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		cmdName string
		args    []string
		mockSvc func(*mocks.NerdctlCmdCreator, *mocks.Logger, *gomock.Controller)
	}{
		{
			name:    "with --help flag",
			cmdName: "pull",
			args:    []string{"test:tag", "--help"},
		},
		{
			name:    "with -h",
			cmdName: "pull",
			args:    []string{"test:tag", "-h"},
		},
		{
			name:    "system returns help",
			cmdName: "system",
		},
		{
			name:    "builder returns help",
			cmdName: "builder",
		},
		{
			name:    "container returns help",
			cmdName: "container",
		},
		{
			name:    "image returns help",
			cmdName: "image",
		},
		{
			name:    "network returns help",
			cmdName: "network",
		},
		{
			name:    "volume returns help",
			cmdName: "volume",
		},
		{
			name:    "compose returns help",
			cmdName: "compose",
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			ncc := mocks.NewNerdctlCmdCreator(ctrl)
			ecc := mocks.NewCommandCreator(ctrl)
			ncsd := mocks.NewNerdctlCommandSystemDeps(ctrl)
			logger := mocks.NewLogger(ctrl)
			assert.True(t, newNerdctlCommand(ncc, ecc, ncsd, logger, nil, &config.Finch{}).shouldReplaceForHelp(tc.cmdName, tc.args))
		})
	}
}
