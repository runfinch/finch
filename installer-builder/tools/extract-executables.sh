#!/bin/bash

packageUnsignedExecutables() {
    #initialize executable directory
    mkdir -pv ./installer-builder/output/executables/signed
    mkdir -pv ./installer-builder/output/executables/unsigned
    mkdir -pv ./installer-builder/output/executables/unsigned/package
    cp -a ./installer-builder/templates/manifest_executables.yaml ./installer-builder/output/executables/unsigned/package/manifest.yaml

    mkdir -pv ./installer-builder/output/executables/unsigned/package/artifact/EXECUTABLES_TO_SIGN
    mkdir -pv ./installer-builder/output/executables/unsigned/package/artifact/SIGNING_METADATA
    cp -a ./installer-builder/templates/entitlements.plist ./installer-builder/output/executables/unsigned/package/artifact/SIGNING_METADATA/entitlements.plist
    cp -a ./installer-builder/templates/qemu.plist ./installer-builder/output/executables/unsigned/package/artifact/SIGNING_METADATA/qemu.plist

    extractExecutables ./installer-builder/output/origin/_output

    #prepare unsigned executable into .tar
    cd ./installer-builder/output/executables/unsigned/package || exit
    tar -cvzf artifact.gz -C artifact .
    tar -cvzf  ../package.tar.gz manifest.yaml artifact.gz
}

#$1: the executable name
updateEntitlement() {
    echo "    $1:" >> ./installer-builder/output/executables/unsigned/package/manifest.yaml
    echo "      signing_args:" >> ./installer-builder/output/executables/unsigned/package/manifest.yaml
    echo "        entitlements_path: SIGNING_METADATA/entitlements.plist" >> ./installer-builder/output/executables/unsigned/package/manifest.yaml
}

#$1: the executable name
updateQEMUEntitlement() {
    echo "    $1:" >> ./installer-builder/output/executables/unsigned/package/manifest.yaml
    echo "      signing_args:" >> ./installer-builder/output/executables/unsigned/package/manifest.yaml
    echo "        entitlements_path: SIGNING_METADATA/qemu.plist" >> ./installer-builder/output/executables/unsigned/package/manifest.yaml
}

#$1: the file object
extractExecutables() {
    for file in $(ls -a "$1")
    do
        if [ -d "$1/$file" ];
        then
            if [[ $file != '.' && $file != '..' ]];
            then
                extractExecutables "$1/$file"
            fi
        elif [[ -x $1/$file || ($file == *.dylib && ! (-L $1/$file)) ]];
        then
            #extract executables from all file directory to one folder
            #to have the ability to merge back, rename the executables with the file path
            #remove the long file path prefix to rename the executable to avoid file name longth exceed issue
            #e.g., the file path ./a/b/c, if ./a is the root:
            #1) ./a will be removed
            #2) '/' will be replaced by '__'
            #3) final executable name is 'b__c'
            relativepath=$(echo "$1/$file" | sed 's|./installer-builder/output/origin/_output/||')
            newname=${relativepath//\//__}

            #copy executable to destination folder
            newpath="./installer-builder/output/executables/unsigned/package/artifact/EXECUTABLES_TO_SIGN/$newname"
            cp -a "$1/$file" "$newpath"
            codesign --remove-signature "$newpath"
            "$(brew --prefix)"/opt/llvm/bin/llvm-objcopy \
                --keep-undefined \
                --add-section \
                __TEXT,__info_plist=./installer-builder/darwin/Info.plist \
                "$newpath" \
                "$newpath"
            #qemu needs specific entitlement, handle it separately
            if [[ $file == "qemu-system-x86_64" || $file == "qemu-system-aarch64" ]];
            then
                updateQEMUEntitlement "$newname"
            elif [[ $file != "qemu-img" ]];
            then
                updateEntitlement "$newname"
            fi
        fi
    done
}

packageUnsignedExecutables
