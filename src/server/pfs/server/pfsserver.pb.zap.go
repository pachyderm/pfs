// Code generated by protoc-gen-zap (etc/proto/protoc-gen-zap). DO NOT EDIT.
//
// source: server/pfs/server/pfsserver.proto

package server

import (
	zapcore "go.uber.org/zap/zapcore"
)

func (x *ShardTask) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	inputsArrMarshaller := func(enc zapcore.ArrayEncoder) error {
		for _, v := range x.Inputs {
			enc.AppendString(v)
		}
		return nil
	}
	enc.AddArray("inputs", zapcore.ArrayMarshalerFunc(inputsArrMarshaller))
	enc.AddObject("path_range", x.PathRange)
	return nil
}

func (x *ShardTaskResult) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	compact_tasksArrMarshaller := func(enc zapcore.ArrayEncoder) error {
		for _, v := range x.CompactTasks {
			enc.AppendObject(v)
		}
		return nil
	}
	enc.AddArray("compact_tasks", zapcore.ArrayMarshalerFunc(compact_tasksArrMarshaller))
	return nil
}

func (x *PathRange) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddString("lower", x.Lower)
	enc.AddString("upper", x.Upper)
	return nil
}

func (x *CompactTask) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	inputsArrMarshaller := func(enc zapcore.ArrayEncoder) error {
		for _, v := range x.Inputs {
			enc.AppendString(v)
		}
		return nil
	}
	enc.AddArray("inputs", zapcore.ArrayMarshalerFunc(inputsArrMarshaller))
	enc.AddObject("path_range", x.PathRange)
	return nil
}

func (x *CompactTaskResult) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddString("handle", x.Handle)
	return nil
}

func (x *ConcatTask) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	inputsArrMarshaller := func(enc zapcore.ArrayEncoder) error {
		for _, v := range x.Inputs {
			enc.AppendString(v)
		}
		return nil
	}
	enc.AddArray("inputs", zapcore.ArrayMarshalerFunc(inputsArrMarshaller))
	return nil
}

func (x *ConcatTaskResult) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddString("handle", x.Handle)
	return nil
}

func (x *ValidateTask) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddString("handle", x.Handle)
	enc.AddObject("path_range", x.PathRange)
	return nil
}

func (x *ValidateTaskResult) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddObject("first", x.First)
	enc.AddObject("last", x.Last)
	enc.AddString("error", x.Error)
	enc.AddInt64("size_bytes", x.SizeBytes)
	return nil
}

func (x *PutFileURLTask) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddString("dst", x.Dst)
	enc.AddString("datum", x.Datum)
	enc.AddString("URL", x.URL)
	pathsArrMarshaller := func(enc zapcore.ArrayEncoder) error {
		for _, v := range x.Paths {
			enc.AppendString(v)
		}
		return nil
	}
	enc.AddArray("paths", zapcore.ArrayMarshalerFunc(pathsArrMarshaller))
	enc.AddInt64("start_offset", x.StartOffset)
	enc.AddInt64("end_offset", x.EndOffset)
	return nil
}

func (x *PutFileURLTaskResult) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddString("handle", x.Handle)
	return nil
}

func (x *GetFileURLTask) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddString("URL", x.URL)
	enc.AddString("handle", x.Handle)
	enc.AddObject("path_range", x.PathRange)
	return nil
}

func (x *GetFileURLTaskResult) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	return nil
}
