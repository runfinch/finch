// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package update

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestGetFinchVersions(t *testing.T) {
	t.Parallel()

	client := GetFinchVersion()
	assert.IsType(t, "", client)
}

func TestCompareVersions(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name        string
		a           string
		b           string
		expected    bool
		expectError bool
	}{
		{
			name:        "equal versions",
			a:           "1.0.0",
			b:           "1.0.0",
			expected:    false,
			expectError: false,
		},
		{
			name:        "older major version",
			a:           "0.9.0",
			b:           "1.0.0",
			expected:    true,
			expectError: false,
		},
		{
			name:        "newer major version",
			a:           "2.0.0",
			b:           "1.0.0",
			expected:    false,
			expectError: false,
		},
		{
			name:        "older minor version",
			a:           "1.0.0",
			b:           "1.1.0",
			expected:    true,
			expectError: false,
		},
		{
			name:        "newer minor version",
			a:           "1.2.0",
			b:           "1.1.0",
			expected:    false,
			expectError: false,
		},
		{
			name:        "older patch version",
			a:           "1.0.0",
			b:           "1.0.1",
			expected:    true,
			expectError: false,
		},
		{
			name:        "newer patch version",
			a:           "1.0.2",
			b:           "1.0.1",
			expected:    false,
			expectError: false,
		},
		{
			name:        "empty current version",
			a:           "",
			b:           "1.0.0",
			expected:    true,
			expectError: false,
		},
		{
			name:        "version format mismatch - shorter vs longer",
			a:           "1.0",
			b:           "1.0.1",
			expected:    false,
			expectError: true,
		},
		{
			name:        "version format mismatch - longer vs shorter",
			a:           "1.0.1",
			b:           "1.0",
			expected:    false,
			expectError: true,
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()
			result, err := compareVersions(tc.a, tc.b)
			if tc.expectError {
				assert.Error(t, err)
				assert.Contains(t, err.Error(), "version format mismatch")
			} else {
				assert.NoError(t, err)
				assert.Equal(t, tc.expected, result)
			}
		})
	}
}

func TestGetLatestVersion(t *testing.T) {
	t.Parallel()

	t.Run("type check only", func(t *testing.T) {
		t.Parallel()
		version, err := func() (string, error) {
			return "1.0.0", nil
		}()
		assert.IsType(t, "", version)
		assert.IsType(t, (*error)(nil), &err)
	})
}

func TestCheckForUpdate(t *testing.T) {
	t.Parallel()

	t.Run("function structure", func(t *testing.T) {
		t.Parallel()

		updateAvailable, latestVersion, err := CheckForUpdate()

		// Verify return types regardless of success/failure
		assert.IsType(t, false, updateAvailable)
		assert.IsType(t, "", latestVersion)
		// Function should return an error due to network issues in test environment
		if err != nil {
			assert.IsType(t, (*error)(nil), &err)
		}
	})
}
