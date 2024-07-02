# FinchWindowsMSI

Finch Windows MSI Tool to generate MSI installer from Finch build

## Instructions

[1] Build finch:  `make FINCH_OS_IMAGE_LOCATION_ROOT=/__INSTALLFOLDER__`

- It will inject the placeholder `__INSTALLFOLDER__` into `os\finch.yaml` for the rootfs location

[2] Run the following command to generate the MSI installer:
`.\BuildFinchMSI.ps1 -SourcePath "<SourcePath>" -Version <Version>`

**Parameters:**

- SourcePath: Refers to the finch build `_output` folder, e.g., `C:\Users\<UserName>\Repo\finch\_output\.` It's an optional parameter. If not provided, the default path is finch's _output folder. (You need to build finch before running the MSI tool).

- Version: A required parameter that should match the version format, e.g., `0.10.2`.

[3] The `Finch-<Version>.msi` will be generated to the `msi-builder\build` folder
