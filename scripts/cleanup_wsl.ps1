# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: Apache-2.0

# We want these cleanup commands to always run, ignore errors so the step completes.
$ErrorActionPreference = 'Ignore'

taskkill /f /im wslservice.exe 2> nul || cmd /c "exit /b 0"
sc query LxssManager | findstr "STATE" | findstr /C:"STOPPED" > nul && net start LxssManager
wsl --list --verbose --all

# Attempt to shut down WSL if any distribution is running
if (wsl --list --verbose | findstr /C:"Running" > nul) {
    timeout 60s wsl --shutdown
    # Forcefully kill WSL if still running
    if (Get-Process -Name "wsl" -ErrorAction SilentlyContinue) {
        Stop-Process -Name "wsl" -Force
    }
    echo "WSL has been shut down successfully."
}

# Unregister 'lima-finch' distribution if it exists
if (wsl --list --quiet | findstr /C:"lima-finch" > nul) {
    wsl --unregister lima-finch
    echo "'lima-finch' has been unregistered successfully."
}

wsl --list --verbose --all
Remove-Item C:\Users\Administrator\AppData\Local\.finch -Recurse