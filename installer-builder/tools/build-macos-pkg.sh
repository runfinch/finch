#!/bin/bash

ARCH=${1}
VERSION=${2}
INSTALLER_FULL_PATH=./installer-builder/output/installer
PACKAGE_RESOURCE_PATH=./installer-builder/output/origin/_output

buildPkgInstaller() {
    mkdir -pv $INSTALLER_FULL_PATH

    #copy pkg resources and replace version placeholder
    cp -r ./installer-builder/darwin $INSTALLER_FULL_PATH/
    sed -i '' -e 's/__VERSION__/'"${VERSION}"'/g' $INSTALLER_FULL_PATH/darwin/scripts/postinstall
    sed -i '' -e 's/__VERSION__/'"${VERSION}"'/g' $INSTALLER_FULL_PATH/darwin/distribution.xml

    #distribution file requires different value for aarch64
    if [ "$ARCH" == "x86_64" ]
    then
        supportedArch="x86_64"
    else
        supportedArch="arm64"
    fi
    sed -i '' -e 's/__ARCH__/'${supportedArch}'/g' $INSTALLER_FULL_PATH/darwin/distribution.xml
    sed -i '' -e 's/__VERSION__/'"${VERSION}"'/g' $INSTALLER_FULL_PATH/darwin/Resources/*.html

    #copy signed finch build to pkg resource
    mkdir -p $INSTALLER_FULL_PATH/darwinpkg
    mkdir -p $INSTALLER_FULL_PATH/darwinpkg/Applications/Finch
    cp -a $PACKAGE_RESOURCE_PATH/. $INSTALLER_FULL_PATH/darwinpkg/Applications/Finch

    #copy extra license files to Application/Finch
    cp -a ./LICENSE $INSTALLER_FULL_PATH/darwinpkg/Applications/Finch/LICENSE
    cp -a ./NOTICE $INSTALLER_FULL_PATH/darwinpkg/Applications/Finch/NOTICE
    cp -a ./LICENSE $INSTALLER_FULL_PATH/darwinpkg/Applications/Finch/lima/LICENSE
    mv $INSTALLER_FULL_PATH/darwinpkg/Applications/Finch/license-files $INSTALLER_FULL_PATH/darwinpkg/Applications/Finch/finch-go-dependencies-license-files

    #copy uninstall script and replace version placeholder
    cp ./installer-builder/darwin/Resources/uninstall.sh $INSTALLER_FULL_PATH/darwinpkg/Applications/Finch
    sed -i '' -e 's/__VERSION__/'"${VERSION}"'/g' $INSTALLER_FULL_PATH/darwinpkg/Applications/Finch/uninstall.sh
    
    #construct pkg directory
    mkdir -p $INSTALLER_FULL_PATH/package
    mkdir -p $INSTALLER_FULL_PATH/signed
    mkdir -p $INSTALLER_FULL_PATH/unsigned/package/artifact

    #build pkg
    # this identifier doens't match what's in the Info.plist for Finch, but changing it now
    # would break upgrades
    pkgbuild --identifier org.Finch."${VERSION}" \
    --version "$VERSION" \
    --scripts $INSTALLER_FULL_PATH/darwin/scripts \
    --root $INSTALLER_FULL_PATH/darwinpkg \
    $INSTALLER_FULL_PATH/package/Finch.pkg > /dev/null 2>&1

    productbuild --distribution $INSTALLER_FULL_PATH/darwin/distribution.xml \
    --resources $INSTALLER_FULL_PATH/darwin/Resources \
    --package-path $INSTALLER_FULL_PATH/package \
    $INSTALLER_FULL_PATH/unsigned/package/artifact/Finch.pkg > /dev/null 2>&1
}

buildPkgInstaller