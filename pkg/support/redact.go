// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package support

import (
	"regexp"

	"github.com/runfinch/finch/pkg/path"
)

func redactFinchInstall(content []byte, finch path.Finch) (redacted []byte, err error) {
	finchInstallMatcher, err := regexp.Compile(string(finch))
	if err != nil {
		return nil, err
	}
	redacted = finchInstallMatcher.ReplaceAll(content, []byte("<finch-install-location-elided>"))
	return redacted, nil
}

func redactUsername(content []byte, username string) (redacted []byte, err error) {
	usernameMatcher, err := regexp.Compile(username)
	if err != nil {
		return nil, err
	}
	redacted = usernameMatcher.ReplaceAll(content, []byte("<username-elided>"))
	return redacted, nil
}

func redactNetworkAddresses(content []byte) []byte {
	ipv4Matcher := regexp.MustCompile(`(?:[0-9]{1,3}\.){3}[0-9]{1,3}(:[0-9]{1,5})?`)
	redacted := ipv4Matcher.ReplaceAll(content, []byte("<ip-address-elided>"))

	ipv6Matcher := regexp.MustCompile(`(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}`)
	redacted = ipv6Matcher.ReplaceAll(redacted, []byte("<ip-address-elided>"))

	macMatcher := regexp.MustCompile(`([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})`)
	redacted = macMatcher.ReplaceAll(redacted, []byte("<mac-address-elided>"))

	return redacted
}

func redactSSHKeys(content []byte) []byte {
	ecdsaMatcher := regexp.MustCompile(`ecdsa-sha2-nistp256 .* root@lima-finch`)
	redacted := ecdsaMatcher.ReplaceAll(content, []byte("<key-elided>"))

	ed25519Matcher := regexp.MustCompile(`ssh-ed25519 .* root@lima-finch`)
	redacted = ed25519Matcher.ReplaceAll(redacted, []byte("<key-elided>"))

	rsaMatcher := regexp.MustCompile(`ssh-rsa .* root@lima-finch`)
	redacted = rsaMatcher.ReplaceAll(redacted, []byte("<key-elided>"))

	return redacted
}

func redactPorts(content []byte) []byte {
	// we can't redact every 1-5 digit number, so we have to redact based on specific context.
	nonEmptyMatcher := regexp.MustCompile(`('\[' -n )[0-9]{1,5}( ']')`)
	redacted := nonEmptyMatcher.ReplaceAll(content, []byte("$1<port-elided>$2"))

	nonZeroMatcher := regexp.MustCompile(`('\[' )[0-9]{1,5}( -ne 0 ']')`)
	redacted = nonZeroMatcher.ReplaceAll(redacted, []byte("$1<port-elided>$2"))

	sshCommandMatcher := regexp.MustCompile(`(\[ssh -F .* -p )[0-9]{1,5}(.*])`)
	redacted = sshCommandMatcher.ReplaceAll(redacted, []byte("$1<port-elided>$2"))

	statusMatcher := regexp.MustCompile(`([{,]"sshLocalPort":)[0-9]{1,5}(})`)
	redacted = statusMatcher.ReplaceAll(redacted, []byte("$1<port-elided>$2"))

	portMatcher := regexp.MustCompile(`(port )[0-9]{1,5}`)
	redacted = portMatcher.ReplaceAll(redacted, []byte("$1<port-elided>"))

	return redacted
}
