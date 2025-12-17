#!/bin/bash
set -e

PLIST_PATH="$HOME/Library/LaunchAgents/com.runfinch.cred-bridge.plist"

# Unload the LaunchAgent
launchctl bootout gui/$(id -u)/com.runfinch.cred-bridge 2>/dev/null || true

# Remove the plist file
rm -f "$PLIST_PATH"

echo "Finch credential bridge LaunchAgent uninstalled"