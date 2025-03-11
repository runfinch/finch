# finch logs

Fetch the logs of a container.

The following containers are supported:
- Containers created with 'finch run -d'. The log is currently empty for containers created without '-d'.
- Containers created with 'finch compose'.
- Containers created with Kubernetes (EXPERIMENTAL).

```text
finch logs [flags] CONTAINER
```

## Options

```text
  -f, --follow         Follow log output
  -h, --help           help for logs
      --since string   Show logs since timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)
  -n, --tail string    Number of lines to show from the end of the logs (default "all")
  -t, --timestamps     Show timestamps
      --until string   Show logs before a timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)
```

### Note
When running containers in detached mode (`run -d`) or in interactive mode (`run -it`) logs are persisted to a JSON log file by default, these can be accessed via the `finch logs` command.

When starting containers in attached mode (`start -a`), logs are directed to stdout and stderr of the terminal session. In this scenario:

- Logs are not persisted to a file by default.
- Users are responsible for log persistence if required.

### Important Considerations

- The default logging behavior can be overridden using logging options provided by finch.
- For long-running applications or when log persistence is crucial, consider using detached mode or implementing a custom logging solution when using attached mode.