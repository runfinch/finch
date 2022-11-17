// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package fmemory provides functions and methods to get memory information about the current system.
package fmemory

import (
	"github.com/pbnjay/memory"
)

// Memory abstracts out memory.TotalMemory to facilitate unit testing.
//
//go:generate mockgen -copyright_file=../../copyright_header -destination=../mocks/pkg_fmemory_memory.go -package=mocks -mock_names Memory=Memory . Memory
type Memory interface {
	TotalMemory() uint64
}

type mem struct{}

func (mem) TotalMemory() uint64 {
	return memory.TotalMemory()
}

// NewMemory returns a Memory instance that calls memory.TotalMemory under the hood.
func NewMemory() Memory {
	return &mem{}
}
