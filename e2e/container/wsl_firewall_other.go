// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build !windows

// Package container runs tests related to container development.
package container

// allowWSLToHostTraffic is only needed on Windows, where the WSL VM reaches the host through a NAT adapter.
func allowWSLToHostTraffic() error {
	return nil
}

func removeWSLToHostTraffic() error {
	return nil
}
