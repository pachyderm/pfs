// Code generated by mockery v0.0.0-dev. DO NOT EDIT.

package mocks

import (
	context "context"

	auth "github.com/pachyderm/pachyderm/v2/src/auth"

	grpc "google.golang.org/grpc"

	mock "github.com/stretchr/testify/mock"
)

// APIClient is an autogenerated mock type for the APIClient type
type APIClient struct {
	mock.Mock
}

// Activate provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) Activate(ctx context.Context, in *auth.ActivateRequest, opts ...grpc.CallOption) (*auth.ActivateResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *auth.ActivateResponse
	if rf, ok := ret.Get(0).(func(context.Context, *auth.ActivateRequest, ...grpc.CallOption) *auth.ActivateResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*auth.ActivateResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *auth.ActivateRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Authenticate provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) Authenticate(ctx context.Context, in *auth.AuthenticateRequest, opts ...grpc.CallOption) (*auth.AuthenticateResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *auth.AuthenticateResponse
	if rf, ok := ret.Get(0).(func(context.Context, *auth.AuthenticateRequest, ...grpc.CallOption) *auth.AuthenticateResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*auth.AuthenticateResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *auth.AuthenticateRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Authorize provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) Authorize(ctx context.Context, in *auth.AuthorizeRequest, opts ...grpc.CallOption) (*auth.AuthorizeResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *auth.AuthorizeResponse
	if rf, ok := ret.Get(0).(func(context.Context, *auth.AuthorizeRequest, ...grpc.CallOption) *auth.AuthorizeResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*auth.AuthorizeResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *auth.AuthorizeRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Deactivate provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) Deactivate(ctx context.Context, in *auth.DeactivateRequest, opts ...grpc.CallOption) (*auth.DeactivateResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *auth.DeactivateResponse
	if rf, ok := ret.Get(0).(func(context.Context, *auth.DeactivateRequest, ...grpc.CallOption) *auth.DeactivateResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*auth.DeactivateResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *auth.DeactivateRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ExtendAuthToken provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) ExtendAuthToken(ctx context.Context, in *auth.ExtendAuthTokenRequest, opts ...grpc.CallOption) (*auth.ExtendAuthTokenResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *auth.ExtendAuthTokenResponse
	if rf, ok := ret.Get(0).(func(context.Context, *auth.ExtendAuthTokenRequest, ...grpc.CallOption) *auth.ExtendAuthTokenResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*auth.ExtendAuthTokenResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *auth.ExtendAuthTokenRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ExtractAuthTokens provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) ExtractAuthTokens(ctx context.Context, in *auth.ExtractAuthTokensRequest, opts ...grpc.CallOption) (*auth.ExtractAuthTokensResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *auth.ExtractAuthTokensResponse
	if rf, ok := ret.Get(0).(func(context.Context, *auth.ExtractAuthTokensRequest, ...grpc.CallOption) *auth.ExtractAuthTokensResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*auth.ExtractAuthTokensResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *auth.ExtractAuthTokensRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetAuthToken provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) GetAuthToken(ctx context.Context, in *auth.GetAuthTokenRequest, opts ...grpc.CallOption) (*auth.GetAuthTokenResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *auth.GetAuthTokenResponse
	if rf, ok := ret.Get(0).(func(context.Context, *auth.GetAuthTokenRequest, ...grpc.CallOption) *auth.GetAuthTokenResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*auth.GetAuthTokenResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *auth.GetAuthTokenRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetConfiguration provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) GetConfiguration(ctx context.Context, in *auth.GetConfigurationRequest, opts ...grpc.CallOption) (*auth.GetConfigurationResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *auth.GetConfigurationResponse
	if rf, ok := ret.Get(0).(func(context.Context, *auth.GetConfigurationRequest, ...grpc.CallOption) *auth.GetConfigurationResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*auth.GetConfigurationResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *auth.GetConfigurationRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetGroups provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) GetGroups(ctx context.Context, in *auth.GetGroupsRequest, opts ...grpc.CallOption) (*auth.GetGroupsResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *auth.GetGroupsResponse
	if rf, ok := ret.Get(0).(func(context.Context, *auth.GetGroupsRequest, ...grpc.CallOption) *auth.GetGroupsResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*auth.GetGroupsResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *auth.GetGroupsRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetOIDCLogin provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) GetOIDCLogin(ctx context.Context, in *auth.GetOIDCLoginRequest, opts ...grpc.CallOption) (*auth.GetOIDCLoginResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *auth.GetOIDCLoginResponse
	if rf, ok := ret.Get(0).(func(context.Context, *auth.GetOIDCLoginRequest, ...grpc.CallOption) *auth.GetOIDCLoginResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*auth.GetOIDCLoginResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *auth.GetOIDCLoginRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetRobotToken provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) GetRobotToken(ctx context.Context, in *auth.GetRobotTokenRequest, opts ...grpc.CallOption) (*auth.GetRobotTokenResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *auth.GetRobotTokenResponse
	if rf, ok := ret.Get(0).(func(context.Context, *auth.GetRobotTokenRequest, ...grpc.CallOption) *auth.GetRobotTokenResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*auth.GetRobotTokenResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *auth.GetRobotTokenRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetRoleBinding provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) GetRoleBinding(ctx context.Context, in *auth.GetRoleBindingRequest, opts ...grpc.CallOption) (*auth.GetRoleBindingResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *auth.GetRoleBindingResponse
	if rf, ok := ret.Get(0).(func(context.Context, *auth.GetRoleBindingRequest, ...grpc.CallOption) *auth.GetRoleBindingResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*auth.GetRoleBindingResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *auth.GetRoleBindingRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetUsers provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) GetUsers(ctx context.Context, in *auth.GetUsersRequest, opts ...grpc.CallOption) (*auth.GetUsersResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *auth.GetUsersResponse
	if rf, ok := ret.Get(0).(func(context.Context, *auth.GetUsersRequest, ...grpc.CallOption) *auth.GetUsersResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*auth.GetUsersResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *auth.GetUsersRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ModifyMembers provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) ModifyMembers(ctx context.Context, in *auth.ModifyMembersRequest, opts ...grpc.CallOption) (*auth.ModifyMembersResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *auth.ModifyMembersResponse
	if rf, ok := ret.Get(0).(func(context.Context, *auth.ModifyMembersRequest, ...grpc.CallOption) *auth.ModifyMembersResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*auth.ModifyMembersResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *auth.ModifyMembersRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ModifyRoleBinding provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) ModifyRoleBinding(ctx context.Context, in *auth.ModifyRoleBindingRequest, opts ...grpc.CallOption) (*auth.ModifyRoleBindingResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *auth.ModifyRoleBindingResponse
	if rf, ok := ret.Get(0).(func(context.Context, *auth.ModifyRoleBindingRequest, ...grpc.CallOption) *auth.ModifyRoleBindingResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*auth.ModifyRoleBindingResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *auth.ModifyRoleBindingRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// RestoreAuthToken provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) RestoreAuthToken(ctx context.Context, in *auth.RestoreAuthTokenRequest, opts ...grpc.CallOption) (*auth.RestoreAuthTokenResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *auth.RestoreAuthTokenResponse
	if rf, ok := ret.Get(0).(func(context.Context, *auth.RestoreAuthTokenRequest, ...grpc.CallOption) *auth.RestoreAuthTokenResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*auth.RestoreAuthTokenResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *auth.RestoreAuthTokenRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// RevokeAuthToken provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) RevokeAuthToken(ctx context.Context, in *auth.RevokeAuthTokenRequest, opts ...grpc.CallOption) (*auth.RevokeAuthTokenResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *auth.RevokeAuthTokenResponse
	if rf, ok := ret.Get(0).(func(context.Context, *auth.RevokeAuthTokenRequest, ...grpc.CallOption) *auth.RevokeAuthTokenResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*auth.RevokeAuthTokenResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *auth.RevokeAuthTokenRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// SetConfiguration provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) SetConfiguration(ctx context.Context, in *auth.SetConfigurationRequest, opts ...grpc.CallOption) (*auth.SetConfigurationResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *auth.SetConfigurationResponse
	if rf, ok := ret.Get(0).(func(context.Context, *auth.SetConfigurationRequest, ...grpc.CallOption) *auth.SetConfigurationResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*auth.SetConfigurationResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *auth.SetConfigurationRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// SetGroupsForUser provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) SetGroupsForUser(ctx context.Context, in *auth.SetGroupsForUserRequest, opts ...grpc.CallOption) (*auth.SetGroupsForUserResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *auth.SetGroupsForUserResponse
	if rf, ok := ret.Get(0).(func(context.Context, *auth.SetGroupsForUserRequest, ...grpc.CallOption) *auth.SetGroupsForUserResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*auth.SetGroupsForUserResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *auth.SetGroupsForUserRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// WhoAmI provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) WhoAmI(ctx context.Context, in *auth.WhoAmIRequest, opts ...grpc.CallOption) (*auth.WhoAmIResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *auth.WhoAmIResponse
	if rf, ok := ret.Get(0).(func(context.Context, *auth.WhoAmIRequest, ...grpc.CallOption) *auth.WhoAmIResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*auth.WhoAmIResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *auth.WhoAmIRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}
