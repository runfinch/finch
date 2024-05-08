// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Package templates provides functionality for working with templates,
// including JSON formatting for output.
package templates

import (
	"bytes"
	"encoding/json"
	"strings"
	"text/template"
)

// Key and format strings in the --format option.
const (
	JSONFormatKey = "json"
	JSONFormat    = "{{json .}}"
)

var basicFunctions = template.FuncMap{
	"json": func(v any) string {
		buf := &bytes.Buffer{}

		enc := json.NewEncoder(buf)
		enc.SetEscapeHTML(false)
		err := enc.Encode(v)
		if err != nil {
			panic(err)
		}

		return strings.TrimSpace(buf.String())
	},
}

// New creates a new empty template with the provided tag and built-in template functions.
func New(tag string) *template.Template {
	return template.New(tag).Funcs(basicFunctions)
}
