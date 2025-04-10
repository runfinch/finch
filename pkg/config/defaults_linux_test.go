// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build linux

package config

import (
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/require"

	"github.com/runfinch/finch/pkg/mocks"
)

type applyDefaultTestCases []struct {
	name    string
	cfg     *Finch
	mockSvc func(
		deps *mocks.LoadSystemDeps,
		mem *mocks.Memory,
		ecc *mocks.CommandCreator,
		ctrl *gomock.Controller,
	)
	want *Finch
}

func Test_applyDefaults(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		cfg     *Finch
		mockSvc func(
			deps *mocks.LoadSystemDeps,
			mem *mocks.Memory,
			ecc *mocks.CommandCreator,
			ctrl *gomock.Controller,
		)
		want *Finch
	}{
		{
			name: "happy path",
			cfg:  &Finch{},
			mockSvc: func(
				deps *mocks.LoadSystemDeps,
				mem *mocks.Memory,
				ecc *mocks.CommandCreator,
				ctrl *gomock.Controller,
			) {
			},
			want: &Finch{},
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			deps := mocks.NewLoadSystemDeps(ctrl)
			mem := mocks.NewMemory(ctrl)
			ecc := mocks.NewCommandCreator(ctrl)

			tc.mockSvc(deps, mem, ecc, ctrl)

			got := applyDefaults(tc.cfg, deps, mem, ecc)
			require.Equal(t, tc.want, got)
		})
	}
}
