#!/bin/bash

source ./installer-builder/tools/common-path.sh
source ./installer-builder/tools/s3-artifact-helper.sh

#Finch version is required
ARCH=${1}
FINCH_VERSION=${2}
DEPENDENCY_BUCKET_NAME=${3}
INSTALLER_PRIVATE_BUCKET_NAME=${4}
EXECUTABLE_BUCKET=${5}
PKG_BUCKET=${6}
NOTARIZATION_ACCOUNT=${7}
NOTARIZATION_CREDENTIAL=${8}

releaseInstaller() {
    echo "Finch Installer Generation Started"
    echo "(1/12) Clean up old signing artifact in S3"
    cleanUpSigningArtifactInS3Buckets $ARCH $EXECUTABLE_BUCKET $PKG_BUCKET
    initializeOutputFolder $ARCH

    echo "(2/12) Download Finch build from S3"
    downloadFinchBuild $ARCH $DEPENDENCY_BUCKET_NAME

    echo "(3/12) Extract executables"
    bash ./installer-builder/tools/extract-executables.sh $ARCH

    echo "(4/12) Upload unsigned executables to S3"
    uploadUnsignedExecutables $ARCH $EXECUTABLE_BUCKET

    echo "(5/12) Download signed executables"
    downloadSignedExecutables $ARCH $EXECUTABLE_BUCKET

    echo "(6/12) Merge back signed executables"
    bash ./installer-builder/tools/merge-back-signed-executables.sh $ARCH

    echo "(7/12) Generate pkg"
    bash ./installer-builder/tools/build-macos-pkg.sh $ARCH $FINCH_VERSION

    echo "(8/12) Pack unsigned pkg"
    bash ./installer-builder/tools/pack-unsigned-pkg.sh $ARCH

    echo "(9/12) Upload unsigned pkg to S3"
    uploadUnsignedPkg $ARCH $PKG_BUCKET

    echo "(10/12) Download signed pkg"
    downloadSignedPkg $ARCH $PKG_BUCKET

    echo "(11/12) App Store Notarization"
    bash ./installer-builder/tools/notarize.sh $ARCH $NOTARIZATION_ACCOUNT $NOTARIZATION_CREDENTIAL

    echo "(12/12) Upload installer to S3"
    uploadNotarizedPkg $ARCH $FINCH_VERSION $INSTALLER_PRIVATE_BUCKET_NAME

    echo "Finch Installer Generation Completed"
}

releaseInstaller