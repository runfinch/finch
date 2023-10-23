# finch container

Manage containers

```text
finch container [flags]
```

## Commands

```text
  attach   Attach stdin, stdout, and stderr to a running container.
  commit   Create a new image from a container's changes
  cp       Copy files/folders between a running container and the local filesystem.
  create   Create a new container. Optionally specify "ipfs://" or "ipns://" scheme to pull image from IPFS.
  exec     Run a command in a running container
  inspect  Display detailed information on one or more containers.
  kill     Kill one or more running containers
  logs     Fetch the logs of a container. Expected to be used with 'finch run -d'.
  ls       List containers
  pause    Pause all processes within one or more containers
  port     List port mappings or a specific mapping for the container
  prune    Remove all stopped containers
  rename   rename a container
  restart  Restart one or more running containers
  rm       Remove one or more containers
  run      Run a command in a new container. Optionally specify "ipfs://" or "ipns://" scheme to pull image from IPFS.
  start    Start one or more running containers
  stats    Display a live stream of container(s) resource usage statistics.
  stop     Stop one or more running containers
  unpause  Unpause all processes within one or more containers
  update   Update one or more running containers
  wait     Block until one or more containers stop, then print their exit codes.
```

## Options

```text
  -h, --help   help for container
```
