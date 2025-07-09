// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

package version

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"
)

const (
	// LatestVersionURL is the CloudFront URL to check for the latest version.
	LatestVersionURL = "https://artifact.runfinch.com/manifest/latest-version.json"
)

// Info represents the structure of the latest-version.json file.
type Info struct {
	Latest string `json:"latest_version"`
}

// GetLatestVersion fetches the latest version from the CloudFront URL.
func GetLatestVersion() (_ string, err error) {
	client := &http.Client{
		Timeout: 10 * time.Second,
	}

	req, err := http.NewRequest(http.MethodGet, LatestVersionURL, nil)
	if err != nil {
		return "", fmt.Errorf("failed to create request: %w", err)
	}

	// Add User-Agent header to avoid potential 403 errors
	req.Header.Set("User-Agent", "Finch-User")

	resp, err := client.Do(req)
	if err != nil {
		return "", fmt.Errorf("failed to fetch latest version: %w", err)
	}

	defer func() {
		if rErr := resp.Body.Close(); err != nil {
			err = fmt.Errorf("%w: %w", err, rErr)
		}
	}()

	if resp.StatusCode != http.StatusOK {
		return "", fmt.Errorf("failed to fetch latest version, status code: %d", resp.StatusCode)
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return "", fmt.Errorf("failed to read response body: %w", err)
	}

	var versionInfo Info
	if err := json.Unmarshal(body, &versionInfo); err != nil {
		return "", fmt.Errorf("failed to parse version info: %w", err)
	}

	return versionInfo.Latest, nil
}
