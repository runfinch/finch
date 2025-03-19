# Registry Authentication

Finch supports multiple methods for authenticating with container registries to push and pull images.

## macOS and Windows

### Credential Helpers (Recommended)

Finch enables authentication using guest credential helpers. Guest credential helpers are expected to follow
the `docker-credential-*` naming convention.

Finch offers two types of credential helper integrations:

1. Managed credential helpers
1. Bring-Your-Own (BYO) credential helpers

#### Managed Credential Helpers

Managed credential helpers are installed and configured by Finch. This means the credential helper binary will be downloaded
to the host machine and a config.json will be created and configured inside the `$HOME/.finch` directory if it does not already
exist. Finch will ensure the credential helper binary is available to its container runtime stack with no additional action
required by the user.

##### Amazon ECR Credential Helper

The Amazon ECR credential helper enables seamless authentication with Amazon Elastic Container Registry (ECR).
This helper automatically handles the retrieval and renewal of ECR credentials for both public and private repositories.

###### Installation and Setup

1. Add `ecr-login` to `creds_helpers` in `finch.yaml`.

    ```yaml
    creds_helpers:
      - ecr-login
    ```

1. Stop and start the Finch guest machine for configuration to take effect.

    ```bash
    finch vm stop
    finch vm start
    ```

1. Verify credential helper configuration has been added to `$HOME/.finch/config.json`.
For example:

    ```json
    {
        "credsStore": "ecr-login"
    }
    ```

#### Bring-Your-Own (BYO) Credential Helpers

Bring-Your-Own credential helpers enables users to plug-and-play their own custom credential helpers.

##### Installation and Setup

1. Add credential helper to `creds_helpers` in `finch.yaml`.

    ```yaml
    creds_helpers:
      - secretservice
    ```

1. Download and install the Linux credential helper binary to `$HOME/.finch/creds-helpers` directory.
1. Add credential helper configuration to `$HOME/.finch/config.json`.

### Basic username/password authentication

Finch enables users to use basic username/password to authenticate with container image registries via `finch login` command.

```bash
localhost:~$ finch login
Enter Username: username
Enter Password: 
```

If the login has been successful, you should see:

```bash
Login Succeeded
```
