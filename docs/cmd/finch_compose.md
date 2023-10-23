# finch compose

Compose

```text
finch compose [flags] COMMAND
```

## Commands

```text
  build    Build or rebuild services
  config   Validate and view the Compose file
  cp       Copy files/folders between a service container and the local filesystem
  create   Creates containers for one or more services
  down     Remove containers and associated resources
  exec     Execute a command in a running container of the service
  images   List images used by created containers in services
  kill     Force stop service containers
  logs     Show logs of running containers
  pause    Pause all processes within containers of service(s). They can be unpaused with finch compose unpause
  port     Print the public port for a port binding
  ps       List containers of services
  pull     Pull service images
  push     Push service images
  restart  Restart containers of given (or all) services
  rm       Remove stopped service containers
  run      Run a one-off command on a service
  start    Start existing containers for service(s)
  stop     Stop running containers without removing them.
  top      Display the running processes of service containers
  unpause  Unpause all processes within containers of service(s).
  up       Create and start containers
  version  Show the Compose version information
```

## Options

```text
      --env-file string            Specify an alternate environment file
  -f, --f stringArray              Alias of --file
      --file stringArray           Specify an alternate compose file
  -h, --help                       help for compose
      --ipfs-address string        multiaddr of IPFS API (default uses $IPFS_PATH env variable if defined or local directory ~/.ipfs)
      --profile stringArray        Specify a profile to enable
      --project-directory string   Specify an alternate working directory
  -p, --project-name string        Specify an alternate project name
```
