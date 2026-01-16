// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package main

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/docker/docker-credential-helpers/credentials"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
)

func TestHandleCredentials(t *testing.T) {
	t.Run("returns 405 for GET request", func(t *testing.T) {
		req := httptest.NewRequest(http.MethodGet, "/credentials", nil)
		w := httptest.NewRecorder()

		handleCredentials(w, req)

		assert.Equal(t, http.StatusMethodNotAllowed, w.Code)
	})

	t.Run("returns 405 for PUT request", func(t *testing.T) {
		req := httptest.NewRequest(http.MethodPut, "/credentials", nil)
		w := httptest.NewRecorder()

		handleCredentials(w, req)

		assert.Equal(t, http.StatusMethodNotAllowed, w.Code)
	})

	t.Run("returns 400 for invalid JSON", func(t *testing.T) {
		req := httptest.NewRequest(http.MethodPost, "/credentials", bytes.NewBufferString("{invalid"))
		w := httptest.NewRecorder()

		handleCredentials(w, req)

		assert.Equal(t, http.StatusBadRequest, w.Code)
	})

	t.Run("returns 400 for empty JSON", func(t *testing.T) {
		req := httptest.NewRequest(http.MethodPost, "/credentials", bytes.NewBufferString("{}"))
		w := httptest.NewRecorder()

		handleCredentials(w, req)

		assert.Equal(t, http.StatusBadRequest, w.Code)
	})

	t.Run("returns 400 for missing serverURL", func(t *testing.T) {
		reqBody := CredentialRequest{
			ServerURL: "",
			Env:       map[string]string{},
		}
		jsonData, _ := json.Marshal(reqBody)
		req := httptest.NewRequest(http.MethodPost, "/credentials", bytes.NewBuffer(jsonData))
		w := httptest.NewRecorder()

		handleCredentials(w, req)

		assert.Equal(t, http.StatusBadRequest, w.Code)
	})

	t.Run("returns credentials on success", func(t *testing.T) {
		reqBody := CredentialRequest{
			ServerURL: "registry.example.com",
			Env:       map[string]string{"TEST": "value"},
		}
		jsonData, _ := json.Marshal(reqBody)
		req := httptest.NewRequest(http.MethodPost, "/credentials", bytes.NewBuffer(jsonData))
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
		reqBody := CredentialRequest{
			ServerURL: "nonexistent.registry.com",
			Env:       map[string]string{},
		}
		jsonData, _ := json.Marshal(reqBody)
		req := httptest.NewRequest(http.MethodPost, "/credentials", bytes.NewBuffer(jsonData))
		w := httptest.NewRecorder()

		handleCredentials(w, req)

		assert.Equal(t, http.StatusOK, w.Code)

		var creds credentials.Credentials
		err := json.NewDecoder(w.Body).Decode(&creds)
		require.NoError(t, err)
		assert.Equal(t, "nonexistent.registry.com", creds.ServerURL)
	})

	t.Run("handles environment variables", func(t *testing.T) {
		reqBody := CredentialRequest{
			ServerURL: "registry.example.com",
			Env: map[string]string{
				"AWS_ACCESS_KEY_ID":     "test-key",
				"AWS_SECRET_ACCESS_KEY": "test-secret",
			},
		}
		jsonData, _ := json.Marshal(reqBody)
		req := httptest.NewRequest(http.MethodPost, "/credentials", bytes.NewBuffer(jsonData))
		w := httptest.NewRecorder()

		handleCredentials(w, req)

		assert.Equal(t, http.StatusOK, w.Code)
	})

	t.Run("handles large, arbitrary environment variable maps", func(t *testing.T) {
		envMap := make(map[string]string)
		for i := 0; i < 100; i++ {
			envMap[string(rune('A'+i))] = "value"
		}

		reqBody := CredentialRequest{
			ServerURL: "registry.example.com",
			Env:       envMap,
		}
		jsonData, _ := json.Marshal(reqBody)
		req := httptest.NewRequest(http.MethodPost, "/credentials", bytes.NewBuffer(jsonData))
		w := httptest.NewRecorder()

		handleCredentials(w, req)

		assert.Equal(t, http.StatusOK, w.Code)
	})
}

func TestCredentialRequest(t *testing.T) {
	t.Run("unmarshals valid request with env vars", func(t *testing.T) {
		jsonData := `{"serverURL":"registry.example.com","env":{"KEY":"value"}}`
		var req CredentialRequest
		err := json.Unmarshal([]byte(jsonData), &req)

		require.NoError(t, err)
		assert.Equal(t, "registry.example.com", req.ServerURL)
		assert.Equal(t, "value", req.Env["KEY"])
	})

	t.Run("unmarshals request without env vars", func(t *testing.T) {
		jsonData := `{"serverURL":"registry.example.com"}`
		var req CredentialRequest
		err := json.Unmarshal([]byte(jsonData), &req)

		require.NoError(t, err)
		assert.Equal(t, "registry.example.com", req.ServerURL)
		assert.Nil(t, req.Env)
	})

	t.Run("handles special characters in serverURL", func(t *testing.T) {
		jsonData := `{"serverURL":"registry.example.com:5000/path"}`
		var req CredentialRequest
		err := json.Unmarshal([]byte(jsonData), &req)

		require.NoError(t, err)
		assert.Equal(t, "registry.example.com:5000/path", req.ServerURL)
	})
}
