#!/bin/bash

#Generate application uninstallers for macOS.

#Parameters
DATE=`date +%Y-%m-%d`
TIME=`date +%H:%M:%S`
LOG_PREFIX="[$DATE $TIME]"

#Functions
log_info() {
    echo "${LOG_PREFIX}[INFO]" $1
}

log_warn() {
    echo "${LOG_PREFIX}[WARN]" $1
}

log_error() {
    echo "${LOG_PREFIX}[ERROR]" $1
}

#Check running user
if (( $EUID != 0 )); then
    echo "Please run as root."
    exit
fi

echo "Welcome to Finch Uninstaller"
echo "The following packages will be REMOVED:"
echo "  Finch-__VERSION__"
while true; do
    read -p "Do you wish to continue [Y/n]?" answer
    [[ $answer == "y" || $answer == "Y" || $answer == "" ]] && break
    [[ $answer == "n" || $answer == "N" ]] && exit 0
    echo "Please answer with 'y' or 'n'"
done


#Need to replace these with install preparation script
VERSION=__VERSION__
PRODUCT_HOME=/Applications/Finch

echo "Application uninstalling process started"
if [ "$$(readlink "/usr/local/bin/finch")" = "${PRODUCT_HOME}/bin/finch" ]; then sudo rm "/usr/local/bin/finch"; fi
-@rm -rf ${PRODUCT_HOME}/bin 2>/dev/null || true
-@rm -rf ${PRODUCT_HOME}/lima 2>/dev/null || true
-@rm -rf ${PRODUCT_HOME}/os 2>/dev/null || true
-@rm -rf ${PRODUCT_HOME}/dependencies 2>/dev/null || true
-@rm -rf ${PRODUCT_HOME}/config.yaml 2>/dev/null || true

echo "[1/3] [DONE] Successfully deleted shortcut links"


#forget from pkgutil
pkgutil --forget "org.Finch.$VERSION" > /dev/null 2>&1
if [ $? -eq 0 ]
then
  echo "[2/3] [DONE] Successfully deleted application informations"
else
  echo "[2/3] [ERROR] Could not delete application informations" >&2
fi

#remove application source distribution
[ -e "/Applications/Finch" ] && rm -rf "/Applications/Finch" && rm -rf "/opt/finch" && rm -rf "/private/var/run/finch-lima" && rm -rf "/private/etc/sudoers.d/finch-lima"
if [ $? -eq 0 ]
then
  echo "[3/3] [DONE] Successfully deleted application"
else
  echo "[3/3] [ERROR] Could not delete application" >&2
fi

sudo pkill '^socket_vmnet'
sudo pkill '^qemu-system-'

echo "Application uninstall process finished"
exit 0
