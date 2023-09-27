# diskpart

The purpose of this package is to encapsulate all diskpart related interactions so that they can be run more easily in a new process with elevated permissions.

diskpart.exe requires Administrator access to run, even when just creating and configuring a VHD. diskpart is the most supported way to create these disks on Windows. Instead of forcing _all_ Finch operations to run elevated, only the binary compiled from this package will have elevated permissions. From the user's perspective, this looks like the main finch.exe executing in their regular user context, while also prompting for Administrator access when necessary (via UAC, if enabled, which it is by default).

Encapsulating the code in a compiled binary also has the additional benefit of making it harder to modify the behavior, either accidentally or maliciously.
