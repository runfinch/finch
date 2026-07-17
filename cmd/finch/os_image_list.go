// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package main

import (
	"fmt"
	"io"
	"path"

	"github.com/spf13/cobra"

	"github.com/runfinch/finch/pkg/flog"
	"github.com/runfinch/finch/pkg/osimage"
	finchPath "github.com/runfinch/finch/pkg/path"
)

type osImageListAction struct {
	logger flog.Logger
	fp     finchPath.Finch
	stdOut io.Writer
}

func newOSImageListCommand(logger flog.Logger, fp finchPath.Finch, stdOut io.Writer) *cobra.Command {
	action := &osImageListAction{logger: logger, fp: fp, stdOut: stdOut}
	cmd := &cobra.Command{
		Use:     "list",
		Aliases: []string{"ls"},
		Short:   "List available OS images",
		RunE:    action.runAdapter,
	}
	return cmd
}

func (a *osImageListAction) runAdapter(_ *cobra.Command, _ []string) error {
	return a.run()
}

func (a *osImageListAction) run() error {
	images, err := osimage.ListImages(a.fp)
	if err != nil {
		return err
	}
	if len(images) == 0 {
		a.logger.Info("No OS images found")
		return nil
	}

	currentImage, err := osimage.GetCurrentImage(a.fp)
	if err != nil {
		return err
	}
	currentImageName := path.Base(currentImage.Location)
	for _, img := range images {
		marker := "  "
		if img.Name == currentImageName {
			marker = "(Current) "
		}
		fmt.Fprintf(a.stdOut, "%s%s\t%d bytes\n", marker, img.Name, img.Size)
	}
	return nil
}
