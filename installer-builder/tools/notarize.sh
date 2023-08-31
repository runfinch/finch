#!/bin/bash

#$1: the account name
#$2: the credential
cd ./installer-builder/output/installer/signed/Payload || exit
ditto -c -k --sequesterRsrc --keepParent Finch.pkg Finch.zip
xcrun notarytool submit Finch.zip --apple-id "${1}" --password "${2}" --team-id 94KV3E626L --wait