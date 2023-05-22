#!/bin/bash

ROOT_PATH="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; cd .. ; pwd -P )"
TEMPLATE_PATH="$ROOT_PATH/templates"

#the root of entire output
OUTPUT_ROOT_PATH="$ROOT_PATH/output"
OUTPUT_X86_64_ROOT_PATH="$ROOT_PATH/output/x86_64"
OUTPUT_AARCH64_ROOT_PATH="$ROOT_PATH/output/aarch64"

#origin finch build downloaded from S3
ORIGIN_PATH="/origin"

#executable extracted from original resource
EXECUTABLES_PATH="/executables"
EXECUTABLES_UNSIGNED_PATH="/executables/unsigned"
EXECUTABLES_SIGNED_PATH="/executables/signed"

#pkg installer path
INSTALLER_PATH="/installer"
INSTALLER_UNSIGNED_PATH="/installer/unsigned"
INSTALLER_SIGNED_PATH="/installer/signed"


#$1: (x86_64, aarch64)
initializeOutputFolder() {
    rm -rf "$OUTPUT_ROOT_PATH/${1}"
    mkdir -pv "$OUTPUT_ROOT_PATH/${1}"
}