@echo off
SET InstallDir=%~1
SET FilePath=%InstallDir%\os\finch.yaml

if exist "%FilePath%" (
    powershell -Command "$installPath = '%InstallDir%'.Replace('\', '/'); (Get-Content '%FilePath%') -replace '__INSTALLFOLDER__', $installPath | Set-Content '%FilePath%'"
)

:: Delete files and directories if they exist
if exist "%InstallDir%\lima\data\finch\" rmdir /s /q "%InstallDir%\lima\data\finch\"
if exist "%InstallDir%\lima\data\_config\override.yaml" del /f /q "%InstallDir%\lima\data\_config\override.yaml"
if exist "%InstallDir%\lima\data\_config\user" del /f /q "%InstallDir%\lima\data\_config\user"
if exist "%InstallDir%\lima\data\_config\user.pub" del /f /q "%InstallDir%\lima\data\_config\user.pub"
if exist "%InstallDir%\lima\data\_networks\" rmdir /s /q "%InstallDir%\lima\data\_networks\"
if exist "%InstallDir%\lima\data\_disks\" rmdir /s /q "%InstallDir%\lima\data\_disks\"
