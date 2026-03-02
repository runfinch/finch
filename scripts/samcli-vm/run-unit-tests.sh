#!/bin/bash
set -e

echo "=== UNIT TESTS - Started at $(date) ==="

touch /tmp/unit_test_output.txt
chown ec2-user:staff /tmp/unit_test_output.txt
su ec2-user -c "
  cd /Users/ec2-user/aws-sam-cli && \
  export PATH='/Users/ec2-user/Library/Python/$PYTHON_VERSION/bin:$PATH' && \
  ulimit -n 65536 && \
  export AWS_REGION='${AWS_DEFAULT_REGION:-us-east-1}' && \
  AWS_DEFAULT_REGION='${AWS_DEFAULT_REGION:-us-east-1}' \
  BY_CANARY='$BY_CANARY' \
  SAM_CLI_DEV='$SAM_CLI_DEV' \
  SAM_CLI_TELEMETRY='$SAM_CLI_TELEMETRY' \
  make test
" 2>&1 | tee /tmp/unit_test_output.txt || true

echo ""
echo "=== PASSES ==="
grep "PASSED" /tmp/unit_test_output.txt || echo "No passes found"

echo ""
echo "=== FAILURES ==="
grep "FAILED" /tmp/unit_test_output.txt || echo "No failures found"

# Check for pytest summary
if ! grep -E "=+ .*(failed|passed|skipped|deselected|error).* =+$" /tmp/unit_test_output.txt | tail -1; then
  echo "❌ No pytest summary found - tests may not have run"
  exit 1
fi

# Check for positive number of passes
PASS_COUNT=$(grep -c "PASSED" /tmp/unit_test_output.txt || echo "0")
if [ "$PASS_COUNT" -eq 0 ]; then
  echo "❌ No tests passed - got $PASS_COUNT passes"
  exit 1
fi

# Check for errors in pytest summary
SUMMARY_LINE=$(grep -E "=+ .*(failed|passed|skipped|deselected|error).* =+$" /tmp/unit_test_output.txt | tail -1)
if echo "$SUMMARY_LINE" | grep -q "error"; then
  echo "❌ Test errors found in summary: $SUMMARY_LINE"
  exit 1
fi

# Check coverage requirement
if grep -q "Required test coverage of.*reached" /tmp/unit_test_output.txt; then
  echo "✅ Unit tests completed: $PASS_COUNT passes, required coverage reached"
  grep "Required test coverage of.*reached" /tmp/unit_test_output.txt
else
  echo "❌ Required test coverage not reached"
  exit 1
fi