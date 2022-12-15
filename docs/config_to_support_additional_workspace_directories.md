## Config to support additional workspace directories

### Issue
https://github.com/runfinch/finch/issues/107

### Approach

Lima yaml file has Mounts field to handle the mount points. Similar to other Finch config like cpu and memory, it is straightforward to write additional_workspace_directories to Lima’s override.yaml file.

For example, for Finch config:
```
cpus: 2
memory: 4GiB
additional_workspace_directories:
- /Volumes/mydir
```

Finch config applier will make override.yaml like this:

```
images: []
cpus: 2
memory: 4GiB
mounts:
- location: /Volumes/mydir
mountPoint: /Volumes/mydir
writable: true
sshfs:
cache: true
followSymlinks: false
sftpDriver: ""
9p:
securityModel: none
protocolVersion: 9p2000.L
msize: 128KiB
cache: mmap
networks:
- lima: finch-shared
```

Different to cpu and memory, the “mounts” field in override.yaml will be appended to the default mounts instead of replacing it. So we don’t have to add the default home directory to the override.yaml file. Reference (https://github.com/lima-vm/lima/blob/master/pkg/limayaml/defaults.go#L410)

### Error handling consideration

There are lots of error cases if users directly pass random locations to Lima. For example, when users try to set “/” as in additional workspace directories.

*Option 1 Directly pass the Lima and return whatever error Lima returns. Contribute to Lima to enhance error handling if needed. (Recommended)*

Pros:

* Easy to implement

Cons:

* Sometimes the error log in Lima context may not be descriptive in Finch context
* Depends on Lima error handing. (However, other commands also depend on Lima/Nerdctl error handling today and Finch can still catch it in e2e tests.)

*Option 2 Allowlist specific locations in Finch.*
Pros:

* Easy to implement

Cons:

* The error messages may be too generic in Finch layer.
* Not flexible for users to mount their customized locations under “/”.
* Finch can’t catch it in e2e tests when a new location is allowed in Lima.

*Option 3 Blocklist specific locations in Finch with different error messages.*
Pros:

* The error messages will be specific.

Cons:

* Finch can’t catch it in e2e tests when a new location is blocked in Lima.
* Difficult to make error messages accurate for different host environments.

### Platform consistency consideration

Finch currently only supports macOS but may support other platforms in the future. As one field of the user facing finch config, having a consistent meaning can help users easy to use across different platforms. So we can make naming and description of the new field generic.

#### Naming

* additional_workspace_locations
* **additional_workspace_directories (recommended)**
* additional_directories
* additional_locations
* additional_work_directories
* additional_work_locations

#### Description

additional_workspace_directories can be an optional field to be used whenever the default mount points can’t cover all the possible directories.

In any platform with virtualization (Windows, or Linux with containerd running in VM), the field could be used as an optional field.

In any platform without virtualization (Linux with containerd running in host), the field will be invalid/ignored. That can be implemented by a condition check.



