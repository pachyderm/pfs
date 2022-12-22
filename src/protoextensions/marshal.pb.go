// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: protoextensions/marshal.proto

package protoextensions

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	descriptor "github.com/golang/protobuf/protoc-gen-go/descriptor"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

var E_MarshalMask = &proto.ExtensionDesc{
	ExtendedType:  (*descriptor.FieldOptions)(nil),
	ExtensionType: (*bool)(nil),
	Field:         50001,
	Name:          "protoextensions.marshal_mask",
	Tag:           "varint,50001,opt,name=marshal_mask",
	Filename:      "protoextensions/marshal.proto",
}

var E_MarshalHalf = &proto.ExtensionDesc{
	ExtendedType:  (*descriptor.FieldOptions)(nil),
	ExtensionType: (*bool)(nil),
	Field:         50002,
	Name:          "protoextensions.marshal_half",
	Tag:           "varint,50002,opt,name=marshal_half",
	Filename:      "protoextensions/marshal.proto",
}

func init() {
	proto.RegisterExtension(E_MarshalMask)
	proto.RegisterExtension(E_MarshalHalf)
}

func init() { proto.RegisterFile("protoextensions/marshal.proto", fileDescriptor_338768dff227072c) }

var fileDescriptor_338768dff227072c = []byte{
	// 197 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x2d, 0x28, 0xca, 0x2f,
	0xc9, 0x4f, 0xad, 0x28, 0x49, 0xcd, 0x2b, 0xce, 0xcc, 0xcf, 0x2b, 0xd6, 0xcf, 0x4d, 0x2c, 0x2a,
	0xce, 0x48, 0xcc, 0xd1, 0x03, 0x8b, 0x0b, 0xf1, 0xa3, 0x49, 0x4b, 0x29, 0xa4, 0xe7, 0xe7, 0xa7,
	0xe7, 0xa4, 0xea, 0x83, 0xc5, 0x93, 0x4a, 0xd3, 0xf4, 0x53, 0x52, 0x8b, 0x93, 0x8b, 0x32, 0x0b,
	0x4a, 0xf2, 0x8b, 0x20, 0x5a, 0xac, 0x9c, 0xb8, 0x78, 0xa0, 0x66, 0xc4, 0xe7, 0x26, 0x16, 0x67,
	0x0b, 0xc9, 0xea, 0x41, 0xb4, 0xe8, 0xc1, 0xb4, 0xe8, 0xb9, 0x65, 0xa6, 0xe6, 0xa4, 0xf8, 0x17,
	0x94, 0x80, 0x0c, 0x94, 0xb8, 0xd8, 0xc6, 0xac, 0xc0, 0xa8, 0xc1, 0x11, 0xc4, 0x0d, 0xd5, 0xe4,
	0x9b, 0x58, 0x9c, 0x8d, 0x6c, 0x46, 0x46, 0x62, 0x4e, 0x1a, 0x21, 0x33, 0x2e, 0xa1, 0x99, 0xe1,
	0x91, 0x98, 0x93, 0xe6, 0xe4, 0x7c, 0xe2, 0x91, 0x1c, 0xe3, 0x85, 0x47, 0x72, 0x8c, 0x0f, 0x1e,
	0xc9, 0x31, 0x46, 0x99, 0xa6, 0x67, 0x96, 0x64, 0x94, 0x26, 0xe9, 0x25, 0xe7, 0xe7, 0xea, 0x17,
	0x24, 0x26, 0x67, 0x54, 0xa6, 0xa4, 0x16, 0x21, 0xb3, 0xca, 0x8c, 0xf4, 0x8b, 0x8b, 0x92, 0xf5,
	0xd1, 0xbc, 0x9b, 0xc4, 0x06, 0x16, 0x30, 0x06, 0x04, 0x00, 0x00, 0xff, 0xff, 0xf5, 0x48, 0x41,
	0x2e, 0x27, 0x01, 0x00, 0x00,
}
