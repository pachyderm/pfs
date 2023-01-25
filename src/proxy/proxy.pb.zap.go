// Code generated by protoc-gen-zap (etc/proto/protoc-gen-zap). DO NOT EDIT.
//
// source: proxy/proxy.proto

package proxy

import (
	zapcore "go.uber.org/zap/zapcore"
)

func (x *ListenRequest) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}

	enc.AddString("channel", x.Channel)
	return nil
}

func (x *ListenResponse) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}

	enc.AddString("extra", x.Extra)
	return nil
}
