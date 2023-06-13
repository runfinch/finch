// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package wrapper provides an interface to wrap Lima utils
package wrapper

import (
	"os/user"

	"github.com/lima-vm/lima/pkg/osutil"
)

// LimaWrapper provides Lima utils in an interface to facilitate mocking
//
//go:generate mockgen --destination=../../mocks/lima_wrapper.go -package=mocks github.com/runfinch/finch/pkg/lima/wrapper LimaWrapper
type LimaWrapper interface {
	LimaUser(warn bool) (*user.User, error)
}

type limaWrapper struct{}

// NewLimaWrapper returns a new LimaWrapper.
func NewLimaWrapper() LimaWrapper {
	return &limaWrapper{}
}

// LimaUser returns the user that will be used inside the Lima VM.
func (*limaWrapper) LimaUser(warn bool) (*user.User, error) {
	return osutil.LimaUser(warn)
}
