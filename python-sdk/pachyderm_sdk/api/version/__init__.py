# Generated by the protocol buffer compiler.  DO NOT EDIT!
# sources: api/version/version.proto
# plugin: python-betterproto
# This file has been @generated
from dataclasses import dataclass
from typing import (
    TYPE_CHECKING,
    Dict,
    Optional,
)

import betterproto
import betterproto.lib.google.protobuf as betterproto_lib_google_protobuf
import grpc


if TYPE_CHECKING:
    import grpc


@dataclass(eq=False, repr=False)
class Version(betterproto.Message):
    major: int = betterproto.uint32_field(1)
    minor: int = betterproto.uint32_field(2)
    micro: int = betterproto.uint32_field(3)
    additional: str = betterproto.string_field(4)
    git_commit: str = betterproto.string_field(5)
    git_tree_modified: str = betterproto.string_field(6)
    build_date: str = betterproto.string_field(7)
    go_version: str = betterproto.string_field(8)
    platform: str = betterproto.string_field(9)


class ApiStub:
    def __init__(self, channel: "grpc.Channel"):
        self.__rpc_get_version = channel.unary_unary(
            "/versionpb_v2.API/GetVersion",
            request_serializer=betterproto_lib_google_protobuf.Empty.SerializeToString,
            response_deserializer=Version.FromString,
        )

    def get_version(self) -> "Version":
        request = betterproto_lib_google_protobuf.Empty()

        return self.__rpc_get_version(request)


class ApiBase:
    def get_version(self, context: "grpc.ServicerContext") -> "Version":
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details("Method not implemented!")
        raise NotImplementedError("Method not implemented!")

    __proto_path__ = "versionpb_v2.API"

    @property
    def __rpc_methods__(self):
        return {
            "GetVersion": grpc.unary_unary_rpc_method_handler(
                self.get_version,
                request_deserializer=betterproto_lib_google_protobuf.Empty.FromString,
                response_serializer=betterproto_lib_google_protobuf.Empty.SerializeToString,
            ),
        }
