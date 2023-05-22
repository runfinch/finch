#!/bin/bash

source ./installer-builder/tools/common-path.sh

ARCH=${1}
VERSION=${2}
INSTALLER_FULL_PATH="$OUTPUT_ROOT_PATH/$ARCH$INSTALLER_PATH"
PACKAGE_RESOURCE_PATH="$OUTPUT_ROOT_PATH/$ARCH$ORIGIN_PATH/_output"

buildPkgInstaller() {
    rm -rf "$INSTALLER_FULL_PATH"
    mkdir -pv "$INSTALLER_FULL_PATH"

    cp -r "$ROOT_PATH/darwin" "$INSTALLER_FULL_PATH/"
    sed -i '' -e 's/__VERSION__/'${VERSION}'/g' "$INSTALLER_FULL_PATH/darwin/scripts/postinstall"
    sed -i '' -e 's/__VERSION__/'${VERSION}'/g' "$INSTALLER_FULL_PATH/darwin/distribution.xml"
    if [ $ARCH == "x86_64" ]
    then
        supportedArch="x86_64"
    else
        supportedArch="arm64"
    fi
    sed -i '' -e 's/__ARCH__/'${supportedArch}'/g' "$INSTALLER_FULL_PATH/darwin/distribution.xml"
    sed -i '' -e 's/__VERSION__/'${VERSION}'/g' "$INSTALLER_FULL_PATH"/darwin/Resources/*.html

    mkdir -p "$INSTALLER_FULL_PATH/darwinpkg"

    mkdir -p "$INSTALLER_FULL_PATH/darwinpkg/Applications/Finch"
    cp -a $PACKAGE_RESOURCE_PATH/. "$INSTALLER_FULL_PATH/darwinpkg/Applications/Finch"

    #copy extra files to Application/Finch
    cp -a "$TEMPLATE_PATH/LICENSE" "$INSTALLER_FULL_PATH/darwinpkg/Applications/Finch/LICENSE"
    cp -a "$TEMPLATE_PATH/NOTICE" "$INSTALLER_FULL_PATH/darwinpkg/Applications/Finch/NOTICE"
    cp -a "$TEMPLATE_PATH/LICENSE" "$INSTALLER_FULL_PATH/darwinpkg/Applications/Finch/lima/LICENSE"
    mv "$INSTALLER_FULL_PATH/darwinpkg/Applications/Finch/license-files" "$INSTALLER_FULL_PATH/darwinpkg/Applications/Finch/finch-go-dependencies-license-files"

    cp "$ROOT_PATH/darwin/Resources/uninstall.sh" "$INSTALLER_FULL_PATH/darwinpkg/Applications/Finch"
    sed -i '' -e "s/__VERSION__/${VERSION}/g" "$INSTALLER_FULL_PATH/darwinpkg/Applications/Finch/uninstall.sh"
    
    mkdir -p "$INSTALLER_FULL_PATH/package"
    mkdir -p "$INSTALLER_FULL_PATH/signed"
    mkdir -p "$INSTALLER_FULL_PATH/unsigned/package/artifact"

    pkgbuild --identifier "org.Finch.${VERSION}" \
    --version "$VERSION" \
    --scripts "$INSTALLER_FULL_PATH/darwin/scripts" \
    --root "$INSTALLER_FULL_PATH/darwinpkg" \
    "$INSTALLER_FULL_PATH/package/Finch.pkg" > /dev/null 2>&1

    productbuild --distribution "$INSTALLER_FULL_PATH/darwin/distribution.xml" \
    --resources "$INSTALLER_FULL_PATH/darwin/Resources" \
    --package-path "$INSTALLER_FULL_PATH/package" \
    "$INSTALLER_FULL_PATH/unsigned/package/artifact/Finch.pkg" > /dev/null 2>&1
}

buildPkgInstaller