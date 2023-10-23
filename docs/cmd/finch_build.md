# finch build

Build an image from a Dockerfile. Needs buildkitd to be running.
If Dockerfile is not present and -f is not specified, it will look for Containerfile and build with it.

```text
finch build [flags] PATH
```

## Options

```text
      --build-arg stringArray    Set build-time variables
      --buildkit-host string     BuildKit address [$BUILDKIT_HOST] (default "unix:///run/buildkit/buildkitd.sock")
      --cache-from stringArray   External cache sources (eg. user/app:cache, type=local,src=path/to/dir)
      --cache-to stringArray     Cache export destinations (eg. user/app:cache, type=local,dest=path/to/dir)
  -f, --file string              Name of the Dockerfile
  -h, --help                     help for build
      --iidfile string           Write the image ID to the file
      --label stringArray        Set metadata for an image
      --network string           Set type of network for build (format:network=default|none|host) (default "default")
      --no-cache                 Do not use cache when building the image
  -o, --output string            Output destination (format: type=local,dest=path)
      --platform strings         Set target platform for build (e.g., "amd64", "arm64")
      --progress string          Set type of progress output (auto, plain, tty). Use plain to show container output (default "auto")
  -q, --quiet                    Suppress the build output and print image ID on success
      --rm                       Remove intermediate containers after a successful build (default true)
      --secret stringArray       Secret file to expose to the build: id=mysecret,src=/local/secret
      --ssh stringArray          SSH agent socket or keys to expose to the build (format: default|<id>[=<socket>|<key>[,<key>]])
  -t, --tag stringArray          Name and optionally a tag in the 'name:tag' format
      --target string            Set the target build stage to build
```
