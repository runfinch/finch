//go:build darwin

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/docker/docker-credential-helpers/credentials"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestHandleCredentials(t *testing.T) {
	t.Parallel()
	t.Run("returns 405 for POST request", func(t *testing.T) {
		t.Parallel()
		req := httptest.NewRequest(http.MethodPost, "/credentials", nil)
		w := httptest.NewRecorder()

		handleCredentials(w, req)

		assert.Equal(t, http.StatusMethodNotAllowed, w.Code)
	})

	t.Run("returns 405 for PUT request", func(t *testing.T) {
		t.Parallel()
		req := httptest.NewRequest(http.MethodPut, "/credentials", nil)
		w := httptest.NewRecorder()

		handleCredentials(w, req)

		assert.Equal(t, http.StatusMethodNotAllowed, w.Code)
	})

	t.Run("returns 400 for missing server query param", func(t *testing.T) {
		t.Parallel()
		req := httptest.NewRequest(http.MethodGet, "/credentials", nil)
		w := httptest.NewRecorder()

		handleCredentials(w, req)

		assert.Equal(t, http.StatusBadRequest, w.Code)
	})

	t.Run("returns 400 for empty server query param", func(t *testing.T) {
		t.Parallel()
		req := httptest.NewRequest(http.MethodGet, "/credentials?server=", nil)
		w := httptest.NewRecorder()

		handleCredentials(w, req)

		assert.Equal(t, http.StatusBadRequest, w.Code)
	})

	t.Run("returns credentials on success", func(t *testing.T) {
		t.Parallel()
		req := httptest.NewRequest(http.MethodGet, "/credentials?server=registry.example.com", nil)
		req.Header.Set("X-Finch-Env-TEST", "value")
		w := httptest.NewRecorder()

		handleCredentials(w, req)

		assert.Equal(t, http.StatusOK, w.Code)
		assert.Equal(t, "application/json", w.Header().Get("Content-Type"))

		var creds credentials.Credentials
		err := json.NewDecoder(w.Body).Decode(&creds)
		require.NoError(t, err)
		assert.Equal(t, "registry.example.com", creds.ServerURL)
	})

	t.Run("returns empty credentials on GetCredentials error", func(t *testing.T) {
		t.Parallel()
		req := httptest.NewRequest(http.MethodGet, "/credentials?server=nonexistent.registry.com", nil)
		w := httptest.NewRecorder()

		handleCredentials(w, req)

		assert.Equal(t, http.StatusOK, w.Code)

		var creds credentials.Credentials
		err := json.NewDecoder(w.Body).Decode(&creds)
		require.NoError(t, err)
		assert.Equal(t, "nonexistent.registry.com", creds.ServerURL)
	})

	t.Run("handles environment variables", func(t *testing.T) {
		t.Parallel()
		req := httptest.NewRequest(http.MethodGet, "/credentials?server=registry.example.com", nil)
		req.Header.Set("X-Finch-Env-AWS_ACCESS_KEY_ID", "test-key")
		req.Header.Set("X-Finch-Env-AWS_SECRET_ACCESS_KEY", "test-secret")
		w := httptest.NewRecorder()

		handleCredentials(w, req)

		assert.Equal(t, http.StatusOK, w.Code)
	})

	t.Run("handles large, arbitrary environment variable maps", func(t *testing.T) {
		t.Parallel()
		req := httptest.NewRequest(http.MethodGet, "/credentials?server=registry.example.com", nil)
		for i := 0; i < 100; i++ {
			req.Header.Set("X-Finch-Env-"+string(rune('A'+i)), "value")
		}
		w := httptest.NewRecorder()

		handleCredentials(w, req)

		assert.Equal(t, http.StatusOK, w.Code)
	})

	t.Run("returns 405 for DELETE request", func(t *testing.T) {
		t.Parallel()
		req := httptest.NewRequest(http.MethodDelete, "/credentials", nil)
		w := httptest.NewRecorder()

		handleCredentials(w, req)

		assert.Equal(t, http.StatusMethodNotAllowed, w.Code)
	})

	t.Run("returns 405 for PATCH request", func(t *testing.T) {
		t.Parallel()
		req := httptest.NewRequest(http.MethodPatch, "/credentials", nil)
		w := httptest.NewRecorder()

		handleCredentials(w, req)

		assert.Equal(t, http.StatusMethodNotAllowed, w.Code)
	})

	t.Run("handles no env headers", func(t *testing.T) {
		t.Parallel()
		req := httptest.NewRequest(http.MethodGet, "/credentials?server=registry.example.com", nil)
		w := httptest.NewRecorder()

		handleCredentials(w, req)

		assert.Equal(t, http.StatusOK, w.Code)
	})

	t.Run("handles special characters in serverURL", func(t *testing.T) {
		t.Parallel()
		req := httptest.NewRequest(http.MethodGet, "/credentials?server=registry.example.com:5000/path", nil)
		w := httptest.NewRecorder()

		handleCredentials(w, req)

		assert.Equal(t, http.StatusOK, w.Code)
	})

	t.Run("handles concurrent requests", func(t *testing.T) {
		t.Parallel()
		const numRequests = 10
		done := make(chan bool, numRequests)

		for i := 0; i < numRequests; i++ {
			go func(id int) {
				req := httptest.NewRequest(http.MethodGet, "/credentials?server=registry.example.com", nil)
				req.Header.Set("X-Finch-Env-ID", string(rune('0'+id)))
				w := httptest.NewRecorder()

				handleCredentials(w, req)

				assert.Equal(t, http.StatusOK, w.Code)
				done <- true
			}(i)
		}

		for i := 0; i < numRequests; i++ {
			<-done
		}
	})
}
