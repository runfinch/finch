# Lazy-pulling using SOCI Snapshotter

| :bird: Requirement | finch >= 0.8.0 |
|--------------------|----------------|

## Using SOCI

[SOCI](https://github.com/awslabs/soci-snapshotter/tree/main) (short for “Seekable OCI” and pronounced “so-CHEE”) is a lazy-loading snapshotter that is able to skip the build-time conversion step when loading an image.

SOCI does this by using a special artifact called the SOCI index that is comprosied of zTOCs that can be used to access parts of an image layer without fully unpacking

the layer. By creating a seperat index and not converting the image, SOCI is able to keep image signatures consistent.

- To enable SOCI add `"- soci"` to the `snapshotters` list in the finch config file (`${HOME}/.finch/finch.yaml`):

```yaml
snapshotters: 
  - soci
```

This will set SOCI as your default snapshotter and you can then run commands as usual and SOCI will be used (i.e. `finch pull ...` will use SOCI by default).
If you don't want SOCI be the default snapshotter, but would still like it to be installed on the VM for later use you can set `snapshotters` as:

```yaml
snapshotters:
  - overlayfs
  - soci
```

> **NOTE**
> More info on using the `snapshotters` config option can be found in [`snapshotters.md`](https://github.com/runfinch/finch/blob/main/docs/design/snapshotters.md).

To get the full benefit of SOCI, users need to pull and run images that have a SOCI index. Although creating a SOCI index for images is not yet supported on Finch,
images that already have SOCI indices can be found [here](https://gallery.ecr.aws/soci-workshop-examples?page=1).
Indices can also be created using [ECR](https://aws-ia.github.io/cfn-ecr-aws-soci-index-builder/).

## Performance Benefit

In many cases, SOCI provides container start-up improvements when compared to other snapshotters.
As image size increases, the benefits of using SOCI often become even more significant.
This can be seen with some of the performance benefits that customers saw after SOCI was integrated with Fargate
([https://aws.amazon.com/blogs/aws/aws-fargate-enables-faster-container-startup-using-seekable-oci/](https://aws.amazon.com/blogs/aws/aws-fargate-enables-faster-container-startup-using-seekable-oci/)).

### Example

*Pulling an image with overlayfs:*

```console
$ finch --snapshotter=overlayfs pull public.ecr.aws/soci-workshop-examples/rabbitmq:latest
public.ecr.aws/soci-workshop-examples/rabbitmq:latest:                            resolved       |++++++++++++++++++++++++++++++++++++++|
manifest-sha256:7d4d0320157c1493853df75ad68f2abefcc397c38023c499d6fd1d0736a93577: done           |++++++++++++++++++++++++++++++++++++++|
config-sha256:74a35d13c21f7cada5874b4b66e1e930efe0ab8d2bea54bc90d93cebc1d44d6f:   done           |++++++++++++++++++++++++++++++++++++++|
layer-sha256:a571e766846a7a8f25f49ac22f5e2128e6b4ad17ad0bbd5d7fec8c5f6707d140:    done           |++++++++++++++++++++++++++++++++++++++|
layer-sha256:99803d4b97f3db529ae9ca4174b0951afac6b309e7deaa8ec3214c584e02b3a8:    done           |++++++++++++++++++++++++++++++++++++++|
layer-sha256:6ae56123b5f3fd69528cfef8099f28287eb22a574c5c5e7a7d479129f24c9956:    done           |++++++++++++++++++++++++++++++++++++++|
layer-sha256:1e76166effaab90f19fe3168cc354686c3195ca857a567c974cba12cfb36dc3f:    done           |++++++++++++++++++++++++++++++++++++++|
layer-sha256:778d7f6440dcc8d94f29eab78819fdbd296217cbeee40364f4cc9e9fc41790a3:    done           |++++++++++++++++++++++++++++++++++++++|
layer-sha256:13fff0192353d16aeb17f4f4f33e2636bf2120ae512c0cf7dc9abcf5a92344ba:    done           |++++++++++++++++++++++++++++++++++++++|
layer-sha256:d51b58b57cc4e9cfbf50fe8256ae47ece277221d320e0ee02cf9ec098052874e:    done           |++++++++++++++++++++++++++++++++++++++|
layer-sha256:491a78add9a9d6a3bff4c679a77161343f3f634161a81c4b2c8d7bcbed19e09e:    done           |++++++++++++++++++++++++++++++++++++++|
layer-sha256:bff9333d09b006aa7e28e75b69fa53452a8c649a279ff1462f53be9b32ef893f:    done           |++++++++++++++++++++++++++++++++++++++|
layer-sha256:31ce84a58f6fbf0179f8550cbc0ddd05018aa480387e20ee1aff1ca64bcba5a4:    done           |++++++++++++++++++++++++++++++++++++++|
elapsed: 12.5s                                                                    total:  106.0  (8.5 MiB/s)
```

*Pulling the same image with SOCI:*

```console
$ finch pull public.ecr.aws/soci-workshop-examples/rabbitmq:latest
public.ecr.aws/soci-workshop-examples/rabbitmq:latest:                            resolved       |++++++++++++++++++++++++++++++++++++++|
manifest-sha256:7d4d0320157c1493853df75ad68f2abefcc397c38023c499d6fd1d0736a93577: done           |++++++++++++++++++++++++++++++++++++++|
config-sha256:74a35d13c21f7cada5874b4b66e1e930efe0ab8d2bea54bc90d93cebc1d44d6f:   done           |++++++++++++++++++++++++++++++++++++++|
elapsed: 6.7 s
```

From this small example, we can see how much more efficient SOCI was in lazy-loading the image.

> **NOTE**
> Currently only `finch pull` and `finch run` have SOCI support (as of [Nerdctl 1.5.0](https://github.com/containerd/nerdctl/releases/tag/v1.5.0))
