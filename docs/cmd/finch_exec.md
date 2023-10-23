# finch exec

Run a command in a running container

```text
finch exec [flags] CONTAINER COMMAND [ARG...]
```

## Options

```text
  -d, --detach             Detached mode: run command in the background
  -e, --env stringArray    Set environment variables
      --env-file strings   Set environment variables from file
  -h, --help               help for exec
  -i, --interactive        Keep STDIN open even if not attached
      --privileged         Give extended privileges to the command
  -t, --tty                Allocate a pseudo-TTY
  -u, --user string        Username or UID (format: <name|uid>[:<group|gid>])
  -w, --workdir string     Working directory inside the container
```
