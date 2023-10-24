# finch ps

List containers

```text
finch ps [flags]
```

## Options

```text
  -a, --all              Show all containers (default shows just running)
  -f, --filter strings   Filter matches containers based on given conditions
      --format string    Format the output using the given Go template, e.g, '{{json .}}', 'wide'
  -h, --help             help for ps
  -n, --last int         Show n last created containers (includes all states) (default -1)
  -l, --latest           Show the latest created container (includes all states)
      --no-trunc         Don't truncate output
  -q, --quiet            Only display container IDs
  -s, --size             Display total file sizes
```
