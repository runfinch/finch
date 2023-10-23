# finch completion powershell

Generate the autocompletion script for powershell.

To load completions in your current shell session:

	finch completion powershell | Out-String | Invoke-Expression

To load completions for every new session, add the output of the above command
to your powershell profile.

```text
  finch completion powershell [flags]
```

## Options

```text
  -h, --help              help for powershell
      --no-descriptions   disable completion descriptions
```
