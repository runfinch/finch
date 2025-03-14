// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package support

import (
	"testing"
	"time"

	"github.com/stretchr/testify/assert"

	"github.com/runfinch/finch/pkg/path"
)

func TestSupport_redactFinchInstall(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name   string
		input  []byte
		expect []byte
	}{
		{
			name:   "redact Finch install location",
			input:  []byte("/Applications/Finch/"),
			expect: []byte("<finch-install-location-elided>"),
		},
		{
			name:   "install location redaction not needed",
			input:  []byte("/Applications/Flinch/"),
			expect: []byte("/Applications/Flinch/"),
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			out, err := redactFinchInstall(tc.input, path.Finch("/Applications/Finch/"))
			assert.NoError(t, err)
			assert.Equal(t, tc.expect, out)
		})
	}
}

func TestSupport_redactUsername(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name   string
		input  []byte
		expect []byte
	}{
		{
			name:   "redact username",
			input:  []byte("this is foo_user's username: foo_user"),
			expect: []byte("this is <username-elided>'s username: <username-elided>"),
		},
		{
			name:   "username redaction not needed",
			input:  []byte("this will not include a username"),
			expect: []byte("this will not include a username"),
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			out, err := redactUsername(tc.input, "foo_user")
			assert.NoError(t, err)
			assert.Equal(t, tc.expect, out)
		})
	}
}

func TestSupport_redactNetworkAddresses(t *testing.T) {
	t.Parallel()

	timestamp := time.Now().String()

	testCases := []struct {
		name   string
		input  []byte
		expect []byte
	}{
		{
			name:   "redact ipv4 address",
			input:  []byte("127.0.0.1"),
			expect: []byte("<ip-address-elided>"),
		},
		{
			name:   "redact ipv4 address with port",
			input:  []byte("192.168.5.4:12497"),
			expect: []byte("<ip-address-elided>"),
		},
		{
			name:   "redact ipv6 address",
			input:  []byte("DEAD:BEEF:0123:4567:89AB:CDEF:DEAD:BEEF"),
			expect: []byte("<ip-address-elided>"),
		},
		{
			name:   "redact mac address",
			input:  []byte("de:ad:be:ef:01:23"),
			expect: []byte("<mac-address-elided>"),
		},
		{
			name:   "do not redact timestamps",
			input:  []byte(timestamp),
			expect: []byte(timestamp),
		},
		{
			name:   "do not redact seconds",
			input:  []byte("1.234567"),
			expect: []byte("1.234567"),
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			out := redactNetworkAddresses(tc.input)
			assert.Equal(t, tc.expect, out)
		})
	}
}

func TestSupport_redactSSHKeys(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name   string
		input  []byte
		expect []byte
	}{
		{
			name:   "should replace ecdsa key",
			input:  []byte("ecdsa-sha2-nistp256 AAA/BBB/CCC...xyz= root@lima-finch"),
			expect: []byte("<key-elided>"),
		},
		{
			name:   "should replace ed25519 key",
			input:  []byte("ssh-ed25519 AAABBBCCC...xyz root@lima-finch"),
			expect: []byte("<key-elided>"),
		},
		{
			name:   "should replace rsa key",
			input:  []byte("ssh-rsa AAABBBCCC12/abc+...xyz= root@lima-finch"),
			expect: []byte("<key-elided>"),
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			out := redactSSHKeys(tc.input)
			assert.Equal(t, tc.expect, out)
		})
	}
}

func TestSupport_redactPorts(t *testing.T) {
	t.Parallel()

	testCases := []struct {
		name   string
		input  []byte
		expect []byte
	}{
		{
			name:   "should replace in non-empty test statement",
			input:  []byte("'[' -n 12345 ']'"),
			expect: []byte("'[' -n <port-elided> ']'"),
		},
		{
			name:   "should replace in non-zero test statement",
			input:  []byte("'[' 1 -ne 0 ']'"),
			expect: []byte("'[' <port-elided> -ne 0 ']'"),
		},
		{
			name:   "should replace in ssh command",
			input:  []byte("[ssh -F /dev/null ... -p 12 ... -- /bin/bash]"),
			expect: []byte("[ssh -F /dev/null ... -p <port-elided> ... -- /bin/bash]"),
		},
		{
			name:   "should replace in ha.stdout.log status",
			input:  []byte("{\"time\":\"2023-03-16T15:51:17.188418-07:00\",\"status\":{\"running\":true,\"sshLocalPort\":1234}}"),
			expect: []byte("{\"time\":\"2023-03-16T15:51:17.188418-07:00\",\"status\":{\"running\":true,\"sshLocalPort\":<port-elided>}}"),
		},
		{
			name:   "should replace when preceded by port",
			input:  []byte("port 123"),
			expect: []byte("port <port-elided>"),
		},
		{
			name:   "should not replace 1-5 digit number",
			input:  []byte("12345"),
			expect: []byte("12345"),
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			t.Parallel()

			out := redactPorts(tc.input)
			assert.Equal(t, tc.expect, out)
		})
	}
}
