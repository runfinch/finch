// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package main

import (
	"errors"
	"testing"

	"github.com/spf13/afero"
	"github.com/stretchr/testify/assert"
	"go.uber.org/mock/gomock"

	"github.com/runfinch/finch/pkg/config"
	"github.com/runfinch/finch/pkg/mocks"
)

func TestVMAutoStarter(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		status  string
		statErr error
		wantErr string
	}{
		{
			name:   "running VM is a no-op",
			status: "Running",
		},
		{
			name:    "unknown status returns error",
			status:  "Broken",
			wantErr: "unrecognized system status",
		},
		{
			name:    "status command failure propagates error",
			status:  "something else",
			statErr: errors.New("error"),
			wantErr: "error",
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			ncc := mocks.NewNerdctlCmdCreator(ctrl)
			logger := mocks.NewLogger(ctrl)

			getVMStatusC := mocks.NewCommand(ctrl)
			ncc.EXPECT().CreateWithoutStdio("ls", "-f", "{{.Status}}", limaInstanceName).Return(getVMStatusC)
			getVMStatusC.EXPECT().Output().Return([]byte(tc.status), tc.statErr)

			if tc.statErr == nil {
				logger.EXPECT().Debugf("Status of virtual machine: %s", tc.status)
			}

			starter := &vmAutoStarter{
				ncc:    ncc,
				logger: logger,
				fs:     afero.NewMemMapFs(),
				fc:     &config.Finch{},
			}

			err := starter.EnsureVMRunning()
			if tc.wantErr == "" {
				assert.NoError(t, err)
			} else {
				assert.ErrorContains(t, err, tc.wantErr)
			}
		})
	}
}
