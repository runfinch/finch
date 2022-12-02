// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestNewStatusVMCommand(t *testing.T) {
	t.Parallel()

	cmd := newStatusVMCommand(nil, nil)
	assert.Equal(t, cmd.Name(), "status")
}
