---
title: "finch commit"
---

## finch commit

Create a new image from a container's changes

```bash
finch commit [flags] CONTAINER REPOSITORY[:TAG]
```

### Options

```bash
  -a, --author string        Author (e.g., "finch contributor <finch-dev@example.com>")
  -c, --change stringArray   Apply Dockerfile instruction to the created image (supported directives: [CMD, ENTRYPOINT])
  -h, --help                 help for commit
  -m, --message string       Commit message
  -p, --pause                Pause container during commit (default true)
```
