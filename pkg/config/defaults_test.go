// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package config

import (
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/require"
	"github.com/xorcare/pointer"

	"github.com/runfinch/finch/pkg/mocks"
)

func Test_applyDefaults(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		cfg     *Finch
		mockSvc func(deps *mocks.LoadSystemDeps, mem *mocks.Memory)
		want    *Finch
	}{
		{
			name: "happy path",
			cfg:  &Finch{},
			mockSvc: func(deps *mocks.LoadSystemDeps, mem *mocks.Memory) {
				deps.EXPECT().NumCPU().Return(8)
				// 12,884,901,888 == 12GiB
				mem.EXPECT().TotalMemory().Return(uint64(12_884_901_888))
			},
			want: &Finch{
				CPUs:    pointer.Int(2),
				Memory:  pointer.String("3GiB"),
				VMType:  pointer.String("qemu"),
				Rosetta: pointer.Bool(false),
			},
		},
		{
			name: "fills CPUs with default when unset",
			cfg: &Finch{
				Memory: pointer.String("4GiB"),
			},
			mockSvc: func(deps *mocks.LoadSystemDeps, mem *mocks.Memory) {
				deps.EXPECT().NumCPU().Return(8)
			},
			want: &Finch{
				CPUs:    pointer.Int(2),
				Memory:  pointer.String("4GiB"),
				VMType:  pointer.String("qemu"),
				Rosetta: pointer.Bool(false),
			},
		},
		{
			name: "fills memory with default when unset",
			cfg: &Finch{
				CPUs: pointer.Int(6),
			},
			mockSvc: func(deps *mocks.LoadSystemDeps, mem *mocks.Memory) {
				// 12,884,901,888 == 12GiB
				mem.EXPECT().TotalMemory().Return(uint64(12_884_901_888))
			},
			want: &Finch{
				CPUs:    pointer.Int(6),
				Memory:  pointer.String("3GiB"),
				VMType:  pointer.String("qemu"),
				Rosetta: pointer.Bool(false),
			},
		},
		{
			name: "fills with fallbacks when defaults are too low",
			cfg:  &Finch{},
			mockSvc: func(deps *mocks.LoadSystemDeps, mem *mocks.Memory) {
				deps.EXPECT().NumCPU().Return(4)
				// 1,073,741,824 == 1GiB
				mem.EXPECT().TotalMemory().Return(uint64(1_073_741_824))
			},
			want: &Finch{
				CPUs:    pointer.Int(2),
				Memory:  pointer.String("2GiB"),
				VMType:  pointer.String("qemu"),
				Rosetta: pointer.Bool(false),
			},
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			deps := mocks.NewLoadSystemDeps(ctrl)
			mem := mocks.NewMemory(ctrl)

			tc.mockSvc(deps, mem)

			got := applyDefaults(tc.cfg, deps, mem)
			require.Equal(t, tc.want, got)
		})
	}
}
