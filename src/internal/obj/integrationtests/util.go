// Package integrationtests needs to be documented.
//
// TODO: document
package integrationtests

import (
	"os"
	"testing"
)

// The Load.*Parameters functions in this file are where we get the credentials
// for running object client tests. These are sourced from your environment
// variables. You can provide these yourself, or Pachyderm employees may use the
// variables defined in the password manager under the secure note "Pachyderm CI
// Object Storage Credentials". These should all be scoped to the smallest set
// of permissions necessary, which is just object create/read/delete within a
// specific bucket.
//
// If the credentials are missing, the tests will be skipped.

func getenvOrSkip(t *testing.T, name string) string {
	val := os.Getenv(name)
	if val == "" {
		t.Skipf("env var %s is empty", name)
	}
	return val
}

// LoadAmazonParameters loads the test parameters for S3 object storage:
//
//	id - the key id credential
//	secret - the key secret credential
//	bucket - the S3 bucket to issue requests towards
//	region - the S3 region that the bucket is in
func LoadAmazonParameters(t *testing.T) (string, string, string, string) {
	id := getenvOrSkip(t, "AMAZON_CLIENT_ID")
	secret := getenvOrSkip(t, "AMAZON_CLIENT_SECRET")
	bucket := getenvOrSkip(t, "AMAZON_CLIENT_BUCKET")
	region := getenvOrSkip(t, "AMAZON_CLIENT_REGION")

	return id, secret, bucket, region
}

// LoadECSParameters loads the test parameters for ECS object storage
// (credentials can be requested for a new account from portal.ecstestdrive.com):
//
//	id - the key id credential
//	secret - the key secret credential
//	bucket - the ECS bucket to issue requests towards
//	region - a dummy region - some clients require this but it is unused with 'endpoint'
//	endpoint - the S3-compatible server to send requests to
func LoadECSParameters(t *testing.T) (string, string, string, string, string) {
	id := getenvOrSkip(t, "ECS_CLIENT_ID")
	secret := getenvOrSkip(t, "ECS_CLIENT_SECRET")
	bucket := getenvOrSkip(t, "ECS_CLIENT_BUCKET")
	endpoint := getenvOrSkip(t, "ECS_CLIENT_CUSTOM_ENDPOINT")

	return id, secret, bucket, "dummy-region", endpoint
}

// LoadGoogleParameters loads the test parameters for GCS object storage:
//
//	bucket - the GCS bucket to issue requests towards
//	creds - the JSON GCP credentials to use
func LoadGoogleParameters(t *testing.T) (string, string) {
	bucket := getenvOrSkip(t, "GOOGLE_CLIENT_BUCKET")
	creds := getenvOrSkip(t, "GOOGLE_CLIENT_CREDS")

	return bucket, creds
}

// LoadGoogleHMACParameters loads the test parameters for GCS object storage,
// specifically for use with S3-compatible clients:
//
//	id - the key id credential
//	secret - the key secret credential
//	bucket - the GCS bucket to issue requests towards
//	region - the GCS region that the bucket is in
//	endpoint - the S3-compatible server to send requests to
func LoadGoogleHMACParameters(t *testing.T) (string, string, string, string, string) {
	id := getenvOrSkip(t, "GOOGLE_CLIENT_HMAC_ID")
	secret := getenvOrSkip(t, "GOOGLE_CLIENT_HMAC_SECRET")
	bucket := getenvOrSkip(t, "GOOGLE_CLIENT_BUCKET")
	region := getenvOrSkip(t, "GOOGLE_CLIENT_REGION")

	return id, secret, bucket, region, "storage.googleapis.com"
}
