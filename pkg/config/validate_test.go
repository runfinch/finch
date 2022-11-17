// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package config

import (
	"errors"
	"testing"

	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/require"
	"github.com/xorcare/pointer"

	"github.com/runfinch/finch/pkg/mocks"
)

func TestValidate(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		cfg     *Finch
		mockSvc func(l *mocks.Logger, deps *mocks.LoadSystemDeps, mem *mocks.Memory)
		err     error
	}{
		{
			name: "happy path",
			cfg: &Finch{
				CPUs:   pointer.Int(4),
				Memory: pointer.String("4GiB"),
			},
			mockSvc: func(l *mocks.Logger, deps *mocks.LoadSystemDeps, mem *mocks.Memory) {
				deps.EXPECT().NumCPU().Return(8)
				// 12,880,000,000 == 12GiB
				mem.EXPECT().TotalMemory().Return(uint64(12_880_000_000))
			},
			err: nil,
		},
		{
			name: "config specifies less CPUs than required",
			cfg: &Finch{
				CPUs:   pointer.Int(0),
				Memory: pointer.String("0GiB"),
			},
			mockSvc: func(l *mocks.Logger, deps *mocks.LoadSystemDeps, mem *mocks.Memory) {},
			err:     errors.New("specified number of CPUs (0) must be greater than 0"),
		},
		{
			name: "config specifies less memory than required",
			cfg: &Finch{
				CPUs:   pointer.Int(1),
				Memory: pointer.String("0GiB"),
			},
			mockSvc: func(l *mocks.Logger, deps *mocks.LoadSystemDeps, mem *mocks.Memory) {},
			err:     errors.New("specified amount of memory (0GiB) must be greater than 0GiB"),
		},
		{
			name: "config specifies more CPUs than available",
			cfg: &Finch{
				CPUs:   pointer.Int(4),
				Memory: pointer.String("4GiB"),
			},
			mockSvc: func(l *mocks.Logger, deps *mocks.LoadSystemDeps, mem *mocks.Memory) {
				deps.EXPECT().NumCPU().Return(1)
				mem.EXPECT().TotalMemory().Return(uint64(12_880_000_000))
				l.EXPECT().Infof(
					"The specified number of CPUs (%d) is greater than CPUs available on this system (%d),\n"+
						"which may lead to severe performance degradation",
					4,
					1,
				)
			},
			err: nil,
		},
		{
			name: "config specifies more memory than available",
			cfg: &Finch{
				CPUs:   pointer.Int(4),
				Memory: pointer.String("4GiB"),
			},
			mockSvc: func(l *mocks.Logger, deps *mocks.LoadSystemDeps, mem *mocks.Memory) {
				deps.EXPECT().NumCPU().Return(8)
				// 1,074,000,000 == 1GiB
				mem.EXPECT().TotalMemory().Return(uint64(1_074_000_000))
				l.EXPECT().Infof(
					"The specified amount of memory (%s) is greater than the memory available on this system (%s),\n"+
						"which may lead to severe performance degradation",
					"4GiB",
					"1GiB",
				)
			},
			err: nil,
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			deps := mocks.NewLoadSystemDeps(ctrl)
			mem := mocks.NewMemory(ctrl)
			l := mocks.NewLogger(ctrl)

			tc.mockSvc(l, deps, mem)

			got := validate(tc.cfg, l, deps, mem)
			require.Equal(t, tc.err, got)
		})
	}
}
