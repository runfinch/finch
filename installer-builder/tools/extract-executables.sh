#!/bin/bash

source ./installer-builder/tools/common-path.sh

#$1 is the arch type
OUTPUT_PATH=$ROOT_PATH/output/${1}

RESOURCE_PATH="$OUTPUT_PATH$ORIGIN_PATH/_output"
EXECUTABLES_UNSIGNED_FULL_PATH="$OUTPUT_PATH$EXECUTABLES_UNSIGNED_PATH"
EXECUTABLES_UNSIGNED_PACKAGE_PATH="$EXECUTABLES_UNSIGNED_FULL_PATH/package"
EXECUTABLES_UNSIGNED_ARTIFACT_PATH="$EXECUTABLES_UNSIGNED_PACKAGE_PATH/artifact/EXECUTABLES_TO_SIGN"
EXECUTABLES_SIGNED_FULL_PATH="$OUTPUT_PATH$EXECUTABLES_SIGNED_PATH"
SIGNING_METADATA_PATH="$EXECUTABLES_UNSIGNED_PACKAGE_PATH/artifact/SIGNING_METADATA"

packageUnsignedExecutables() {
    rm -rf "$EXECUTABLES_SIGNED_FULL_PATH"
    mkdir -pv "$EXECUTABLES_SIGNED_FULL_PATH"
    rm -rf "$EXECUTABLES_UNSIGNED_FULL_PATH"
    mkdir -pv "$EXECUTABLES_UNSIGNED_FULL_PATH"
    mkdir -pv "$EXECUTABLES_UNSIGNED_FULL_PATH/package"
    cp -a "$TEMPLATE_PATH/manifest_executables.yaml" "$EXECUTABLES_UNSIGNED_PACKAGE_PATH/manifest.yaml"
    qemu_name=${RESOURCE_PATH//\//__}

    mkdir -pv "$EXECUTABLES_UNSIGNED_ARTIFACT_PATH"
    mkdir -pv "$SIGNING_METADATA_PATH"
    cp -a "$TEMPLATE_PATH/entitlements.plist" "$SIGNING_METADATA_PATH/entitlements.plist"
    cp -a "$TEMPLATE_PATH/qemu.plist" "$SIGNING_METADATA_PATH/qemu.plist"

    extractExecutables $RESOURCE_PATH

    cd $EXECUTABLES_UNSIGNED_PACKAGE_PATH
    tar -cvzf artifact.gz -C artifact .
    tar -cvzf  ../package.tar.gz manifest.yaml artifact.gz
}

#$1 is the executable name
updateEntitlement() {
    echo "    $1:" >> $EXECUTABLES_UNSIGNED_PACKAGE_PATH/manifest.yaml
    echo "      signing_args:" >> $EXECUTABLES_UNSIGNED_PACKAGE_PATH/manifest.yaml
    echo "        entitlements_path: SIGNING_METADATA/entitlements.plist" >> $EXECUTABLES_UNSIGNED_PACKAGE_PATH/manifest.yaml
}

#$1 is the executable name
updateQEMUEntitlement() {
    echo "    $1:" >> $EXECUTABLES_UNSIGNED_PACKAGE_PATH/manifest.yaml
    echo "      signing_args:" >> $EXECUTABLES_UNSIGNED_PACKAGE_PATH/manifest.yaml
    echo "        entitlements_path: SIGNING_METADATA/qemu.plist" >> $EXECUTABLES_UNSIGNED_PACKAGE_PATH/manifest.yaml
}

#$1 is the file object
extractExecutables() {
    for file in `ls -a $1`
    do
        if [ -d $1"/"$file ];
        then
            if [[ $file != '.' && $file != '..' ]];
            then
                extractExecutables $1"/"$file
            fi
        elif [[ -x $1"/"$file || ($file == *.dylib && !(-L $1"/"$file)) ]];
        then
            fullpath="$1/$file"
            relativepath=${fullpath//"$RESOURCE_PATH/"/}
            newname=${relativepath//\//__}
            cp -a "$1/$file" "$EXECUTABLES_UNSIGNED_ARTIFACT_PATH/$newname"
            codesign --remove-signature "$EXECUTABLES_UNSIGNED_ARTIFACT_PATH/$newname"

            if [[ $file == "qemu-system-x86_64" || $file == "qemu-system-aarch64" ]];
            then
                updateQEMUEntitlement $newname
            elif [[ $file != "qemu-img" ]];
            then
                updateEntitlement $newname
            fi
        fi
    done
}

packageUnsignedExecutables
