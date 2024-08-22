// Code generated by protoc-gen-zap (etc/proto/protoc-gen-zap). DO NOT EDIT.
//
// source: pjs/pjs.proto

package pjs

import (
	protoextensions "github.com/pachyderm/pachyderm/v2/src/protoextensions"
	zapcore "go.uber.org/zap/zapcore"
)

func (x *Job) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddInt64("id", x.Id)
	return nil
}

func (x *JobInfo) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddObject("job", x.Job)
	enc.AddObject("parent_job", x.ParentJob)
	enc.AddString("state", x.State.String())
	enc.AddString("program", x.Program)
	inputArrMarshaller := func(enc zapcore.ArrayEncoder) error {
		for _, v := range x.Input {
			enc.AppendString(v)
		}
		return nil
	}
	enc.AddArray("input", zapcore.ArrayMarshalerFunc(inputArrMarshaller))
	enc.AddObject("success", x.GetSuccess())
	enc.AddString("error", x.GetError().String())
	return nil
}

func (x *JobInfo_Success) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	outputArrMarshaller := func(enc zapcore.ArrayEncoder) error {
		for _, v := range x.Output {
			enc.AppendString(v)
		}
		return nil
	}
	enc.AddArray("output", zapcore.ArrayMarshalerFunc(outputArrMarshaller))
	return nil
}

func (x *JobInfoDetails) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddObject("job_info", x.JobInfo)
	return nil
}

func (x *Queue) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	protoextensions.AddBytes(enc, "id", x.Id)
	return nil
}

func (x *QueueInfo) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddObject("queue", x.Queue)
	protoextensions.AddAny(enc, "spec", x.Spec)
	return nil
}

func (x *QueueInfoDetails) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddObject("queue_info", x.QueueInfo)
	enc.AddInt64("size", x.Size)
	return nil
}

func (x *CreateJobRequest) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddString("context", x.Context)
	enc.AddString("program", x.Program)
	inputArrMarshaller := func(enc zapcore.ArrayEncoder) error {
		for _, v := range x.Input {
			enc.AppendString(v)
		}
		return nil
	}
	enc.AddArray("input", zapcore.ArrayMarshalerFunc(inputArrMarshaller))
	enc.AddBool("cache_read", x.CacheRead)
	enc.AddBool("cache_write", x.CacheWrite)
	return nil
}

func (x *CreateJobResponse) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddObject("id", x.Id)
	return nil
}

func (x *CancelJobRequest) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddString("context", x.Context)
	enc.AddObject("job", x.Job)
	return nil
}

func (x *CancelJobResponse) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	return nil
}

func (x *DeleteJobRequest) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddString("context", x.Context)
	enc.AddObject("job", x.Job)
	return nil
}

func (x *DeleteJobResponse) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	return nil
}

func (x *ListJobRequest) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddString("context", x.Context)
	enc.AddObject("job", x.Job)
	return nil
}

func (x *ListJobResponse) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddObject("id", x.Id)
	enc.AddObject("info", x.Info)
	enc.AddObject("details", x.Details)
	return nil
}

func (x *WalkJobRequest) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddString("context", x.Context)
	enc.AddObject("job", x.Job)
	enc.AddString("algorithm", x.Algorithm.String())
	return nil
}

func (x *InspectJobRequest) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddString("context", x.Context)
	enc.AddObject("job", x.Job)
	return nil
}

func (x *InspectJobResponse) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddObject("details", x.Details)
	return nil
}

func (x *ProcessQueueRequest) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddObject("queue", x.Queue)
	enc.AddObject("success", x.GetSuccess())
	enc.AddBool("failed", x.GetFailed())
	return nil
}

func (x *ProcessQueueRequest_Success) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	outputArrMarshaller := func(enc zapcore.ArrayEncoder) error {
		for _, v := range x.Output {
			enc.AppendString(v)
		}
		return nil
	}
	enc.AddArray("output", zapcore.ArrayMarshalerFunc(outputArrMarshaller))
	return nil
}

func (x *ProcessQueueResponse) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddString("context", x.Context)
	inputArrMarshaller := func(enc zapcore.ArrayEncoder) error {
		for _, v := range x.Input {
			enc.AppendString(v)
		}
		return nil
	}
	enc.AddArray("input", zapcore.ArrayMarshalerFunc(inputArrMarshaller))
	return nil
}

func (x *ListQueueRequest) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	return nil
}

func (x *ListQueueResponse) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddObject("id", x.Id)
	enc.AddObject("info", x.Info)
	enc.AddObject("details", x.Details)
	return nil
}

func (x *InspectQueueRequest) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddObject("queue", x.Queue)
	return nil
}

func (x *InspectQueueResponse) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddObject("details", x.Details)
	return nil
}
