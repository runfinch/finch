// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build linux

package credserver

import "github.com/docker/docker-credential-helpers/credentials"

func GetCredentials(registryHostname string, envVars ...map[string]string) (*credentials.Credentials, error) {
	return &credentials.Credentials{ServerURL: registryHostname}, nil
}

func EnsureConfigExists(finchPath string) error {
	return nil
}
