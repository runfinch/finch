//go:build darwin || windows

package main

import (
	"errors"
	"fmt"
	"io"
	"os"
	"strings"
	"golang.org/x/term"
	"github.com/spf13/cobra"
	"github.com/containerd/nerdctl/v2/pkg/imgutil/dockerconfigresolver"
)

// Follow how nerdctl creates Login command, but with custom loginAction.
func newLoginCommand() *cobra.Command {
	cmd := &cobra.Command{
		Use:           "login [flags] [SERVER]",
		Args:          cobra.MaximumNArgs(1),
		Short:         "Log in to a container registry",
		RunE:          loginAction,
		SilenceUsage:  true,
		SilenceErrors: true,
	}
	cmd.Flags().StringP("username", "u", "", "Username")
	cmd.Flags().StringP("password", "p", "", "Password")
	cmd.Flags().Bool("password-stdin", false, "Take the password from stdin")
	return cmd
}

// Same parsing as nerdctl, but send commands to native store.
func loginAction(cmd *cobra.Command, args []string) error {
	username, _ := cmd.Flags().GetString("username")
	password, _ := cmd.Flags().GetString("password")
	passwordStdin, _ := cmd.Flags().GetBool("password-stdin")

	if strings.Contains(username, ":") {
		return errors.New("username cannot contain colons")
	}

	if password != "" && passwordStdin {
		return errors.New("--password and --password-stdin are mutually exclusive")
	}

	if passwordStdin {
		if username == "" {
			return errors.New("must provide --username with --password-stdin")
		}
		contents, err := io.ReadAll(cmd.InOrStdin())
		if err != nil {
			return err
		}
		password = strings.TrimSuffix(string(contents), "\n")
		password = strings.TrimSuffix(password, "\r")
	}

	serverAddress := ""
	if len(args) == 1 {
		serverAddress = args[0]
	}

	return loginWithNativeCredStore(serverAddress, username, password, cmd.OutOrStdout())
}

func loginWithNativeCredStore(serverAddress, username, password string, stdout io.Writer) error {
	// Parse registry URL
	registryURL, err := dockerconfigresolver.Parse(serverAddress)
	if err != nil {
		return err
	}

	// Prompt for missing credentials
	if username == "" {
		_, _ = fmt.Fprint(stdout, "Enter Username: ")
		var input string
		_, err := fmt.Scanln(&input)
		if err != nil {
			return err
		}
		username = strings.TrimSpace(input)
	}

	if password == "" {
		_, _ = fmt.Fprint(stdout, "Enter Password: ")
		bytePassword, err := term.ReadPassword(int(os.Stdin.Fd()))
		if err != nil {
			return err
		}
		_, _ = fmt.Fprintln(stdout) // New line after password
		password = strings.TrimSpace(string(bytePassword))
	}

	if username == "" || password == "" {
		return errors.New("username and password required")
	}

	// Store credentials using native helper
	_, err = callCredentialHelper("store", registryURL.Host, username, password)
	if err != nil {
		return fmt.Errorf("error saving credentials: %w", err)
	}

	// Handle HTTPS port 443 case
	if registryURL.Port() == dockerconfigresolver.StandardHTTPSPort {
		_, err = callCredentialHelper("store", registryURL.Hostname(), username, password)
		if err != nil {
			return fmt.Errorf("error saving credentials: %w", err)
		}
	}

	_, _ = fmt.Fprintln(stdout, "Login Succeeded")
	return nil
}

