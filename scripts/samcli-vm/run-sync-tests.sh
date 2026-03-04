#!/bin/bash
set -e

echo "=== SYNC TESTS - Started at $(date) ==="
touch /tmp/sync_test_output.txt
chown ec2-user:staff /tmp/sync_test_output.txt
su ec2-user -c "
  cd /Users/ec2-user/aws-sam-cli && \
  export PATH='/Users/ec2-user/Library/Python/$PYTHON_VERSION/bin:$PATH' && \
  export DOCKER_HOST='$DOCKER_HOST' && \
  export AWS_REGION='${AWS_DEFAULT_REGION:-us-east-1}' && \
  export AWS_DEFAULT_REGION='${AWS_DEFAULT_REGION:-us-east-1}' && \
  export AWS_EC2_METADATA_DISABLED=true && \
  AWS_EC2_METADATA_DISABLED=true \
  BY_CANARY='$BY_CANARY' \
  SAM_CLI_DEV='$SAM_CLI_DEV' \
  SAM_CLI_TELEMETRY='$SAM_CLI_TELEMETRY' \
  '$PYTHON_BINARY' -m pytest tests/integration/sync -k 'image' -v --tb=short
" 2>&1 | tee /tmp/sync_test_output.txt || true

# Create empty expected failures file (should pass completely)
touch expected_sync_failures.txt

# Validate test results
$GITHUB_WORKSPACE/scripts/validate-test-results.sh /tmp/sync_test_output.txt expected_sync_failures.txt "Sync tests"