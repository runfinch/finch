// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

//go:build darwin || windows

package osimage

import (
	"bytes"
	"net/http"
	"net/http/httptest"
	"os"
	"path/filepath"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestDownload(t *testing.T) {
	t.Parallel()

	t.Run("downloads content to writer", func(t *testing.T) {
		t.Parallel()
		expected := "hello from the server"
		server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			w.Write([]byte(expected))
		}))
		defer server.Close()

		var buf bytes.Buffer
		err := download(server.URL, &buf)
		require.NoError(t, err)
		assert.Equal(t, expected, buf.String())
	})

	t.Run("returns error on non-200 status", func(t *testing.T) {
		t.Parallel()
		server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			w.WriteHeader(http.StatusNotFound)
		}))
		defer server.Close()

		var buf bytes.Buffer
		err := download(server.URL, &buf)
		assert.Error(t, err)
		assert.Contains(t, err.Error(), "unexpected status code 404")
	})

	t.Run("returns error on unreachable server", func(t *testing.T) {
		t.Parallel()
		var buf bytes.Buffer
		err := download("http://127.0.0.1:1", &buf)
		assert.Error(t, err)
	})
}

func TestDownloadToFile(t *testing.T) {
	t.Parallel()

	t.Run("writes content to destination file", func(t *testing.T) {
		t.Parallel()
		expected := "file content here"
		server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			w.Write([]byte(expected))
		}))
		defer server.Close()

		tmpDir := t.TempDir()
		destPath := filepath.Join(tmpDir, "downloaded.qcow2")

		err := downloadToFile(server.URL, destPath)
		require.NoError(t, err)

		data, err := os.ReadFile(destPath)
		require.NoError(t, err)
		assert.Equal(t, expected, string(data))
	})

	t.Run("cleans up temp file on download failure", func(t *testing.T) {
		t.Parallel()
		server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			w.WriteHeader(http.StatusInternalServerError)
		}))
		defer server.Close()

		tmpDir := t.TempDir()
		destPath := filepath.Join(tmpDir, "should-not-exist.qcow2")

		err := downloadToFile(server.URL, destPath)
		assert.Error(t, err)

		_, statErr := os.Stat(destPath)
		assert.True(t, os.IsNotExist(statErr))

		// Temp file should also be cleaned up
		_, statErr = os.Stat(destPath + ".tmp")
		assert.True(t, os.IsNotExist(statErr))
	})

	t.Run("overwrites existing file at destination", func(t *testing.T) {
		t.Parallel()
		server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			w.Write([]byte("new content"))
		}))
		defer server.Close()

		tmpDir := t.TempDir()
		destPath := filepath.Join(tmpDir, "existing.qcow2")
		require.NoError(t, os.WriteFile(destPath, []byte("old content"), 0o644))

		err := downloadToFile(server.URL, destPath)
		require.NoError(t, err)

		data, err := os.ReadFile(destPath)
		require.NoError(t, err)
		assert.Equal(t, "new content", string(data))
	})
}
