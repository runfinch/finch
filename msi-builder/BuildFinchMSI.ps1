param(
    [Parameter(Mandatory=$true)]
    $Version,
    $SourcePath = (Join-Path (Split-Path $PSScriptRoot -Parent) "_output")
)

# 0. Get the directory path of the currently executing script
$scriptDirectory = $PSScriptRoot

Write-Host "0. Finch MSI generation started..."
Write-Host "version: $Version,"
Write-Host "finch original build path: $SourcePath,"
Write-Host "script root: $scriptDirectory,"

# 1. Prepare the build directory
Write-Host "1. Prepare for build directory..."
# Initialize build folder
$buildFolderPath = Join-Path -Path $scriptDirectory -ChildPath "build"

# Clean up old build and create new build directory
if (Test-Path $buildFolderPath) {
    Remove-Item -Path $buildFolderPath -Recurse -Force
}

New-Item -Path $buildFolderPath -ItemType Directory
Write-Host "build folder is created."

# 2. Download WiX Tool binaries
Write-Host "2. Download Wix Tool binaries..."
$url = "https://github.com/wixtoolset/wix3/releases/download/wix3112rtm/wix311-binaries.zip"
$downloadPath = Join-Path -Path $scriptDirectory -ChildPath "build\WiXToolset\wix311-binaries.zip"
$wixToolPath = Join-Path -Path $scriptDirectory -ChildPath "build\WiXToolset\"
New-Item -Path $wixToolPath -ItemType Directory

Invoke-WebRequest -Uri $url -OutFile $downloadPath
Expand-Archive -Path $downloadPath -DestinationPath $wixToolPath
Remove-Item -Path $downloadPath
Write-Host "Wix Tool is ready."

# 3. Copy resources to MSI build directory
Write-Host "3. Copy finch resources..."
$finchResourcePath = Join-Path -Path $scriptDirectory -ChildPath "build\Finch"
New-Item -Path $finchResourcePath -ItemType Directory

# Copy files recursively from finch original build path to MSI tool Finch resources path
Get-ChildItem -Path $SourcePath -Recurse | 
    Where-Object { !$_.PSIsContainer } | 
    ForEach-Object {
        $destFile = $finchResourcePath + $_.FullName.Substring($SourcePath.Length)
        $destDir = [System.IO.Path]::GetDirectoryName($destFile)
        if (-not (Test-Path $destDir)) {
            New-Item -Path $destDir -ItemType Directory
        }
        Copy-Item -Path $_.FullName -Destination $destFile
    }

Write-Host "Files copied successfully."

# 4. Put additional resources to MSI build directory, e.g., postinstall, uninstall script and Finch license
Write-Host "4. Copy extra scripts, license and icon..."
Copy-Item -Path (Join-Path -Path $scriptDirectory -ChildPath "postinstall.bat") -Destination (Join-Path -Path $scriptDirectory -ChildPath "build\Finch")
Copy-Item -Path (Join-Path -Path $scriptDirectory -ChildPath "uninstall.bat") -Destination (Join-Path -Path $scriptDirectory -ChildPath "build\Finch")
Copy-Item -Path (Join-Path -Path $scriptDirectory -ChildPath "removevm.bat") -Destination (Join-Path -Path $scriptDirectory -ChildPath "build\Finch")
Copy-Item -Path (Join-Path -Path $scriptDirectory -ChildPath "finch.ico") -Destination (Join-Path -Path $scriptDirectory -ChildPath "build\Finch")
Copy-Item -Path (Join-Path -Path $scriptDirectory -ChildPath "LICENSE.rtf") -Destination (Join-Path -Path $scriptDirectory -ChildPath "build\Finch")
Write-Host "Files copied successfully."

# 5. Copy WiX template and update resources path and version
Write-Host "5. Copy Wix template and update value..."

# Seems like version must follow major.minor.patch format https://docs.firegiant.com/wix/schema/wxs/validate/#ProductVersion.
# So sanitize version for wix, but keep original for filename.
$wixVersion = $Version -replace '^v', '' -replace '-.*$', ''
Write-Host "Original version: $Version, WiX version: $wixVersion"

Copy-Item -Path (Join-Path -Path $scriptDirectory -ChildPath "FinchMSITemplate.wxs") -Destination (Join-Path -Path $scriptDirectory -ChildPath "build\")
$wxsFilePath = Join-Path -Path $scriptDirectory -ChildPath "build\FinchMSITemplate.wxs"

# Search finch-roofs-production-amd64-*.tar.gz and get its name
$roofsPath = Join-Path $PSScriptRoot "build\Finch\os"
$roofsFile = Get-ChildItem -Path $roofsPath -Filter "finch-rootfs-production-amd64-*.tar.gz" | Select-Object -First 1
$roofsFileName = $roofsFile.Name

# Replace __ROOTFS__, __SOURCE__ and __VERSION__
$content = Get-Content -Path $wxsFilePath -Raw
$updatedContent = $content -replace '__SOURCE__', $finchResourcePath `
    -replace '__VERSION__', $wixVersion `
    -replace '__ROOTFS__', $roofsFileName
$updatedContent | Set-Content -Path $wxsFilePath
Write-Host "Source path and version are updated successfully."

# 6. Build MSI
Write-Host "6. Start build MSI..."
$wixobjPath = Join-Path -Path $buildFolderPath -ChildPath "FinchMSITemplate.wixobj"
$msiPath =  Join-Path -Path $buildFolderPath -ChildPath "Finch-$Version.msi"

$candlePath = Join-Path -Path $wixToolPath -ChildPath "candle.exe"
$candleArgs = "$wxsFilePath -out $wixobjPath"
$lightPath = Join-Path -Path $wixToolPath -ChildPath "light.exe"
$lightArgs = "$wixobjPath -ext WixUIExtension -out $msiPath"

Write-Host "Candle started..."
$candleProcess = Start-Process -FilePath $candlePath -ArgumentList $candleArgs -PassThru -NoNewWindow -RedirectStandardOutput "$buildFolderPath\candle_stdout.txt" -RedirectStandardError "$buildFolderPath\candle_stderr.txt" -Wait
if ($candleProcess.ExitCode -ne 0) {
    Write-Error "Candle failed with exit code: $($candleProcess.ExitCode)"
    Write-Host "--- Candle stdout ---"
    Get-Content "$buildFolderPath\candle_stdout.txt"
    Write-Host "--- Candle stderr ---"
    Get-Content "$buildFolderPath\candle_stderr.txt"
    exit 1
} else {
    Write-Host "Candle finished."
}

Write-Host "Light started, it may take some time..."
$lightProcess = Start-Process -FilePath $lightPath -ArgumentList $lightArgs -PassThru -NoNewWindow -RedirectStandardOutput "$buildFolderPath\light_stdout.txt" -RedirectStandardError "$buildFolderPath\light_stderr.txt" -Wait
if ($lightProcess.ExitCode -ne 0) {
    Write-Error "Light failed with exit code: $($lightProcess.ExitCode)"
    Write-Host "--- Light stdout ---"
    Get-Content "$buildFolderPath\light_stdout.txt"
    Write-Host "--- Light stderr ---"
    Get-Content "$buildFolderPath\light_stderr.txt"
    exit 1
} else {
    Write-Host "Light finished."
}

Write-Host "Finch-$Version.msi is generated. Location: $msiPath"
if (-not (Test-Path $msiPath)) {
    Write-Error "MSI file was not created at: $msiPath"
    exit 1
}