// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        v3.11.4
// source: internal/tracing/extended/extended_trace.proto

package extended

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// TraceProto contains information identifying a Jaeger trace. It's used to
// propagate traces that follow the lifetime of a long operation (e.g. creating
// a pipeline or running a job), and which live longer than any single RPC.
type TraceProto struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// serialized_trace contains the info identifying a trace in Jaeger (a
	// (trace ID, span ID, sampled) tuple, basically)
	SerializedTrace map[string]string `protobuf:"bytes,1,rep,name=serialized_trace,json=serializedTrace,proto3" json:"serialized_trace,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Project         string            `protobuf:"bytes,3,opt,name=project,proto3" json:"project,omitempty"`
	// pipeline specifies the target pipeline of this trace; this would be set for
	// a trace created by 'pachctl create-pipeline' or 'pachctl update-pipeline'
	// and would include the kubernetes RPCs involved in creating a pipeline
	Pipeline string `protobuf:"bytes,2,opt,name=pipeline,proto3" json:"pipeline,omitempty"`
}

func (x *TraceProto) Reset() {
	*x = TraceProto{}
	if protoimpl.UnsafeEnabled {
		mi := &file_internal_tracing_extended_extended_trace_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TraceProto) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TraceProto) ProtoMessage() {}

func (x *TraceProto) ProtoReflect() protoreflect.Message {
	mi := &file_internal_tracing_extended_extended_trace_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TraceProto.ProtoReflect.Descriptor instead.
func (*TraceProto) Descriptor() ([]byte, []int) {
	return file_internal_tracing_extended_extended_trace_proto_rawDescGZIP(), []int{0}
}

func (x *TraceProto) GetSerializedTrace() map[string]string {
	if x != nil {
		return x.SerializedTrace
	}
	return nil
}

func (x *TraceProto) GetProject() string {
	if x != nil {
		return x.Project
	}
	return ""
}

func (x *TraceProto) GetPipeline() string {
	if x != nil {
		return x.Pipeline
	}
	return ""
}

var File_internal_tracing_extended_extended_trace_proto protoreflect.FileDescriptor

var file_internal_tracing_extended_extended_trace_proto_rawDesc = []byte{
	0x0a, 0x2e, 0x69, 0x6e, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x2f, 0x74, 0x72, 0x61, 0x63, 0x69,
	0x6e, 0x67, 0x2f, 0x65, 0x78, 0x74, 0x65, 0x6e, 0x64, 0x65, 0x64, 0x2f, 0x65, 0x78, 0x74, 0x65,
	0x6e, 0x64, 0x65, 0x64, 0x5f, 0x74, 0x72, 0x61, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x08, 0x65, 0x78, 0x74, 0x65, 0x6e, 0x64, 0x65, 0x64, 0x22, 0xdc, 0x01, 0x0a, 0x0a, 0x54,
	0x72, 0x61, 0x63, 0x65, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x54, 0x0a, 0x10, 0x73, 0x65, 0x72,
	0x69, 0x61, 0x6c, 0x69, 0x7a, 0x65, 0x64, 0x5f, 0x74, 0x72, 0x61, 0x63, 0x65, 0x18, 0x01, 0x20,
	0x03, 0x28, 0x0b, 0x32, 0x29, 0x2e, 0x65, 0x78, 0x74, 0x65, 0x6e, 0x64, 0x65, 0x64, 0x2e, 0x54,
	0x72, 0x61, 0x63, 0x65, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x53, 0x65, 0x72, 0x69, 0x61, 0x6c,
	0x69, 0x7a, 0x65, 0x64, 0x54, 0x72, 0x61, 0x63, 0x65, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x0f,
	0x73, 0x65, 0x72, 0x69, 0x61, 0x6c, 0x69, 0x7a, 0x65, 0x64, 0x54, 0x72, 0x61, 0x63, 0x65, 0x12,
	0x18, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x07, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x12, 0x1a, 0x0a, 0x08, 0x70, 0x69, 0x70,
	0x65, 0x6c, 0x69, 0x6e, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x70, 0x69, 0x70,
	0x65, 0x6c, 0x69, 0x6e, 0x65, 0x1a, 0x42, 0x0a, 0x14, 0x53, 0x65, 0x72, 0x69, 0x61, 0x6c, 0x69,
	0x7a, 0x65, 0x64, 0x54, 0x72, 0x61, 0x63, 0x65, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a,
	0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12,
	0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05,
	0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x42, 0x41, 0x5a, 0x3f, 0x67, 0x69, 0x74,
	0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x70, 0x61, 0x63, 0x68, 0x79, 0x64, 0x65, 0x72,
	0x6d, 0x2f, 0x70, 0x61, 0x63, 0x68, 0x79, 0x64, 0x65, 0x72, 0x6d, 0x2f, 0x76, 0x32, 0x2f, 0x73,
	0x72, 0x63, 0x2f, 0x69, 0x6e, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x2f, 0x74, 0x72, 0x61, 0x63,
	0x69, 0x6e, 0x67, 0x2f, 0x65, 0x78, 0x74, 0x65, 0x6e, 0x64, 0x65, 0x64, 0x62, 0x06, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_internal_tracing_extended_extended_trace_proto_rawDescOnce sync.Once
	file_internal_tracing_extended_extended_trace_proto_rawDescData = file_internal_tracing_extended_extended_trace_proto_rawDesc
)

func file_internal_tracing_extended_extended_trace_proto_rawDescGZIP() []byte {
	file_internal_tracing_extended_extended_trace_proto_rawDescOnce.Do(func() {
		file_internal_tracing_extended_extended_trace_proto_rawDescData = protoimpl.X.CompressGZIP(file_internal_tracing_extended_extended_trace_proto_rawDescData)
	})
	return file_internal_tracing_extended_extended_trace_proto_rawDescData
}

var file_internal_tracing_extended_extended_trace_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_internal_tracing_extended_extended_trace_proto_goTypes = []interface{}{
	(*TraceProto)(nil), // 0: extended.TraceProto
	nil,                // 1: extended.TraceProto.SerializedTraceEntry
}
var file_internal_tracing_extended_extended_trace_proto_depIdxs = []int32{
	1, // 0: extended.TraceProto.serialized_trace:type_name -> extended.TraceProto.SerializedTraceEntry
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_internal_tracing_extended_extended_trace_proto_init() }
func file_internal_tracing_extended_extended_trace_proto_init() {
	if File_internal_tracing_extended_extended_trace_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_internal_tracing_extended_extended_trace_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TraceProto); i {
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
			RawDescriptor: file_internal_tracing_extended_extended_trace_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_internal_tracing_extended_extended_trace_proto_goTypes,
		DependencyIndexes: file_internal_tracing_extended_extended_trace_proto_depIdxs,
		MessageInfos:      file_internal_tracing_extended_extended_trace_proto_msgTypes,
	}.Build()
	File_internal_tracing_extended_extended_trace_proto = out.File
	file_internal_tracing_extended_extended_trace_proto_rawDesc = nil
	file_internal_tracing_extended_extended_trace_proto_goTypes = nil
	file_internal_tracing_extended_extended_trace_proto_depIdxs = nil
}
