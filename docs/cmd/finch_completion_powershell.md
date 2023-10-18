---
title: "finch completion powershell"
---
## finch completion powershell

Generate the autocompletion script for powershell.

To load completions in your current shell session:

	finch completion powershell | Out-String | Invoke-Expression

To load completions for every new session, add the output of the above command
to your powershell profile.

```
  finch completion powershell [flags]
```

### Options
```
  -h, --help              help for powershell
      --no-descriptions   disable completion descriptions
```
