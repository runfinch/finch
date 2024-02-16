// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package dependency allows for the creation of Dependencies and Dependency Groups,
// and provides functions to install these Groups.
package dependency

import (
	"errors"
	"fmt"

	"github.com/runfinch/finch/pkg/flog"
)

// Dependency is a dependency of the Finch binary. It can be a binary, a package, or a file, etc.
//
//go:generate mockgen -copyright_file=../../copyright_header -destination=../mocks/pkg_dependency_dependency.go -package=mocks -mock_names Dependency=Dependency . Dependency
type Dependency interface {
	RequiresRoot() bool
	Installed() bool
	Install() error
}

// Group contains logically related dependencies.
type Group struct {
	deps   []Dependency
	desc   string
	errMsg string
}

// NewGroup views deps as ordered dependencies,
// and the returned Group will only install them in the order specified here.
func NewGroup(deps []Dependency, desc string, errMsg string) *Group {
	return &Group{
		deps:   deps,
		desc:   desc,
		errMsg: errMsg,
	}
}

// installOptional sequentially installs all dependencies in a Group, collecting all
// errors and returning one combined error.
func (g *Group) installOptional(logger flog.Logger) error {
	var errs []error
	loggedMessage := false
	for _, dep := range g.deps {
		if dep == nil {
			continue
		}
		if dep.Installed() {
			continue
		}

		if dep.RequiresRoot() && !loggedMessage {
			loggedMessage = true
			logger.Infoln(g.desc)
		}
		err := dep.Install()
		if err != nil {
			errs = append(errs, err)
		}
	}

	if len(errs) > 0 {
		return fmt.Errorf("%s: %w", g.errMsg, errors.Join(errs...))
	}

	return nil
}

// InstallOptionalDeps installs the supplied dependency groups.
//
// Since the groups are all optional,
// InstallOptionalDeps continues to install the remaining groups even if a group fails to be installed.
// It returns a non-nil error if any of the groups fails to be installed.
func InstallOptionalDeps(groups []*Group, logger flog.Logger) error {
	var errs []error

	for _, group := range groups {
		err := group.installOptional(logger)
		if err != nil {
			errs = append(errs, err)
		}
	}
	if len(errs) > 0 {
		return fmt.Errorf("failed to install dependencies: %w", errors.Join(errs...))
	}

	return nil
}
