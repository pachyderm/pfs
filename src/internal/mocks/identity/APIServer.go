// Code generated by mockery v0.0.0-dev. DO NOT EDIT.

package mocks

import (
	context "context"

	identity "github.com/pachyderm/pachyderm/v2/src/identity"
	mock "github.com/stretchr/testify/mock"
)

// APIServer is an autogenerated mock type for the APIServer type
type APIServer struct {
	mock.Mock
}

// CreateIDPConnector provides a mock function with given fields: _a0, _a1
func (_m *APIServer) CreateIDPConnector(_a0 context.Context, _a1 *identity.CreateIDPConnectorRequest) (*identity.CreateIDPConnectorResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *identity.CreateIDPConnectorResponse
	if rf, ok := ret.Get(0).(func(context.Context, *identity.CreateIDPConnectorRequest) *identity.CreateIDPConnectorResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*identity.CreateIDPConnectorResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *identity.CreateIDPConnectorRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// CreateOIDCClient provides a mock function with given fields: _a0, _a1
func (_m *APIServer) CreateOIDCClient(_a0 context.Context, _a1 *identity.CreateOIDCClientRequest) (*identity.CreateOIDCClientResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *identity.CreateOIDCClientResponse
	if rf, ok := ret.Get(0).(func(context.Context, *identity.CreateOIDCClientRequest) *identity.CreateOIDCClientResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*identity.CreateOIDCClientResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *identity.CreateOIDCClientRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// DeleteAll provides a mock function with given fields: _a0, _a1
func (_m *APIServer) DeleteAll(_a0 context.Context, _a1 *identity.DeleteAllRequest) (*identity.DeleteAllResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *identity.DeleteAllResponse
	if rf, ok := ret.Get(0).(func(context.Context, *identity.DeleteAllRequest) *identity.DeleteAllResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*identity.DeleteAllResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *identity.DeleteAllRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// DeleteIDPConnector provides a mock function with given fields: _a0, _a1
func (_m *APIServer) DeleteIDPConnector(_a0 context.Context, _a1 *identity.DeleteIDPConnectorRequest) (*identity.DeleteIDPConnectorResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *identity.DeleteIDPConnectorResponse
	if rf, ok := ret.Get(0).(func(context.Context, *identity.DeleteIDPConnectorRequest) *identity.DeleteIDPConnectorResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*identity.DeleteIDPConnectorResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *identity.DeleteIDPConnectorRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// DeleteOIDCClient provides a mock function with given fields: _a0, _a1
func (_m *APIServer) DeleteOIDCClient(_a0 context.Context, _a1 *identity.DeleteOIDCClientRequest) (*identity.DeleteOIDCClientResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *identity.DeleteOIDCClientResponse
	if rf, ok := ret.Get(0).(func(context.Context, *identity.DeleteOIDCClientRequest) *identity.DeleteOIDCClientResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*identity.DeleteOIDCClientResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *identity.DeleteOIDCClientRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetIDPConnector provides a mock function with given fields: _a0, _a1
func (_m *APIServer) GetIDPConnector(_a0 context.Context, _a1 *identity.GetIDPConnectorRequest) (*identity.GetIDPConnectorResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *identity.GetIDPConnectorResponse
	if rf, ok := ret.Get(0).(func(context.Context, *identity.GetIDPConnectorRequest) *identity.GetIDPConnectorResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*identity.GetIDPConnectorResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *identity.GetIDPConnectorRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetIdentityServerConfig provides a mock function with given fields: _a0, _a1
func (_m *APIServer) GetIdentityServerConfig(_a0 context.Context, _a1 *identity.GetIdentityServerConfigRequest) (*identity.GetIdentityServerConfigResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *identity.GetIdentityServerConfigResponse
	if rf, ok := ret.Get(0).(func(context.Context, *identity.GetIdentityServerConfigRequest) *identity.GetIdentityServerConfigResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*identity.GetIdentityServerConfigResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *identity.GetIdentityServerConfigRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetOIDCClient provides a mock function with given fields: _a0, _a1
func (_m *APIServer) GetOIDCClient(_a0 context.Context, _a1 *identity.GetOIDCClientRequest) (*identity.GetOIDCClientResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *identity.GetOIDCClientResponse
	if rf, ok := ret.Get(0).(func(context.Context, *identity.GetOIDCClientRequest) *identity.GetOIDCClientResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*identity.GetOIDCClientResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *identity.GetOIDCClientRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ListIDPConnectors provides a mock function with given fields: _a0, _a1
func (_m *APIServer) ListIDPConnectors(_a0 context.Context, _a1 *identity.ListIDPConnectorsRequest) (*identity.ListIDPConnectorsResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *identity.ListIDPConnectorsResponse
	if rf, ok := ret.Get(0).(func(context.Context, *identity.ListIDPConnectorsRequest) *identity.ListIDPConnectorsResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*identity.ListIDPConnectorsResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *identity.ListIDPConnectorsRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ListOIDCClients provides a mock function with given fields: _a0, _a1
func (_m *APIServer) ListOIDCClients(_a0 context.Context, _a1 *identity.ListOIDCClientsRequest) (*identity.ListOIDCClientsResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *identity.ListOIDCClientsResponse
	if rf, ok := ret.Get(0).(func(context.Context, *identity.ListOIDCClientsRequest) *identity.ListOIDCClientsResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*identity.ListOIDCClientsResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *identity.ListOIDCClientsRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// SetIdentityServerConfig provides a mock function with given fields: _a0, _a1
func (_m *APIServer) SetIdentityServerConfig(_a0 context.Context, _a1 *identity.SetIdentityServerConfigRequest) (*identity.SetIdentityServerConfigResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *identity.SetIdentityServerConfigResponse
	if rf, ok := ret.Get(0).(func(context.Context, *identity.SetIdentityServerConfigRequest) *identity.SetIdentityServerConfigResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*identity.SetIdentityServerConfigResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *identity.SetIdentityServerConfigRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// UpdateIDPConnector provides a mock function with given fields: _a0, _a1
func (_m *APIServer) UpdateIDPConnector(_a0 context.Context, _a1 *identity.UpdateIDPConnectorRequest) (*identity.UpdateIDPConnectorResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *identity.UpdateIDPConnectorResponse
	if rf, ok := ret.Get(0).(func(context.Context, *identity.UpdateIDPConnectorRequest) *identity.UpdateIDPConnectorResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*identity.UpdateIDPConnectorResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *identity.UpdateIDPConnectorRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// UpdateOIDCClient provides a mock function with given fields: _a0, _a1
func (_m *APIServer) UpdateOIDCClient(_a0 context.Context, _a1 *identity.UpdateOIDCClientRequest) (*identity.UpdateOIDCClientResponse, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *identity.UpdateOIDCClientResponse
	if rf, ok := ret.Get(0).(func(context.Context, *identity.UpdateOIDCClientRequest) *identity.UpdateOIDCClientResponse); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*identity.UpdateOIDCClientResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *identity.UpdateOIDCClientRequest) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}
