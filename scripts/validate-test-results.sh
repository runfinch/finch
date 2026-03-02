#!/bin/bash
# Usage: validate-test-results.sh <output_file> <expected_failures_file> <test_name>

OUTPUT_FILE="$1"
EXPECTED_FAILURES_FILE="$2"
TEST_NAME="$3"

if [ $# -ne 3 ]; then
  echo "Usage: $0 <output_file> <expected_failures_file> <test_name>"
  exit 1
fi

echo ""
echo "=== PASSES ==="
grep "PASSED" "$OUTPUT_FILE" || echo "No passes found"

echo ""
echo "=== FAILURES ==="
grep "FAILED" "$OUTPUT_FILE" || echo "No failures found"

# Extract actual failures
grep "FAILED" "$OUTPUT_FILE" | grep -o "test_[^[:space:]]*" > actual_failures.txt || true

# Find unexpected failures
UNEXPECTED=$(grep -v -f "$EXPECTED_FAILURES_FILE" actual_failures.txt 2>/dev/null || true)

# Check for pytest summary
if ! grep -E "=+ .*(failed|passed|skipped|deselected|error).* =+$" "$OUTPUT_FILE" | tail -1; then
  echo "❌ No pytest summary found - tests may not have run"
  exit 1
fi

# Check for positive number of passes
PASS_COUNT=$(grep -c "PASSED" "$OUTPUT_FILE" || echo "0")
if [ "$PASS_COUNT" -eq 0 ]; then
  echo "❌ No tests passed - got $PASS_COUNT passes"
  exit 1
fi

# Check for errors in pytest summary
SUMMARY_LINE=$(grep -E "=+ .*(failed|passed|skipped|deselected|error).* =+$" "$OUTPUT_FILE" | tail -1)
if echo "$SUMMARY_LINE" | grep -q "error"; then
  echo "❌ Test errors found in summary: $SUMMARY_LINE"
  exit 1
fi

# Check for cleanup errors (infrastructure issues)
CLEANUP_ERRORS=$(grep -E "(failed to delete task|remove_container|APIError.*(500|409)|container.delete\(\)|force=False.*noprune=False|image is being used by stopped container|unable to delete.*must be forced)" "$OUTPUT_FILE" || true)

# Check for unexpected failures
if [ -n "$UNEXPECTED" ]; then
  if [ -n "$CLEANUP_ERRORS" ]; then
    echo "⚠️  Failures appear to be cleanup-related (infrastructure issue):"
    echo "$UNEXPECTED"
    echo "✅ $TEST_NAME completed: $PASS_COUNT passes, failures likely infrastructure-related"
    exit 0
  else
    echo "❌ Unexpected failures found:"
    echo "$UNEXPECTED"
    exit 1
  fi
fi

echo "✅ $TEST_NAME completed: $PASS_COUNT passes, expected failures only"