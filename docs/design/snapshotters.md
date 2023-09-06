# Snapshotters Config Option

## Issue

[#506](https://github.com/runfinch/finch/pull/506)

## Supported snapshotters

- OverlayFS (default if none configured)
- [SOCI](https://github.com/awslabs/soci-snapshotter)

## `snapshotters` option

Users can use the snapshotters option at `${HOME}/.finch/finch.yaml` to set the snapshotters they would like to use.
All snapshotters listed will be installed on the VM, and the first snapshotter listed will be made the default snapshotter.
The default snapshotter will be used whenever a snapshotter is needed and not specified for a command.
Any other listed snapshotters can be used by specifying them with the `--snapshotter` flag: 

```console
$ finch pull ... # use the default snapshotter
$ finch --snapshotter=mySnapshotter pull ... # use mySnapshotter
``` 

```yaml
snapshotters: 
  - overlayfs
  - soci

# This example would set overlayfs as the default snapshotter and install SOCI on the VM so it can be used by the user if specified later.
```

To stop using a snapshotter, simply remove it from the `snapshotters` list. Snapshotters will not be automatically uninstalled from the VM once removed from the list.
To remove it completely the user must shell into the VM and remove the binaries for the snapshotter from `usr/local/bin`
