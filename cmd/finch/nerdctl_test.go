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
		name     string
		cmdName  string
		args     []string
		expected bool
		mockSvc  func(*mocks.NerdctlCmdCreator, *mocks.Logger, *gomock.Controller)
	}{
		{
			name:     "with --help flag",
			cmdName:  "pull",
			args:     []string{"test:tag", "--help"},
			expected: true,
		},
		{
			name:     "with -h",
			cmdName:  "pull",
			args:     []string{"test:tag", "-h"},
			expected: true,
		},
		{
			name:     "system returns help",
			cmdName:  "system",
			expected: true,
		},
		{
			name:     "builder returns help",
			cmdName:  "builder",
			expected: true,
		},
		{
			name:     "container returns help",
			cmdName:  "container",
			expected: true,
		},
		{
			name:     "image returns help",
			cmdName:  "image",
			expected: true,
		},
		{
			name:     "network returns help",
			cmdName:  "network",
			expected: true,
		},
		{
			name:     "volume returns help",
			cmdName:  "volume",
			expected: true,
		},
		{
			name:     "compose returns help",
			cmdName:  "compose",
			expected: true,
		},
		{
			name:     "-h argument for hostname-related command",
			cmdName:  "run",
			args:     []string{"-h"},
			expected: false,
		},
		{
			name:     "-h argument for hostname-related command",
			cmdName:  "container run",
			args:     []string{"-h"},
			expected: false,
		},
		{
			name:     "-h argument for hostname-related command",
			cmdName:  "create",
			args:     []string{"-h"},
			expected: false,
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			ncc := mocks.NewNerdctlCmdCreator(ctrl)
			ecc := mocks.NewCommandCreator(ctrl)
			ncsd := mocks.NewNerdctlCommandSystemDeps(ctrl)
			logger := mocks.NewLogger(ctrl)
			assert.True(t, (newNerdctlCommand(ncc, ecc, ncsd, logger,
				nil, &config.Finch{}).shouldReplaceForHelp(tc.cmdName, tc.args) == tc.expected))
		})
	}
}
