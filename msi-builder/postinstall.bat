@echo off
SET InstallDir=%~1
SET FilePath=%InstallDir%\os\finch.yaml
SET CredHelperDir=%InstallDir%\finch-credhelper

if exist "%FilePath%" (
    powershell -Command "$installPath = '%InstallDir%'.Replace('\', '/'); $content = Get-Content '%FilePath%' -Raw; $content = $content -replace '__INSTALLFOLDER__', $installPath; $content = $content.Replace(\"`r`n\", \"`n\"); $utf8NoBom = New-Object System.Text.UTF8Encoding $false; [System.IO.File]::WriteAllText('%FilePath%', $content, $utf8NoBom)"
)

icacls "%InstallDir%\lima\data" /grant Users:(OI)(CI)M

:: Install credential bridge service
if exist "%CredHelperDir%\native-creds-service-start.ps1" (
    powershell -ExecutionPolicy Bypass -File "%CredHelperDir%\native-creds-service-start.ps1" -InstallDir "%InstallDir%"
)

:: Delete files and directories if they exist
if exist "%InstallDir%\lima\data\finch\" rmdir /s /q "%InstallDir%\lima\data\finch\"
if exist "%InstallDir%\lima\data\_config\override.yaml" del /f /q "%InstallDir%\lima\data\_config\override.yaml"
if exist "%InstallDir%\lima\data\_config\default.yaml" del /f /q "%InstallDir%\lima\data\_config\default.yaml"
if exist "%InstallDir%\lima\data\_config\user" del /f /q "%InstallDir%\lima\data\_config\user"
if exist "%InstallDir%\lima\data\_config\user.pub" del /f /q "%InstallDir%\lima\data\_config\user.pub"
if exist "%InstallDir%\lima\data\_networks\" rmdir /s /q "%InstallDir%\lima\data\_networks\"
if exist "%InstallDir%\lima\data\_disks\" rmdir /s /q "%InstallDir%\lima\data\_disks\"
