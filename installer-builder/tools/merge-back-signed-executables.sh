#!/bin/bash

source ./installer-builder/tools/common-path.sh

RESOURCE_PATH_PREFIX="$OUTPUT_ROOT_PATH/${1}$ORIGIN_PATH/_output"
SIGNED_EXECUTABLES_RESOURCE_PATH="$OUTPUT_ROOT_PATH/${1}$EXECUTABLES_SIGNED_PATH/Payload/EXECUTABLES_TO_SIGN"

mergeBackSignedExecutables() {
    for file in `ls -a $SIGNED_EXECUTABLES_RESOURCE_PATH`
    do
        if [[ $file != '.' && $file != '..' ]]
        then
            originalPath=${file//__/\/}
            fullPath=$RESOURCE_PATH_PREFIX/$originalPath
            cp -f "$SIGNED_EXECUTABLES_RESOURCE_PATH/$file" $fullPath
        fi
    done
}

mergeBackSignedExecutables