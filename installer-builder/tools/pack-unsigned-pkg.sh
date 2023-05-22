#!/bin/bash

createUnsignedPkgTarball() {
    #prepare unsigned .pkg into .tar
    cp -a ./installer-builder/templates/manifest_pkg.yaml ./installer-builder/output/installer/unsigned/package/manifest.yaml
    cd ./installer-builder/output/installer/unsigned/package
    tar -cvzf artifact.gz -C artifact .
    tar -cvzf  ../package.tar.gz manifest.yaml artifact.gz
}

createUnsignedPkgTarball