//go:build darwin || windows

package main

import (
	"fmt"

	"github.com/spf13/cobra"
	"github.com/containerd/nerdctl/v2/pkg/imgutil/dockerconfigresolver"
)

func newLogoutCommand() *cobra.Command {
	return &cobra.Command{
		Use:               "logout [flags] [SERVER]",
		Args:              cobra.MaximumNArgs(1),
		Short:             "Log out from a container registry",
		RunE:              logoutAction,
		SilenceUsage:      true,
		SilenceErrors:     true,
	}
}

func logoutAction(cmd *cobra.Command, args []string) error {
	serverAddress := ""
	if len(args) > 0 {
		serverAddress = args[0]
	}

	// Parse registry URL
	registryURL, err := dockerconfigresolver.Parse(serverAddress)
	if err != nil {
		return err
	}

	// Erase credentials using native helper (try both formats like login stores)
	_, err1 := callCredentialHelper("erase", registryURL.Host, "", "")
	
	// Also try without port for HTTPS 443 case (like login stores)
	var err2 error
	if registryURL.Port() == dockerconfigresolver.StandardHTTPSPort {
		_, err2 = callCredentialHelper("erase", registryURL.Hostname(), "", "")
	}

	// Only show warning if both attempts failed
	if err1 != nil && (err2 != nil || registryURL.Port() != dockerconfigresolver.StandardHTTPSPort) {
		_, _ = fmt.Fprintf(cmd.ErrOrStderr(), "Warning: failed to logout from %s\n", registryURL.Host)
	}

	_, _ = fmt.Fprintln(cmd.OutOrStdout(), "Logout Succeeded")
	return nil
}