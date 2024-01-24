# Generated by the protocol buffer compiler.  DO NOT EDIT!
# sources: api/transaction/transaction.proto
# plugin: python-betterproto
# This file has been @generated
from dataclasses import dataclass
from datetime import datetime
from typing import (
    TYPE_CHECKING,
    Dict,
    List,
    Optional,
)

import betterproto
import betterproto.lib.google.protobuf as betterproto_lib_google_protobuf
import grpc
from betterproto.grpc.grpcio_server import ServicerBase

from .. import (
    pfs as _pfs__,
    pps as _pps__,
)


if TYPE_CHECKING:
    import grpc


@dataclass(eq=False, repr=False)
class DeleteAllRequest(betterproto.Message):
    pass


@dataclass(eq=False, repr=False)
class TransactionRequest(betterproto.Message):
    create_repo: "_pfs__.CreateRepoRequest" = betterproto.message_field(1)
    """Exactly one of these fields should be set"""

    delete_repo: "_pfs__.DeleteRepoRequest" = betterproto.message_field(2)
    start_commit: "_pfs__.StartCommitRequest" = betterproto.message_field(3)
    finish_commit: "_pfs__.FinishCommitRequest" = betterproto.message_field(4)
    squash_commit_set: "_pfs__.SquashCommitSetRequest" = betterproto.message_field(5)
    create_branch: "_pfs__.CreateBranchRequest" = betterproto.message_field(6)
    delete_branch: "_pfs__.DeleteBranchRequest" = betterproto.message_field(7)
    update_job_state: "_pps__.UpdateJobStateRequest" = betterproto.message_field(8)
    stop_job: "_pps__.StopJobRequest" = betterproto.message_field(10)
    create_pipeline_v2: "_pps__.CreatePipelineTransaction" = betterproto.message_field(
        11
    )


@dataclass(eq=False, repr=False)
class TransactionResponse(betterproto.Message):
    commit: "_pfs__.Commit" = betterproto.message_field(1)
    """
    At most, one of these fields should be set (most responses are empty)
    """


@dataclass(eq=False, repr=False)
class Transaction(betterproto.Message):
    id: str = betterproto.string_field(1)


@dataclass(eq=False, repr=False)
class TransactionInfo(betterproto.Message):
    transaction: "Transaction" = betterproto.message_field(1)
    requests: List["TransactionRequest"] = betterproto.message_field(2)
    responses: List["TransactionResponse"] = betterproto.message_field(3)
    started: datetime = betterproto.message_field(4)
    version: int = betterproto.uint64_field(5)


@dataclass(eq=False, repr=False)
class TransactionInfos(betterproto.Message):
    transaction_info: List["TransactionInfo"] = betterproto.message_field(1)


@dataclass(eq=False, repr=False)
class BatchTransactionRequest(betterproto.Message):
    requests: List["TransactionRequest"] = betterproto.message_field(1)


@dataclass(eq=False, repr=False)
class StartTransactionRequest(betterproto.Message):
    pass


@dataclass(eq=False, repr=False)
class InspectTransactionRequest(betterproto.Message):
    transaction: "Transaction" = betterproto.message_field(1)


@dataclass(eq=False, repr=False)
class DeleteTransactionRequest(betterproto.Message):
    transaction: "Transaction" = betterproto.message_field(1)


@dataclass(eq=False, repr=False)
class ListTransactionRequest(betterproto.Message):
    pass


@dataclass(eq=False, repr=False)
class FinishTransactionRequest(betterproto.Message):
    transaction: "Transaction" = betterproto.message_field(1)


class ApiStub:
    def __init__(self, channel: "grpc.Channel"):
        self.__rpc_batch_transaction = channel.unary_unary(
            "/transaction_v2.API/BatchTransaction",
            request_serializer=BatchTransactionRequest.SerializeToString,
            response_deserializer=TransactionInfo.FromString,
        )
        self.__rpc_start_transaction = channel.unary_unary(
            "/transaction_v2.API/StartTransaction",
            request_serializer=StartTransactionRequest.SerializeToString,
            response_deserializer=Transaction.FromString,
        )
        self.__rpc_inspect_transaction = channel.unary_unary(
            "/transaction_v2.API/InspectTransaction",
            request_serializer=InspectTransactionRequest.SerializeToString,
            response_deserializer=TransactionInfo.FromString,
        )
        self.__rpc_delete_transaction = channel.unary_unary(
            "/transaction_v2.API/DeleteTransaction",
            request_serializer=DeleteTransactionRequest.SerializeToString,
            response_deserializer=betterproto_lib_google_protobuf.Empty.FromString,
        )
        self.__rpc_list_transaction = channel.unary_unary(
            "/transaction_v2.API/ListTransaction",
            request_serializer=ListTransactionRequest.SerializeToString,
            response_deserializer=TransactionInfos.FromString,
        )
        self.__rpc_finish_transaction = channel.unary_unary(
            "/transaction_v2.API/FinishTransaction",
            request_serializer=FinishTransactionRequest.SerializeToString,
            response_deserializer=TransactionInfo.FromString,
        )
        self.__rpc_delete_all = channel.unary_unary(
            "/transaction_v2.API/DeleteAll",
            request_serializer=DeleteAllRequest.SerializeToString,
            response_deserializer=betterproto_lib_google_protobuf.Empty.FromString,
        )

    def batch_transaction(
        self, *, requests: Optional[List["TransactionRequest"]] = None
    ) -> "TransactionInfo":
        requests = requests or []

        request = BatchTransactionRequest()
        if requests is not None:
            request.requests = requests

        return self.__rpc_batch_transaction(request)

    def start_transaction(self) -> "Transaction":
        request = StartTransactionRequest()

        return self.__rpc_start_transaction(request)

    def inspect_transaction(
        self, *, transaction: "Transaction" = None
    ) -> "TransactionInfo":
        request = InspectTransactionRequest()
        if transaction is not None:
            request.transaction = transaction

        return self.__rpc_inspect_transaction(request)

    def delete_transaction(
        self, *, transaction: "Transaction" = None
    ) -> "betterproto_lib_google_protobuf.Empty":
        request = DeleteTransactionRequest()
        if transaction is not None:
            request.transaction = transaction

        return self.__rpc_delete_transaction(request)

    def list_transaction(self) -> "TransactionInfos":
        request = ListTransactionRequest()

        return self.__rpc_list_transaction(request)

    def finish_transaction(
        self, *, transaction: "Transaction" = None
    ) -> "TransactionInfo":
        request = FinishTransactionRequest()
        if transaction is not None:
            request.transaction = transaction

        return self.__rpc_finish_transaction(request)

    def delete_all(self) -> "betterproto_lib_google_protobuf.Empty":
        request = DeleteAllRequest()

        return self.__rpc_delete_all(request)


class ApiBase(ServicerBase):
    def batch_transaction(
        self,
        requests: Optional[List["TransactionRequest"]],
        context: "grpc.ServicerContext",
    ) -> "TransactionInfo":
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details("Method not implemented!")
        raise NotImplementedError("Method not implemented!")

    def start_transaction(self, context: "grpc.ServicerContext") -> "Transaction":
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details("Method not implemented!")
        raise NotImplementedError("Method not implemented!")

    def inspect_transaction(
        self, transaction: "Transaction", context: "grpc.ServicerContext"
    ) -> "TransactionInfo":
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details("Method not implemented!")
        raise NotImplementedError("Method not implemented!")

    def delete_transaction(
        self, transaction: "Transaction", context: "grpc.ServicerContext"
    ) -> "betterproto_lib_google_protobuf.Empty":
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details("Method not implemented!")
        raise NotImplementedError("Method not implemented!")

    def list_transaction(self, context: "grpc.ServicerContext") -> "TransactionInfos":
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details("Method not implemented!")
        raise NotImplementedError("Method not implemented!")

    def finish_transaction(
        self, transaction: "Transaction", context: "grpc.ServicerContext"
    ) -> "TransactionInfo":
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details("Method not implemented!")
        raise NotImplementedError("Method not implemented!")

    def delete_all(
        self, context: "grpc.ServicerContext"
    ) -> "betterproto_lib_google_protobuf.Empty":
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details("Method not implemented!")
        raise NotImplementedError("Method not implemented!")

    __proto_path__ = "transaction_v2.API"

    @property
    def __rpc_methods__(self):
        return {
            "BatchTransaction": grpc.unary_unary_rpc_method_handler(
                self.batch_transaction,
                request_deserializer=BatchTransactionRequest.FromString,
                response_serializer=BatchTransactionRequest.SerializeToString,
            ),
            "StartTransaction": grpc.unary_unary_rpc_method_handler(
                self.start_transaction,
                request_deserializer=StartTransactionRequest.FromString,
                response_serializer=StartTransactionRequest.SerializeToString,
            ),
            "InspectTransaction": grpc.unary_unary_rpc_method_handler(
                self.inspect_transaction,
                request_deserializer=InspectTransactionRequest.FromString,
                response_serializer=InspectTransactionRequest.SerializeToString,
            ),
            "DeleteTransaction": grpc.unary_unary_rpc_method_handler(
                self.delete_transaction,
                request_deserializer=DeleteTransactionRequest.FromString,
                response_serializer=DeleteTransactionRequest.SerializeToString,
            ),
            "ListTransaction": grpc.unary_unary_rpc_method_handler(
                self.list_transaction,
                request_deserializer=ListTransactionRequest.FromString,
                response_serializer=ListTransactionRequest.SerializeToString,
            ),
            "FinishTransaction": grpc.unary_unary_rpc_method_handler(
                self.finish_transaction,
                request_deserializer=FinishTransactionRequest.FromString,
                response_serializer=FinishTransactionRequest.SerializeToString,
            ),
            "DeleteAll": grpc.unary_unary_rpc_method_handler(
                self.delete_all,
                request_deserializer=DeleteAllRequest.FromString,
                response_serializer=DeleteAllRequest.SerializeToString,
            ),
        }
