// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package dependency

import (
	"errors"
	"fmt"
	"testing"

	"github.com/runfinch/finch/pkg/mocks"

	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/assert"
)

func TestGroup_instalOptional(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		group   func(*gomock.Controller) *Group
		mockSvc func(*mocks.Logger)
		want    error
	}{
		{
			name: "at least one dependency is not installed",
			group: func(ctrl *gomock.Controller) *Group {
				dep1 := mocks.NewDependency(ctrl)
				dep2 := mocks.NewDependency(ctrl)
				dep3 := mocks.NewDependency(ctrl)

				group := NewGroup([]Dependency{dep1, dep2, dep3}, "description", "")

				dep1.EXPECT().Installed().Return(true)
				dep2.EXPECT().Installed().Return(true)
				dep3.EXPECT().Installed().Return(false)

				dep3.EXPECT().Install().Return(nil)
				dep3.EXPECT().RequiresRoot().Return(true)

				return group
			},
			mockSvc: func(l *mocks.Logger) {
				l.EXPECT().Infoln("description")
			},
			want: nil,
		},
		{
			name: "all of the dependencies are already installed",
			group: func(ctrl *gomock.Controller) *Group {
				dep1 := mocks.NewDependency(ctrl)
				dep2 := mocks.NewDependency(ctrl)
				dep3 := mocks.NewDependency(ctrl)

				group := NewGroup([]Dependency{dep1, dep2, dep3}, "description", "")

				dep1.EXPECT().Installed().Return(true)
				dep2.EXPECT().Installed().Return(true)
				dep3.EXPECT().Installed().Return(true)

				return group
			},
			mockSvc: func(_ *mocks.Logger) {
			},
			want: nil,
		},
		{
			name: "dependency installation throws an error",
			group: func(ctrl *gomock.Controller) *Group {
				dep1 := mocks.NewDependency(ctrl)
				dep2 := mocks.NewDependency(ctrl)
				dep3 := mocks.NewDependency(ctrl)

				group := NewGroup([]Dependency{dep1, dep2, dep3}, "description", "error message")

				dep1.EXPECT().Installed().Return(false)
				dep1.EXPECT().RequiresRoot().Return(true)
				dep1.EXPECT().Install().Return(errors.New("installation failed"))

				dep2.EXPECT().Installed().Return(true)

				dep3.EXPECT().Installed().Return(true)

				return group
			},
			mockSvc: func(l *mocks.Logger) {
				l.EXPECT().Infoln("description")
			},
			want: fmt.Errorf("%s: %w", "error message", errors.Join(errors.New("installation failed"))),
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			l := mocks.NewLogger(ctrl)

			tc.mockSvc(l)
			group := tc.group(ctrl)

			got := (group.installOptional(l))
			assert.Equal(t, tc.want, got)
		})
	}
}

func TestInstallOptionalDeps(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name    string
		groups  func(*gomock.Controller) []*Group
		mockSvc func(*mocks.Logger)
		want    error
	}{
		{
			name: "at least one dependency is not installed yet",
			groups: func(ctrl *gomock.Controller) []*Group {
				dep1_1 := mocks.NewDependency(ctrl)
				dep1_2 := mocks.NewDependency(ctrl)
				dep2_1 := mocks.NewDependency(ctrl)

				group1 := NewGroup([]Dependency{dep1_1, dep1_2}, "dep group 1 description", "dep group 1 error message")
				group2 := NewGroup([]Dependency{dep2_1}, "dep group 2 description", "dep group 2 error message")
				groups := []*Group{group1, group2}

				dep1_1.EXPECT().Installed().Return(false)
				dep1_1.EXPECT().RequiresRoot().Return(true)
				dep1_1.EXPECT().Install().Return(nil)

				dep1_2.EXPECT().Installed().Return(true)
				dep2_1.EXPECT().Installed().Return(true)

				return groups
			},
			mockSvc: func(l *mocks.Logger) {
				l.EXPECT().Infoln("dep group 1 description")
			},
			want: nil,
		},
		{
			name: "all dependencies are installed",
			groups: func(ctrl *gomock.Controller) []*Group {
				dep1_1 := mocks.NewDependency(ctrl)
				dep2_1 := mocks.NewDependency(ctrl)

				group1 := NewGroup([]Dependency{dep1_1}, "", "")
				group2 := NewGroup([]Dependency{dep2_1}, "", "")
				groups := []*Group{group1, group2}

				dep1_1.EXPECT().Installed().Return(true)
				dep2_1.EXPECT().Installed().Return(true)

				return groups
			},
			mockSvc: func(_ *mocks.Logger) {
			},
			want: nil,
		},
		{
			name: "dependency installation throws an error",
			groups: func(ctrl *gomock.Controller) []*Group {
				dep1_1 := mocks.NewDependency(ctrl)
				dep1_2 := mocks.NewDependency(ctrl)
				dep2_1 := mocks.NewDependency(ctrl)

				group1 := NewGroup([]Dependency{dep1_1, dep1_2}, "dep group 1 description", "dep group 1 error message")
				group2 := NewGroup([]Dependency{dep2_1}, "dep group 2 description", "dep group 2 error message")
				groups := []*Group{group1, group2}

				dep1_1.EXPECT().Installed().Return(false)
				dep1_1.EXPECT().RequiresRoot().Return(true)
				dep1_1.EXPECT().Install().Return(errors.New("installation failed"))

				dep1_2.EXPECT().Installed().Return(true)

				dep2_1.EXPECT().Installed().Return(true)

				return groups
			},
			mockSvc: func(l *mocks.Logger) {
				l.EXPECT().Infoln("dep group 1 description")
			},
			want: fmt.Errorf("failed to install dependencies: %w",
				errors.Join(
					fmt.Errorf("%s: %w", "dep group 1 error message", errors.Join(errors.New("installation failed"))),
				),
			),
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			ctrl := gomock.NewController(t)
			l := mocks.NewLogger(ctrl)

			tc.mockSvc(l)
			groups := tc.groups(ctrl)

			got := InstallOptionalDeps(groups, l)
			assert.Equal(t, tc.want, got)
		})
	}
}
