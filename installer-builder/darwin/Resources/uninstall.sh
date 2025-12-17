#!/bin/bash

#check running user
if (( $EUID != 0 )); then
    echo "Please run as root."
    exit
fi

echo "Finch-__VERSION__ will be REMOVED."
while true; do
    read -r -p "Do you wish to continue [Y/n]?" answer
    [[ $answer == "y" || $answer == "Y" || $answer == "" ]] && break
    [[ $answer == "n" || $answer == "N" ]] && exit 0
    echo "Please answer with 'y' or 'n'"
done

echo "Application uninstalling process started"
sudo pkill '^socket_vmnet'
sudo pkill '^qemu-system-'
sudo pkill '^limactl'

if [ "$$(readlink "/usr/local/bin/finch")" = "/Applications/Finch/bin/finch" ]; then sudo rm /usr/local/bin/finch; fi

echo "[1/4] [DONE] Successfully deleted shortcut links"

#forget from pkgutil
echo "Remove historical pkgutil packages..."
pkgutil --pkgs | grep '^org\.Finch\.' | while read -r pkg; do
    echo "Forgetting package $pkg"
    sudo pkgutil --forget "$pkg" > /dev/null 2>&1
done

if [ $? -eq 0 ]
then
  echo "[2/4] [DONE] Successfully deleted application informations"
else
  echo "[2/4] [ERROR] Could not delete application informations" >&2
fi

#remove credential bridge LaunchAgent
# handle the user who ran sudo ./uninstall.sh, or all users if run directly as root
REAL_USER="${SUDO_USER:-}"
if [ -n "$REAL_USER" ] && [ "$REAL_USER" != "root" ]; then
    # Single user cleanup (most common case)
    sudo -u "$REAL_USER" launchctl bootout gui/$(id -u "$REAL_USER")/com.runfinch.cred-bridge 2>/dev/null || true
    rm -f "/Users/$REAL_USER/Library/LaunchAgents/com.runfinch.cred-bridge.plist" 2>/dev/null || true
else
    # Cleanup for all users (fallback)
    for user_home in /Users/*; do
        if [ -d "$user_home/Library/LaunchAgents" ]; then
            username=$(basename "$user_home")
            sudo -u "$username" launchctl bootout gui/$(id -u "$username")/com.runfinch.cred-bridge 2>/dev/null || true
            rm -f "$user_home/Library/LaunchAgents/com.runfinch.cred-bridge.plist" 2>/dev/null || true
        fi
    done
fi

#remove application source distribution
[ -e "/Applications/Finch" ] && rm -rf /Applications/Finch && rm -rf /opt/finch && rm -rf /private/var/run/finch-lima && rm -rf /private/etc/sudoers.d/finch-lima
if [ $? -eq 0 ]
then
  echo "[3/4] [DONE] Successfully deleted application"
else
  echo "[3/4] [ERROR] Could not delete application" >&2
fi

#clean up ~/.finch directory
while true; do
  read -r -p "Delete ~/.finch containing persistent user data [Y/n]? " answer
  if [[ $answer == "y" || $answer == "Y" ]]
  then
    [ -d ~/.finch ] && rm -rf ~/.finch
    if [ $? -eq 0 ]
    then
        echo "[4/4] [DONE] Successfully deleted ~/.finch"
    else
        echo "[4/4] [ERROR] Could not delete ~/.finch" >&2
    fi
    break
  elif [[ $answer == "n" || $answer == "N" || $answer == "" ]]
  then
    echo "[4/4] Deletion of ~/.finch was aborted."
    break
  else
    echo "Please answer with 'y' or 'n'"
  fi
done

echo "Application uninstall process finished"
exit 0
