// Code generated by protoc-gen-zap (etc/proto/protoc-gen-zap). DO NOT EDIT.
//
// source: server/worker/common/common.proto

package common

import (
	zapcore "go.uber.org/zap/zapcore"
)

func (x *Input) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}

	if obj, ok := interface{}(x.FileInfo).(zapcore.ObjectMarshaler); ok {
		enc.AddObject("file_info", obj)
	} else {
		enc.AddReflected("file_info", x.FileInfo)
	}
	if obj, ok := interface{}(x.ParentCommit).(zapcore.ObjectMarshaler); ok {
		enc.AddObject("parent_commit", obj)
	} else {
		enc.AddReflected("parent_commit", x.ParentCommit)
	}
	enc.AddString("name", x.Name)
	enc.AddString("join_on", x.JoinOn)
	enc.AddBool("outer_join", x.OuterJoin)
	enc.AddString("group_by", x.GroupBy)
	enc.AddBool("lazy", x.Lazy)
	enc.AddString("branch", x.Branch)
	enc.AddString("git_url", x.GitURL)
	enc.AddBool("empty_files", x.EmptyFiles)
	enc.AddBool("s3", x.S3)
	return nil
}
