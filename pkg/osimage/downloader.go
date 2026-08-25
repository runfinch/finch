// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

// Package osimage provies osimage related utilities.
package osimage

import (
	"fmt"
	"io"
	"net/http"
	"os"
	"time"

	"github.com/schollz/progressbar/v3"
	"golang.org/x/term"
)

const (
	// DefaultDownloadTimeout caps the total time for any single download.
	DefaultDownloadTimeout = 30 * time.Minute

	// MaxManifestSize caps the manifest and bundle download size.
	MaxManifestSize = 1 * 1024 * 1024 // 1 MiB

	// MaxImageSize caps the OS image download size.
	MaxImageSize = 500 * 1024 * 1024 // 500 MiB
)

type options struct {
	progressBar bool
	progressMsg string
	maxBytes    int64
}

type downloadOptions func(*options)

func withProgressBar(progressMsg string) downloadOptions {
	return func(o *options) {
		o.progressBar = true
		o.progressMsg = progressMsg
	}
}

func withMaxBytes(maxBytes int64) downloadOptions {
	return func(o *options) {
		o.maxBytes = maxBytes
	}
}

var httpClient = &http.Client{
	Timeout: DefaultDownloadTimeout,
}

func downloadToFile(url, destPath string, opts ...downloadOptions) (err error) {
	tmpPath := destPath + ".tmp"
	// #nosec G304 -- path is a temp folder, not user input
	f, err := os.Create(tmpPath)
	if err != nil {
		return fmt.Errorf("failed to create temp file: %w", err)
	}
	defer func() {
		if err != nil {
			_ = os.Remove(tmpPath)
		}
	}()

	if err := download(url, f, opts...); err != nil {
		_ = f.Close()
		return err
	}

	if err := f.Close(); err != nil {
		return fmt.Errorf("failed to close temp download file: %w", err)
	}

	return os.Rename(tmpPath, destPath)
}

func download(url string, writer io.Writer, opts ...downloadOptions) error {
	options := &options{}
	for _, opt := range opts {
		opt(options)
	}

	// #nosec G107 -- url is from Finch's signed manifest
	resp, err := httpClient.Get(url)
	if err != nil {
		return fmt.Errorf("failed to download %s: %w", url, err)
	}

	if resp.StatusCode != http.StatusOK {
		return fmt.Errorf("unexpected status code %d downloading %s", resp.StatusCode, url)
	}

	// Reject downloads where the server reports a Content-Length exceeding our limit.
	if options.maxBytes > 0 && resp.ContentLength > options.maxBytes {
		return fmt.Errorf("response size %d exceeds max %d for %s", resp.ContentLength, options.maxBytes, url)
	}

	var reader io.Reader = resp.Body
	defer func() {
		_ = resp.Body.Close()
	}()

	if options.maxBytes > 0 {
		// +1 so we can detect the actual overflow during io.Copy.
		reader = io.LimitReader(reader, options.maxBytes+1)
	}
	// #nosec G115 -- file descriptor from os.Stderr.Fd() is a very small int
	if options.progressBar && term.IsTerminal(int(os.Stderr.Fd())) {
		progBar := progressbar.DefaultBytes(resp.ContentLength, options.progressMsg)
		reader = io.TeeReader(reader, progBar)
	}

	written, err := io.Copy(writer, reader)
	if err != nil {
		return fmt.Errorf("failed to write artifact: %w", err)
	}
	if options.maxBytes > 0 && written > options.maxBytes {
		return fmt.Errorf("response body exceeded max size %d for %s", options.maxBytes, url)
	}

	return nil
}
