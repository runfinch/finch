# Health Check Support in Finch

Finch supports Docker-compatible health checks for containers, allowing users to monitor container health via a user-defined command.

## Configuration Options

| :zap: Requirement | finch >= 1.14.0 |
|-------------------|-----------------|

Health checks can be configured in multiple ways:

1. At container creation time using `finch run` or `finch create` with these flags:
   - `--health-cmd`: Command to run to check health
   - `--health-interval`: Time between running the check (default: 30s)
   - `--health-timeout`: Maximum time to allow one check to run (default: 30s)
   - `--health-retries`: Consecutive failures needed to report unhealthy (default: 3)
   - `--health-start-period`: Start period for the container to initialize before starting health-retries countdown
   - `--no-healthcheck`: Disable any container-specified HEALTHCHECK

2. At image build time using HEALTHCHECK in a Dockerfile

**Note:** The `--health-start-interval` option is currently not supported by finch.

## Configuration Priority

When a container is created, finch determines the health check configuration based on this priority:

1. CLI flags take highest precedence (e.g., `--health-cmd`, etc.)
2. If no CLI flags are set, finch will use any health check defined in the image
3. If neither is present, no health check will be configured

### Disabling Health Checks

You can disable health checks using the following flag during container create/run:

```bash
--no-healthcheck
```

### Running Health Checks Manually

Finch provides a container healthcheck command that can be manually triggered by the user. This command runs the
configured health check inside the container and reports the result. It serves as the entry point for executing
health checks, especially in scenarios where external scheduling is used.

Example:

```bash
finch container healthcheck <container-id>
```

## Automatic Health Checks with systemd

On Mac OS, Windows and Linux systems with systemd, finch automatically creates and manages systemd timer units through `nerdctl` to execute health checks at the configured intervals. This provides reliable scheduling and execution of health checks without requiring a persistent daemon.

### How It Works

1. When a container with health checks is created, finch (through `nerdctl`):
   - Creates a systemd timer unit for the container
   - Configures the timer according to the health check interval
   - Starts monitoring the container's health status

2. The health check status can be one of:
   - `starting`: During container initialization
   - `healthy`: When health checks are passing
   - `unhealthy`: After specified number of consecutive failures

## Examples

1. Basic health check that verifies a web server:

```bash
finch run -d --name web \
  --health-cmd="curl -f http://localhost/ || exit 1" \
  --health-interval=5s \
  --health-retries=3 \
  nginx
```

1. Health check with initialization period:

```bash
finch run -d --name app \
  --health-cmd="./health-check.sh" \
  --health-interval=30s \
  --health-timeout=10s \
  --health-retries=3 \
  --health-start-period=60s \
  myapp
```

1. Disable health checks:

```bash
finch run --no-healthcheck myapp
```
