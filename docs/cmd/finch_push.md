# finch push

Push an image or a repository to a registry. Optionally specify "ipfs://" or "ipns://" scheme to push image to IPFS.

```text
finch push [flags] NAME[:TAG]
```

## Options

```text
      --all-platforms                      Push content for all platforms
      --allow-nondistributable-artifacts   Allow pushing images with non-distributable blobs
      --cosign-key string                  Path to the private key file, KMS URI or Kubernetes Secret for --sign=cosign
      --estargz                            Convert the image into eStargz
  -h, --help                               help for push
      --ipfs-address string                multiaddr of IPFS API (default uses $IPFS_PATH env variable if defined or local directory ~/.ipfs)
      --ipfs-ensure-image                  Ensure the entire contents of the image is locally available before push (default true)
      --notation-key-name string           Signing key name for a key previously added to notation's key list for --sign=notation
      --platform strings                   Push content for a specific platform
  -q, --quiet                              Suppress verbose output
      --sign string                        Sign the image (none|cosign|notation (default "none")
      --soci-min-layer-size int            Minimum layer size to build zTOC for. Smaller layers won't have zTOC and not lazy pulled. Default is 10 MiB. (default -1)
      --soci-span-size int                 Span size that soci index uses to segment layer data. Default is 4 MiB. (default -1)
```
