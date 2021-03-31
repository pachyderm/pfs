// Code generated by mockery v0.0.0-dev. DO NOT EDIT.

package mocks

import (
	context "context"

	grpc "google.golang.org/grpc"

	mock "github.com/stretchr/testify/mock"

	pfs "github.com/pachyderm/pachyderm/v2/src/pfs"

	types "github.com/gogo/protobuf/types"
)

// APIClient is an autogenerated mock type for the APIClient type
type APIClient struct {
	mock.Mock
}

// ActivateAuth provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) ActivateAuth(ctx context.Context, in *pfs.ActivateAuthRequest, opts ...grpc.CallOption) (*pfs.ActivateAuthResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *pfs.ActivateAuthResponse
	if rf, ok := ret.Get(0).(func(context.Context, *pfs.ActivateAuthRequest, ...grpc.CallOption) *pfs.ActivateAuthResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*pfs.ActivateAuthResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *pfs.ActivateAuthRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// AddFileset provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) AddFileset(ctx context.Context, in *pfs.AddFilesetRequest, opts ...grpc.CallOption) (*types.Empty, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *types.Empty
	if rf, ok := ret.Get(0).(func(context.Context, *pfs.AddFilesetRequest, ...grpc.CallOption) *types.Empty); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*types.Empty)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *pfs.AddFilesetRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ClearCommit provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) ClearCommit(ctx context.Context, in *pfs.ClearCommitRequest, opts ...grpc.CallOption) (*types.Empty, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *types.Empty
	if rf, ok := ret.Get(0).(func(context.Context, *pfs.ClearCommitRequest, ...grpc.CallOption) *types.Empty); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*types.Empty)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *pfs.ClearCommitRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// CopyFile provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) CopyFile(ctx context.Context, in *pfs.CopyFileRequest, opts ...grpc.CallOption) (*types.Empty, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *types.Empty
	if rf, ok := ret.Get(0).(func(context.Context, *pfs.CopyFileRequest, ...grpc.CallOption) *types.Empty); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*types.Empty)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *pfs.CopyFileRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// CreateBranch provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) CreateBranch(ctx context.Context, in *pfs.CreateBranchRequest, opts ...grpc.CallOption) (*types.Empty, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *types.Empty
	if rf, ok := ret.Get(0).(func(context.Context, *pfs.CreateBranchRequest, ...grpc.CallOption) *types.Empty); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*types.Empty)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *pfs.CreateBranchRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// CreateFileset provides a mock function with given fields: ctx, opts
func (_m *APIClient) CreateFileset(ctx context.Context, opts ...grpc.CallOption) (pfs.API_CreateFilesetClient, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 pfs.API_CreateFilesetClient
	if rf, ok := ret.Get(0).(func(context.Context, ...grpc.CallOption) pfs.API_CreateFilesetClient); ok {
		r0 = rf(ctx, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(pfs.API_CreateFilesetClient)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// CreateRepo provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) CreateRepo(ctx context.Context, in *pfs.CreateRepoRequest, opts ...grpc.CallOption) (*types.Empty, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *types.Empty
	if rf, ok := ret.Get(0).(func(context.Context, *pfs.CreateRepoRequest, ...grpc.CallOption) *types.Empty); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*types.Empty)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *pfs.CreateRepoRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// DeleteAll provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) DeleteAll(ctx context.Context, in *types.Empty, opts ...grpc.CallOption) (*types.Empty, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *types.Empty
	if rf, ok := ret.Get(0).(func(context.Context, *types.Empty, ...grpc.CallOption) *types.Empty); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*types.Empty)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *types.Empty, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// DeleteBranch provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) DeleteBranch(ctx context.Context, in *pfs.DeleteBranchRequest, opts ...grpc.CallOption) (*types.Empty, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *types.Empty
	if rf, ok := ret.Get(0).(func(context.Context, *pfs.DeleteBranchRequest, ...grpc.CallOption) *types.Empty); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*types.Empty)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *pfs.DeleteBranchRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// DeleteRepo provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) DeleteRepo(ctx context.Context, in *pfs.DeleteRepoRequest, opts ...grpc.CallOption) (*types.Empty, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *types.Empty
	if rf, ok := ret.Get(0).(func(context.Context, *pfs.DeleteRepoRequest, ...grpc.CallOption) *types.Empty); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*types.Empty)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *pfs.DeleteRepoRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// DiffFile provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) DiffFile(ctx context.Context, in *pfs.DiffFileRequest, opts ...grpc.CallOption) (pfs.API_DiffFileClient, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 pfs.API_DiffFileClient
	if rf, ok := ret.Get(0).(func(context.Context, *pfs.DiffFileRequest, ...grpc.CallOption) pfs.API_DiffFileClient); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(pfs.API_DiffFileClient)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *pfs.DiffFileRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// FinishCommit provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) FinishCommit(ctx context.Context, in *pfs.FinishCommitRequest, opts ...grpc.CallOption) (*types.Empty, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *types.Empty
	if rf, ok := ret.Get(0).(func(context.Context, *pfs.FinishCommitRequest, ...grpc.CallOption) *types.Empty); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*types.Empty)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *pfs.FinishCommitRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// FlushCommit provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) FlushCommit(ctx context.Context, in *pfs.FlushCommitRequest, opts ...grpc.CallOption) (pfs.API_FlushCommitClient, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 pfs.API_FlushCommitClient
	if rf, ok := ret.Get(0).(func(context.Context, *pfs.FlushCommitRequest, ...grpc.CallOption) pfs.API_FlushCommitClient); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(pfs.API_FlushCommitClient)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *pfs.FlushCommitRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// Fsck provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) Fsck(ctx context.Context, in *pfs.FsckRequest, opts ...grpc.CallOption) (pfs.API_FsckClient, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 pfs.API_FsckClient
	if rf, ok := ret.Get(0).(func(context.Context, *pfs.FsckRequest, ...grpc.CallOption) pfs.API_FsckClient); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(pfs.API_FsckClient)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *pfs.FsckRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetFile provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) GetFile(ctx context.Context, in *pfs.GetFileRequest, opts ...grpc.CallOption) (pfs.API_GetFileClient, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 pfs.API_GetFileClient
	if rf, ok := ret.Get(0).(func(context.Context, *pfs.GetFileRequest, ...grpc.CallOption) pfs.API_GetFileClient); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(pfs.API_GetFileClient)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *pfs.GetFileRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GetFileset provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) GetFileset(ctx context.Context, in *pfs.GetFilesetRequest, opts ...grpc.CallOption) (*pfs.CreateFilesetResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *pfs.CreateFilesetResponse
	if rf, ok := ret.Get(0).(func(context.Context, *pfs.GetFilesetRequest, ...grpc.CallOption) *pfs.CreateFilesetResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*pfs.CreateFilesetResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *pfs.GetFilesetRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// GlobFile provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) GlobFile(ctx context.Context, in *pfs.GlobFileRequest, opts ...grpc.CallOption) (pfs.API_GlobFileClient, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 pfs.API_GlobFileClient
	if rf, ok := ret.Get(0).(func(context.Context, *pfs.GlobFileRequest, ...grpc.CallOption) pfs.API_GlobFileClient); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(pfs.API_GlobFileClient)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *pfs.GlobFileRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// InspectBranch provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) InspectBranch(ctx context.Context, in *pfs.InspectBranchRequest, opts ...grpc.CallOption) (*pfs.BranchInfo, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *pfs.BranchInfo
	if rf, ok := ret.Get(0).(func(context.Context, *pfs.InspectBranchRequest, ...grpc.CallOption) *pfs.BranchInfo); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*pfs.BranchInfo)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *pfs.InspectBranchRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// InspectCommit provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) InspectCommit(ctx context.Context, in *pfs.InspectCommitRequest, opts ...grpc.CallOption) (*pfs.CommitInfo, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *pfs.CommitInfo
	if rf, ok := ret.Get(0).(func(context.Context, *pfs.InspectCommitRequest, ...grpc.CallOption) *pfs.CommitInfo); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*pfs.CommitInfo)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *pfs.InspectCommitRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// InspectFile provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) InspectFile(ctx context.Context, in *pfs.InspectFileRequest, opts ...grpc.CallOption) (*pfs.FileInfo, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *pfs.FileInfo
	if rf, ok := ret.Get(0).(func(context.Context, *pfs.InspectFileRequest, ...grpc.CallOption) *pfs.FileInfo); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*pfs.FileInfo)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *pfs.InspectFileRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// InspectRepo provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) InspectRepo(ctx context.Context, in *pfs.InspectRepoRequest, opts ...grpc.CallOption) (*pfs.RepoInfo, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *pfs.RepoInfo
	if rf, ok := ret.Get(0).(func(context.Context, *pfs.InspectRepoRequest, ...grpc.CallOption) *pfs.RepoInfo); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*pfs.RepoInfo)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *pfs.InspectRepoRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ListBranch provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) ListBranch(ctx context.Context, in *pfs.ListBranchRequest, opts ...grpc.CallOption) (*pfs.BranchInfos, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *pfs.BranchInfos
	if rf, ok := ret.Get(0).(func(context.Context, *pfs.ListBranchRequest, ...grpc.CallOption) *pfs.BranchInfos); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*pfs.BranchInfos)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *pfs.ListBranchRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ListCommit provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) ListCommit(ctx context.Context, in *pfs.ListCommitRequest, opts ...grpc.CallOption) (pfs.API_ListCommitClient, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 pfs.API_ListCommitClient
	if rf, ok := ret.Get(0).(func(context.Context, *pfs.ListCommitRequest, ...grpc.CallOption) pfs.API_ListCommitClient); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(pfs.API_ListCommitClient)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *pfs.ListCommitRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ListFile provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) ListFile(ctx context.Context, in *pfs.ListFileRequest, opts ...grpc.CallOption) (pfs.API_ListFileClient, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 pfs.API_ListFileClient
	if rf, ok := ret.Get(0).(func(context.Context, *pfs.ListFileRequest, ...grpc.CallOption) pfs.API_ListFileClient); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(pfs.API_ListFileClient)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *pfs.ListFileRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ListRepo provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) ListRepo(ctx context.Context, in *pfs.ListRepoRequest, opts ...grpc.CallOption) (*pfs.ListRepoResponse, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *pfs.ListRepoResponse
	if rf, ok := ret.Get(0).(func(context.Context, *pfs.ListRepoRequest, ...grpc.CallOption) *pfs.ListRepoResponse); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*pfs.ListRepoResponse)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *pfs.ListRepoRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// ModifyFile provides a mock function with given fields: ctx, opts
func (_m *APIClient) ModifyFile(ctx context.Context, opts ...grpc.CallOption) (pfs.API_ModifyFileClient, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 pfs.API_ModifyFileClient
	if rf, ok := ret.Get(0).(func(context.Context, ...grpc.CallOption) pfs.API_ModifyFileClient); ok {
		r0 = rf(ctx, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(pfs.API_ModifyFileClient)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// RenewFileset provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) RenewFileset(ctx context.Context, in *pfs.RenewFilesetRequest, opts ...grpc.CallOption) (*types.Empty, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *types.Empty
	if rf, ok := ret.Get(0).(func(context.Context, *pfs.RenewFilesetRequest, ...grpc.CallOption) *types.Empty); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*types.Empty)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *pfs.RenewFilesetRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// SquashCommit provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) SquashCommit(ctx context.Context, in *pfs.SquashCommitRequest, opts ...grpc.CallOption) (*types.Empty, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *types.Empty
	if rf, ok := ret.Get(0).(func(context.Context, *pfs.SquashCommitRequest, ...grpc.CallOption) *types.Empty); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*types.Empty)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *pfs.SquashCommitRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// StartCommit provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) StartCommit(ctx context.Context, in *pfs.StartCommitRequest, opts ...grpc.CallOption) (*pfs.Commit, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 *pfs.Commit
	if rf, ok := ret.Get(0).(func(context.Context, *pfs.StartCommitRequest, ...grpc.CallOption) *pfs.Commit); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(*pfs.Commit)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *pfs.StartCommitRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// SubscribeCommit provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) SubscribeCommit(ctx context.Context, in *pfs.SubscribeCommitRequest, opts ...grpc.CallOption) (pfs.API_SubscribeCommitClient, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 pfs.API_SubscribeCommitClient
	if rf, ok := ret.Get(0).(func(context.Context, *pfs.SubscribeCommitRequest, ...grpc.CallOption) pfs.API_SubscribeCommitClient); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(pfs.API_SubscribeCommitClient)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *pfs.SubscribeCommitRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}

// WalkFile provides a mock function with given fields: ctx, in, opts
func (_m *APIClient) WalkFile(ctx context.Context, in *pfs.WalkFileRequest, opts ...grpc.CallOption) (pfs.API_WalkFileClient, error) {
	_va := make([]interface{}, len(opts))
	for _i := range opts {
		_va[_i] = opts[_i]
	}
	var _ca []interface{}
	_ca = append(_ca, ctx, in)
	_ca = append(_ca, _va...)
	ret := _m.Called(_ca...)

	var r0 pfs.API_WalkFileClient
	if rf, ok := ret.Get(0).(func(context.Context, *pfs.WalkFileRequest, ...grpc.CallOption) pfs.API_WalkFileClient); ok {
		r0 = rf(ctx, in, opts...)
	} else {
		if ret.Get(0) != nil {
			r0 = ret.Get(0).(pfs.API_WalkFileClient)
		}
	}

	var r1 error
	if rf, ok := ret.Get(1).(func(context.Context, *pfs.WalkFileRequest, ...grpc.CallOption) error); ok {
		r1 = rf(ctx, in, opts...)
	} else {
		r1 = ret.Error(1)
	}

	return r0, r1
}
