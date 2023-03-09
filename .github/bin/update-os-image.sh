#!/bin/bash
set -euxo pipefail
# Set OS hash directory in finch-core as base directory for searching latest OS images.
OS_BASE_IMAGE_HASH_DIR="./deps/finch-core/hashes/"

OS_AARCH64_FILENAME_PATTERN="Fedora-Cloud-Base-.*-.*.aarch64-.*.qcow2"

OS_X86_64_FILENAME_PATTERN="Fedora-Cloud-Base-.*-.*.x86_64-.*.qcow2"


# Use wildcard patterns to search for the two files and assign their paths to variables
AARCH64_FILEPATH=$(find "$OS_BASE_IMAGE_HASH_DIR" -name "Fedora-Cloud-Base-*-*.aarch64-*.qcow2.sha512" -print -quit)
X86_64_FILEPATH=$(find "$OS_BASE_IMAGE_HASH_DIR" -name "Fedora-Cloud-Base-*-*.x86_64-*.qcow2.sha512" -print -quit)

# Extract the file names without the path and remove the ".sha512" extension
AARCH64_OS_BASE_IMAGE=$(basename "$AARCH64_FILEPATH" .sha512)
X86_64_OS_BASE_IMAGE=$(basename "$X86_64_FILEPATH" .sha512)

echo "AARCH64 base image: ${AARCH64_OS_BASE_IMAGE}"
echo "X86_64 base image: ${X86_64_OS_BASE_IMAGE}"

# Replace occurrences of FINCH_OS_BASENAME in the Makefile with the file names
sed -E -i.bak 's|^([[:blank:]]*FINCH_OS_BASENAME[[:blank:]]*\?=[[:blank:]]*)('"${OS_AARCH64_FILENAME_PATTERN}"')|\1'"$AARCH64_OS_BASE_IMAGE"'|' Makefile
sed -E -i.bak 's|^([[:blank:]]*FINCH_OS_BASENAME[[:blank:]]*\?=[[:blank:]]*)('"${OS_X86_64_FILENAME_PATTERN}"')|\1'"$X86_64_OS_BASE_IMAGE"'|' Makefile
