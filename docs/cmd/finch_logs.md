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
