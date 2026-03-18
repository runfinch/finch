#!/bin/bash
set -e

echo "=== START-LAMBDA TESTS - Started at $(date) ==="
touch /tmp/start_lambda_test_output.txt
chown ec2-user:staff /tmp/start_lambda_test_output.txt
su ec2-user -c "
  cd /Users/ec2-user/aws-sam-cli && \
  export PATH='/Users/ec2-user/Library/Python/$PYTHON_VERSION/bin:$PATH' && \
  export DOCKER_HOST='$DOCKER_HOST' && \
  export AWS_REGION='${AWS_DEFAULT_REGION:-us-east-1}' && \
  AWS_DEFAULT_REGION='${AWS_DEFAULT_REGION:-us-east-1}' \
  BY_CANARY='$BY_CANARY' \
  SAM_CLI_DEV='$SAM_CLI_DEV' \
  SAM_CLI_TELEMETRY='$SAM_CLI_TELEMETRY' \
  '$PYTHON_BINARY' -m pytest tests/integration/local/start_lambda -k 'not Terraform' -v --tb=short
" 2>&1 | tee /tmp/start_lambda_test_output.txt || true

# Callback tests are flaky and don't always fail. When they do fail, it's because
# Finch returns 'InvocationCompleted' while SAM CLI expects specific callback statuses
# like 'CallbackSucceeded' or 'CallbackFailed'.
cat > expected_start_lambda_failures.txt << 'EOF'
test_local_start_lambda_invoke_wait_for_callback_success_http_0_with_result
test_local_start_lambda_invoke_wait_for_callback_success_http_1_without_result
test_local_start_lambda_invoke_wait_for_callback_failure_http_0_all_parameters
test_local_start_lambda_invoke_wait_for_callback_failure_http_1_minimal_parameters
test_local_start_lambda_invoke_wait_for_callback_failure_http_2_error_message_only
EOF

# Validate test results
"$GITHUB_WORKSPACE"/scripts/validate-test-results.sh /tmp/start_lambda_test_output.txt expected_start_lambda_failures.txt "Start-Lambda tests"
