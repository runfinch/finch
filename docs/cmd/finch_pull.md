# finch pull

Pull an image from a registry. Optionally specify "ipfs://" or "ipns://" scheme to pull image from IPFS.

```text
finch pull [flags] NAME[:TAG]
```

## Options

```text
      --all-platforms                                  Pull content for all platforms
      --cosign-certificate-identity string             The identity expected in a valid Fulcio certificate for --verify=cosign. Valid values include email address, DNS names, IP addresses, and URIs. Either --cosign-certificate-identity or --cosign-certificate-identity-regexp must be set for keyless flows
      --cosign-certificate-identity-regexp string      A regular expression alternative to --cosign-certificate-identity for --verify=cosign. Accepts the Go regular expression syntax described at https://golang.org/s/re2syntax. Either --cosign-certificate-identity or --cosign-certificate-identity-regexp must be set for keyless flows
      --cosign-certificate-oidc-issuer string          The OIDC issuer expected in a valid Fulcio certificate for --verify=cosign,, e.g. https://token.actions.githubusercontent.com or https://oauth2.sigstore.dev/auth. Either --cosign-certificate-oidc-issuer or --cosign-certificate-oidc-issuer-regexp must be set for keyless flows
      --cosign-certificate-oidc-issuer-regexp string   A regular expression alternative to --certificate-oidc-issuer for --verify=cosign,. Accepts the Go regular expression syntax described at https://golang.org/s/re2syntax. Either --cosign-certificate-oidc-issuer or --cosign-certificate-oidc-issuer-regexp must be set for keyless flows
      --cosign-key string                              Path to the public key file, KMS, URI or Kubernetes Secret for --verify=cosign
  -h, --help                                           help for pull
      --ipfs-address string                            multiaddr of IPFS API (default uses $IPFS_PATH env variable if defined or local directory ~/.ipfs)
      --platform strings                               Pull content for a specific platform
  -q, --quiet                                          Suppress verbose output
      --unpack string                                  Unpack the image for the current single platform (auto/true/false) (default "auto")
      --verify string                                  Verify the image (none|cosign|notation) (default "none")
```
