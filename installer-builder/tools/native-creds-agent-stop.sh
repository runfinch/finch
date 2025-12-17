#!/bin/bash
set -e

PLIST_NAME="com.runfinch.cred-bridge.plist"
PLIST_PATH="$HOME/Library/LaunchAgents/$PLIST_NAME"

# Unload the LaunchAgent
launchctl unload $PLIST_PATH 2>/dev/null || true

# Remove the plist file
rm -f "$PLIST_PATH"

echo "Finch credential bridge LaunchAgent uninstalled"