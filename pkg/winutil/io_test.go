// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package winutil

import (
	"bytes"
	"errors"
	"io"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestFromUTF16le(t *testing.T) {
	testCases := []struct {
		name         string
		r            io.Reader
		wantErr      error
		postRunCheck func(t *testing.T, r io.Reader)
	}{
		{
			name: "happy path",
			r: bytes.NewBuffer([]byte{
				// UTF16le BOM
				0xff,
				0xfe,
				// Test\n
				'T',
				0x00,
				'e',
				0x00,
				's',
				0x00,
				't',
				0x00,
				'\n',
				0x00,
			}),
			postRunCheck: func(t *testing.T, r io.Reader) {
				str, err := io.ReadAll(r)
				require.NoError(t, err)
				assert.Equal(t, []byte("Test\n"), str)
			},
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			tc.postRunCheck(t, FromUTF16le(tc.r))
		})
	}
}

func TestFromUTF16leToString(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name         string
		r            io.Reader
		postRunCheck func(t *testing.T, r string)
		wantErr      error
	}{
		{
			name: "happy path",
			r: bytes.NewBuffer([]byte{
				// UTF16le BOM
				0xff,
				0xfe,
				// Test\n
				'T',
				0x00,
				'e',
				0x00,
				's',
				0x00,
				't',
				0x00,
				'\n',
				0x00,
			}),
			postRunCheck: func(t *testing.T, str string) {
				assert.Equal(t, "Test\n", str)
			},
			wantErr: nil,
		},
		{
			name:         "error reading buffer",
			r:            NewErrorReader("read error!"),
			postRunCheck: func(t *testing.T, str string) {},
			wantErr:      errors.New("read error!"),
		},
	}

	for _, tc := range testCases {
		tc := tc
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			out, err := FromUTF16leToString(tc.r)
			assert.Equal(t, tc.wantErr, err)
			tc.postRunCheck(t, out)
		})
	}
}

type errReader struct {
	errMsg string
}

func (er errReader) Read(p []byte) (n int, err error) {
	return 0, errors.New(er.errMsg)
}

func NewErrorReader(errMsg string) errReader {
	return errReader{errMsg: errMsg}
}
