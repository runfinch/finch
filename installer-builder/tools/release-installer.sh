#!/bin/bash

source ./installer-builder/tools/artifact-helper.sh

ARCH=${1}
FINCH_VERSION=${2}
INSTALLER_PRIVATE_BUCKET_NAME=${3}
EXECUTABLE_BUCKET=${4}
PKG_BUCKET=${5}
NOTARIZATION_ACCOUNT=${6}
NOTARIZATION_CREDENTIAL=${7}

releaseInstaller() {
    echo "Finch Installer Generation Started..."
    echo "[1/12] Clean Old Signing Artifact in S3 Buckets"
    cleanUpSigningArtifactInS3Buckets $ARCH $EXECUTABLE_BUCKET $PKG_BUCKET
    rm -rf "./installer-builder/output"
    mkdir -pv "./installer-builder/output"

    echo "[2/12] Get Original Finch Build"
    mkdir -pv "./installer-builder/output/origin"
    cp -r ./_output "./installer-builder/output/origin"

    echo "[3/12] Extract Executables from Finch Build"
    bash ./installer-builder/tools/extract-executables.sh $ARCH

    echo "[4/12] Upload Unsigned Executables to S3 Buckets"
    uploadUnsignedExecutables $ARCH $EXECUTABLE_BUCKET

    echo "[5/12] Download Signed Executables from S3 Buckets"
    downloadSignedExecutables $ARCH $EXECUTABLE_BUCKET

    echo "[6/12] Merge Back Signed Executables to Finch Build"
    bash ./installer-builder/tools/merge-back-signed-executables.sh $ARCH

    echo "[7/12] Build .pkg"
    bash ./installer-builder/tools/build-macos-pkg.sh $ARCH $FINCH_VERSION

    echo "[8/12] Pack Unsigned .pkg"
    bash ./installer-builder/tools/pack-unsigned-pkg.sh $ARCH

    echo "[9/12] Upload Unsigned .pkg to S3 Buckets"
    uploadUnsignedPkg $ARCH $PKG_BUCKET

    echo "[10/12] Download Signed .pkg from S3 Buckets"
    downloadSignedPkg $ARCH $PKG_BUCKET

    echo "[11/12] App Store Notarization"
    bash ./installer-builder/tools/notarize.sh $NOTARIZATION_ACCOUNT $NOTARIZATION_CREDENTIAL

    echo "[12/12] Upload installer to S3 buckets"
    uploadNotarizedPkg $ARCH $FINCH_VERSION $INSTALLER_PRIVATE_BUCKET_NAME

    echo "Finch .pkg Installer Generation Completed!"
}

releaseInstaller