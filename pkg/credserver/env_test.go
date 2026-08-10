// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package credserver

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestIsAllowedEnvKey(t *testing.T) {
	t.Parallel()

	for _, key := range AllowedEnvKeys {
		t.Run("allows "+key, func(t *testing.T) {
			t.Parallel()
			assert.True(t, IsAllowedEnvKey(key))
		})
	}

	disallowed := []string{
		"",
		"PATH",
		"LD_PRELOAD",
		"HOME",
		"AWS_ACCESS_KEY_ID_EVIL",
		"aws_access_key_id",
	}
	for _, key := range disallowed {
		t.Run("rejects "+key, func(t *testing.T) {
			t.Parallel()
			assert.False(t, IsAllowedEnvKey(key))
		})
	}
}
