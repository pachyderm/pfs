// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: admin/admin.proto

package admin

import (
	"bytes"
	"errors"
	"fmt"
	"net"
	"net/mail"
	"net/url"
	"regexp"
	"sort"
	"strings"
	"time"
	"unicode/utf8"

	"google.golang.org/protobuf/types/known/anypb"
)

// ensure the imports are used
var (
	_ = bytes.MinRead
	_ = errors.New("")
	_ = fmt.Print
	_ = utf8.UTFMax
	_ = (*regexp.Regexp)(nil)
	_ = (*strings.Reader)(nil)
	_ = net.IPv4len
	_ = time.Duration(0)
	_ = (*url.URL)(nil)
	_ = (*mail.Address)(nil)
	_ = anypb.Any{}
	_ = sort.Sort
)

// Validate checks the field values on ClusterInfo with the rules defined in
// the proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *ClusterInfo) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on ClusterInfo with the rules defined in
// the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in ClusterInfoMultiError, or
// nil if none found.
func (m *ClusterInfo) ValidateAll() error {
	return m.validate(true)
}

func (m *ClusterInfo) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Id

	// no validation rules for DeploymentId

	// no validation rules for WarningsOk

	// no validation rules for ProxyHost

	// no validation rules for ProxyTls

	// no validation rules for Paused

	if all {
		switch v := interface{}(m.GetWebResources()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, ClusterInfoValidationError{
					field:  "WebResources",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, ClusterInfoValidationError{
					field:  "WebResources",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetWebResources()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return ClusterInfoValidationError{
				field:  "WebResources",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	// no validation rules for Metadata

	// no validation rules for PendingRestart

	// no validation rules for RestartInfo

	if len(errors) > 0 {
		return ClusterInfoMultiError(errors)
	}

	return nil
}

// ClusterInfoMultiError is an error wrapping multiple validation errors
// returned by ClusterInfo.ValidateAll() if the designated constraints aren't met.
type ClusterInfoMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m ClusterInfoMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m ClusterInfoMultiError) AllErrors() []error { return m }

// ClusterInfoValidationError is the validation error returned by
// ClusterInfo.Validate if the designated constraints aren't met.
type ClusterInfoValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e ClusterInfoValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e ClusterInfoValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e ClusterInfoValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e ClusterInfoValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e ClusterInfoValidationError) ErrorName() string { return "ClusterInfoValidationError" }

// Error satisfies the builtin error interface
func (e ClusterInfoValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sClusterInfo.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = ClusterInfoValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = ClusterInfoValidationError{}

// Validate checks the field values on InspectClusterRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *InspectClusterRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on InspectClusterRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// InspectClusterRequestMultiError, or nil if none found.
func (m *InspectClusterRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *InspectClusterRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if all {
		switch v := interface{}(m.GetClientVersion()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, InspectClusterRequestValidationError{
					field:  "ClientVersion",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, InspectClusterRequestValidationError{
					field:  "ClientVersion",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetClientVersion()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return InspectClusterRequestValidationError{
				field:  "ClientVersion",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if all {
		switch v := interface{}(m.GetCurrentProject()).(type) {
		case interface{ ValidateAll() error }:
			if err := v.ValidateAll(); err != nil {
				errors = append(errors, InspectClusterRequestValidationError{
					field:  "CurrentProject",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		case interface{ Validate() error }:
			if err := v.Validate(); err != nil {
				errors = append(errors, InspectClusterRequestValidationError{
					field:  "CurrentProject",
					reason: "embedded message failed validation",
					cause:  err,
				})
			}
		}
	} else if v, ok := interface{}(m.GetCurrentProject()).(interface{ Validate() error }); ok {
		if err := v.Validate(); err != nil {
			return InspectClusterRequestValidationError{
				field:  "CurrentProject",
				reason: "embedded message failed validation",
				cause:  err,
			}
		}
	}

	if len(errors) > 0 {
		return InspectClusterRequestMultiError(errors)
	}

	return nil
}

// InspectClusterRequestMultiError is an error wrapping multiple validation
// errors returned by InspectClusterRequest.ValidateAll() if the designated
// constraints aren't met.
type InspectClusterRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m InspectClusterRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m InspectClusterRequestMultiError) AllErrors() []error { return m }

// InspectClusterRequestValidationError is the validation error returned by
// InspectClusterRequest.Validate if the designated constraints aren't met.
type InspectClusterRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e InspectClusterRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e InspectClusterRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e InspectClusterRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e InspectClusterRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e InspectClusterRequestValidationError) ErrorName() string {
	return "InspectClusterRequestValidationError"
}

// Error satisfies the builtin error interface
func (e InspectClusterRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sInspectClusterRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = InspectClusterRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = InspectClusterRequestValidationError{}

// Validate checks the field values on WebResource with the rules defined in
// the proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *WebResource) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on WebResource with the rules defined in
// the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in WebResourceMultiError, or
// nil if none found.
func (m *WebResource) ValidateAll() error {
	return m.validate(true)
}

func (m *WebResource) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for ArchiveDownloadBaseUrl

	// no validation rules for CreatePipelineRequestJsonSchemaUrl

	if len(errors) > 0 {
		return WebResourceMultiError(errors)
	}

	return nil
}

// WebResourceMultiError is an error wrapping multiple validation errors
// returned by WebResource.ValidateAll() if the designated constraints aren't met.
type WebResourceMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m WebResourceMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m WebResourceMultiError) AllErrors() []error { return m }

// WebResourceValidationError is the validation error returned by
// WebResource.Validate if the designated constraints aren't met.
type WebResourceValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e WebResourceValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e WebResourceValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e WebResourceValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e WebResourceValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e WebResourceValidationError) ErrorName() string { return "WebResourceValidationError" }

// Error satisfies the builtin error interface
func (e WebResourceValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sWebResource.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = WebResourceValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = WebResourceValidationError{}

// Validate checks the field values on RestartPachydermRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *RestartPachydermRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on RestartPachydermRequest with the
// rules defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// RestartPachydermRequestMultiError, or nil if none found.
func (m *RestartPachydermRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *RestartPachydermRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	// no validation rules for Reason

	if len(errors) > 0 {
		return RestartPachydermRequestMultiError(errors)
	}

	return nil
}

// RestartPachydermRequestMultiError is an error wrapping multiple validation
// errors returned by RestartPachydermRequest.ValidateAll() if the designated
// constraints aren't met.
type RestartPachydermRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m RestartPachydermRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m RestartPachydermRequestMultiError) AllErrors() []error { return m }

// RestartPachydermRequestValidationError is the validation error returned by
// RestartPachydermRequest.Validate if the designated constraints aren't met.
type RestartPachydermRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e RestartPachydermRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e RestartPachydermRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e RestartPachydermRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e RestartPachydermRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e RestartPachydermRequestValidationError) ErrorName() string {
	return "RestartPachydermRequestValidationError"
}

// Error satisfies the builtin error interface
func (e RestartPachydermRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sRestartPachydermRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = RestartPachydermRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = RestartPachydermRequestValidationError{}

// Validate checks the field values on RestartPachydermResponse with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *RestartPachydermResponse) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on RestartPachydermResponse with the
// rules defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// RestartPachydermResponseMultiError, or nil if none found.
func (m *RestartPachydermResponse) ValidateAll() error {
	return m.validate(true)
}

func (m *RestartPachydermResponse) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if len(errors) > 0 {
		return RestartPachydermResponseMultiError(errors)
	}

	return nil
}

// RestartPachydermResponseMultiError is an error wrapping multiple validation
// errors returned by RestartPachydermResponse.ValidateAll() if the designated
// constraints aren't met.
type RestartPachydermResponseMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m RestartPachydermResponseMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m RestartPachydermResponseMultiError) AllErrors() []error { return m }

// RestartPachydermResponseValidationError is the validation error returned by
// RestartPachydermResponse.Validate if the designated constraints aren't met.
type RestartPachydermResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e RestartPachydermResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e RestartPachydermResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e RestartPachydermResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e RestartPachydermResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e RestartPachydermResponseValidationError) ErrorName() string {
	return "RestartPachydermResponseValidationError"
}

// Error satisfies the builtin error interface
func (e RestartPachydermResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sRestartPachydermResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = RestartPachydermResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = RestartPachydermResponseValidationError{}
