# finch support-bundle generate

Generates a collection of logs and configs that can be uploaded to a Github issue to help debug issues.

```text
  finch support-bundle generate [flags]
```

## Options

```text
      --exclude stringArray   files to exclude from the support bundle. if you specify a base name, all files matching that base name will be excluded. if you specify an absolute or relative path, only exact matches will be excluded
  -h, --help                  help for generate
      --include stringArray   additional files to include in the support bundle, specified by absolute or relative path. to include a file from the VM, prefix the file path with "vm:"
```
