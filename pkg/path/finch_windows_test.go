// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows
// +build windows

package path

import (
	"fmt"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/assert"

	"github.com/runfinch/finch/pkg/mocks"
)

func TestFinch_RootDir(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		mockSvc func(*mocks.FinchFinderDeps)
		wantErr error
		want    Finch
	}{
		{
			name:    "happy path",
			wantErr: nil,
			want:    Finch(`C:\Users\User\AppData\`),
			mockSvc: func(deps *mocks.FinchFinderDeps) {
				deps.EXPECT().Env("LOCALAPPDATA").Return(`C:\Users\User\AppData\`)
			},
		},
		{
			name:    "failed to find the executable path",
			want:    "",
			wantErr: fmt.Errorf("unexpected LOCALAPPDATA path %q", `\\network.path\home\test\"&someDir`),
			mockSvc: func(deps *mocks.FinchFinderDeps) {
				deps.EXPECT().Env("LOCALAPPDATA").Return(`\\network.path\home\test\"&someDir`)
			},
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			deps := mocks.NewFinchFinderDeps(ctrl)
			tc.mockSvc(deps)
			res, err := mockFinch.FinchRootDir(deps)
			assert.Equal(t, Finch(res), tc.want)
			assert.Equal(t, err, tc.wantErr)
		})
	}
}
