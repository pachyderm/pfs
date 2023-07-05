// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        v3.11.4
// source: protoextensions/log.proto

package protoextensions

import (
	descriptor "github.com/golang/protobuf/protoc-gen-go/descriptor"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

var file_protoextensions_log_proto_extTypes = []protoimpl.ExtensionInfo{
	{
		ExtendedType:  (*descriptor.FieldOptions)(nil),
		ExtensionType: (*bool)(nil),
		Field:         50001,
		Name:          "log.mask",
		Tag:           "varint,50001,opt,name=mask",
		Filename:      "protoextensions/log.proto",
	},
	{
		ExtendedType:  (*descriptor.FieldOptions)(nil),
		ExtensionType: (*bool)(nil),
		Field:         50002,
		Name:          "log.half",
		Tag:           "varint,50002,opt,name=half",
		Filename:      "protoextensions/log.proto",
	},
}

// Extension fields to descriptor.FieldOptions.
var (
	// optional bool mask = 50001;
	E_Mask = &file_protoextensions_log_proto_extTypes[0]
	// optional bool half = 50002;
	E_Half = &file_protoextensions_log_proto_extTypes[1]
)

var File_protoextensions_log_proto protoreflect.FileDescriptor

var file_protoextensions_log_proto_rawDesc = []byte{
	0x0a, 0x19, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x65, 0x78, 0x74, 0x65, 0x6e, 0x73, 0x69, 0x6f, 0x6e,
	0x73, 0x2f, 0x6c, 0x6f, 0x67, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x03, 0x6c, 0x6f, 0x67,
	0x1a, 0x20, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2f, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x6f, 0x72, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x3a, 0x33, 0x0a, 0x04, 0x6d, 0x61, 0x73, 0x6b, 0x12, 0x1d, 0x2e, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x46, 0x69, 0x65,
	0x6c, 0x64, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0xd1, 0x86, 0x03, 0x20, 0x01, 0x28,
	0x08, 0x52, 0x04, 0x6d, 0x61, 0x73, 0x6b, 0x3a, 0x33, 0x0a, 0x04, 0x68, 0x61, 0x6c, 0x66, 0x12,
	0x1d, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2e, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x4f, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0xd2,
	0x86, 0x03, 0x20, 0x01, 0x28, 0x08, 0x52, 0x04, 0x68, 0x61, 0x6c, 0x66, 0x42, 0x37, 0x5a, 0x35,
	0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x70, 0x61, 0x63, 0x68, 0x79,
	0x64, 0x65, 0x72, 0x6d, 0x2f, 0x70, 0x61, 0x63, 0x68, 0x79, 0x64, 0x65, 0x72, 0x6d, 0x2f, 0x76,
	0x32, 0x2f, 0x73, 0x72, 0x63, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x65, 0x78, 0x74, 0x65, 0x6e,
	0x73, 0x69, 0x6f, 0x6e, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var file_protoextensions_log_proto_goTypes = []interface{}{
	(*descriptor.FieldOptions)(nil), // 0: google.protobuf.FieldOptions
}
var file_protoextensions_log_proto_depIdxs = []int32{
	0, // 0: log.mask:extendee -> google.protobuf.FieldOptions
	0, // 1: log.half:extendee -> google.protobuf.FieldOptions
	2, // [2:2] is the sub-list for method output_type
	2, // [2:2] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	0, // [0:2] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_protoextensions_log_proto_init() }
func file_protoextensions_log_proto_init() {
	if File_protoextensions_log_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_protoextensions_log_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   0,
			NumExtensions: 2,
			NumServices:   0,
		},
		GoTypes:           file_protoextensions_log_proto_goTypes,
		DependencyIndexes: file_protoextensions_log_proto_depIdxs,
		ExtensionInfos:    file_protoextensions_log_proto_extTypes,
	}.Build()
	File_protoextensions_log_proto = out.File
	file_protoextensions_log_proto_rawDesc = nil
	file_protoextensions_log_proto_goTypes = nil
	file_protoextensions_log_proto_depIdxs = nil
}
