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

// Aliases for conventionally used Windows types.
// https://learn.microsoft.com/en-us/windows/win32/winprog/windows-data-types
type (
	DWORD     uint32
	HANDLE    windows.Handle
	HINSTANCE HANDLE
	HKEY      HANDLE
	HWND      HANDLE
	ULONG     uint32
	LPCWSTR   *uint16
	LPVOID    uintptr
)

// SHELLEXECUTEINFOW is the definition of the parameters that shell32.dll's ShellExecuteEx expects.
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

// RunElevated allows a new process with Administrator access to be started. It constructs a command starting
// in the form of `cmd /C "<program binary> <args...>"`. This allows output piping and other common cmd.exe
// conventions to work. All path arguments passed into this function, through any of the parameters, should be quoted or escaped.
func RunElevated(exePath, wd string, args []string) error {
	// runas designates that the process will be launched as Administrator
	verb := "runas"
	cmdPath := `C:\Windows\System32\cmd.exe`

	verbPtr, err := syscall.UTF16PtrFromString(verb)
	if err != nil {
		return fmt.Errorf("failed to convert %q to UTF16Ptr: %w", verb, err)
	}
	exePtr, err := syscall.UTF16PtrFromString(cmdPath)
	if err != nil {
		return fmt.Errorf("failed to convert %q to UTF16Ptr: %w", cmdPath, err)
	}
	wdPtr, err := syscall.UTF16PtrFromString(wd)
	if err != nil {
		return fmt.Errorf("failed to convert %q to UTF16Ptr: %w", verb, err)
	}

	// the entire command passed after /C should be quoted, but /C itself should not be quoted
	cmdArgs := []string{"/C"}
	args = append([]string{exePath}, args...)
	argsStr := append(cmdArgs, fmt.Sprintf(`"%s"`, strings.Join(args, " ")))
	finalArgStr := strings.Join(argsStr, " ")
	argPtr, err := syscall.UTF16PtrFromString(finalArgStr)
	if err != nil {
		return fmt.Errorf("failed to convert %q to UTF16Ptr: %w", argsStr, err)
	}

	return ShellExecuteAndWait(0, verbPtr, exePtr, argPtr, wdPtr, windows.SW_HIDE)
}

// ShellExecuteAndWait is identical to https://pkg.go.dev/golang.org/x/sys/windows#ShellExecute,
// except it customizes the SEE_MASK_NOCLOSEPROCESS fMask to allow the caller to wait for
// execution to terminate.
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

// Some of the code below (particularly the error handling) was borrowed from
// https://github.com/AllenDang/w32/blob/65507298e138d537445133ed145a1f2685782b34/shell32.go#L110
// Copyright 2010-2012 The W32 Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the following comment:
// Copyright (c) 2010-2012 The w32 Authors. All rights reserved.

// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
// 1. Redistributions of source code must retain the above copyright
//    notice, this list of conditions and the following disclaimer.
// 2. Redistributions in binary form must reproduce the above copyright
//    notice, this list of conditions and the following disclaimer in the
//    documentation and/or other materials provided with the distribution.
// 3. The names of the authors may not be used to endorse or promote products
//    derived from this software without specific prior written permission.

// THIS SOFTWARE IS PROVIDED BY THE AUTHORS “AS IS” AND ANY EXPRESS OR
// IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
// OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
// IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY DIRECT, INDIRECT,
// INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
// NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
// THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
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
