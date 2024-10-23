// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        v4.25.1
// source: snapshot/snapshot.proto

package snapshot

import (
	_ "github.com/envoyproxy/protoc-gen-validate/validate"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type CreateSnapshotRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Metadata map[string]string `protobuf:"bytes,1,rep,name=metadata,proto3" json:"metadata,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *CreateSnapshotRequest) Reset() {
	*x = CreateSnapshotRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_snapshot_snapshot_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateSnapshotRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateSnapshotRequest) ProtoMessage() {}

func (x *CreateSnapshotRequest) ProtoReflect() protoreflect.Message {
	mi := &file_snapshot_snapshot_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateSnapshotRequest.ProtoReflect.Descriptor instead.
func (*CreateSnapshotRequest) Descriptor() ([]byte, []int) {
	return file_snapshot_snapshot_proto_rawDescGZIP(), []int{0}
}

func (x *CreateSnapshotRequest) GetMetadata() map[string]string {
	if x != nil {
		return x.Metadata
	}
	return nil
}

type CreateSnapshotResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id int64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *CreateSnapshotResponse) Reset() {
	*x = CreateSnapshotResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_snapshot_snapshot_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateSnapshotResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateSnapshotResponse) ProtoMessage() {}

func (x *CreateSnapshotResponse) ProtoReflect() protoreflect.Message {
	mi := &file_snapshot_snapshot_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateSnapshotResponse.ProtoReflect.Descriptor instead.
func (*CreateSnapshotResponse) Descriptor() ([]byte, []int) {
	return file_snapshot_snapshot_proto_rawDescGZIP(), []int{1}
}

func (x *CreateSnapshotResponse) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

type DeleteSnapshotRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id int64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *DeleteSnapshotRequest) Reset() {
	*x = DeleteSnapshotRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_snapshot_snapshot_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteSnapshotRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteSnapshotRequest) ProtoMessage() {}

func (x *DeleteSnapshotRequest) ProtoReflect() protoreflect.Message {
	mi := &file_snapshot_snapshot_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteSnapshotRequest.ProtoReflect.Descriptor instead.
func (*DeleteSnapshotRequest) Descriptor() ([]byte, []int) {
	return file_snapshot_snapshot_proto_rawDescGZIP(), []int{2}
}

func (x *DeleteSnapshotRequest) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

type DeleteSnapshotResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *DeleteSnapshotResponse) Reset() {
	*x = DeleteSnapshotResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_snapshot_snapshot_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeleteSnapshotResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteSnapshotResponse) ProtoMessage() {}

func (x *DeleteSnapshotResponse) ProtoReflect() protoreflect.Message {
	mi := &file_snapshot_snapshot_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteSnapshotResponse.ProtoReflect.Descriptor instead.
func (*DeleteSnapshotResponse) Descriptor() ([]byte, []int) {
	return file_snapshot_snapshot_proto_rawDescGZIP(), []int{3}
}

type SnapshotInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id                  int64                  `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Metadata            map[string]string      `protobuf:"bytes,2,rep,name=metadata,proto3" json:"metadata,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	ChunksetId          int64                  `protobuf:"varint,3,opt,name=chunkset_id,json=chunksetId,proto3" json:"chunkset_id,omitempty"`
	SqlDumpFilesetPinId int64                  `protobuf:"varint,4,opt,name=sql_dump_fileset_pin_id,json=sqlDumpFilesetPinId,proto3" json:"sql_dump_fileset_pin_id,omitempty"`
	PachydermVersion    string                 `protobuf:"bytes,5,opt,name=pachyderm_version,json=pachydermVersion,proto3" json:"pachyderm_version,omitempty"`
	CreatedAt           *timestamppb.Timestamp `protobuf:"bytes,6,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
}

func (x *SnapshotInfo) Reset() {
	*x = SnapshotInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_snapshot_snapshot_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SnapshotInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SnapshotInfo) ProtoMessage() {}

func (x *SnapshotInfo) ProtoReflect() protoreflect.Message {
	mi := &file_snapshot_snapshot_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SnapshotInfo.ProtoReflect.Descriptor instead.
func (*SnapshotInfo) Descriptor() ([]byte, []int) {
	return file_snapshot_snapshot_proto_rawDescGZIP(), []int{4}
}

func (x *SnapshotInfo) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *SnapshotInfo) GetMetadata() map[string]string {
	if x != nil {
		return x.Metadata
	}
	return nil
}

func (x *SnapshotInfo) GetChunksetId() int64 {
	if x != nil {
		return x.ChunksetId
	}
	return 0
}

func (x *SnapshotInfo) GetSqlDumpFilesetPinId() int64 {
	if x != nil {
		return x.SqlDumpFilesetPinId
	}
	return 0
}

func (x *SnapshotInfo) GetPachydermVersion() string {
	if x != nil {
		return x.PachydermVersion
	}
	return ""
}

func (x *SnapshotInfo) GetCreatedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.CreatedAt
	}
	return nil
}

type InspectSnapshotRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id int64 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *InspectSnapshotRequest) Reset() {
	*x = InspectSnapshotRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_snapshot_snapshot_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *InspectSnapshotRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*InspectSnapshotRequest) ProtoMessage() {}

func (x *InspectSnapshotRequest) ProtoReflect() protoreflect.Message {
	mi := &file_snapshot_snapshot_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use InspectSnapshotRequest.ProtoReflect.Descriptor instead.
func (*InspectSnapshotRequest) Descriptor() ([]byte, []int) {
	return file_snapshot_snapshot_proto_rawDescGZIP(), []int{5}
}

func (x *InspectSnapshotRequest) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

type InspectSnapshotResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Info *SnapshotInfo `protobuf:"bytes,1,opt,name=info,proto3" json:"info,omitempty"`
}

func (x *InspectSnapshotResponse) Reset() {
	*x = InspectSnapshotResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_snapshot_snapshot_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *InspectSnapshotResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*InspectSnapshotResponse) ProtoMessage() {}

func (x *InspectSnapshotResponse) ProtoReflect() protoreflect.Message {
	mi := &file_snapshot_snapshot_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use InspectSnapshotResponse.ProtoReflect.Descriptor instead.
func (*InspectSnapshotResponse) Descriptor() ([]byte, []int) {
	return file_snapshot_snapshot_proto_rawDescGZIP(), []int{6}
}

func (x *InspectSnapshotResponse) GetInfo() *SnapshotInfo {
	if x != nil {
		return x.Info
	}
	return nil
}

type ListSnapshotRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Since *timestamppb.Timestamp `protobuf:"bytes,1,opt,name=since,proto3" json:"since,omitempty"`  // exclusive; nil = start at the present
	Limit int32                  `protobuf:"varint,2,opt,name=limit,proto3" json:"limit,omitempty"` // 0 = no limit
}

func (x *ListSnapshotRequest) Reset() {
	*x = ListSnapshotRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_snapshot_snapshot_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListSnapshotRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListSnapshotRequest) ProtoMessage() {}

func (x *ListSnapshotRequest) ProtoReflect() protoreflect.Message {
	mi := &file_snapshot_snapshot_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListSnapshotRequest.ProtoReflect.Descriptor instead.
func (*ListSnapshotRequest) Descriptor() ([]byte, []int) {
	return file_snapshot_snapshot_proto_rawDescGZIP(), []int{7}
}

func (x *ListSnapshotRequest) GetSince() *timestamppb.Timestamp {
	if x != nil {
		return x.Since
	}
	return nil
}

func (x *ListSnapshotRequest) GetLimit() int32 {
	if x != nil {
		return x.Limit
	}
	return 0
}

type ListSnapshotResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Info *SnapshotInfo `protobuf:"bytes,1,opt,name=info,proto3" json:"info,omitempty"`
}

func (x *ListSnapshotResponse) Reset() {
	*x = ListSnapshotResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_snapshot_snapshot_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListSnapshotResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListSnapshotResponse) ProtoMessage() {}

func (x *ListSnapshotResponse) ProtoReflect() protoreflect.Message {
	mi := &file_snapshot_snapshot_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListSnapshotResponse.ProtoReflect.Descriptor instead.
func (*ListSnapshotResponse) Descriptor() ([]byte, []int) {
	return file_snapshot_snapshot_proto_rawDescGZIP(), []int{8}
}

func (x *ListSnapshotResponse) GetInfo() *SnapshotInfo {
	if x != nil {
		return x.Info
	}
	return nil
}

var File_snapshot_snapshot_proto protoreflect.FileDescriptor

var file_snapshot_snapshot_proto_rawDesc = []byte{
	0x0a, 0x17, 0x73, 0x6e, 0x61, 0x70, 0x73, 0x68, 0x6f, 0x74, 0x2f, 0x73, 0x6e, 0x61, 0x70, 0x73,
	0x68, 0x6f, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x73, 0x6e, 0x61, 0x70, 0x73,
	0x68, 0x6f, 0x74, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x65, 0x78, 0x74, 0x65, 0x6e,
	0x73, 0x69, 0x6f, 0x6e, 0x73, 0x2f, 0x76, 0x61, 0x6c, 0x69, 0x64, 0x61, 0x74, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x22, 0xad, 0x01, 0x0a, 0x15, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x53,
	0x6e, 0x61, 0x70, 0x73, 0x68, 0x6f, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x57,
	0x0a, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x2d, 0x2e, 0x73, 0x6e, 0x61, 0x70, 0x73, 0x68, 0x6f, 0x74, 0x2e, 0x43, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x53, 0x6e, 0x61, 0x70, 0x73, 0x68, 0x6f, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x2e, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x42,
	0x0c, 0xfa, 0x42, 0x09, 0x9a, 0x01, 0x06, 0x22, 0x04, 0x72, 0x02, 0x10, 0x01, 0x52, 0x08, 0x6d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x1a, 0x3b, 0x0a, 0x0d, 0x4d, 0x65, 0x74, 0x61, 0x64,
	0x61, 0x74, 0x61, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61,
	0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65,
	0x3a, 0x02, 0x38, 0x01, 0x22, 0x31, 0x0a, 0x16, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x53, 0x6e,
	0x61, 0x70, 0x73, 0x68, 0x6f, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x17,
	0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x42, 0x07, 0xfa, 0x42, 0x04, 0x22,
	0x02, 0x28, 0x01, 0x52, 0x02, 0x69, 0x64, 0x22, 0x30, 0x0a, 0x15, 0x44, 0x65, 0x6c, 0x65, 0x74,
	0x65, 0x53, 0x6e, 0x61, 0x70, 0x73, 0x68, 0x6f, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x12, 0x17, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x42, 0x07, 0xfa, 0x42,
	0x04, 0x22, 0x02, 0x28, 0x01, 0x52, 0x02, 0x69, 0x64, 0x22, 0x18, 0x0a, 0x16, 0x44, 0x65, 0x6c,
	0x65, 0x74, 0x65, 0x53, 0x6e, 0x61, 0x70, 0x73, 0x68, 0x6f, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x22, 0xdc, 0x02, 0x0a, 0x0c, 0x53, 0x6e, 0x61, 0x70, 0x73, 0x68, 0x6f, 0x74,
	0x49, 0x6e, 0x66, 0x6f, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03,
	0x52, 0x02, 0x69, 0x64, 0x12, 0x40, 0x0a, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61,
	0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x24, 0x2e, 0x73, 0x6e, 0x61, 0x70, 0x73, 0x68, 0x6f,
	0x74, 0x2e, 0x53, 0x6e, 0x61, 0x70, 0x73, 0x68, 0x6f, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x2e, 0x4d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x08, 0x6d, 0x65,
	0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x1f, 0x0a, 0x0b, 0x63, 0x68, 0x75, 0x6e, 0x6b, 0x73,
	0x65, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0a, 0x63, 0x68, 0x75,
	0x6e, 0x6b, 0x73, 0x65, 0x74, 0x49, 0x64, 0x12, 0x34, 0x0a, 0x17, 0x73, 0x71, 0x6c, 0x5f, 0x64,
	0x75, 0x6d, 0x70, 0x5f, 0x66, 0x69, 0x6c, 0x65, 0x73, 0x65, 0x74, 0x5f, 0x70, 0x69, 0x6e, 0x5f,
	0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x03, 0x52, 0x13, 0x73, 0x71, 0x6c, 0x44, 0x75, 0x6d,
	0x70, 0x46, 0x69, 0x6c, 0x65, 0x73, 0x65, 0x74, 0x50, 0x69, 0x6e, 0x49, 0x64, 0x12, 0x2b, 0x0a,
	0x11, 0x70, 0x61, 0x63, 0x68, 0x79, 0x64, 0x65, 0x72, 0x6d, 0x5f, 0x76, 0x65, 0x72, 0x73, 0x69,
	0x6f, 0x6e, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x10, 0x70, 0x61, 0x63, 0x68, 0x79, 0x64,
	0x65, 0x72, 0x6d, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x39, 0x0a, 0x0a, 0x63, 0x72,
	0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a,
	0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x64, 0x41, 0x74, 0x1a, 0x3b, 0x0a, 0x0d, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74,
	0x61, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75,
	0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02,
	0x38, 0x01, 0x22, 0x31, 0x0a, 0x16, 0x49, 0x6e, 0x73, 0x70, 0x65, 0x63, 0x74, 0x53, 0x6e, 0x61,
	0x70, 0x73, 0x68, 0x6f, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x17, 0x0a, 0x02,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x42, 0x07, 0xfa, 0x42, 0x04, 0x22, 0x02, 0x28,
	0x01, 0x52, 0x02, 0x69, 0x64, 0x22, 0x45, 0x0a, 0x17, 0x49, 0x6e, 0x73, 0x70, 0x65, 0x63, 0x74,
	0x53, 0x6e, 0x61, 0x70, 0x73, 0x68, 0x6f, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x2a, 0x0a, 0x04, 0x69, 0x6e, 0x66, 0x6f, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x16,
	0x2e, 0x73, 0x6e, 0x61, 0x70, 0x73, 0x68, 0x6f, 0x74, 0x2e, 0x53, 0x6e, 0x61, 0x70, 0x73, 0x68,
	0x6f, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x04, 0x69, 0x6e, 0x66, 0x6f, 0x22, 0x5d, 0x0a, 0x13,
	0x4c, 0x69, 0x73, 0x74, 0x53, 0x6e, 0x61, 0x70, 0x73, 0x68, 0x6f, 0x74, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x12, 0x30, 0x0a, 0x05, 0x73, 0x69, 0x6e, 0x63, 0x65, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x05,
	0x73, 0x69, 0x6e, 0x63, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x22, 0x42, 0x0a, 0x14, 0x4c,
	0x69, 0x73, 0x74, 0x53, 0x6e, 0x61, 0x70, 0x73, 0x68, 0x6f, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x12, 0x2a, 0x0a, 0x04, 0x69, 0x6e, 0x66, 0x6f, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x16, 0x2e, 0x73, 0x6e, 0x61, 0x70, 0x73, 0x68, 0x6f, 0x74, 0x2e, 0x53, 0x6e, 0x61,
	0x70, 0x73, 0x68, 0x6f, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x04, 0x69, 0x6e, 0x66, 0x6f, 0x32,
	0xe0, 0x02, 0x0a, 0x03, 0x41, 0x50, 0x49, 0x12, 0x55, 0x0a, 0x0e, 0x43, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x53, 0x6e, 0x61, 0x70, 0x73, 0x68, 0x6f, 0x74, 0x12, 0x1f, 0x2e, 0x73, 0x6e, 0x61, 0x70,
	0x73, 0x68, 0x6f, 0x74, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x53, 0x6e, 0x61, 0x70, 0x73,
	0x68, 0x6f, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x20, 0x2e, 0x73, 0x6e, 0x61,
	0x70, 0x73, 0x68, 0x6f, 0x74, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x53, 0x6e, 0x61, 0x70,
	0x73, 0x68, 0x6f, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x55,
	0x0a, 0x0e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x53, 0x6e, 0x61, 0x70, 0x73, 0x68, 0x6f, 0x74,
	0x12, 0x1f, 0x2e, 0x73, 0x6e, 0x61, 0x70, 0x73, 0x68, 0x6f, 0x74, 0x2e, 0x44, 0x65, 0x6c, 0x65,
	0x74, 0x65, 0x53, 0x6e, 0x61, 0x70, 0x73, 0x68, 0x6f, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x20, 0x2e, 0x73, 0x6e, 0x61, 0x70, 0x73, 0x68, 0x6f, 0x74, 0x2e, 0x44, 0x65, 0x6c,
	0x65, 0x74, 0x65, 0x53, 0x6e, 0x61, 0x70, 0x73, 0x68, 0x6f, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x58, 0x0a, 0x0f, 0x49, 0x6e, 0x73, 0x70, 0x65, 0x63, 0x74,
	0x53, 0x6e, 0x61, 0x70, 0x73, 0x68, 0x6f, 0x74, 0x12, 0x20, 0x2e, 0x73, 0x6e, 0x61, 0x70, 0x73,
	0x68, 0x6f, 0x74, 0x2e, 0x49, 0x6e, 0x73, 0x70, 0x65, 0x63, 0x74, 0x53, 0x6e, 0x61, 0x70, 0x73,
	0x68, 0x6f, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x21, 0x2e, 0x73, 0x6e, 0x61,
	0x70, 0x73, 0x68, 0x6f, 0x74, 0x2e, 0x49, 0x6e, 0x73, 0x70, 0x65, 0x63, 0x74, 0x53, 0x6e, 0x61,
	0x70, 0x73, 0x68, 0x6f, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12,
	0x51, 0x0a, 0x0c, 0x4c, 0x69, 0x73, 0x74, 0x53, 0x6e, 0x61, 0x70, 0x73, 0x68, 0x6f, 0x74, 0x12,
	0x1d, 0x2e, 0x73, 0x6e, 0x61, 0x70, 0x73, 0x68, 0x6f, 0x74, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x53,
	0x6e, 0x61, 0x70, 0x73, 0x68, 0x6f, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1e,
	0x2e, 0x73, 0x6e, 0x61, 0x70, 0x73, 0x68, 0x6f, 0x74, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x53, 0x6e,
	0x61, 0x70, 0x73, 0x68, 0x6f, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00,
	0x30, 0x01, 0x42, 0x30, 0x5a, 0x2e, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d,
	0x2f, 0x70, 0x61, 0x63, 0x68, 0x79, 0x64, 0x65, 0x72, 0x6d, 0x2f, 0x70, 0x61, 0x63, 0x68, 0x79,
	0x64, 0x65, 0x72, 0x6d, 0x2f, 0x76, 0x32, 0x2f, 0x73, 0x72, 0x63, 0x2f, 0x73, 0x6e, 0x61, 0x70,
	0x73, 0x68, 0x6f, 0x74, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_snapshot_snapshot_proto_rawDescOnce sync.Once
	file_snapshot_snapshot_proto_rawDescData = file_snapshot_snapshot_proto_rawDesc
)

func file_snapshot_snapshot_proto_rawDescGZIP() []byte {
	file_snapshot_snapshot_proto_rawDescOnce.Do(func() {
		file_snapshot_snapshot_proto_rawDescData = protoimpl.X.CompressGZIP(file_snapshot_snapshot_proto_rawDescData)
	})
	return file_snapshot_snapshot_proto_rawDescData
}

var file_snapshot_snapshot_proto_msgTypes = make([]protoimpl.MessageInfo, 11)
var file_snapshot_snapshot_proto_goTypes = []interface{}{
	(*CreateSnapshotRequest)(nil),   // 0: snapshot.CreateSnapshotRequest
	(*CreateSnapshotResponse)(nil),  // 1: snapshot.CreateSnapshotResponse
	(*DeleteSnapshotRequest)(nil),   // 2: snapshot.DeleteSnapshotRequest
	(*DeleteSnapshotResponse)(nil),  // 3: snapshot.DeleteSnapshotResponse
	(*SnapshotInfo)(nil),            // 4: snapshot.SnapshotInfo
	(*InspectSnapshotRequest)(nil),  // 5: snapshot.InspectSnapshotRequest
	(*InspectSnapshotResponse)(nil), // 6: snapshot.InspectSnapshotResponse
	(*ListSnapshotRequest)(nil),     // 7: snapshot.ListSnapshotRequest
	(*ListSnapshotResponse)(nil),    // 8: snapshot.ListSnapshotResponse
	nil,                             // 9: snapshot.CreateSnapshotRequest.MetadataEntry
	nil,                             // 10: snapshot.SnapshotInfo.MetadataEntry
	(*timestamppb.Timestamp)(nil),   // 11: google.protobuf.Timestamp
}
var file_snapshot_snapshot_proto_depIdxs = []int32{
	9,  // 0: snapshot.CreateSnapshotRequest.metadata:type_name -> snapshot.CreateSnapshotRequest.MetadataEntry
	10, // 1: snapshot.SnapshotInfo.metadata:type_name -> snapshot.SnapshotInfo.MetadataEntry
	11, // 2: snapshot.SnapshotInfo.created_at:type_name -> google.protobuf.Timestamp
	4,  // 3: snapshot.InspectSnapshotResponse.info:type_name -> snapshot.SnapshotInfo
	11, // 4: snapshot.ListSnapshotRequest.since:type_name -> google.protobuf.Timestamp
	4,  // 5: snapshot.ListSnapshotResponse.info:type_name -> snapshot.SnapshotInfo
	0,  // 6: snapshot.API.CreateSnapshot:input_type -> snapshot.CreateSnapshotRequest
	2,  // 7: snapshot.API.DeleteSnapshot:input_type -> snapshot.DeleteSnapshotRequest
	5,  // 8: snapshot.API.InspectSnapshot:input_type -> snapshot.InspectSnapshotRequest
	7,  // 9: snapshot.API.ListSnapshot:input_type -> snapshot.ListSnapshotRequest
	1,  // 10: snapshot.API.CreateSnapshot:output_type -> snapshot.CreateSnapshotResponse
	3,  // 11: snapshot.API.DeleteSnapshot:output_type -> snapshot.DeleteSnapshotResponse
	6,  // 12: snapshot.API.InspectSnapshot:output_type -> snapshot.InspectSnapshotResponse
	8,  // 13: snapshot.API.ListSnapshot:output_type -> snapshot.ListSnapshotResponse
	10, // [10:14] is the sub-list for method output_type
	6,  // [6:10] is the sub-list for method input_type
	6,  // [6:6] is the sub-list for extension type_name
	6,  // [6:6] is the sub-list for extension extendee
	0,  // [0:6] is the sub-list for field type_name
}

func init() { file_snapshot_snapshot_proto_init() }
func file_snapshot_snapshot_proto_init() {
	if File_snapshot_snapshot_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_snapshot_snapshot_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateSnapshotRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_snapshot_snapshot_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateSnapshotResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_snapshot_snapshot_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteSnapshotRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_snapshot_snapshot_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeleteSnapshotResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_snapshot_snapshot_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SnapshotInfo); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_snapshot_snapshot_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*InspectSnapshotRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_snapshot_snapshot_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*InspectSnapshotResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_snapshot_snapshot_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListSnapshotRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_snapshot_snapshot_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListSnapshotResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_snapshot_snapshot_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   11,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_snapshot_snapshot_proto_goTypes,
		DependencyIndexes: file_snapshot_snapshot_proto_depIdxs,
		MessageInfos:      file_snapshot_snapshot_proto_msgTypes,
	}.Build()
	File_snapshot_snapshot_proto = out.File
	file_snapshot_snapshot_proto_rawDesc = nil
	file_snapshot_snapshot_proto_goTypes = nil
	file_snapshot_snapshot_proto_depIdxs = nil
}
