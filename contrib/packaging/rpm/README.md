# FinchRPM

This package contains the spec file and supporting artifacts needed to build a Finch RPM for Amazon Linux.

Currently, this RPM vends one top level package (`runfinch-finch`), which bundles a few other projects (`finch-buildkit`, `finch-soci`). These are bundled either because they don't provide packages on Amazon Linux or because they are not yet considered stable. In the future, if they are spun out into their own packages, `finch.spec` will be updated.

## Building

This directory contains a `build.sh` script which takes a few options as input, allowing for building an RPM from the latest local commit, or building from the tip of a branch. By default, running just `./build.sh` will build the latest release specified in the `finch.spec` file.

1. `./build.sh`
   1. Sets up the default directory structure needed to build RPMs, builds a Finch RPM, and moves it to the `_output` top level directory. By default, this requires internet access to download sources.
1. Install the newly built RPM (replace the version numbers and architecture as needed):

   ```shell
   cd ./_output
   sudo rpm -i \
   runfinch-finch-1.2.2-1.amzn2int.0.1.x86_64.rpm
   ```

NOTE: To test changes, you will also first need to uninstall any existing version of the package using `sudo rpm -e`, or force install with `--force`.
