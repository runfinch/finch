#!/bin/bash
set -e

echo "=== INVOKE TESTS - Started at $(date) ==="
touch /tmp/invoke_test_output.txt
chown ec2-user:staff /tmp/invoke_test_output.txt

su ec2-user -c "
  cd /Users/ec2-user/aws-sam-cli && \
  export PATH='/Users/ec2-user/Library/Python/$PYTHON_VERSION/bin:$PATH' && \
  export DOCKER_HOST='$DOCKER_HOST' && \
  export AWS_REGION='${AWS_DEFAULT_REGION:-us-east-1}' && \
  AWS_DEFAULT_REGION='${AWS_DEFAULT_REGION:-us-east-1}' \
  BY_CANARY='$BY_CANARY' \
  SAM_CLI_DEV='$SAM_CLI_DEV' \
  SAM_CLI_TELEMETRY='$SAM_CLI_TELEMETRY' \
  '$PYTHON_BINARY' -m pytest tests/integration/local/invoke -k 'not Terraform' -v --tb=short
" 2>&1 | tee /tmp/invoke_test_output.txt || true

# test_invoke_with_error_during_image_build: Build error message differs from expected.
# test_invoke_with_timeout_set_X_TimeoutFunction: Returns timeout message instead of empty string,
#         but matches actual Lambda service behavior.
# test_building_new_rapid_image_removes_old_rapid_images: Cannot remove images with same digest,
#         Docker creates different IDs for each.
# test_caching_two_layers and test_caching_two_layers_with_layer_cache_env_set: error due to sequential
#         test runs within invoke. Work when run in isolation and locally.
# test_successful_invoke: Related to symlink mount errors due to permissions. Works locally.
cat > expected_invoke_failures.txt << 'EOF'
test_invoke_with_error_during_image_build
test_invoke_with_timeout_set_0_TimeoutFunction
test_invoke_with_timeout_set_1_TimeoutFunctionWithParameter
test_invoke_with_timeout_set_2_TimeoutFunctionWithStringParameter
test_building_new_rapid_image_removes_old_rapid_images
test_caching_two_layers
test_caching_two_layers_with_layer_cache_env_set
test_successful_invoke
EOF

# Validate test results
$GITHUB_WORKSPACE/scripts/validate-test-results.sh /tmp/invoke_test_output.txt expected_invoke_failures.txt "Invoke tests"