@echo off
SET InstallDir=%~1

:: Delete files and directories if they exist
if exist "%InstallDir%\lima\" rmdir /s /q "%InstallDir%\lima\"