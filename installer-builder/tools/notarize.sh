#!/bin/bash
set -o errexit
set -o pipefail

#$1: the account name
#$2: the credential
cd ./installer-builder/output/installer/signed/Payload
ditto -c -k --sequesterRsrc --keepParent Finch.pkg Finch.zip
notarization_output=$(xcrun notarytool submit Finch.zip --apple-id "${1}" --password "${2}" --team-id 94KV3E626L --wait)
echo "$notarization_output"

# validate notarization result
if echo "$notarization_output" | grep -q "status: Accepted"; then
    echo "Notarization successful"
else
    echo "Notarization failed"
    exit 1
fi
