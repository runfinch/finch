// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build tools

package pkg

// Ensure that everyone working on this project uses the same version of the following Go-based tools.
//
// For the tutorial to add a new tool, see https://github.com/golang/go/wiki/Modules#how-can-i-track-tool-dependencies-for-a-module.
// After following the tutorial, update `download-licenses` in Makefile. You'll likely also need to update `gen-code`.
import (
	_ "github.com/golang/mock/mockgen"
	_ "github.com/google/go-licenses"
	_ "github.com/tc-hib/go-winres"
	_ "golang.org/x/tools/cmd/stringer"
)
