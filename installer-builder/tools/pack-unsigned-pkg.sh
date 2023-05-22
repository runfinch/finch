#!/bin/bash

source ./installer-builder/tools/common-path.sh

PKG_UNSIGNED_FULL_PATH="$OUTPUT_ROOT_PATH/${1}$INSTALLER_UNSIGNED_PATH/package"
PKG_UNSIGNED_ARTIFACT_PATH="$PKG_UNSIGNED_FULL_PATH/artifact"


PACKAGE_RESOURCE_PATH=${1}

createUnsignedPkgTarball() {
    cp -a "$TEMPLATE_PATH/manifest_pkg.yaml" "$PKG_UNSIGNED_FULL_PATH/manifest.yaml"
    cd $PKG_UNSIGNED_FULL_PATH
    tar -cvzf artifact.gz -C artifact .
    tar -cvzf  ../package.tar.gz manifest.yaml artifact.gz
}

createUnsignedPkgTarball