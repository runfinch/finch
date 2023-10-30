#!/bin/bash

#wait signed artifacts available
MAX_RETRY=60
DELAY=60

#$1: arch: {x86_64, aarch64}
#$2: executable bucket
#$3: pkg bucket
cleanUpSigningArtifactInS3Buckets() {
    aws s3 rm "s3://${2}-${1//_/-}/pre-signed/package.tar.gz"
    aws s3 rm "s3://${2}-${1//_/-}/signed/finch-executables-${1//_/-}.zip"
    aws s3 rm "s3://${3}-${1//_/-}/pre-signed/package.tar.gz"
    aws s3 rm "s3://${3}-${1//_/-}/signed/finch-pkg-${1//_/-}.zip"
}

#$1: arch: {x86_64, aarch64}
#$2: executable bucket
uploadUnsignedExecutables() {
    aws s3 cp ./installer-builder/output/executables/unsigned/package.tar.gz "s3://${2}-${1//_/-}/pre-signed/package.tar.gz" --no-progress
}

#$1: arch: {x86_64, aarch64}
#$2: executable bucket
downloadSignedExecutables() {
    attempts=0
    while [ $attempts -lt $MAX_RETRY ]
    do
        aws s3 cp "s3://${2}-${1//_/-}/signed/finch-executables-${1//_/-}.zip" ./installer-builder/output/executables/signed --no-progress && break
        attempts=$((attempts+1))
        echo "Wait $DELAY seconds and retry..."
        sleep $DELAY
    done

    if [ $attempts -eq $MAX_RETRY ]
    then
        echo "Download failed after $MAX_RETRY attempts."
    fi

    tar xzvf "./installer-builder/output/executables/signed/finch-executables-${1//_/-}.zip" -C ./installer-builder/output/executables/signed
    aws s3 rm "s3://${2}-${1//_/-}/pre-signed/package.tar.gz"
}

#$1: arch: {x86_64, aarch64}
#$2: pkg bucket
uploadUnsignedPkg() {
    aws s3 cp ./installer-builder/output/installer/unsigned/package.tar.gz "s3://${2}-${1//_/-}/pre-signed/package.tar.gz" --no-progress
}

#$1: arch: {x86_64, aarch64}
#$2: pkg bucket
downloadSignedPkg() {
    attempts=0
    while [ $attempts -lt $MAX_RETRY ]
    do
        aws s3 cp "s3://${2}-${1//_/-}/signed/finch-pkg-${1//_/-}.zip" ./installer-builder/output/installer/signed --no-progress && break
        attempts=$((attempts+1))
        echo "Wait $DELAY seconds and retry..."
        sleep $DELAY
    done

    if [ $attempts -eq $MAX_RETRY ]
    then
        echo "Download failed after $MAX_RETRY attempts."
    fi

    tar xzvf "./installer-builder/output/installer/signed/finch-pkg-${1//_/-}.zip" -C ./installer-builder/output/installer/signed
    aws s3 rm "s3://${2}-${1//_/-}/pre-signed/package.tar.gz"
}

#$1: arch: {x86_64, aarch64}
#$2: version
#$3: private pkg bucket
uploadNotarizedPkg() {
    #rename and upload the final installer
    mv ./installer-builder/output/installer/signed/Payload/Finch.pkg "./installer-builder/output/installer/signed/Payload/Finch-${2}-${1}.pkg"
    aws s3 rm "s3://${3}/Finch-${2}-${1}.pkg"
    aws s3 cp "./installer-builder/output/installer/signed/Payload/Finch-${2}-${1}.pkg" "s3://${3}/Finch-${2}-${1}.pkg" --no-progress
}
