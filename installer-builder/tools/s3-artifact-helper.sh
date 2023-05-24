#!/bin/bash

source ./installer-builder/tools/common-path.sh

MAX_RETRY=60
DELAY=60
RED='\033[0;31m'
Yellow='\033[0;33m'
NC='\033[0m'

#$1: arch(x86_64, aarch64)
#$2 executable bucket
#$3 pkg bucket
cleanUpSigningArtifactInS3Buckets() {
    aws s3 rm s3://${2}-${1//_/-}/pre-signed/package.tar.gz
    aws s3 rm s3://${2}-${1//_/-}/signed/finch-executables-${1//_/-}.zip
    aws s3 rm s3://${3}-${1//_/-}/pre-signed/package.tar.gz
    aws s3 rm s3://${3}-${1//_/-}/signed/finch-pkg-${1//_/-}.zip
}

#$1: arch(x86_64, aarch64)
downloadFinchBuild() {
    pwd
    echo "$OUTPUT_ROOT_PATH/${1}$ORIGIN_PATH"
    cp -r ./_output "$OUTPUT_ROOT_PATH/${1}$ORIGIN_PATH"
}

#$1: arch(x86_64, aarch64)
#$2: executable bucket
uploadUnsignedExecutables() {
    aws s3 cp $OUTPUT_ROOT_PATH/${1}$EXECUTABLES_UNSIGNED_PATH/package.tar.gz s3://${2}-${1//_/-}/pre-signed/package.tar.gz --no-progress
}

#$1: arch(x86_64, aarch64)
#$2: executable bucket
downloadSignedExecutables() {
    attempts=0
    while [ $attempts -lt $MAX_RETRY ]
    do
        aws s3 cp s3://${2}-${1//_/-}/signed/finch-executables-${1//_/-}.zip $OUTPUT_ROOT_PATH/${1}$EXECUTABLES_SIGNED_PATH --no-progress && break
        attempts=$(($attempts+1))
        echo -e "${Yellow}Wait $DELAY seconds and retry...${NC}"
        sleep $DELAY
    done

    if [ $attempts -eq $MAX_RETRY ]
    then
        echo -e "${RED}Download failed after $MAT_RETRY attempts${NC}."
        exit 1
    fi

    tar xzvf "$OUTPUT_ROOT_PATH/${1}$EXECUTABLES_SIGNED_PATH/finch-executables-${1//_/-}.zip" -C "$OUTPUT_ROOT_PATH/${1}$EXECUTABLES_SIGNED_PATH"
    aws s3 rm s3://${2}-${1//_/-}/pre-signed/package.tar.gz
}

#$1: arch(x86_64, aarch64)
#$2: pkg bucket
uploadUnsignedPkg() {
    aws s3 cp $OUTPUT_ROOT_PATH/${1}$INSTALLER_UNSIGNED_PATH/package.tar.gz s3://${2}-${1//_/-}/pre-signed/package.tar.gz --no-progress
}

#$1: arch(x86_64, aarch64)
#$2: pkg bucket
downloadSignedPkg() {
    attempts=0
    while [ $attempts -lt $MAX_RETRY ]
    do
        aws s3 cp s3://${2}-${1//_/-}/signed/finch-pkg-${1//_/-}.zip $OUTPUT_ROOT_PATH/${1}$INSTALLER_SIGNED_PATH --no-progress && break
        attempts=$(($attempts+1))
        echo -e "${Yellow}Wait $DELAY seconds and retry...${NC}"
        sleep $DELAY
    done

    if [ $attempts -eq $MAX_RETRY ]
    then
        echo -e "${RED}Download failed after $MAT_RETRY attempts${NC}."
        exit 1
    fi

    tar xzvf "$OUTPUT_ROOT_PATH/${1}$INSTALLER_SIGNED_PATH/finch-pkg-${1//_/-}.zip" -C "$OUTPUT_ROOT_PATH/${1}$INSTALLER_SIGNED_PATH"
    aws s3 rm s3://${2}-${1//_/-}/pre-signed/package.tar.gz
}

#$1: arch(x86_64, aarch64)
#$2: version
#$3: private pkg bucket
uploadNotarizedPkg() {
    root="$OUTPUT_ROOT_PATH/${1}$INSTALLER_SIGNED_PATH/Payload"
    mv $root/Finch.pkg $root/Finch-${2}-${1}.pkg

    #upload to S3 private bucket for installer test
    aws s3 rm s3://${3}/Finch-${2}-${1}.pkg
    aws s3 cp $root/Finch-${2}-${1}.pkg s3://${3}/Finch-${2}-${1}.pkg --no-progress
}
