// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package credhelper

import (
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/runfinch/finch/pkg/dependency"
)

func Test_NewDependencyGroup(t *testing.T) {
	t.Parallel()

	want := dependency.NewGroup(newDeps(nil, nil, "", nil, nil, "", ""), description, errMsg)
	got := NewDependencyGroup(nil, nil, "", nil, nil, "", "")
	assert.Equal(t, want, got)
}

func Test_newDeps(t *testing.T) {
	t.Parallel()

	got := newDeps(nil, nil, "", nil, nil, "", "")
	require.Equal(t, 1, len(got))
	assert.IsType(t, (*credhelperbin)(nil), got[0])
}
