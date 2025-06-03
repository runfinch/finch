#!/bin/bash

# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: Apache-2.0

set -e

# Check if a version argument was provided
if [ $# -ne 1 ]; then
  echo "Usage: $0 <version>"
  echo "Example: $0 v0.9.0"
  exit 1
fi

VERSION=$1
# Remove 'v' prefix if present for Go file
GO_VERSION=${VERSION#v}

# Normalize to working directory being build root (up one level from ./scripts)
ROOT=$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )
cd "${ROOT}"

CONFIG_FILE="${ROOT}/pkg/config/lima_config_applier.go"
BASE_URL="https://github.com/awslabs/soci-snapshotter/releases/download"

# Download and extract SHA256 for AMD64
AMD64_SHASUM_URL="${BASE_URL}/${VERSION}/soci-snapshotter-${GO_VERSION}-linux-amd64.tar.gz.sha256sum"
AMD64_SHASUM=$(curl -s -L "$AMD64_SHASUM_URL" | awk '{print $1}')

# Download and extract SHA256 for ARM64
ARM64_SHASUM_URL="${BASE_URL}/${VERSION}/soci-snapshotter-${GO_VERSION}-linux-arm64.tar.gz.sha256sum"
ARM64_SHASUM=$(curl -s -L "$ARM64_SHASUM_URL" | awk '{print $1}')

# Verify we got the shasums
if [ -z "$AMD64_SHASUM" ] || [ -z "$ARM64_SHASUM" ]; then
  echo "Failed to retrieve SHA256 checksums"
  exit 1
fi

# Update the Go file
sed -i '' "s/sociVersion                              = \"[0-9.]*\"/sociVersion                              = \"${GO_VERSION}\"/" "$CONFIG_FILE"
sed -i '' "s/sociAMD64Sha256Sum                       = \"[a-f0-9]*\"/sociAMD64Sha256Sum                       = \"${AMD64_SHASUM}\"/" "$CONFIG_FILE"
sed -i '' "s/sociARM64Sha256Sum                       = \"[a-f0-9]*\"/sociARM64Sha256Sum                       = \"${ARM64_SHASUM}\"/" "$CONFIG_FILE"

echo "Updated SOCI version to ${GO_VERSION}"
echo "AMD64 SHA256: ${AMD64_SHASUM}"
echo "ARM64 SHA256: ${ARM64_SHASUM}"