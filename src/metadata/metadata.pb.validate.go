// Code generated by protoc-gen-validate. DO NOT EDIT.
// source: metadata/metadata.proto

package metadata

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

// Validate checks the field values on Edit with the rules defined in the proto
// definition for this message. If any rules are violated, the first error
// encountered is returned, or nil if there are no violations.
func (m *Edit) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on Edit with the rules defined in the
// proto definition for this message. If any rules are violated, the result is
// a list of violation errors wrapped in EditMultiError, or nil if none found.
func (m *Edit) ValidateAll() error {
	return m.validate(true)
}

func (m *Edit) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	switch v := m.Target.(type) {
	case *Edit_Project:
		if v == nil {
			err := EditValidationError{
				field:  "Target",
				reason: "oneof value cannot be a typed-nil",
			}
			if !all {
				return err
			}
			errors = append(errors, err)
		}

		if m.GetProject() == nil {
			err := EditValidationError{
				field:  "Project",
				reason: "value is required",
			}
			if !all {
				return err
			}
			errors = append(errors, err)
		}

		if all {
			switch v := interface{}(m.GetProject()).(type) {
			case interface{ ValidateAll() error }:
				if err := v.ValidateAll(); err != nil {
					errors = append(errors, EditValidationError{
						field:  "Project",
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			case interface{ Validate() error }:
				if err := v.Validate(); err != nil {
					errors = append(errors, EditValidationError{
						field:  "Project",
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			}
		} else if v, ok := interface{}(m.GetProject()).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return EditValidationError{
					field:  "Project",
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	default:
		_ = v // ensures v is used
	}
	switch v := m.Op.(type) {
	case *Edit_Replace_:
		if v == nil {
			err := EditValidationError{
				field:  "Op",
				reason: "oneof value cannot be a typed-nil",
			}
			if !all {
				return err
			}
			errors = append(errors, err)
		}

		if m.GetReplace() == nil {
			err := EditValidationError{
				field:  "Replace",
				reason: "value is required",
			}
			if !all {
				return err
			}
			errors = append(errors, err)
		}

		if all {
			switch v := interface{}(m.GetReplace()).(type) {
			case interface{ ValidateAll() error }:
				if err := v.ValidateAll(); err != nil {
					errors = append(errors, EditValidationError{
						field:  "Replace",
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			case interface{ Validate() error }:
				if err := v.Validate(); err != nil {
					errors = append(errors, EditValidationError{
						field:  "Replace",
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			}
		} else if v, ok := interface{}(m.GetReplace()).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return EditValidationError{
					field:  "Replace",
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	case *Edit_AddKey_:
		if v == nil {
			err := EditValidationError{
				field:  "Op",
				reason: "oneof value cannot be a typed-nil",
			}
			if !all {
				return err
			}
			errors = append(errors, err)
		}

		if m.GetAddKey() == nil {
			err := EditValidationError{
				field:  "AddKey",
				reason: "value is required",
			}
			if !all {
				return err
			}
			errors = append(errors, err)
		}

		if all {
			switch v := interface{}(m.GetAddKey()).(type) {
			case interface{ ValidateAll() error }:
				if err := v.ValidateAll(); err != nil {
					errors = append(errors, EditValidationError{
						field:  "AddKey",
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			case interface{ Validate() error }:
				if err := v.Validate(); err != nil {
					errors = append(errors, EditValidationError{
						field:  "AddKey",
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			}
		} else if v, ok := interface{}(m.GetAddKey()).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return EditValidationError{
					field:  "AddKey",
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	case *Edit_EditKey_:
		if v == nil {
			err := EditValidationError{
				field:  "Op",
				reason: "oneof value cannot be a typed-nil",
			}
			if !all {
				return err
			}
			errors = append(errors, err)
		}

		if m.GetEditKey() == nil {
			err := EditValidationError{
				field:  "EditKey",
				reason: "value is required",
			}
			if !all {
				return err
			}
			errors = append(errors, err)
		}

		if all {
			switch v := interface{}(m.GetEditKey()).(type) {
			case interface{ ValidateAll() error }:
				if err := v.ValidateAll(); err != nil {
					errors = append(errors, EditValidationError{
						field:  "EditKey",
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			case interface{ Validate() error }:
				if err := v.Validate(); err != nil {
					errors = append(errors, EditValidationError{
						field:  "EditKey",
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			}
		} else if v, ok := interface{}(m.GetEditKey()).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return EditValidationError{
					field:  "EditKey",
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	case *Edit_DeleteKey_:
		if v == nil {
			err := EditValidationError{
				field:  "Op",
				reason: "oneof value cannot be a typed-nil",
			}
			if !all {
				return err
			}
			errors = append(errors, err)
		}

		if m.GetDeleteKey() == nil {
			err := EditValidationError{
				field:  "DeleteKey",
				reason: "value is required",
			}
			if !all {
				return err
			}
			errors = append(errors, err)
		}

		if all {
			switch v := interface{}(m.GetDeleteKey()).(type) {
			case interface{ ValidateAll() error }:
				if err := v.ValidateAll(); err != nil {
					errors = append(errors, EditValidationError{
						field:  "DeleteKey",
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			case interface{ Validate() error }:
				if err := v.Validate(); err != nil {
					errors = append(errors, EditValidationError{
						field:  "DeleteKey",
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			}
		} else if v, ok := interface{}(m.GetDeleteKey()).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return EditValidationError{
					field:  "DeleteKey",
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	default:
		_ = v // ensures v is used
	}

	if len(errors) > 0 {
		return EditMultiError(errors)
	}

	return nil
}

// EditMultiError is an error wrapping multiple validation errors returned by
// Edit.ValidateAll() if the designated constraints aren't met.
type EditMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m EditMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m EditMultiError) AllErrors() []error { return m }

// EditValidationError is the validation error returned by Edit.Validate if the
// designated constraints aren't met.
type EditValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e EditValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e EditValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e EditValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e EditValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e EditValidationError) ErrorName() string { return "EditValidationError" }

// Error satisfies the builtin error interface
func (e EditValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sEdit.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = EditValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = EditValidationError{}

// Validate checks the field values on EditMetadataRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *EditMetadataRequest) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on EditMetadataRequest with the rules
// defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// EditMetadataRequestMultiError, or nil if none found.
func (m *EditMetadataRequest) ValidateAll() error {
	return m.validate(true)
}

func (m *EditMetadataRequest) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	for idx, item := range m.GetEdits() {
		_, _ = idx, item

		if item == nil {
			err := EditMetadataRequestValidationError{
				field:  fmt.Sprintf("Edits[%v]", idx),
				reason: "value is required",
			}
			if !all {
				return err
			}
			errors = append(errors, err)
		}

		if all {
			switch v := interface{}(item).(type) {
			case interface{ ValidateAll() error }:
				if err := v.ValidateAll(); err != nil {
					errors = append(errors, EditMetadataRequestValidationError{
						field:  fmt.Sprintf("Edits[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			case interface{ Validate() error }:
				if err := v.Validate(); err != nil {
					errors = append(errors, EditMetadataRequestValidationError{
						field:  fmt.Sprintf("Edits[%v]", idx),
						reason: "embedded message failed validation",
						cause:  err,
					})
				}
			}
		} else if v, ok := interface{}(item).(interface{ Validate() error }); ok {
			if err := v.Validate(); err != nil {
				return EditMetadataRequestValidationError{
					field:  fmt.Sprintf("Edits[%v]", idx),
					reason: "embedded message failed validation",
					cause:  err,
				}
			}
		}

	}

	if len(errors) > 0 {
		return EditMetadataRequestMultiError(errors)
	}

	return nil
}

// EditMetadataRequestMultiError is an error wrapping multiple validation
// errors returned by EditMetadataRequest.ValidateAll() if the designated
// constraints aren't met.
type EditMetadataRequestMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m EditMetadataRequestMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m EditMetadataRequestMultiError) AllErrors() []error { return m }

// EditMetadataRequestValidationError is the validation error returned by
// EditMetadataRequest.Validate if the designated constraints aren't met.
type EditMetadataRequestValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e EditMetadataRequestValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e EditMetadataRequestValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e EditMetadataRequestValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e EditMetadataRequestValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e EditMetadataRequestValidationError) ErrorName() string {
	return "EditMetadataRequestValidationError"
}

// Error satisfies the builtin error interface
func (e EditMetadataRequestValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sEditMetadataRequest.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = EditMetadataRequestValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = EditMetadataRequestValidationError{}

// Validate checks the field values on EditMetadataResponse with the rules
// defined in the proto definition for this message. If any rules are
// violated, the first error encountered is returned, or nil if there are no violations.
func (m *EditMetadataResponse) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on EditMetadataResponse with the rules
// defined in the proto definition for this message. If any rules are
// violated, the result is a list of violation errors wrapped in
// EditMetadataResponseMultiError, or nil if none found.
func (m *EditMetadataResponse) ValidateAll() error {
	return m.validate(true)
}

func (m *EditMetadataResponse) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if len(errors) > 0 {
		return EditMetadataResponseMultiError(errors)
	}

	return nil
}

// EditMetadataResponseMultiError is an error wrapping multiple validation
// errors returned by EditMetadataResponse.ValidateAll() if the designated
// constraints aren't met.
type EditMetadataResponseMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m EditMetadataResponseMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m EditMetadataResponseMultiError) AllErrors() []error { return m }

// EditMetadataResponseValidationError is the validation error returned by
// EditMetadataResponse.Validate if the designated constraints aren't met.
type EditMetadataResponseValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e EditMetadataResponseValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e EditMetadataResponseValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e EditMetadataResponseValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e EditMetadataResponseValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e EditMetadataResponseValidationError) ErrorName() string {
	return "EditMetadataResponseValidationError"
}

// Error satisfies the builtin error interface
func (e EditMetadataResponseValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sEditMetadataResponse.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = EditMetadataResponseValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = EditMetadataResponseValidationError{}

// Validate checks the field values on Edit_Replace with the rules defined in
// the proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *Edit_Replace) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on Edit_Replace with the rules defined
// in the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in Edit_ReplaceMultiError, or
// nil if none found.
func (m *Edit_Replace) ValidateAll() error {
	return m.validate(true)
}

func (m *Edit_Replace) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	{
		sorted_keys := make([]string, len(m.GetReplacement()))
		i := 0
		for key := range m.GetReplacement() {
			sorted_keys[i] = key
			i++
		}
		sort.Slice(sorted_keys, func(i, j int) bool { return sorted_keys[i] < sorted_keys[j] })
		for _, key := range sorted_keys {
			val := m.GetReplacement()[key]
			_ = val

			if utf8.RuneCountInString(key) < 1 {
				err := Edit_ReplaceValidationError{
					field:  fmt.Sprintf("Replacement[%v]", key),
					reason: "value length must be at least 1 runes",
				}
				if !all {
					return err
				}
				errors = append(errors, err)
			}

			// no validation rules for Replacement[key]
		}
	}

	if len(errors) > 0 {
		return Edit_ReplaceMultiError(errors)
	}

	return nil
}

// Edit_ReplaceMultiError is an error wrapping multiple validation errors
// returned by Edit_Replace.ValidateAll() if the designated constraints aren't met.
type Edit_ReplaceMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m Edit_ReplaceMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m Edit_ReplaceMultiError) AllErrors() []error { return m }

// Edit_ReplaceValidationError is the validation error returned by
// Edit_Replace.Validate if the designated constraints aren't met.
type Edit_ReplaceValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e Edit_ReplaceValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e Edit_ReplaceValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e Edit_ReplaceValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e Edit_ReplaceValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e Edit_ReplaceValidationError) ErrorName() string { return "Edit_ReplaceValidationError" }

// Error satisfies the builtin error interface
func (e Edit_ReplaceValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sEdit_Replace.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = Edit_ReplaceValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = Edit_ReplaceValidationError{}

// Validate checks the field values on Edit_AddKey with the rules defined in
// the proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *Edit_AddKey) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on Edit_AddKey with the rules defined in
// the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in Edit_AddKeyMultiError, or
// nil if none found.
func (m *Edit_AddKey) ValidateAll() error {
	return m.validate(true)
}

func (m *Edit_AddKey) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if utf8.RuneCountInString(m.GetKey()) < 1 {
		err := Edit_AddKeyValidationError{
			field:  "Key",
			reason: "value length must be at least 1 runes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	// no validation rules for Value

	if len(errors) > 0 {
		return Edit_AddKeyMultiError(errors)
	}

	return nil
}

// Edit_AddKeyMultiError is an error wrapping multiple validation errors
// returned by Edit_AddKey.ValidateAll() if the designated constraints aren't met.
type Edit_AddKeyMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m Edit_AddKeyMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m Edit_AddKeyMultiError) AllErrors() []error { return m }

// Edit_AddKeyValidationError is the validation error returned by
// Edit_AddKey.Validate if the designated constraints aren't met.
type Edit_AddKeyValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e Edit_AddKeyValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e Edit_AddKeyValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e Edit_AddKeyValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e Edit_AddKeyValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e Edit_AddKeyValidationError) ErrorName() string { return "Edit_AddKeyValidationError" }

// Error satisfies the builtin error interface
func (e Edit_AddKeyValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sEdit_AddKey.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = Edit_AddKeyValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = Edit_AddKeyValidationError{}

// Validate checks the field values on Edit_EditKey with the rules defined in
// the proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *Edit_EditKey) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on Edit_EditKey with the rules defined
// in the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in Edit_EditKeyMultiError, or
// nil if none found.
func (m *Edit_EditKey) ValidateAll() error {
	return m.validate(true)
}

func (m *Edit_EditKey) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if utf8.RuneCountInString(m.GetKey()) < 1 {
		err := Edit_EditKeyValidationError{
			field:  "Key",
			reason: "value length must be at least 1 runes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	// no validation rules for Value

	if len(errors) > 0 {
		return Edit_EditKeyMultiError(errors)
	}

	return nil
}

// Edit_EditKeyMultiError is an error wrapping multiple validation errors
// returned by Edit_EditKey.ValidateAll() if the designated constraints aren't met.
type Edit_EditKeyMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m Edit_EditKeyMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m Edit_EditKeyMultiError) AllErrors() []error { return m }

// Edit_EditKeyValidationError is the validation error returned by
// Edit_EditKey.Validate if the designated constraints aren't met.
type Edit_EditKeyValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e Edit_EditKeyValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e Edit_EditKeyValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e Edit_EditKeyValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e Edit_EditKeyValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e Edit_EditKeyValidationError) ErrorName() string { return "Edit_EditKeyValidationError" }

// Error satisfies the builtin error interface
func (e Edit_EditKeyValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sEdit_EditKey.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = Edit_EditKeyValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = Edit_EditKeyValidationError{}

// Validate checks the field values on Edit_DeleteKey with the rules defined in
// the proto definition for this message. If any rules are violated, the first
// error encountered is returned, or nil if there are no violations.
func (m *Edit_DeleteKey) Validate() error {
	return m.validate(false)
}

// ValidateAll checks the field values on Edit_DeleteKey with the rules defined
// in the proto definition for this message. If any rules are violated, the
// result is a list of violation errors wrapped in Edit_DeleteKeyMultiError,
// or nil if none found.
func (m *Edit_DeleteKey) ValidateAll() error {
	return m.validate(true)
}

func (m *Edit_DeleteKey) validate(all bool) error {
	if m == nil {
		return nil
	}

	var errors []error

	if utf8.RuneCountInString(m.GetKey()) < 1 {
		err := Edit_DeleteKeyValidationError{
			field:  "Key",
			reason: "value length must be at least 1 runes",
		}
		if !all {
			return err
		}
		errors = append(errors, err)
	}

	if len(errors) > 0 {
		return Edit_DeleteKeyMultiError(errors)
	}

	return nil
}

// Edit_DeleteKeyMultiError is an error wrapping multiple validation errors
// returned by Edit_DeleteKey.ValidateAll() if the designated constraints
// aren't met.
type Edit_DeleteKeyMultiError []error

// Error returns a concatenation of all the error messages it wraps.
func (m Edit_DeleteKeyMultiError) Error() string {
	var msgs []string
	for _, err := range m {
		msgs = append(msgs, err.Error())
	}
	return strings.Join(msgs, "; ")
}

// AllErrors returns a list of validation violation errors.
func (m Edit_DeleteKeyMultiError) AllErrors() []error { return m }

// Edit_DeleteKeyValidationError is the validation error returned by
// Edit_DeleteKey.Validate if the designated constraints aren't met.
type Edit_DeleteKeyValidationError struct {
	field  string
	reason string
	cause  error
	key    bool
}

// Field function returns field value.
func (e Edit_DeleteKeyValidationError) Field() string { return e.field }

// Reason function returns reason value.
func (e Edit_DeleteKeyValidationError) Reason() string { return e.reason }

// Cause function returns cause value.
func (e Edit_DeleteKeyValidationError) Cause() error { return e.cause }

// Key function returns key value.
func (e Edit_DeleteKeyValidationError) Key() bool { return e.key }

// ErrorName returns error name.
func (e Edit_DeleteKeyValidationError) ErrorName() string { return "Edit_DeleteKeyValidationError" }

// Error satisfies the builtin error interface
func (e Edit_DeleteKeyValidationError) Error() string {
	cause := ""
	if e.cause != nil {
		cause = fmt.Sprintf(" | caused by: %v", e.cause)
	}

	key := ""
	if e.key {
		key = "key for "
	}

	return fmt.Sprintf(
		"invalid %sEdit_DeleteKey.%s: %s%s",
		key,
		e.field,
		e.reason,
		cause)
}

var _ error = Edit_DeleteKeyValidationError{}

var _ interface {
	Field() string
	Reason() string
	Key() bool
	Cause() error
	ErrorName() string
} = Edit_DeleteKeyValidationError{}
