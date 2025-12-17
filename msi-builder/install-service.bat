@echo off
REM Install Finch Credential Bridge Windows Service

set SERVICE_NAME=FinchCredBridge
set SERVICE_DISPLAY_NAME=Finch Credential Bridge
set SERVICE_DESCRIPTION=Provides credential bridge functionality for Finch containers
set SERVICE_BINARY=%~dp0finch-credhelper\finch-cred-bridge.exe

echo Installing %SERVICE_DISPLAY_NAME% service...

REM Create the service
sc create "%SERVICE_NAME%" binPath= "\"%SERVICE_BINARY%\"" start= demand DisplayName= "%SERVICE_DISPLAY_NAME%"
if %ERRORLEVEL% neq 0 (
    echo Failed to create service
    exit /b 1
)

REM Set service description
sc description "%SERVICE_NAME%" "%SERVICE_DESCRIPTION%"

echo %SERVICE_DISPLAY_NAME% service installed successfully
echo Use services.msc to manage the service