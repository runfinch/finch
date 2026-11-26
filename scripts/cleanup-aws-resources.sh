#!/bin/bash
set +e  # Continue on failures

# Default to us-east-1 if not set
AWS_DEFAULT_REGION=${AWS_DEFAULT_REGION:-us-east-1}

# Function to safely run AWS commands with retries
safe_aws_command() {
  local max_attempts=3
  local attempt=1
  local command="$*"
  while [ $attempt -le $max_attempts ]; do
    if eval "$command"; then
      return 0
    fi
    echo "Retry $attempt/$max_attempts failed: $command"
    sleep 5
    attempt=$((attempt + 1))
  done
  echo "Command failed after $max_attempts attempts: $command"
  return 1
}

# Clean up S3 buckets from SAM CLI test stacks
echo "=== Cleaning S3 buckets ==="
TEST_PATTERNS=("sam-app" "test-" "integration-test" "samcli" "aws-sam-cli-managed")

for pattern in "${TEST_PATTERNS[@]}"; do
  STACKS=$(aws cloudformation list-stacks --region "$AWS_DEFAULT_REGION" --stack-status-filter CREATE_COMPLETE UPDATE_COMPLETE ROLLBACK_COMPLETE UPDATE_ROLLBACK_COMPLETE --query "StackSummaries[?contains(StackName, '$pattern')].[StackName]" --output text 2>/dev/null || true)

  for stack in $STACKS; do
    echo "Processing stack: $stack"
    
    # Get S3 buckets from stack
    BUCKET_NAMES=$(aws cloudformation describe-stacks --stack-name "$stack" --region "$AWS_DEFAULT_REGION" --query 'Stacks[0].Outputs[?contains(OutputKey, `Bucket`) || contains(OutputKey, `bucket`)].OutputValue' --output text 2>/dev/null || true)
    RESOURCE_BUCKETS=$(aws cloudformation describe-stack-resources --stack-name "$stack" --region "$AWS_DEFAULT_REGION" --query 'StackResources[?ResourceType==`AWS::S3::Bucket`].PhysicalResourceId' --output text 2>/dev/null || true)

    # Empty buckets (don't delete them)
    for bucket in $BUCKET_NAMES $RESOURCE_BUCKETS; do
      if [ -n "$bucket" ] && [ "$bucket" != "None" ]; then
        echo "Emptying S3 bucket: $bucket"
        if aws s3api head-bucket --bucket "$bucket" 2>/dev/null; then
          safe_aws_command "aws s3 rm s3://$bucket --recursive --quiet" || true
          echo "✅ Emptied bucket: $bucket"
        fi
      fi
    done
  done
done

# Clean up ECR repositories
echo "=== Cleaning ECR repositories ==="
ECR_PATTERNS=("sam-app" "test-" "integration-test")
for pattern in "${ECR_PATTERNS[@]}"; do
  REPOS=$(aws ecr describe-repositories --region "$AWS_DEFAULT_REGION" --query "repositories[?contains(repositoryName, '$pattern')].repositoryName" --output text 2>/dev/null || true)
  for repo in $REPOS; do
    echo "Deleting ECR repository: $repo"
    safe_aws_command "aws ecr delete-repository --repository-name '$repo' --force --region $AWS_DEFAULT_REGION" || true
  done
done

echo "✅ Cleanup completed"
