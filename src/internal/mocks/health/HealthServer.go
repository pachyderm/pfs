// Code generated by mockery v0.0.0-dev. DO NOT EDIT.

package mocks

import (
	context "context"

	mock "github.com/stretchr/testify/mock"

	types "github.com/gogo/protobuf/types"
)

// HealthServer is an autogenerated mock type for the HealthServer type
type HealthServer struct {
	mock.Mock
}

// Health provides a mock function with given fields: _a0, _a1
func (_m *HealthServer) Health(_a0 context.Context, _a1 *types.Empty) (*types.Empty, error) {
	ret := _m.Called(_a0, _a1)

	var r0 *types.Empty
	if rf, ok := ret.Get(0).(func(context.Context, *types.Empty) *types.Empty); ok {
		r0 = rf(_a0, _a1)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*types.Empty)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *types.Empty) error); ok {
		r1 = rf(_a0, _a1)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}
