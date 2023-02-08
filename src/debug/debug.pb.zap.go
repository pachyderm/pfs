// Code generated by protoc-gen-zap (etc/proto/protoc-gen-zap). DO NOT EDIT.
//
// source: debug/debug.proto

package debug

import (
	protoextensions "github.com/pachyderm/pachyderm/v2/src/protoextensions"
	zapcore "go.uber.org/zap/zapcore"
)

func (x *ProfileRequest) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddObject("profile", x.Profile)
	enc.AddObject("filter", x.Filter)
	return nil
}

func (x *Profile) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddString("name", x.Name)
	protoextensions.AddDuration(enc, "duration", x.Duration)
	return nil
}

func (x *Filter) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddBool("pachd", x.GetPachd())
	enc.AddObject("pipeline", x.GetPipeline())
	enc.AddObject("worker", x.GetWorker())
	enc.AddBool("database", x.GetDatabase())
	return nil
}

func (x *Worker) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddString("pod", x.Pod)
	enc.AddBool("redirected", x.Redirected)
	return nil
}

func (x *BinaryRequest) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddObject("filter", x.Filter)
	return nil
}

func (x *DumpRequest) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddObject("filter", x.Filter)
	enc.AddInt64("limit", x.Limit)
	return nil
}

func (x *SetLogLevelRequest) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddString("level", x.Level.String())
	protoextensions.AddDuration(enc, "duration", x.Duration)
	return nil
}

func (x *SetLogLevelResponse) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	return nil
}
