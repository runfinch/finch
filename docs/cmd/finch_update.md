# finch update

Update one or more running containers

```text
finch update [flags] CONTAINER [CONTAINER, ...]
```

## Options

```text
      --blkio-weight uint16         Block IO (relative weight), between 10 and 1000, or 0 to disable (default 0)
      --cpu-period uint             Limit CPU CFS (Completely Fair Scheduler) period
      --cpu-quota int               Limit CPU CFS (Completely Fair Scheduler) quota (default -1)
      --cpu-shares uint             CPU shares (relative weight)
      --cpus float                  Number of CPUs
      --cpuset-cpus string          CPUs in which to allow execution (0-3, 0,1)
      --cpuset-mems string          MEMs in which to allow execution (0-3, 0,1)
  -h, --help                        help for update
      --kernel-memory string        Kernel memory limit (deprecated)
  -m, --memory string               Memory limit
      --memory-reservation string   Memory soft limit
      --memory-swap string          Swap limit equal to memory plus swap: '-1' to enable unlimited swap
      --pids-limit int              Tune container pids limit (set -1 for unlimited) (default -1)
      --restart string              Restart policy to apply when a container exits (implemented values: "no"|"always|on-failure:n|unless-stopped") (default "no")
```
