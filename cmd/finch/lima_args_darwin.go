//go:build darwin

package main

func (nc *nerdctlCommand) GetLimaArgs() []string {
	return append([]string{"shell", limaInstanceName, "sudo", "-E"})
}
