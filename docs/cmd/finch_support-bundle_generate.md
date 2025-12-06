# finch support-bundle generate

Generates a collection of logs and configs that can be uploaded to a Github issue to help debug issues.

```text
  finch support-bundle generate [flags]
```

## Options

```text
      --exclude stringArray   files to exclude from the support bundle. If you specify a base name, all files matching that base name will be excluded. If you specify an absolute or relative path, only exact matches will be excluded. To exclude journal logs for a service, prefix the file path with "service":. To exclude all journal logs, use "service:all"
  -h, --help                  help for generate
      --include stringArray   additional files to include in the support bundle, specified by absolute or relative path. To include journal logs for a service, prefix the file path with "service:". To include a file from the VM, prefix the file path with "vm:"
```
