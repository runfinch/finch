#!/bin/bash

set -o pipefail

ARCH=$(dpkg --print-architecture)
echo "Detected architecture: ${ARCH}"

if [[ -z "${GITHUB_WORKSPACE}" ]]; then
    GITHUB_WORKSPACE=${PWD}
fi

#
# GitHub artifact downloading
#

github_artifact_dir=${GITHUB_WORKSPACE}/github-release

req=$(curl https://api.github.com/repos/runfinch/finch/releases/latest)
deb_asset=$(echo ${req} | jq --arg suffix "${ARCH}.deb" '.assets[] | select(.name|endswith($suffix))')

deb_url=$(echo ${deb_asset} | jq -r '.url')
filename=$(echo ${deb_asset} | jq -r '.name')

sha_unparsed=$(echo ${deb_asset} | jq -r '.digest')
while IFS=':' read -ra sha_arr; do
    expected_shasum=${sha_arr[1]}
done <<< "${sha_unparsed}"

mkdir ${github_artifact_dir}
curl -L -H "Accept: application/octet-stream" -o ${github_artifact_dir}/${filename} ${deb_url}

github_file_shasum=$(sha256sum ${github_artifact_dir}/${filename} | awk '{print $1}')

if [[ $(diff <(echo ${expected_shasum}) <(echo ${github_file_shasum})) ]]; then
    printf "shasum mismatch from GitHub\nexpected:%1\ngot:%s\n" expected_shasum github_file_shasum
    exit 1
fi

#
# APT repo downloading
#

curl -fsSL https://artifact.runfinch.com/deb/GPG_KEY.pub | gpg --dearmor -o /usr/share/keyrings/runfinch-finch-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/runfinch-finch-archive-keyring.gpg arch=${ARCH}] https://artifact.runfinch.com/deb noble main" | sudo tee /etc/apt/sources.list.d/runfinch-finch.list

# This should only update the runfinch repo.
# If this breaks, changing it to `sudo apt-get update` should be acceptable, it just takes longer to run.
sudo apt-get update -o Dir::Etc::sourcelist="sources.list.d/runfinch-finch.list" -o Dir::Etc::sourceparts="-" -o APT::Get::List-Cleanup="0"

apt-get download runfinch-finch
apt_file=${GITHUB_WORKSPACE}/${filename}
apt_file_shasum=$(sha256sum ${apt_file} | awk '{print $1}')

#
# Compare shasums
#

if [[ $(diff <(echo ${apt_file_shasum}) <(echo ${expected_shasum})) ]]; then
    echo "❌ sha256sum mismatch!"
    echo "apt repo shasum: ${apt_file_shasum}"
    echo "GitHub release shasum: ${github_file_shasum}"
    exit 1
else
    echo "✅ shasum ${apt_file_shasum} identical"
fi
