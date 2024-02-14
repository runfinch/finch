# finch completion zsh

Generate the autocompletion script for the zsh shell.

If shell completion is not already enabled in your environment you will need
to enable it.  You can execute the following once:

	echo "autoload -U compinit; compinit" >> ~/.zshrc

To load completions in your current shell session:

	source <(finch completion zsh)

To load completions for every new session, execute once:

####

```text
  finch completion zsh [flags]
```

## Options

```text
  -h, --help              help for zsh
      --no-descriptions   disable completion descriptions
```
