// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package config

import (
	"fmt"

	"github.com/xorcare/pointer"
	"go.uber.org/mock/gomock"

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
				deps *mocks.LoadSystemDeps,
				mem *mocks.Memory,
				ecc *mocks.CommandCreator,
				ctrl *gomock.Controller,
			) {
				deps.EXPECT().NumCPU().Return(8)
				// 12,884,901,888 == 12GiB
				mem.EXPECT().TotalMemory().Return(uint64(12_884_901_888))
				c := mocks.NewCommand(ctrl)
				ecc.EXPECT().Create("sw_vers", "-productVersion").Return(c)
				c.EXPECT().Output().Return([]byte("14.0.0"), nil)
			},
			want: makeConfig("vz", "6GiB", 4, false),
		},
		{
			name: "fills CPUs with default when unset",
			cfg: &Finch{
				SystemSettings: SystemSettings{
					Memory: pointer.String("4GiB"),
				},
			},
			mockSvc: func(
				deps *mocks.LoadSystemDeps,
				_ *mocks.Memory,
				ecc *mocks.CommandCreator,
				ctrl *gomock.Controller,
			) {
				deps.EXPECT().NumCPU().Return(8)
				c := mocks.NewCommand(ctrl)
				ecc.EXPECT().Create("sw_vers", "-productVersion").Return(c)
				c.EXPECT().Output().Return([]byte("14.0.0"), nil)
			},
			want: makeConfig("vz", "4GiB", 4, false),
		},
		{
			name: "fills memory with default when unset",
			cfg: &Finch{
				SystemSettings: SystemSettings{
					CPUs: pointer.Int(6),
				},
			},
			mockSvc: func(
				_ *mocks.LoadSystemDeps,
				mem *mocks.Memory,
				ecc *mocks.CommandCreator,
				ctrl *gomock.Controller,
			) {
				// 12,884,901,888 == 12GiB
				mem.EXPECT().TotalMemory().Return(uint64(12_884_901_888))
				c := mocks.NewCommand(ctrl)
				ecc.EXPECT().Create("sw_vers", "-productVersion").Return(c)
				c.EXPECT().Output().Return([]byte("14.0.0"), nil)
			},
			want: makeConfig("vz", "6GiB", 6, false),
		},
		{
			name: "fills with fallbacks when defaults are too low",
			cfg:  &Finch{},
			mockSvc: func(
				deps *mocks.LoadSystemDeps,
				mem *mocks.Memory,
				ecc *mocks.CommandCreator,
				ctrl *gomock.Controller,
			) {
				deps.EXPECT().NumCPU().Return(3)
				// 1,073,741,824 == 1GiB
				mem.EXPECT().TotalMemory().Return(uint64(1_073_741_824))
				c := mocks.NewCommand(ctrl)
				ecc.EXPECT().Create("sw_vers", "-productVersion").Return(c)
				c.EXPECT().Output().Return([]byte("14.0.0"), nil)
			},
			want: makeConfig("vz", "2GiB", 2, false),
		},
		{
			name: "doesn't override existing values",
			cfg: &Finch{
				SystemSettings: SystemSettings{
					SharedSystemSettings: SharedSystemSettings{
						VMType: pointer.String("qemu"),
					},
				},
			},
			mockSvc: func(
				deps *mocks.LoadSystemDeps,
				mem *mocks.Memory,
				ecc *mocks.CommandCreator,
				ctrl *gomock.Controller,
			) {
				deps.EXPECT().NumCPU().Return(8)
				// 12,884,901,888 == 12GiB
				mem.EXPECT().TotalMemory().Return(uint64(12_884_901_888))
				c := mocks.NewCommand(ctrl)
				ecc.EXPECT().Create("sw_vers", "-productVersion").Return(c)
				c.EXPECT().Output().Return([]byte("14.0.0"), nil)
			},
			want: makeConfig("qemu", "6GiB", 4, false),
		},
		{
			name: "falls back to qemu on old versions",
			cfg:  &Finch{},
			mockSvc: func(
				deps *mocks.LoadSystemDeps,
				mem *mocks.Memory,
				ecc *mocks.CommandCreator,
				ctrl *gomock.Controller,
			) {
				deps.EXPECT().NumCPU().Return(8)
				// 12,884,901,888 == 12GiB
				mem.EXPECT().TotalMemory().Return(uint64(12_884_901_888))
				c := mocks.NewCommand(ctrl)
				ecc.EXPECT().Create("sw_vers", "-productVersion").Return(c)
				c.EXPECT().Output().Return([]byte("12.0.0"), nil)
			},
			want: makeConfig("qemu", "6GiB", 4, false),
		},
		{
			name: "falls back to qemu if there's an error",
			cfg:  &Finch{},
			mockSvc: func(
				deps *mocks.LoadSystemDeps,
				mem *mocks.Memory,
				ecc *mocks.CommandCreator,
				ctrl *gomock.Controller,
			) {
				deps.EXPECT().NumCPU().Return(8)
				// 12,884,901,888 == 12GiB
				mem.EXPECT().TotalMemory().Return(uint64(12_884_901_888))
				c := mocks.NewCommand(ctrl)
				ecc.EXPECT().Create("sw_vers", "-productVersion").Return(c)
				c.EXPECT().Output().Return([]byte("12.0.0"), fmt.Errorf("an error"))
			},
			want: makeConfig("qemu", "6GiB", 4, false),
		},
	}
}
