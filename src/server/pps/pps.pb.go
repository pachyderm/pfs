// Code generated by protoc-gen-go.
// source: server/pps/pps.proto
// DO NOT EDIT!

/*
Package pps is a generated protocol buffer package.

It is generated from these files:
	server/pps/pps.proto

It has these top-level messages:
	StartJobRequest
	StartJobResponse
	FinishJobRequest
*/
package pps

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import google_protobuf "go.pedge.io/pb/go/google/protobuf"
import fuse "github.com/pachyderm/pachyderm/src/server/pfs/fuse"
import _ "github.com/pachyderm/pachyderm/src/client/pfs"
import pachyderm_pps "github.com/pachyderm/pachyderm/src/client/pps"

import (
	context "golang.org/x/net/context"
	grpc "google.golang.org/grpc"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type StartJobRequest struct {
	Job *pachyderm_pps.Job `protobuf:"bytes,1,opt,name=job" json:"job,omitempty"`
}

func (m *StartJobRequest) Reset()                    { *m = StartJobRequest{} }
func (m *StartJobRequest) String() string            { return proto.CompactTextString(m) }
func (*StartJobRequest) ProtoMessage()               {}
func (*StartJobRequest) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{0} }

func (m *StartJobRequest) GetJob() *pachyderm_pps.Job {
	if m != nil {
		return m.Job
	}
	return nil
}

type StartJobResponse struct {
	Transform    *pachyderm_pps.Transform `protobuf:"bytes,1,opt,name=transform" json:"transform,omitempty"`
	CommitMounts []*fuse.CommitMount      `protobuf:"bytes,2,rep,name=commit_mounts,json=commitMounts" json:"commit_mounts,omitempty"`
}

func (m *StartJobResponse) Reset()                    { *m = StartJobResponse{} }
func (m *StartJobResponse) String() string            { return proto.CompactTextString(m) }
func (*StartJobResponse) ProtoMessage()               {}
func (*StartJobResponse) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{1} }

func (m *StartJobResponse) GetTransform() *pachyderm_pps.Transform {
	if m != nil {
		return m.Transform
	}
	return nil
}

func (m *StartJobResponse) GetCommitMounts() []*fuse.CommitMount {
	if m != nil {
		return m.CommitMounts
	}
	return nil
}

type FinishJobRequest struct {
	Job     *pachyderm_pps.Job `protobuf:"bytes,1,opt,name=job" json:"job,omitempty"`
	Success bool               `protobuf:"varint,2,opt,name=success" json:"success,omitempty"`
}

func (m *FinishJobRequest) Reset()                    { *m = FinishJobRequest{} }
func (m *FinishJobRequest) String() string            { return proto.CompactTextString(m) }
func (*FinishJobRequest) ProtoMessage()               {}
func (*FinishJobRequest) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{2} }

func (m *FinishJobRequest) GetJob() *pachyderm_pps.Job {
	if m != nil {
		return m.Job
	}
	return nil
}

func init() {
	proto.RegisterType((*StartJobRequest)(nil), "pachyderm.pps.StartJobRequest")
	proto.RegisterType((*StartJobResponse)(nil), "pachyderm.pps.StartJobResponse")
	proto.RegisterType((*FinishJobRequest)(nil), "pachyderm.pps.FinishJobRequest")
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion3

// Client API for InternalJobAPI service

type InternalJobAPIClient interface {
	StartJob(ctx context.Context, in *StartJobRequest, opts ...grpc.CallOption) (*StartJobResponse, error)
	FinishJob(ctx context.Context, in *FinishJobRequest, opts ...grpc.CallOption) (*google_protobuf.Empty, error)
}

type internalJobAPIClient struct {
	cc *grpc.ClientConn
}

func NewInternalJobAPIClient(cc *grpc.ClientConn) InternalJobAPIClient {
	return &internalJobAPIClient{cc}
}

func (c *internalJobAPIClient) StartJob(ctx context.Context, in *StartJobRequest, opts ...grpc.CallOption) (*StartJobResponse, error) {
	out := new(StartJobResponse)
	err := grpc.Invoke(ctx, "/pachyderm.pps.InternalJobAPI/StartJob", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *internalJobAPIClient) FinishJob(ctx context.Context, in *FinishJobRequest, opts ...grpc.CallOption) (*google_protobuf.Empty, error) {
	out := new(google_protobuf.Empty)
	err := grpc.Invoke(ctx, "/pachyderm.pps.InternalJobAPI/FinishJob", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Server API for InternalJobAPI service

type InternalJobAPIServer interface {
	StartJob(context.Context, *StartJobRequest) (*StartJobResponse, error)
	FinishJob(context.Context, *FinishJobRequest) (*google_protobuf.Empty, error)
}

func RegisterInternalJobAPIServer(s *grpc.Server, srv InternalJobAPIServer) {
	s.RegisterService(&_InternalJobAPI_serviceDesc, srv)
}

func _InternalJobAPI_StartJob_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(StartJobRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InternalJobAPIServer).StartJob(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pachyderm.pps.InternalJobAPI/StartJob",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InternalJobAPIServer).StartJob(ctx, req.(*StartJobRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _InternalJobAPI_FinishJob_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FinishJobRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(InternalJobAPIServer).FinishJob(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pachyderm.pps.InternalJobAPI/FinishJob",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(InternalJobAPIServer).FinishJob(ctx, req.(*FinishJobRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _InternalJobAPI_serviceDesc = grpc.ServiceDesc{
	ServiceName: "pachyderm.pps.InternalJobAPI",
	HandlerType: (*InternalJobAPIServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "StartJob",
			Handler:    _InternalJobAPI_StartJob_Handler,
		},
		{
			MethodName: "FinishJob",
			Handler:    _InternalJobAPI_FinishJob_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: fileDescriptor0,
}

func init() { proto.RegisterFile("server/pps/pps.proto", fileDescriptor0) }

var fileDescriptor0 = []byte{
	// 327 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x09, 0x6e, 0x88, 0x02, 0xff, 0x94, 0x92, 0xcf, 0x4b, 0xc3, 0x30,
	0x14, 0xc7, 0x57, 0x87, 0xba, 0x65, 0x4e, 0x67, 0x18, 0x52, 0x2a, 0xe8, 0x28, 0x1e, 0x76, 0x4a,
	0x61, 0xc2, 0x3c, 0xab, 0x38, 0xd8, 0x60, 0x20, 0xd5, 0x93, 0x17, 0x69, 0xeb, 0xeb, 0x56, 0x59,
	0x93, 0x98, 0x97, 0x0a, 0xbb, 0xfa, 0xcf, 0xf8, 0x6f, 0x4a, 0xb3, 0xd5, 0x6a, 0xc0, 0x83, 0x87,
	0x04, 0x5e, 0x3e, 0xdf, 0x7c, 0xdf, 0x0f, 0x1e, 0xe9, 0x23, 0xa8, 0x77, 0x50, 0x81, 0x94, 0x58,
	0x1e, 0x26, 0x95, 0xd0, 0x82, 0x76, 0x65, 0x94, 0x2c, 0xd7, 0x2f, 0xa0, 0x72, 0x26, 0x25, 0x7a,
	0xa7, 0x0b, 0x21, 0x16, 0x2b, 0x08, 0x0c, 0x8c, 0x8b, 0x34, 0x80, 0x5c, 0xea, 0xf5, 0x46, 0xeb,
	0x79, 0x95, 0x43, 0x8a, 0x41, 0x5a, 0x20, 0x98, 0x6b, 0xcb, 0xfa, 0xc9, 0x2a, 0x03, 0xae, 0x0d,
	0x93, 0x29, 0xda, 0xaf, 0x3f, 0x73, 0xfa, 0x57, 0xe4, 0xe8, 0x41, 0x47, 0x4a, 0xcf, 0x44, 0x1c,
	0xc2, 0x5b, 0x01, 0xa8, 0xe9, 0x05, 0x69, 0xbe, 0x8a, 0xd8, 0x75, 0x06, 0xce, 0xb0, 0x33, 0xa2,
	0xec, 0x57, 0x51, 0xac, 0xd4, 0x95, 0xd8, 0xff, 0x70, 0x48, 0xaf, 0xfe, 0x89, 0x52, 0x70, 0x04,
	0x3a, 0x26, 0x6d, 0xad, 0x22, 0x8e, 0xa9, 0x50, 0xf9, 0xd6, 0xc0, 0xb5, 0x0c, 0x1e, 0x2b, 0x1e,
	0xd6, 0x52, 0x3a, 0x26, 0xdd, 0x44, 0xe4, 0x79, 0xa6, 0x9f, 0x73, 0x51, 0x70, 0x8d, 0xee, 0xce,
	0xa0, 0x39, 0xec, 0x8c, 0x8e, 0x99, 0xe9, 0xea, 0xd6, 0xa0, 0x79, 0x49, 0xc2, 0x83, 0xa4, 0x0e,
	0xd0, 0x0f, 0x49, 0x6f, 0x92, 0xf1, 0x0c, 0x97, 0xff, 0x2d, 0x9f, 0xba, 0x64, 0x1f, 0x8b, 0x24,
	0x01, 0x2c, 0x73, 0x39, 0xc3, 0x56, 0x58, 0x85, 0xa3, 0x4f, 0x87, 0x1c, 0x4e, 0xb9, 0x06, 0xc5,
	0xa3, 0xd5, 0x4c, 0xc4, 0xd7, 0xf7, 0x53, 0x3a, 0x27, 0xad, 0xaa, 0x55, 0x7a, 0x66, 0x39, 0x5a,
	0xd3, 0xf3, 0xce, 0xff, 0xe4, 0x9b, 0x19, 0xf9, 0x0d, 0x3a, 0x21, 0xed, 0xef, 0xaa, 0xa9, 0xad,
	0xb7, 0xfb, 0xf1, 0x4e, 0xd8, 0x66, 0x0f, 0x58, 0xb5, 0x07, 0xec, 0xae, 0xdc, 0x03, 0xbf, 0x71,
	0xb3, 0xfb, 0xd4, 0x94, 0x12, 0xe3, 0x3d, 0x03, 0x2e, 0xbf, 0x02, 0x00, 0x00, 0xff, 0xff, 0x4d,
	0x72, 0x91, 0x52, 0x55, 0x02, 0x00, 0x00,
}
