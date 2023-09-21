If (-NOT ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator"))
{
  $pinfo = New-Object System.Diagnostics.ProcessStartInfo
  $pinfo.FileName = "powershell"
  $pinfo.Arguments = "-WindowStyle hidden & '" + $myinvocation.mycommand.definition + "'"
  $pinfo.Verb = "RunAs"
  $pinfo.RedirectStandardError = $false
  $pinfo.RedirectStandardOutput = $false
  $pinfo.UseShellExecute = $true
  $p = New-Object System.Diagnostics.Process
  $p.StartInfo = $pinfo
  $p.Start() | Out-Null
  $p.WaitForExit()
  Get-Content "{{ .TempFilePath }}"
#   Remove-Item "{{ .TempFilePath }}"
  Exit $p.ExitCode
}

(
@"
create vdisk file="{{ .Path }}" type="expandable" maximum={{ .Size }}
select vdisk file="{{ .Path }}"
attach vdisk
create partition primary
format quick fs=ntfs label=FinchDataDiskNTFS
detach vdisk
"@ | diskpart
) -join "`n" | Set-Content -Path "{{ .TempFilePath }}"
