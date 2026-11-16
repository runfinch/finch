#!/bin/bash
set -o errexit
set -o pipefail

mergeBackSignedExecutables() {
    for filepath in ./installer-builder/output/executables/signed/Payload/EXECUTABLES_TO_SIGN/*
    do
        [ -e "$filepath" ] || continue

        filename=$(basename "$filepath")
        #recover the original long file path and place the signed executables back
        #replace '__' to original '/'
        #e.g., the file name is 'b__c' and ./a is the root:
        #1) ./a will be appended as prefix
        #2) '__' will be replaced by '/'
        #3) final executable path is './a/b/c'
        originalPath=${filename//__/\/}
        fullPath=./installer-builder/output/origin/_output/$originalPath
        cp -f "$filepath" "$fullPath"
    done
}

mergeBackSignedExecutables