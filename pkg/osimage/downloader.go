// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package osimage

import (
	"fmt"
	"io"
	"net/http"
	"os"

	"github.com/schollz/progressbar/v3"
	"golang.org/x/term"
)

type options struct {
	progressBar bool
	progressMsg string
}

type downloadOptions func(*options)

func withProgressBar(progressMsg string) downloadOptions {
	return func(o *options) {
		o.progressBar = true
		o.progressMsg = progressMsg
	}
}

func downloadToFile(url, destPath string, opts ...downloadOptions) error {
	tmpPath := destPath + ".tmp"
	f, err := os.Create(tmpPath)
	if err != nil {
		return fmt.Errorf("failed to create temp file: %w", err)
	}
	defer func() {
		f.Close()
		os.Remove(tmpPath)
	}()

	if err := download(url, f, opts...); err != nil {
		return err
	}

	return os.Rename(tmpPath, destPath)
}

func download(url string, writer io.Writer, opts ...downloadOptions) error {
	options := &options{}
	for _, opt := range opts {
		opt(options)
	}

	resp, err := http.Get(url)
	if err != nil {
		return fmt.Errorf("failed to download %s: %w", url, err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return fmt.Errorf("unexpected status code %d downloading %s", resp.StatusCode, url)
	}

	var reader io.Reader = resp.Body
	if options.progressBar && term.IsTerminal(int(os.Stderr.Fd())) {
		progBar := progressbar.DefaultBytes(resp.ContentLength, options.progressMsg)
		reader = io.TeeReader(resp.Body, progBar)
	}

	if _, err := io.Copy(writer, reader); err != nil {
		return fmt.Errorf("failed to write artifact: %w", err)
	}

	return nil
}
