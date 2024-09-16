// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package path contains functions to find/calculate path used in the project.
package path

import "github.com/runfinch/finch/pkg/system"

// Finch provides a set of methods that calculate paths relative to the Finch path.
type Finch string

// FinchFinderDeps provides all the dependencies FindFinch needs to find Finch.
//
//go:generate mockgen -copyright_file=../../copyright_header -destination=../mocks/finch_finder_deps.go -package=mocks -mock_names FinchFinderDeps=FinchFinderDeps . FinchFinderDeps
type FinchFinderDeps interface {
	system.SymlinksEvaluator
	system.ExecutableFinder
	system.FilePathJoiner
	system.EnvGetter
	system.UserHomeDir
}
