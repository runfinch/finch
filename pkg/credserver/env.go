// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package credserver

import "slices"

// AllowedEnvKeys is the set of environment variables permitted to cross the
// VM -> host credential boundary.
var AllowedEnvKeys = []string{
	"COSIGN_PASSWORD",
	"AWS_ACCESS_KEY_ID",
	"AWS_SECRET_ACCESS_KEY",
	"AWS_SESSION_TOKEN",
	"AWS_ECR_DISABLE_CACHE",
	"AWS_ECR_CACHE_DIR",
	"AWS_ECR_IGNORE_CREDS_STORAGE",
	"AWS_PROFILE",
	"HOST_DOCKER_CONFIG",
}

// IsAllowedEnvKey checks the key against the allowlist defined in AllowedEnvKeys.
func IsAllowedEnvKey(key string) bool {
	return slices.Contains(AllowedEnvKeys, key)
}
