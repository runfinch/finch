#!/bin/bash

# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: Apache-2.0

set -e

# Check if a version argument was provided
if [ $# -ne 1 ]; then
  echo "Usage: $0 <version>"
  echo "Example: $0 v0.10.0"
  exit 1
fi

VERSION=$1
# Remove 'v' prefix if present for URL
URL_VERSION=${VERSION#v}

# Normalize to working directory being build root (up one level from ./scripts)
ROOT=$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )
cd "${ROOT}"

CRED_HELPER_FILE="${ROOT}/pkg/dependency/credhelper/cred_helper.go"
BASE_URL="https://amazon-ecr-credential-helper-releases.s3.us-east-2.amazonaws.com"

# Download and extract SHA256 for AMD64
AMD64_SHASUM_URL="${BASE_URL}/${URL_VERSION}/linux-amd64/docker-credential-ecr-login.sha256"
AMD64_SHASUM=$(curl -s -L "$AMD64_SHASUM_URL" | awk '{print $1}')

# Download and extract SHA256 for ARM64
ARM64_SHASUM_URL="${BASE_URL}/${URL_VERSION}/linux-arm64/docker-credential-ecr-login.sha256"
ARM64_SHASUM=$(curl -s -L "$ARM64_SHASUM_URL" | awk '{print $1}')

# Verify we got the shasums
if [ -z "$AMD64_SHASUM" ] || [ -z "$ARM64_SHASUM" ]; then
  echo "Failed to retrieve SHA256 checksums"
  exit 1
fi

# Update the Go file
sed -i '' "s/versionEcr = \"[0-9.]*\"/versionEcr = \"$URL_VERSION\"/" "$CRED_HELPER_FILE"
sed -i '' "s/hashARM64  = \"sha256:[a-f0-9]*\"/hashARM64  = \"sha256:$ARM64_SHASUM\"/" "$CRED_HELPER_FILE"
sed -i '' "s/hashAMD64  = \"sha256:[a-f0-9]*\"/hashAMD64  = \"sha256:$AMD64_SHASUM\"/" "$CRED_HELPER_FILE"

echo "Updated ECR credential helper to version $VERSION"
echo "AMD64 SHA256: $AMD64_SHASUM"
echo "ARM64 SHA256: $ARM64_SHASUM"