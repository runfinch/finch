# finch images

List images

## Properties

- REPOSITORY: Repository
- TAG:        Tag
- NAME:       Name of the image, --names for skip parsing as repository and tag.
- IMAGE ID:   OCI Digest. Usually different from Docker image ID. Shared for multi-platform images.
- CREATED:    Created time
- PLATFORM:   Platform
- SIZE:       Size of the unpacked snapshots
- BLOB SIZE:  Size of the blobs (such as layer tarballs) in the content store

```text
finch images [flags] [REPOSITORY[:TAG]]
```

## Options

```text
  -a, --all              (unimplemented yet, always true) (default true)
      --digests          Show digests (compatible with Docker, unlike ID)
  -f, --filter strings   Filter output based on conditions provided
      --format string    Format the output using the given Go template, e.g, '{{json .}}', 'wide'
  -h, --help             help for images
      --names            Show image names
      --no-trunc         Don't truncate output
  -q, --quiet            Only show numeric IDs
```
