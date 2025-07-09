#!/bin/bash

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PACKAGE_SH="$SCRIPT_DIR/package.sh"

# Function to get latest tag from GitHub API
get_latest_tag() {
    local repo="$1"
    curl -s "https://api.github.com/repos/$repo/tags" | \
    grep '"name":' | \
    head -1 | \
    cut -d'"' -f4 | \
    sed 's/^v//'
}

# Function to get commit hash for a tag
get_commit_for_tag() {
    local repo="$1"
    local tag="$2"
    [[ $tag != v* ]] && tag="v$tag"
    curl -s "https://api.github.com/repos/$repo/commits/$tag" | \
    grep '"sha":' | \
    head -1 | \
    cut -d'"' -f4
}

# Function to update dependency in package.sh
update_dependency() {
    local name="$1"
    local new_release="$2"
    local new_commit="$3"
    
    sed -i.bak \
        -e "s/${name}_RELEASE=\"[^\"]*\"/${name}_RELEASE=\"$new_release\"/" \
        -e "s/${name}_COMMIT=\"[^\"]*\"/${name}_COMMIT=\"$new_commit\"/" \
        "$PACKAGE_SH"
}

echo "Updating dependencies in package.sh..."

# Update finch-daemon
echo "Updating finch-daemon..."
FINCHD_LATEST=$(get_latest_tag "runfinch/finch-daemon")
FINCHD_COMMIT=$(get_commit_for_tag "runfinch/finch-daemon" "$FINCHD_LATEST")
update_dependency "FINCHD" "$FINCHD_LATEST" "$FINCHD_COMMIT"

# Update nerdctl
echo "Updating nerdctl..."
NERDCTL_LATEST=$(get_latest_tag "containerd/nerdctl")
NERDCTL_COMMIT=$(get_commit_for_tag "containerd/nerdctl" "$NERDCTL_LATEST")
update_dependency "NERDCTL" "$NERDCTL_LATEST" "$NERDCTL_COMMIT"

# Update buildkit
echo "Updating buildkit..."
BUILDKIT_LATEST=$(get_latest_tag "moby/buildkit")
BUILDKIT_COMMIT=$(get_commit_for_tag "moby/buildkit" "$BUILDKIT_LATEST")
update_dependency "BUILDKIT" "$BUILDKIT_LATEST" "$BUILDKIT_COMMIT"

# Update soci-snapshotter
echo "Updating soci-snapshotter..."
SOCI_LATEST=$(get_latest_tag "awslabs/soci-snapshotter")
SOCI_COMMIT=$(get_commit_for_tag "awslabs/soci-snapshotter" "$SOCI_LATEST")
update_dependency "SOCI" "$SOCI_LATEST" "$SOCI_COMMIT"

# Update CNI plugins
echo "Updating CNI plugins..."
CNI_LATEST=$(get_latest_tag "containernetworking/plugins")
CNI_COMMIT=$(get_commit_for_tag "containernetworking/plugins" "$CNI_LATEST")
update_dependency "CNI" "$CNI_LATEST" "$CNI_COMMIT"

# Update cosign
echo "Updating cosign..."
COSIGN_LATEST=$(get_latest_tag "sigstore/cosign")
COSIGN_COMMIT=$(get_commit_for_tag "sigstore/cosign" "$COSIGN_LATEST")
update_dependency "COSIGN" "$COSIGN_LATEST" "$COSIGN_COMMIT"

# Remove backup file
rm -f "$PACKAGE_SH.bak"

echo "✅ Dependencies updated successfully!"
echo "Updated versions:"
echo "  finch-daemon: $FINCHD_LATEST"
echo "  nerdctl: $NERDCTL_LATEST"
echo "  buildkit: $BUILDKIT_LATEST"
echo "  soci-snapshotter: $SOCI_LATEST"
echo "  CNI plugins: $CNI_LATEST"
echo "  cosign: $COSIGN_LATEST"