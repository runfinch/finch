#!/bin/bash
# Script to restore default iptables policies without keeping custom chains

# Save current rules to a backup file with timestamp
BACKUP_FILE="iptables-backup-$(date +%Y%m%d-%H%M%S).rules"
echo "Creating backup of current rules to $BACKUP_FILE"
iptables-save > "$BACKUP_FILE"

echo "Current iptables rules before cleaning:"
iptables -L -v -n --line-numbers

# Flush all built-in chains
echo "Flushing all built-in chains..."
iptables -F INPUT
iptables -F OUTPUT
iptables -F FORWARD

# Reset default policies for built-in chains
echo "Setting default policies for built-in chains to ACCEPT..."
iptables -P INPUT ACCEPT
iptables -P OUTPUT ACCEPT
iptables -P FORWARD ACCEPT

# Flush all custom chains
echo "Flushing and deleting all custom chains..."
for chain in $(iptables -S | grep -E '^-N' | awk '{print $2}'); do
  echo "Flushing custom chain: $chain"
  iptables -F "$chain" || true
  echo "Deleting custom chain: $chain"
  iptables -X "$chain" || true
done

echo "Iptables rules after cleaning:"
iptables -L -v -n --line-numbers

echo "Iptables rules have been reset to default policies."
echo "If you need to restore the original configuration, run: iptables-restore < $BACKUP_FILE"
