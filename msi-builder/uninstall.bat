@echo off
SET InstallDir=%~1

:: Stop and remove any running instance
finch.exe vm stop -f
finch.exe vm remove -f

:: Just in case
wsl --terminate lima-finch
wsl --unregister lima-finch

:: Delete files and directories if they exist
if exist "%InstallDir%\lima\" rmdir /s /q "%InstallDir%\lima\"