// Code generated by protoc-gen-zap (etc/proto/protoc-gen-zap). DO NOT EDIT.
//
// source: transaction/transaction.proto

package transaction

import (
	protoextensions "github.com/pachyderm/pachyderm/v2/src/protoextensions"
	zapcore "go.uber.org/zap/zapcore"
)

func (x *DeleteAllRequest) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	return nil
}

func (x *TransactionRequest) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddObject("create_repo", x.CreateRepo)
	enc.AddObject("delete_repo", x.DeleteRepo)
	enc.AddObject("start_commit", x.StartCommit)
	enc.AddObject("finish_commit", x.FinishCommit)
	enc.AddObject("squash_commit_set", x.SquashCommitSet)
	enc.AddObject("create_branch", x.CreateBranch)
	enc.AddObject("delete_branch", x.DeleteBranch)
	enc.AddObject("update_job_state", x.UpdateJobState)
	enc.AddObject("create_pipeline", x.CreatePipeline)
	enc.AddObject("stop_job", x.StopJob)
	return nil
}

func (x *TransactionResponse) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddObject("commit", x.Commit)
	return nil
}

func (x *Transaction) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddString("id", x.ID)
	return nil
}

func (x *TransactionInfo) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddObject("transaction", x.Transaction)
	requestsArrMarshaller := func(enc zapcore.ArrayEncoder) error {
		for _, v := range x.Requests {
			enc.AppendObject(v)
		}
		return nil
	}
	enc.AddArray("requests", zapcore.ArrayMarshalerFunc(requestsArrMarshaller))
	responsesArrMarshaller := func(enc zapcore.ArrayEncoder) error {
		for _, v := range x.Responses {
			enc.AppendObject(v)
		}
		return nil
	}
	enc.AddArray("responses", zapcore.ArrayMarshalerFunc(responsesArrMarshaller))
	protoextensions.AddTimestamp(enc, "started", x.Started)
	enc.AddUint64("version", x.Version)
	return nil
}

func (x *TransactionInfos) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	transaction_infoArrMarshaller := func(enc zapcore.ArrayEncoder) error {
		for _, v := range x.TransactionInfo {
			enc.AppendObject(v)
		}
		return nil
	}
	enc.AddArray("transaction_info", zapcore.ArrayMarshalerFunc(transaction_infoArrMarshaller))
	return nil
}

func (x *BatchTransactionRequest) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	requestsArrMarshaller := func(enc zapcore.ArrayEncoder) error {
		for _, v := range x.Requests {
			enc.AppendObject(v)
		}
		return nil
	}
	enc.AddArray("requests", zapcore.ArrayMarshalerFunc(requestsArrMarshaller))
	return nil
}

func (x *StartTransactionRequest) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	return nil
}

func (x *InspectTransactionRequest) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddObject("transaction", x.Transaction)
	return nil
}

func (x *DeleteTransactionRequest) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddObject("transaction", x.Transaction)
	return nil
}

func (x *ListTransactionRequest) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	return nil
}

func (x *FinishTransactionRequest) MarshalLogObject(enc zapcore.ObjectEncoder) error {
	if x == nil {
		return nil
	}
	enc.AddObject("transaction", x.Transaction)
	return nil
}
