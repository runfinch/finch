//go:build windows
// +build windows

package winutil

import (
	"fmt"
	"strings"
	"syscall"

	"golang.org/x/sys/windows"
)

func RunElevated(exePath, wd string, args []string) error {
	verb := "runas"

	verbPtr, err := syscall.UTF16PtrFromString(verb)
	if err != nil {
		return fmt.Errorf("failed to convert %q to UTF16Ptr: %w", verb, err)
	}
	exePtr, err := syscall.UTF16PtrFromString(exePath)
	if err != nil {
		return fmt.Errorf("failed to convert %q to UTF16Ptr: %w", exePath, err)
	}
	cwdPtr, err := syscall.UTF16PtrFromString(wd)
	if err != nil {
		return fmt.Errorf("failed to convert %q to UTF16Ptr: %w", verb, err)
	}
	argPtr, err := syscall.UTF16PtrFromString(strings.Join(args, " "))
	if err != nil {
		return fmt.Errorf("failed to convert %q to UTF16Ptr: %w", verb, err)
	}

	var showCmd int32 = 0 //SW_HIDE

	return windows.ShellExecute(0, verbPtr, exePtr, argPtr, cwdPtr, showCmd)
}
