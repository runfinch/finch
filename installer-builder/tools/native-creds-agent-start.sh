#!/bin/bash
set -e

# Setting relevant paths
FINCH_INSTALL_DIR="/Applications/Finch"
TEMPLATE_PATH="$FINCH_INSTALL_DIR/finch-credhelper/com.runfinch.cred-bridge.plist.template"
PLIST_PATH="$HOME/Library/LaunchAgents/com.runfinch.cred-bridge.plist"
mkdir -p "$HOME/Library/LaunchAgents"

# Replace placeholders in template
sed -e "s|\$(FINCH_CREDHELPER_DIR)/finch-cred-bridge|$FINCH_INSTALL_DIR/finch-cred-bridge|g" \
    -e "s|\$(FINCH_CREDHELPER_SOCKET_LOCATION)|$HOME/.finch/native-creds.sock|g" \
    "$TEMPLATE_PATH" > "$PLIST_PATH"

# Load the .plist into LaunchAgent
launchctl bootstrap gui/$(id -u) "$PLIST_PATH"

echo "Finch credential bridge LaunchAgent installed and loaded"