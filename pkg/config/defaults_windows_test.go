// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build windows

package config

import (
	"github.com/golang/mock/gomock"
	"github.com/xorcare/pointer"

	"github.com/runfinch/finch/pkg/mocks"
)

func applyDefaultPlatformSpecificTestCases() applyDefaultTestCases {
	return []struct {
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
				_ *mocks.LoadSystemDeps,
				_ *mocks.Memory,
				_ *mocks.CommandCreator,
				_ *gomock.Controller,
			) {
			},
			want: &Finch{
				SystemSettings: SystemSettings{
					SharedSystemSettings: SharedSystemSettings{
						VMType: pointer.String("wsl2"),
					},
				},
			},
		},
	}
}
