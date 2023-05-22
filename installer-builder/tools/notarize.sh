#!/bin/bash

source ./installer-builder/tools/common-path.sh

#$1 is the arch type
#$2 is the account name
#$3 is the credential
cd "$OUTPUT_ROOT_PATH/${1}$INSTALLER_SIGNED_PATH/Payload"
ditto -c -k --sequesterRsrc --keepParent Finch.pkg Finch.zip
xcrun notarytool submit Finch.zip --apple-id ${2} --password ${3} --team-id 94KV3E626L --wait