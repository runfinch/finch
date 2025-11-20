# Debug

Below are common scenarios users might encounter for Finch.

## General

### How to shell into the VM?

Linux versions of Finch do not use a VM.

#### macOS

```sh
LIMA_HOME=/Applications/Finch/lima/data /Applications/Finch/lima/bin/limactl shell finch
```

#### Windows

```sh
wsl -d lima-finch
```

## MacOS

### I see repeated pull/build failures with errors suggesting space is insufficient

This likely means that the finch vm is out of space and we are not able to pull the image even if we have other things correctly working. This can be verified by the following commands:

```bash
LIMA_HOME=/Applications/Finch/lima/data /Applications/Finch/lima/bin/limactl  shell finch df -h  | grep -i vdb1

/dev/vdb1        59G   25G   32G  44% /mnt/lima-finch
```

To fix this:

```bash
# Shell into the vm:
LIMA_HOME=/Applications/Finch/lima/data /Applications/Finch/lima/bin/limactl  shell finch

# Clean up the leases:
sudo ctr leases rm $(sudo ctr leases ls | grep flat | awk '{print $1}')
```

The above steps will help you to clean up the disk for finch to use, but when you check your disk space it might still say that your vm is occupying a large disk space. Run the following command to reclaim those

```bash
# Shell into the vm:
LIMA_HOME=/Applications/Finch/lima/data /Applications/Finch/lima/bin/limactl  shell finch

# Run fstrim:
sudo fstrim -v /mnt/lima-finch
```

### Pulling an image returns an error like `error getting credentials - err: exec: "docker-credential-osxkeychain": executable file not found in $PATH, out: `` `

This can usually be fixed by adding `config.json` to your `~/.finch` directory, and populating its contents with an empty json (`{}`)
