#!/bin/bash

set -o pipefail

# Configuration for continuous canary checks
CHECK_INTERVAL_SECONDS=600  # 10 minutes between checks
TOTAL_DURATION_SECONDS=3300 # 55 minutes total runtime (leaves 5 min buffer before next hourly run)

ARCH=$(dpkg --print-architecture)
echo "Detected architecture: ${ARCH}"

if [[ -z "${GITHUB_WORKSPACE}" ]]; then
    GITHUB_WORKSPACE=${PWD}
fi

# Record start time
START_TIME=$(date +%s)

# Function to perform a single canary check
run_canary_check() {
    local check_num=$1
    echo ""
    echo "=============================================="
    echo "Canary Check #${check_num} - $(date)"
    echo "=============================================="

    # Clean up from previous runs
    rm -rf ${GITHUB_WORKSPACE}/github-release 2>/dev/null || true
    rm -f ${GITHUB_WORKSPACE}/*.deb 2>/dev/null || true

    #
    # GitHub artifact downloading
    #

    github_artifact_dir=${GITHUB_WORKSPACE}/github-release

    req=$(curl -s https://api.github.com/repos/runfinch/finch/releases/latest)
    if [[ -z "${req}" ]] || [[ "${req}" == "null" ]]; then
        echo "FAILED: Could not fetch GitHub release info"
        return 1
    fi

    deb_asset=$(echo ${req} | jq --arg suffix "${ARCH}.deb" '.assets[] | select(.name|endswith($suffix))')
    if [[ -z "${deb_asset}" ]]; then
        echo "FAILED: No .deb asset found for architecture ${ARCH}"
        return 1
    fi

    deb_url=$(echo ${deb_asset} | jq -r '.url')
    filename=$(echo ${deb_asset} | jq -r '.name')

    sha_unparsed=$(echo ${deb_asset} | jq -r '.digest')
    while IFS=':' read -ra sha_arr; do
        expected_shasum=${sha_arr[1]}
    done <<< "${sha_unparsed}"

    mkdir -p ${github_artifact_dir}
    if ! curl -sL -H "Accept: application/octet-stream" -o ${github_artifact_dir}/${filename} ${deb_url}; then
        echo "FAILED: Could not download GitHub artifact"
        return 1
    fi

    github_file_shasum=$(sha256sum ${github_artifact_dir}/${filename} | awk '{print $1}')

    if [[ $(diff <(echo ${expected_shasum}) <(echo ${github_file_shasum})) ]]; then
        printf "FAILED: shasum mismatch from GitHub\nexpected: %s\ngot: %s\n" "${expected_shasum}" "${github_file_shasum}"
        return 1
    fi

    echo "OK: GitHub artifact downloaded and verified"

    #
    # APT repo downloading
    #

    # Only set up the APT repo on the first check
    if [[ ${check_num} -eq 1 ]]; then
        curl -fsSL https://artifact.runfinch.com/deb/GPG_KEY.pub | gpg --dearmor -o /usr/share/keyrings/runfinch-finch-archive-keyring.gpg
        echo "deb [signed-by=/usr/share/keyrings/runfinch-finch-archive-keyring.gpg arch=${ARCH}] https://artifact.runfinch.com/deb noble main" | sudo tee /etc/apt/sources.list.d/runfinch-finch.list
    fi

    # Update the runfinch repo
    if ! sudo apt-get update -o Dir::Etc::sourcelist="sources.list.d/runfinch-finch.list" -o Dir::Etc::sourceparts="-" -o APT::Get::List-Cleanup="0" >/dev/null 2>&1; then
        echo "FAILED: Could not update APT repo"
        return 1
    fi

    # Download the package
    cd ${GITHUB_WORKSPACE}
    rm -f *.deb 2>/dev/null || true
    if ! apt-get download runfinch-finch >/dev/null 2>&1; then
        echo "FAILED: Could not download package from APT repo"
        return 1
    fi

    apt_file=${GITHUB_WORKSPACE}/${filename}
    if [[ ! -f "${apt_file}" ]]; then
        echo "FAILED: Downloaded APT package not found at expected location"
        return 1
    fi

    apt_file_shasum=$(sha256sum ${apt_file} | awk '{print $1}')

    #
    # Compare shasums
    #

    if [[ $(diff <(echo ${apt_file_shasum}) <(echo ${expected_shasum})) ]]; then
        echo "FAILED: sha256sum mismatch!"
        echo "APT repo shasum: ${apt_file_shasum}"
        echo "GitHub release shasum: ${github_file_shasum}"
        echo "Expected shasum: ${expected_shasum}"
        return 1
    fi

    echo "OK: Check #${check_num} PASSED - shasum ${apt_file_shasum} identical"
    return 0
}

# Function to calculate elapsed time in seconds
get_elapsed_seconds() {
    local now=$(date +%s)
    echo $((now - START_TIME))
}

# Function to calculate remaining time until next check
get_sleep_duration() {
    local next_check_time=$1
    local now=$(date +%s)
    local target=$((START_TIME + next_check_time))
    local sleep_time=$((target - now))
    
    # Ensure we don't sleep negative time
    if [[ ${sleep_time} -lt 0 ]]; then
        sleep_time=0
    fi
    echo ${sleep_time}
}

#
# Main execution loop - runs for approximately 55 minutes using precise timing
#

echo "Starting Deb Canary (${TOTAL_DURATION_SECONDS}s total, ${CHECK_INTERVAL_SECONDS}s interval)"
echo "=============================================="

check_num=1
next_check_at=0  # First check immediately at t=0

while true; do
    # Check if we've exceeded total duration
    elapsed=$(get_elapsed_seconds)
    if [[ ${elapsed} -ge ${TOTAL_DURATION_SECONDS} ]]; then
        echo ""
        echo "Total duration (${TOTAL_DURATION_SECONDS}s) reached, stopping checks"
        break
    fi

    # Wait until it's time for the next check
    sleep_duration=$(get_sleep_duration ${next_check_at})
    if [[ ${sleep_duration} -gt 0 ]]; then
        echo ""
        echo "Waiting ${sleep_duration} seconds until next check (at ${next_check_at}s from start)..."
        sleep ${sleep_duration}
    fi

    # Run the check
    if ! run_canary_check ${check_num}; then
        echo ""
        echo "CANARY FAILED on check #${check_num}"
        echo "Exiting immediately (fail-fast)"
        exit 1
    fi

    # Schedule next check
    check_num=$((check_num + 1))
    next_check_at=$((next_check_at + CHECK_INTERVAL_SECONDS))
    
    # Exit if next check would exceed total duration
    if [[ ${next_check_at} -ge ${TOTAL_DURATION_SECONDS} ]]; then
        echo ""
        echo "Next check would exceed total duration, stopping"
        break
    fi
done

echo ""
echo "=============================================="
echo "ALL $((check_num - 1)) CANARY CHECKS PASSED"
echo "Total elapsed time: $(get_elapsed_seconds) seconds"
echo "=============================================="
exit 0
