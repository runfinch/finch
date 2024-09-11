param(
    [Parameter(Mandatory=$true)]
    $Path
)

$includeExplicit = $true
$includeInherited = $false
(Get-Acl $PATH).GetAccessRules($includeExplicit, $includeInherited, [System.Security.Principal.NTAccount])
