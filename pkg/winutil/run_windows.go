//go:build windows
// +build windows

package winutil

import (
	"fmt"
	"os"
	"strings"
	"syscall"
	"unsafe"

	"golang.org/x/sys/windows"
)

// https://learn.microsoft.com/en-us/windows/win32/winprog/windows-data-types
type (
	DWORD     uint32
	HANDLE    uintptr
	HINSTANCE HANDLE
	HKEY      HANDLE
	HWND      HANDLE
	ULONG     uint32
	LPCWSTR   *uint16
	LPVOID    uintptr
)

// https://learn.microsoft.com/en-us/windows/win32/api/shellapi/ns-shellapi-shellexecuteinfow
type SHELLEXECUTEINFOW struct {
	cbSize         DWORD
	fMask          ULONG
	hwnd           HWND
	lpVerb         LPCWSTR
	lpFile         LPCWSTR
	lpParameters   LPCWSTR
	lpDirectory    LPCWSTR
	nShow          int32
	hInstApp       HINSTANCE
	lpIDList       LPVOID
	lpClass        LPCWSTR
	hkeyClass      HKEY
	dwHotKey       DWORD
	hIconOrMonitor HANDLE
	hProcess       HANDLE
}

// https://learn.microsoft.com/en-us/windows/win32/api/shellapi/ns-shellapi-shellexecuteinfow
const (
	SE_ERR_FNF              = 2
	SE_ERR_PNF              = 3
	SE_ERR_ACCESSDENIED     = 5
	SE_ERR_OOM              = 8
	SE_ERR_DLLNOTFOUND      = 32
	SE_ERR_SHARE            = 26
	SE_ERR_ASSOCINCOMPLETE  = 27
	SE_ERR_DDETIMEOUT       = 28
	SE_ERR_DDEFAIL          = 29
	SE_ERR_DDEBUSY          = 30
	SE_ERR_NOASSOC          = 31
	SEE_MASK_NOCLOSEPROCESS = 0x00000040
)

var (
	modshell32 = syscall.NewLazyDLL("shell32.dll")
	// https://learn.microsoft.com/en-us/windows/win32/api/shellapi/nf-shellapi-shellexecuteexw
	procShellExecuteEx = modshell32.NewProc("ShellExecuteExW")
)

func RunElevated(exePath, wd string, args []string) error {
	verb := "runas"

	verbPtr, err := syscall.UTF16PtrFromString(verb)
	if err != nil {
		return fmt.Errorf("failed to convert %q to UTF16Ptr: %w", verb, err)
	}
	exePtr, err := syscall.UTF16PtrFromString(`C:\Windows\System32\cmd.exe`)
	if err != nil {
		return fmt.Errorf("failed to convert %q to UTF16Ptr: %w", exePath, err)
	}
	cwdPtr, err := syscall.UTF16PtrFromString(wd)
	if err != nil {
		return fmt.Errorf("failed to convert %q to UTF16Ptr: %w", verb, err)
	}

	cmdArgs := []string{"/K"}
	baseArgs := append(cmdArgs, exePath)
	args = append(baseArgs, args...)
	argPtr, err := syscall.UTF16PtrFromString(strings.Join(args, " "))
	if err != nil {
		return fmt.Errorf("failed to convert %q to UTF16Ptr: %w", verb, err)
	}

	// SW_HIDE = 0
	// SW_NORMAL = 1
	var showCmd int32 = 1
	if err = ShellExecuteAndWait(0, verbPtr, exePtr, argPtr, cwdPtr, showCmd); err != nil {
		return err
	}
	return nil
}

func ShellExecuteAndWait(hwnd HWND, verb, exe, args, wd LPCWSTR, nShowCmd int32) error {
	i := &SHELLEXECUTEINFOW{
		fMask:        SEE_MASK_NOCLOSEPROCESS,
		hwnd:         hwnd,
		lpVerb:       verb,
		lpFile:       exe,
		lpParameters: args,
		lpDirectory:  wd,
		nShow:        nShowCmd,
	}
	i.cbSize = DWORD(unsafe.Sizeof(*i))
	return ShellExecuteEx(i)
}

// some of the code below was borrowed from
// https://github.com/AllenDang/w32/blob/65507298e138d537445133ed145a1f2685782b34/shell32.go#L110
func ShellExecuteEx(pExecInfo *SHELLEXECUTEINFOW) error {
	ret, _, _ := procShellExecuteEx.Call(uintptr(unsafe.Pointer(pExecInfo)))
	if ret == 1 && pExecInfo.fMask&SEE_MASK_NOCLOSEPROCESS != 0 {
		s, e := syscall.WaitForSingleObject(syscall.Handle(pExecInfo.hProcess), syscall.INFINITE)
		switch s {
		case syscall.WAIT_OBJECT_0:
			break
		case syscall.WAIT_FAILED:
			return os.NewSyscallError("WaitForSingleObject", e)
		default:
			return fmt.Errorf("Unexpected result from WaitForSingleObject")
		}
	}
	errorMsg := ""
	if pExecInfo.hInstApp != 0 && pExecInfo.hInstApp <= 32 {
		switch int(pExecInfo.hInstApp) {
		case SE_ERR_FNF:
			errorMsg = "The specified file was not found"
		case SE_ERR_PNF:
			errorMsg = "The specified path was not found"
		case int(windows.ERROR_BAD_FORMAT):
			errorMsg = "The .exe file is invalid (non-Win32 .exe or error in .exe image)"
		case SE_ERR_ACCESSDENIED:
			errorMsg = "The operating system denied access to the specified file"
		case SE_ERR_ASSOCINCOMPLETE:
			errorMsg = "The file name association is incomplete or invalid"
		case SE_ERR_DDEBUSY:
			errorMsg = "The DDE transaction could not be completed because other DDE transactions were being processed"
		case SE_ERR_DDEFAIL:
			errorMsg = "The DDE transaction failed"
		case SE_ERR_DDETIMEOUT:
			errorMsg = "The DDE transaction could not be completed because the request timed out"
		case SE_ERR_DLLNOTFOUND:
			errorMsg = "The specified DLL was not found"
		case SE_ERR_NOASSOC:
			errorMsg = "There is no application associated with the given file name extension"
		case SE_ERR_OOM:
			errorMsg = "There was not enough memory to complete the operation"
		case SE_ERR_SHARE:
			errorMsg = "A sharing violation occurred"
		default:
			errorMsg = fmt.Sprintf("Unknown error occurred with error code %v", pExecInfo.hInstApp)
		}
	} else {
		return nil
	}
	return fmt.Errorf(errorMsg)
}
