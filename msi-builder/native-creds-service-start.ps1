param(
    [string]$InstallDir = $env:ProgramFiles + "\Finch"
)

$ServiceName = "FinchCredBridge"
$ServiceDisplayName = "Finch Credential Bridge"
$ServiceDescription = "Provides credential bridge functionality for Finch containers"
$ServiceBinary = Join-Path $InstallDir "finch-credhelper\finch-cred-bridge.exe"

Write-Host "Installing $ServiceDisplayName service..."

# Check if service already exists
$existingService = Get-Service -Name $ServiceName -ErrorAction SilentlyContinue
if ($existingService) {
    Write-Host "Service already exists, stopping and removing..."
    Stop-Service -Name $ServiceName -Force -ErrorAction SilentlyContinue
    & sc.exe delete $ServiceName
    Start-Sleep -Seconds 2
}

# Create the service to run as the current user
$currentUser = [System.Security.Principal.WindowsIdentity]::GetCurrent().Name
$result = & sc.exe create $ServiceName binPath= "`"$ServiceBinary`"" start= demand DisplayName= $ServiceDisplayName obj= $currentUser
if ($LASTEXITCODE -ne 0) {
    Write-Error "Failed to create service: $result"
    exit 1
}

# Set service description
& sc.exe description $ServiceName $ServiceDescription

# Secure credential helper files (Windows equivalent of chmod 700)
$credHelperDir = Join-Path $InstallDir "finch-credhelper"
icacls "$credHelperDir" /inheritance:r /grant:r "$env:USERNAME:(F)" /grant:r "Administrators:(F)" 2>$null
icacls "$credHelperDir\finch-cred-bridge.exe" /inheritance:r /grant:r "$env:USERNAME:(F)" /grant:r "Administrators:(F)" 2>$null
icacls "$credHelperDir\native-creds-service-start.ps1" /inheritance:r /grant:r "$env:USERNAME:(F)" /grant:r "Administrators:(F)" 2>$null
icacls "$credHelperDir\native-creds-service-stop.ps1" /inheritance:r /grant:r "$env:USERNAME:(F)" /grant:r "Administrators:(F)" 2>$null

Write-Host "$ServiceDisplayName service installed successfully"