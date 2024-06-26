// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin

package config

import (
	"fmt"
	"runtime"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/require"
	"github.com/xorcare/pointer"

	"github.com/runfinch/finch/pkg/mocks"
)

func Test_applyDefaults(t *testing.T) {
	t.Parallel()

	var testCases []struct {
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
	darwinTestCases := []struct {
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
			want: &Finch{
				CPUs:    pointer.Int(2),
				Memory:  pointer.String("3GiB"),
				VMType:  pointer.String("vz"),
				Rosetta: pointer.Bool(false),
			},
		},
		{
			name: "fills CPUs with default when unset",
			cfg: &Finch{
				Memory: pointer.String("4GiB"),
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
			want: &Finch{
				CPUs:    pointer.Int(2),
				Memory:  pointer.String("4GiB"),
				VMType:  pointer.String("vz"),
				Rosetta: pointer.Bool(false),
			},
		},
		{
			name: "fills memory with default when unset",
			cfg: &Finch{
				CPUs: pointer.Int(6),
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
			want: &Finch{
				CPUs:    pointer.Int(6),
				Memory:  pointer.String("3GiB"),
				VMType:  pointer.String("vz"),
				Rosetta: pointer.Bool(false),
			},
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
				deps.EXPECT().NumCPU().Return(4)
				// 1,073,741,824 == 1GiB
				mem.EXPECT().TotalMemory().Return(uint64(1_073_741_824))
				c := mocks.NewCommand(ctrl)
				ecc.EXPECT().Create("sw_vers", "-productVersion").Return(c)
				c.EXPECT().Output().Return([]byte("14.0.0"), nil)
			},
			want: &Finch{
				CPUs:    pointer.Int(2),
				Memory:  pointer.String("2GiB"),
				VMType:  pointer.String("vz"),
				Rosetta: pointer.Bool(false),
			},
		},
		{
			name: "doesn't override existing values",
			cfg: &Finch{
				VMType: pointer.String("qemu"),
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
			want: &Finch{
				CPUs:    pointer.Int(2),
				Memory:  pointer.String("3GiB"),
				VMType:  pointer.String("qemu"),
				Rosetta: pointer.Bool(false),
			},
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
			want: &Finch{
				CPUs:    pointer.Int(2),
				Memory:  pointer.String("3GiB"),
				VMType:  pointer.String("qemu"),
				Rosetta: pointer.Bool(false),
			},
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
			want: &Finch{
				CPUs:    pointer.Int(2),
				Memory:  pointer.String("3GiB"),
				VMType:  pointer.String("qemu"),
				Rosetta: pointer.Bool(false),
			},
		},
	}

	windowsTestCases := []struct {
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
				VMType: pointer.String("wsl2"),
			},
		},
		{
			name: "does not fill wsl2 default when it's set to something else",
			cfg: &Finch{
				VMType: pointer.String("wsl"),
			},
			mockSvc: func(
				_ *mocks.LoadSystemDeps,
				_ *mocks.Memory,
				_ *mocks.CommandCreator,
				_ *gomock.Controller,
			) {
			},
			want: &Finch{
				VMType: pointer.String("wsl"),
			},
		},
	}
	switch runtime.GOOS {
	case "windows":
		testCases = append(testCases, windowsTestCases...)
	case "darwin":
		testCases = append(testCases, darwinTestCases...)
	default:
		t.Skip("Not running tests for " + runtime.GOOS)
	}

	for _, tc := range testCases {
		tc := tc
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
