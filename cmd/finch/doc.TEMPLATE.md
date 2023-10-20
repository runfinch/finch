---
title: "{{ .CmdPath }}"
---
## {{ .CmdPath }}{{if gt (len .Description) 0}}

{{ .Description }}

{{end}}

{{if gt (len .Properties) 0}}### Properties

{{.Properties}}

{{end}}```
{{ .Usage }}
```{{if gt (len .Aliases) 0}}

### Aliases
{{.Aliases}}
{{end}}{{if gt (len .Examples) 0}}

### Examples
{{.Examples}}
{{end}}{{if gt (len .Commands) 0}}

### Commands
```
{{ .Commands }}
```{{end}}{{if gt (len .Options) 0}}

### Options
```
{{ .Options }}
```{{end}}{{if gt (len .SeeAlso) 0}}

### SEE ALSO

{{ .SeeAlso }}
{{end}}
