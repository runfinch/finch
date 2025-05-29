# Finch Deb

This package contains the bash script and supporting artifacts needed to build a Finch Deb archive for Ubuntu.

Currently, this RPM vends one top level package (`runfinch-finch`), which bundles a few other projects (`containerd`, `runc`, `nerdctl`, `finch-buildkit`, `finch-soci`, `cni`, `cosign`). These are bundled either because they don't provide packages on Ubuntu or because they are not yet considered stable. In the future, if they are spun out into their own packages, `package.sh` will be updated.

## Building

This directory contains a `package.sh` script which takes a few options as input, allowing for building a .deb from the latest local commit, or building from the tip of a branch. By default, running just `./package.sh` will build the latest release.

1. `./package.sh`
   1. Sets up the default directory structure needed to build .deb's, builds a Finch .deb, and moves it to the `_output` top level directory. By default, this requires internet access to download sources.
1. Install the newly built .deb (replace the version numbers and architecture as needed):

   ```shell
   cd ./_output
   sudo apt install run-finch_1.7.1_amd64.deb  
   ```

NOTE: To test changes, you will also first need to uninstall any existing version of the package using `sudo apt remove run-finch`.
