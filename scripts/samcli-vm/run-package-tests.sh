#!/bin/bash
set -e

echo "=== PACKAGE TESTS - Started at $(date) ==="
touch /tmp/package_test_output.txt
chown ec2-user:staff /tmp/package_test_output.txt
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
  '$PYTHON_BINARY' -m pytest tests/integration/package/test_package_command_image.py -v --tb=short
" 2>&1 | tee /tmp/package_test_output.txt || true

# test_package_with_deep_nested_template_image: Expects Docker-specific push stream pattern.
# test_package_template_with_image_repositories_nested_stack_x: Push API stream differs from Docker.
# test_package_with_loadable_image_archive_0_template_image_load_yaml: Docker imports by digest,
#         Finch imports as "overlayfs:" tag causing image info lookup to fail.
cat > expected_package_failures.txt << 'EOF'
test_package_with_deep_nested_template_image
test_package_template_with_image_repositories_nested_stack
test_package_with_loadable_image_archive_0_template_image_load_yaml
EOF

# Validate test results
"$GITHUB_WORKSPACE"/scripts/validate-test-results.sh /tmp/package_test_output.txt expected_package_failures.txt "Package tests"
