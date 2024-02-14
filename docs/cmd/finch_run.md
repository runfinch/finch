# finch run

Run a command in a new container. Optionally specify "ipfs://" or "ipns://" scheme to pull image from IPFS.

```text
finch run [flags] IMAGE [COMMAND] [ARG...]
```

## Options

```text
      --add-host strings                               Add a custom host-to-IP mapping (host:ip)
      --blkio-weight uint16                            Block IO (relative weight), between 10 and 1000, or 0 to disable (default 0)
      --cap-add strings                                Add Linux capabilities
      --cap-drop strings                               Drop Linux capabilities
      --cgroup-conf strings                            Configure cgroup v2 (key=value)
      --cgroup-parent string                           Optional parent cgroup for the container
      --cgroupns string                                Cgroup namespace to use, the default depends on the cgroup version ("host"|"private") (default "private")
      --cidfile string                                 Write the container ID to the file
      --cosign-certificate-identity string             The identity expected in a valid Fulcio certificate for --verify=cosign. Valid values include email address, DNS names, IP addresses, and URIs. Either --cosign-certificate-identity or --cosign-certificate-identity-regexp must be set for keyless flows
      --cosign-certificate-identity-regexp string      A regular expression alternative to --cosign-certificate-identity for --verify=cosign. Accepts the Go regular expression syntax described at https://golang.org/s/re2syntax. Either --cosign-certificate-identity or --cosign-certificate-identity-regexp must be set for keyless flows
      --cosign-certificate-oidc-issuer string          The OIDC issuer expected in a valid Fulcio certificate for --verify=cosign, e.g. https://token.actions.githubusercontent.com or https://oauth2.sigstore.dev/auth. Either --cosign-certificate-oidc-issuer or --cosign-certificate-oidc-issuer-regexp must be set for keyless flows
      --cosign-certificate-oidc-issuer-regexp string   A regular expression alternative to --certificate-oidc-issuer for --verify=cosign. Accepts the Go regular expression syntax described at https://golang.org/s/re2syntax. Either --cosign-certificate-oidc-issuer or --cosign-certificate-oidc-issuer-regexp must be set for keyless flows
      --cosign-key string                              Path to the public key file, KMS, URI or Kubernetes Secret for --verify=cosign
      --cpu-period uint                                Limit CPU CFS (Completely Fair Scheduler) period
      --cpu-quota int                                  Limit CPU CFS (Completely Fair Scheduler) quota (default -1)
      --cpu-shares uint                                CPU shares (relative weight)
      --cpus float                                     Number of CPUs
      --cpuset-cpus string                             CPUs in which to allow execution (0-3, 0,1)
      --cpuset-mems string                             MEMs in which to allow execution (0-3, 0,1)
  -d, --detach                                         Run container in background and print container ID
      --detach-keys string                             Override the default detach keys (default "ctrl-p,ctrl-q")
      --device strings                                 Add a host device to the container
      --dns strings                                    Set custom DNS servers
      --dns-opt strings                                Set DNS options
      --dns-option strings                             Set DNS options
      --dns-search strings                             Set custom DNS search domains
      --entrypoint stringArray                         Overwrite the default ENTRYPOINT of the image
  -e, --env stringArray                                Set environment variables
      --env-file strings                               Set environment variables from file
      --gpus stringArray                               GPU devices to add to the container ('all' to pass all GPUs)
      --group-add strings                              Add additional groups to join
      --help                                           show help
  -h, --hostname string                                Container host name
      --init                                           Run an init process inside the container, Default to use tini
      --init-binary string                             The custom binary to use as the init process (default "tini")
  -i, --interactive                                    Keep STDIN open even if not attached
      --ip string                                      IPv4 address to assign to the container
      --ipc string                                     IPC namespace to use ("host"|"private")
      --ipfs-address string                            multiaddr of IPFS API (default uses $IPFS_PATH env variable if defined or local directory ~/.ipfs)
      --isolation string                               Specify isolation technology for container. On Linux the only valid value is default. Windows options are host, process and hyperv with process isolation as the default (default "default")
      --kernel-memory string                           Kernel memory limit (deprecated)
  -l, --label stringArray                              Set metadata on container
      --label-file strings                             Set metadata on container from file
      --log-driver string                              Logging driver for the container. Default is json-file. It also supports logURI (eg: --log-driver binary://<path>) (default "json-file")
      --log-opt stringArray                            Log driver options
      --mac-address string                             MAC address to assign to the container
  -m, --memory string                                  Memory limit
      --memory-reservation string                      Memory soft limit
      --memory-swap string                             Swap limit equal to memory plus swap: '-1' to enable unlimited swap
      --memory-swappiness int                          Tune container memory swappiness (0 to 100) (default -1) (default -1)
      --mount stringArray                              Attach a filesystem mount to the container
      --name string                                    Assign a name to the container
      --net strings                                    Connect a container to a network ("bridge"|"host"|"none"|<CNI>) (default [bridge])
      --network strings                                Connect a container to a network ("bridge"|"host"|"none"|"container:<container>"|<CNI>) (default [bridge])
      --oom-kill-disable                               Disable OOM Killer
      --oom-score-adj int                              Tune container’s OOM preferences (-1000 to 1000, rootless: 100 to 1000)
      --pid string                                     PID namespace to use
      --pidfile string                                 file path to write the task's pid
      --pids-limit int                                 Tune container pids limit (set -1 for unlimited) (default -1)
      --platform string                                Set platform (e.g. "amd64", "arm64")
      --privileged                                     Give extended privileges to this container
  -p, --publish strings                                Publish a container's port(s) to the host
      --pull string                                    Pull image before running ("always"|"missing"|"never") (default "missing")
      --rdt-class string                               Name of the RDT class (or CLOS) to associate the container with
      --read-only                                      Mount the container's root filesystem as read only
      --restart string                                 Restart policy to apply when a container exits (implemented values: "no"|"always|on-failure:n|unless-stopped") (default "no")
      --rm                                             Automatically remove the container when it exits
      --rootfs                                         The first argument is not an image but the rootfs to the exploded container
      --runtime string                                 Runtime to use for this container, e.g. "crun", or "io.containerd.runsc.v1" (default "io.containerd.runc.v2")
      --security-opt stringArray                       Security options
      --shm-size string                                Size of /dev/shm
      --stop-signal string                             Signal to stop a container (default "SIGTERM")
      --stop-timeout int                               Timeout (in seconds) to stop a container
      --sysctl stringArray                             Sysctl options
      --tmpfs stringArray                              Mount a tmpfs directory
  -t, --tty                                            Allocate a pseudo-TTY
      --ulimit strings                                 Ulimit options
      --umask string                                   Set the umask inside the container. Defaults to 0022
  -u, --user string                                    Username or UID (format: <name|uid>[:<group|gid>])
      --uts string                                     UTS namespace to use
      --verify string                                  Verify the image (none|cosign|notation) (default "none")
  -v, --volume stringArray                             Bind mount a volume
      --volumes-from stringArray                       Mount volumes from the specified container(s)
  -w, --workdir string                                 Working directory inside the container
```
