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

if [ "$(readlink '/usr/local/bin/finch')" = "/Applications/Finch/bin/finch" ]; then sudo rm /usr/local/bin/finch; fi

echo "[1/3] [DONE] Successfully deleted shortcut links"

#forget from pkgutil
pkgutil --forget "org.Finch.__VERSION__" > /dev/null 2>&1
if [ $? -eq 0 ]
then
  echo "[2/3] [DONE] Successfully deleted application informations"
else
  echo "[2/3] [ERROR] Could not delete application informations" >&2
fi

#remove application source distribution
[ -e "/Applications/Finch" ] && rm -rf /Applications/Finch && rm -rf /opt/finch && rm -rf /private/var/run/finch-lima && rm -rf /private/etc/sudoers.d/finch-lima
if [ $? -eq 0 ]
then
  echo "[3/3] [DONE] Successfully deleted application"
else
  echo "[3/3] [ERROR] Could not delete application" >&2
fi

echo "Application uninstall process finished"
exit 0
