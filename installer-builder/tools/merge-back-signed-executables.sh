#!/bin/bash

mergeBackSignedExecutables() {
    for file in `ls -a ./installer-builder/output/executables/signed/Payload/EXECUTABLES_TO_SIGN`
    do
        if [[ $file != '.' && $file != '..' ]]
        then
            #recover the original long file path and place the signed executables back
            #replace '__' to original '/'
            #e.g., the file name is 'b__c' and ./a is the root:
            #1) ./a will be appended as prefix
            #2) '__' will be replaced by '/'
            #3) final executable path is './a/b/c'
            originalPath=${file//__/\/}
            fullPath=./installer-builder/output/origin/_output/$originalPath
            cp -f ./installer-builder/output/executables/signed/Payload/EXECUTABLES_TO_SIGN/$file $fullPath
        fi
    done
}

mergeBackSignedExecutables