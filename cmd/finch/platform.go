package main

import (
	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/command"
	"github.com/runfinch/finch/pkg/flog"
)

func newPlatformCommand(
	limaCmdCreator command.NerdctlCmdCreator,
	logger flog.Logger,
) *cobra.Command {
	systemCommand := &cobra.Command{
		Use:   "platform",
		Short: "Manage platform settings",
	}
	systemCommand.AddCommand(newPassInit(limaCmdCreator, logger),
		newPassDelete(limaCmdCreator, logger))

	return systemCommand
}
