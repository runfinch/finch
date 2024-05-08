// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package templates

import (
	"bytes"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestNew(t *testing.T) {
	t.Parallel()

	tag := "TestNew"
	tmpl, err := New(tag).Parse(`{{json .Os}}`)
	assert.Nil(t, err)

	var b bytes.Buffer
	assert.Nil(t, tmpl.Execute(&b, map[string]string{"Os": "linux"}))

	want := "\"linux\""
	assert.Equal(t, want, b.String())
}
