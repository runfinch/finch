# Finch Deb

This package contains the bash script and supporting artifacts needed to build a Finch Debian archive.

Currently, this DEB vends one top level package (`runfinch-finch`), which bundles a few other projects (`nerdctl`, `finch-buildkit`, `finch-soci`, `cni`, `cosign`). These are bundled either because they don't provide Debian packages or because they are not yet considered stable. In the future, if they are spun out into their own packages, `package.sh` and `control` will be updated. Packages, such as `containerd` and `runc`, which currently provide stable Debian packages, are declared as dependencies in the `control` file.

## Building

This directory contains a `package.sh` script which takes a few options as input, allowing for building a .deb on either `amd64` or `arm64`. By default, running just `./package.sh` will build for both architecture's and set the version to `0.0.0`.

1. `./package.sh`
   1. Sets up the default directory structure needed to build .deb's, builds a Finch .deb, and moves it to the `_output/deb/` top level directory. By default, this requires internet access to download sources.
1. Install the newly built .deb (replace the version numbers and architecture as needed):

   ```shell
   ./contrib/packaging/deb/package.sh --amd64 --version 1.0.0
   cd ./_output/deb
   sudo apt install runfinch-finch_1.0.0_amd64.deb  
   ```

NOTE: To test changes, you will also first need to uninstall any existing version of the package using `sudo apt remove runfinch-finch`.
