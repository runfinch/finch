$ServiceName = "FinchCredBridge"

Write-Host "Stopping and removing $ServiceName service..."

# Check if service exists
$existingService = Get-Service -Name $ServiceName -ErrorAction SilentlyContinue
if ($existingService) {
    # Stop the service
    Stop-Service -Name $ServiceName -Force -ErrorAction SilentlyContinue
    
    # Remove the service
    & sc.exe delete $ServiceName
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "$ServiceName service removed successfully"
    } else {
        Write-Warning "Failed to remove service, but continuing..."
    }
} else {
    Write-Host "$ServiceName service not found, nothing to remove"
}