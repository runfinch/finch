# finch cp

Copy files/folders between a running container and the local filesystem.
This command requires 'tar' to be installed on the host (not in the container).
Using GNU tar is recommended.
The path of the 'tar' binary can be specified with an environment variable '$TAR'.

```text
finch cp [flags] CONTAINER:SRC_PATH DEST_PATH|-
  finch cp [flags] SRC_PATH|- CONTAINER:DEST_PATH
```

## Options

```text
  -L, --follow-link   Always follow symbolic link in SRC_PATH.
  -h, --help          help for cp
```
