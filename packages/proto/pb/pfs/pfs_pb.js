// source: pfs/pfs.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var gogoproto_gogo_pb = require('../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var auth_auth_pb = require('../auth/auth_pb.js');
goog.object.extend(proto, auth_auth_pb);
goog.exportSymbol('proto.pfs.ActivateAuthRequest', null, global);
goog.exportSymbol('proto.pfs.ActivateAuthResponse', null, global);
goog.exportSymbol('proto.pfs.AddFilesetRequest', null, global);
goog.exportSymbol('proto.pfs.Branch', null, global);
goog.exportSymbol('proto.pfs.BranchInfo', null, global);
goog.exportSymbol('proto.pfs.BranchInfos', null, global);
goog.exportSymbol('proto.pfs.ClearCommitRequest', null, global);
goog.exportSymbol('proto.pfs.Commit', null, global);
goog.exportSymbol('proto.pfs.CommitInfo', null, global);
goog.exportSymbol('proto.pfs.CommitInfos', null, global);
goog.exportSymbol('proto.pfs.CommitOrigin', null, global);
goog.exportSymbol('proto.pfs.CommitProvenance', null, global);
goog.exportSymbol('proto.pfs.CommitRange', null, global);
goog.exportSymbol('proto.pfs.CommitState', null, global);
goog.exportSymbol('proto.pfs.CopyFile', null, global);
goog.exportSymbol('proto.pfs.CreateBranchRequest', null, global);
goog.exportSymbol('proto.pfs.CreateFilesetResponse', null, global);
goog.exportSymbol('proto.pfs.CreateRepoRequest', null, global);
goog.exportSymbol('proto.pfs.DeleteBranchRequest', null, global);
goog.exportSymbol('proto.pfs.DeleteFile', null, global);
goog.exportSymbol('proto.pfs.DeleteRepoRequest', null, global);
goog.exportSymbol('proto.pfs.Delimiter', null, global);
goog.exportSymbol('proto.pfs.DiffFileRequest', null, global);
goog.exportSymbol('proto.pfs.DiffFileResponse', null, global);
goog.exportSymbol('proto.pfs.File', null, global);
goog.exportSymbol('proto.pfs.FileInfo', null, global);
goog.exportSymbol('proto.pfs.FileType', null, global);
goog.exportSymbol('proto.pfs.FinishCommitRequest', null, global);
goog.exportSymbol('proto.pfs.FlushCommitRequest', null, global);
goog.exportSymbol('proto.pfs.FsckRequest', null, global);
goog.exportSymbol('proto.pfs.FsckResponse', null, global);
goog.exportSymbol('proto.pfs.GetFileRequest', null, global);
goog.exportSymbol('proto.pfs.GetFilesetRequest', null, global);
goog.exportSymbol('proto.pfs.GlobFileRequest', null, global);
goog.exportSymbol('proto.pfs.InspectBranchRequest', null, global);
goog.exportSymbol('proto.pfs.InspectCommitRequest', null, global);
goog.exportSymbol('proto.pfs.InspectFileRequest', null, global);
goog.exportSymbol('proto.pfs.InspectRepoRequest', null, global);
goog.exportSymbol('proto.pfs.Job', null, global);
goog.exportSymbol('proto.pfs.JobInfo', null, global);
goog.exportSymbol('proto.pfs.ListBranchRequest', null, global);
goog.exportSymbol('proto.pfs.ListCommitRequest', null, global);
goog.exportSymbol('proto.pfs.ListFileRequest', null, global);
goog.exportSymbol('proto.pfs.ListRepoRequest', null, global);
goog.exportSymbol('proto.pfs.ListRepoResponse', null, global);
goog.exportSymbol('proto.pfs.ModifyFileRequest', null, global);
goog.exportSymbol('proto.pfs.ModifyFileRequest.ModificationCase', null, global);
goog.exportSymbol('proto.pfs.OriginKind', null, global);
goog.exportSymbol('proto.pfs.PutFile', null, global);
goog.exportSymbol('proto.pfs.PutFile.SourceCase', null, global);
goog.exportSymbol('proto.pfs.RawFileSource', null, global);
goog.exportSymbol('proto.pfs.RenewFilesetRequest', null, global);
goog.exportSymbol('proto.pfs.Repo', null, global);
goog.exportSymbol('proto.pfs.RepoAuthInfo', null, global);
goog.exportSymbol('proto.pfs.RepoInfo', null, global);
goog.exportSymbol('proto.pfs.RunLoadTestRequest', null, global);
goog.exportSymbol('proto.pfs.RunLoadTestResponse', null, global);
goog.exportSymbol('proto.pfs.SquashCommitRequest', null, global);
goog.exportSymbol('proto.pfs.StartCommitRequest', null, global);
goog.exportSymbol('proto.pfs.StoredJobInfo', null, global);
goog.exportSymbol('proto.pfs.SubscribeCommitRequest', null, global);
goog.exportSymbol('proto.pfs.TarFileSource', null, global);
goog.exportSymbol('proto.pfs.Trigger', null, global);
goog.exportSymbol('proto.pfs.URLFileSource', null, global);
goog.exportSymbol('proto.pfs.WalkFileRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.Repo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.Repo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.Repo.displayName = 'proto.pfs.Repo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.Branch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.Branch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.Branch.displayName = 'proto.pfs.Branch';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.File = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.File, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.File.displayName = 'proto.pfs.File';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.RepoInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pfs.RepoInfo.repeatedFields_, null);
};
goog.inherits(proto.pfs.RepoInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.RepoInfo.displayName = 'proto.pfs.RepoInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.RepoAuthInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pfs.RepoAuthInfo.repeatedFields_, null);
};
goog.inherits(proto.pfs.RepoAuthInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.RepoAuthInfo.displayName = 'proto.pfs.RepoAuthInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.BranchInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pfs.BranchInfo.repeatedFields_, null);
};
goog.inherits(proto.pfs.BranchInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.BranchInfo.displayName = 'proto.pfs.BranchInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.BranchInfos = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pfs.BranchInfos.repeatedFields_, null);
};
goog.inherits(proto.pfs.BranchInfos, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.BranchInfos.displayName = 'proto.pfs.BranchInfos';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.Trigger = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.Trigger, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.Trigger.displayName = 'proto.pfs.Trigger';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.CommitOrigin = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.CommitOrigin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.CommitOrigin.displayName = 'proto.pfs.CommitOrigin';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.Commit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.Commit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.Commit.displayName = 'proto.pfs.Commit';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.CommitRange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.CommitRange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.CommitRange.displayName = 'proto.pfs.CommitRange';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.CommitProvenance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.CommitProvenance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.CommitProvenance.displayName = 'proto.pfs.CommitProvenance';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.CommitInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pfs.CommitInfo.repeatedFields_, null);
};
goog.inherits(proto.pfs.CommitInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.CommitInfo.displayName = 'proto.pfs.CommitInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.Job = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.Job, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.Job.displayName = 'proto.pfs.Job';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.StoredJobInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pfs.StoredJobInfo.repeatedFields_, null);
};
goog.inherits(proto.pfs.StoredJobInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.StoredJobInfo.displayName = 'proto.pfs.StoredJobInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.JobInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pfs.JobInfo.repeatedFields_, null);
};
goog.inherits(proto.pfs.JobInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.JobInfo.displayName = 'proto.pfs.JobInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.FileInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.FileInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.FileInfo.displayName = 'proto.pfs.FileInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.CreateRepoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.CreateRepoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.CreateRepoRequest.displayName = 'proto.pfs.CreateRepoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.InspectRepoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.InspectRepoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.InspectRepoRequest.displayName = 'proto.pfs.InspectRepoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.ListRepoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.ListRepoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.ListRepoRequest.displayName = 'proto.pfs.ListRepoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.ListRepoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pfs.ListRepoResponse.repeatedFields_, null);
};
goog.inherits(proto.pfs.ListRepoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.ListRepoResponse.displayName = 'proto.pfs.ListRepoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.DeleteRepoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.DeleteRepoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.DeleteRepoRequest.displayName = 'proto.pfs.DeleteRepoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.StartCommitRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pfs.StartCommitRequest.repeatedFields_, null);
};
goog.inherits(proto.pfs.StartCommitRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.StartCommitRequest.displayName = 'proto.pfs.StartCommitRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.FinishCommitRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.FinishCommitRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.FinishCommitRequest.displayName = 'proto.pfs.FinishCommitRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.InspectCommitRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.InspectCommitRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.InspectCommitRequest.displayName = 'proto.pfs.InspectCommitRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.ListCommitRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.ListCommitRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.ListCommitRequest.displayName = 'proto.pfs.ListCommitRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.CommitInfos = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pfs.CommitInfos.repeatedFields_, null);
};
goog.inherits(proto.pfs.CommitInfos, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.CommitInfos.displayName = 'proto.pfs.CommitInfos';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.SquashCommitRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.SquashCommitRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.SquashCommitRequest.displayName = 'proto.pfs.SquashCommitRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.FlushCommitRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pfs.FlushCommitRequest.repeatedFields_, null);
};
goog.inherits(proto.pfs.FlushCommitRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.FlushCommitRequest.displayName = 'proto.pfs.FlushCommitRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.SubscribeCommitRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.SubscribeCommitRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.SubscribeCommitRequest.displayName = 'proto.pfs.SubscribeCommitRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.ClearCommitRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.ClearCommitRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.ClearCommitRequest.displayName = 'proto.pfs.ClearCommitRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.CreateBranchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pfs.CreateBranchRequest.repeatedFields_, null);
};
goog.inherits(proto.pfs.CreateBranchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.CreateBranchRequest.displayName = 'proto.pfs.CreateBranchRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.InspectBranchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.InspectBranchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.InspectBranchRequest.displayName = 'proto.pfs.InspectBranchRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.ListBranchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.ListBranchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.ListBranchRequest.displayName = 'proto.pfs.ListBranchRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.DeleteBranchRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.DeleteBranchRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.DeleteBranchRequest.displayName = 'proto.pfs.DeleteBranchRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.PutFile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.pfs.PutFile.oneofGroups_);
};
goog.inherits(proto.pfs.PutFile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.PutFile.displayName = 'proto.pfs.PutFile';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.RawFileSource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.RawFileSource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.RawFileSource.displayName = 'proto.pfs.RawFileSource';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.TarFileSource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.TarFileSource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.TarFileSource.displayName = 'proto.pfs.TarFileSource';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.URLFileSource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.URLFileSource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.URLFileSource.displayName = 'proto.pfs.URLFileSource';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.DeleteFile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.DeleteFile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.DeleteFile.displayName = 'proto.pfs.DeleteFile';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.CopyFile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.CopyFile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.CopyFile.displayName = 'proto.pfs.CopyFile';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.ModifyFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.pfs.ModifyFileRequest.oneofGroups_);
};
goog.inherits(proto.pfs.ModifyFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.ModifyFileRequest.displayName = 'proto.pfs.ModifyFileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.GetFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.GetFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.GetFileRequest.displayName = 'proto.pfs.GetFileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.InspectFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.InspectFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.InspectFileRequest.displayName = 'proto.pfs.InspectFileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.ListFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.ListFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.ListFileRequest.displayName = 'proto.pfs.ListFileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.WalkFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.WalkFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.WalkFileRequest.displayName = 'proto.pfs.WalkFileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.GlobFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.GlobFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.GlobFileRequest.displayName = 'proto.pfs.GlobFileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.DiffFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.DiffFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.DiffFileRequest.displayName = 'proto.pfs.DiffFileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.DiffFileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.DiffFileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.DiffFileResponse.displayName = 'proto.pfs.DiffFileResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.FsckRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.FsckRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.FsckRequest.displayName = 'proto.pfs.FsckRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.FsckResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.FsckResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.FsckResponse.displayName = 'proto.pfs.FsckResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.CreateFilesetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.CreateFilesetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.CreateFilesetResponse.displayName = 'proto.pfs.CreateFilesetResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.GetFilesetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.GetFilesetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.GetFilesetRequest.displayName = 'proto.pfs.GetFilesetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.AddFilesetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.AddFilesetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.AddFilesetRequest.displayName = 'proto.pfs.AddFilesetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.RenewFilesetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.RenewFilesetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.RenewFilesetRequest.displayName = 'proto.pfs.RenewFilesetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.ActivateAuthRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.ActivateAuthRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.ActivateAuthRequest.displayName = 'proto.pfs.ActivateAuthRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.ActivateAuthResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.ActivateAuthResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.ActivateAuthResponse.displayName = 'proto.pfs.ActivateAuthResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.RunLoadTestRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.RunLoadTestRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.RunLoadTestRequest.displayName = 'proto.pfs.RunLoadTestRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pfs.RunLoadTestResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pfs.RunLoadTestResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pfs.RunLoadTestResponse.displayName = 'proto.pfs.RunLoadTestResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.Repo.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.Repo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.Repo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.Repo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.Repo}
 */
proto.pfs.Repo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.Repo;
  return proto.pfs.Repo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.Repo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.Repo}
 */
proto.pfs.Repo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.Repo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.Repo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.Repo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.Repo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.pfs.Repo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.Repo} returns this
 */
proto.pfs.Repo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.pfs.Repo.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.Repo} returns this
 */
proto.pfs.Repo.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.Branch.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.Branch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.Branch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.Branch.toObject = function(includeInstance, msg) {
  var f, obj = {
    repo: (f = msg.getRepo()) && proto.pfs.Repo.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.Branch}
 */
proto.pfs.Branch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.Branch;
  return proto.pfs.Branch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.Branch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.Branch}
 */
proto.pfs.Branch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.Repo;
      reader.readMessage(value,proto.pfs.Repo.deserializeBinaryFromReader);
      msg.setRepo(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.Branch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.Branch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.Branch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.Branch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.Repo.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Repo repo = 1;
 * @return {?proto.pfs.Repo}
 */
proto.pfs.Branch.prototype.getRepo = function() {
  return /** @type{?proto.pfs.Repo} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Repo, 1));
};


/**
 * @param {?proto.pfs.Repo|undefined} value
 * @return {!proto.pfs.Branch} returns this
*/
proto.pfs.Branch.prototype.setRepo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.Branch} returns this
 */
proto.pfs.Branch.prototype.clearRepo = function() {
  return this.setRepo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.Branch.prototype.hasRepo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.pfs.Branch.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.Branch} returns this
 */
proto.pfs.Branch.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.File.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.File.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.File} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.File.toObject = function(includeInstance, msg) {
  var f, obj = {
    commit: (f = msg.getCommit()) && proto.pfs.Commit.toObject(includeInstance, f),
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tag: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.File}
 */
proto.pfs.File.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.File;
  return proto.pfs.File.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.File} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.File}
 */
proto.pfs.File.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.Commit;
      reader.readMessage(value,proto.pfs.Commit.deserializeBinaryFromReader);
      msg.setCommit(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTag(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.File.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.File.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.File} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.File.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.Commit.serializeBinaryToWriter
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTag();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Commit commit = 1;
 * @return {?proto.pfs.Commit}
 */
proto.pfs.File.prototype.getCommit = function() {
  return /** @type{?proto.pfs.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Commit, 1));
};


/**
 * @param {?proto.pfs.Commit|undefined} value
 * @return {!proto.pfs.File} returns this
*/
proto.pfs.File.prototype.setCommit = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.File} returns this
 */
proto.pfs.File.prototype.clearCommit = function() {
  return this.setCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.File.prototype.hasCommit = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.pfs.File.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.File} returns this
 */
proto.pfs.File.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string tag = 3;
 * @return {string}
 */
proto.pfs.File.prototype.getTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.File} returns this
 */
proto.pfs.File.prototype.setTag = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pfs.RepoInfo.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.RepoInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.RepoInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.RepoInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.RepoInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    repo: (f = msg.getRepo()) && proto.pfs.Repo.toObject(includeInstance, f),
    created: (f = msg.getCreated()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    sizeBytes: jspb.Message.getFieldWithDefault(msg, 3, 0),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    branchesList: jspb.Message.toObjectList(msg.getBranchesList(),
    proto.pfs.Branch.toObject, includeInstance),
    authInfo: (f = msg.getAuthInfo()) && proto.pfs.RepoAuthInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.RepoInfo}
 */
proto.pfs.RepoInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.RepoInfo;
  return proto.pfs.RepoInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.RepoInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.RepoInfo}
 */
proto.pfs.RepoInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.Repo;
      reader.readMessage(value,proto.pfs.Repo.deserializeBinaryFromReader);
      msg.setRepo(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreated(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSizeBytes(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = new proto.pfs.Branch;
      reader.readMessage(value,proto.pfs.Branch.deserializeBinaryFromReader);
      msg.addBranches(value);
      break;
    case 6:
      var value = new proto.pfs.RepoAuthInfo;
      reader.readMessage(value,proto.pfs.RepoAuthInfo.deserializeBinaryFromReader);
      msg.setAuthInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.RepoInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.RepoInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.RepoInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.RepoInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.Repo.serializeBinaryToWriter
    );
  }
  f = message.getCreated();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSizeBytes();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBranchesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.pfs.Branch.serializeBinaryToWriter
    );
  }
  f = message.getAuthInfo();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.pfs.RepoAuthInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional Repo repo = 1;
 * @return {?proto.pfs.Repo}
 */
proto.pfs.RepoInfo.prototype.getRepo = function() {
  return /** @type{?proto.pfs.Repo} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Repo, 1));
};


/**
 * @param {?proto.pfs.Repo|undefined} value
 * @return {!proto.pfs.RepoInfo} returns this
*/
proto.pfs.RepoInfo.prototype.setRepo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.RepoInfo} returns this
 */
proto.pfs.RepoInfo.prototype.clearRepo = function() {
  return this.setRepo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.RepoInfo.prototype.hasRepo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp created = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pfs.RepoInfo.prototype.getCreated = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pfs.RepoInfo} returns this
*/
proto.pfs.RepoInfo.prototype.setCreated = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.RepoInfo} returns this
 */
proto.pfs.RepoInfo.prototype.clearCreated = function() {
  return this.setCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.RepoInfo.prototype.hasCreated = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 size_bytes = 3;
 * @return {number}
 */
proto.pfs.RepoInfo.prototype.getSizeBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs.RepoInfo} returns this
 */
proto.pfs.RepoInfo.prototype.setSizeBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.pfs.RepoInfo.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.RepoInfo} returns this
 */
proto.pfs.RepoInfo.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated Branch branches = 5;
 * @return {!Array<!proto.pfs.Branch>}
 */
proto.pfs.RepoInfo.prototype.getBranchesList = function() {
  return /** @type{!Array<!proto.pfs.Branch>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs.Branch, 5));
};


/**
 * @param {!Array<!proto.pfs.Branch>} value
 * @return {!proto.pfs.RepoInfo} returns this
*/
proto.pfs.RepoInfo.prototype.setBranchesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.pfs.Branch=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs.Branch}
 */
proto.pfs.RepoInfo.prototype.addBranches = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.pfs.Branch, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs.RepoInfo} returns this
 */
proto.pfs.RepoInfo.prototype.clearBranchesList = function() {
  return this.setBranchesList([]);
};


/**
 * optional RepoAuthInfo auth_info = 6;
 * @return {?proto.pfs.RepoAuthInfo}
 */
proto.pfs.RepoInfo.prototype.getAuthInfo = function() {
  return /** @type{?proto.pfs.RepoAuthInfo} */ (
    jspb.Message.getWrapperField(this, proto.pfs.RepoAuthInfo, 6));
};


/**
 * @param {?proto.pfs.RepoAuthInfo|undefined} value
 * @return {!proto.pfs.RepoInfo} returns this
*/
proto.pfs.RepoInfo.prototype.setAuthInfo = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.RepoInfo} returns this
 */
proto.pfs.RepoInfo.prototype.clearAuthInfo = function() {
  return this.setAuthInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.RepoInfo.prototype.hasAuthInfo = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pfs.RepoAuthInfo.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.RepoAuthInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.RepoAuthInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.RepoAuthInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.RepoAuthInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    permissionsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    rolesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.RepoAuthInfo}
 */
proto.pfs.RepoAuthInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.RepoAuthInfo;
  return proto.pfs.RepoAuthInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.RepoAuthInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.RepoAuthInfo}
 */
proto.pfs.RepoAuthInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.auth.Permission>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPermissions(values[i]);
      }
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addRoles(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.RepoAuthInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.RepoAuthInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.RepoAuthInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.RepoAuthInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPermissionsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
  f = message.getRolesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated auth.Permission permissions = 1;
 * @return {!Array<!proto.auth.Permission>}
 */
proto.pfs.RepoAuthInfo.prototype.getPermissionsList = function() {
  return /** @type {!Array<!proto.auth.Permission>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.auth.Permission>} value
 * @return {!proto.pfs.RepoAuthInfo} returns this
 */
proto.pfs.RepoAuthInfo.prototype.setPermissionsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.auth.Permission} value
 * @param {number=} opt_index
 * @return {!proto.pfs.RepoAuthInfo} returns this
 */
proto.pfs.RepoAuthInfo.prototype.addPermissions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs.RepoAuthInfo} returns this
 */
proto.pfs.RepoAuthInfo.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
};


/**
 * repeated string roles = 2;
 * @return {!Array<string>}
 */
proto.pfs.RepoAuthInfo.prototype.getRolesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.pfs.RepoAuthInfo} returns this
 */
proto.pfs.RepoAuthInfo.prototype.setRolesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.pfs.RepoAuthInfo} returns this
 */
proto.pfs.RepoAuthInfo.prototype.addRoles = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs.RepoAuthInfo} returns this
 */
proto.pfs.RepoAuthInfo.prototype.clearRolesList = function() {
  return this.setRolesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pfs.BranchInfo.repeatedFields_ = [3,4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.BranchInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.BranchInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.BranchInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.BranchInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    branch: (f = msg.getBranch()) && proto.pfs.Branch.toObject(includeInstance, f),
    head: (f = msg.getHead()) && proto.pfs.Commit.toObject(includeInstance, f),
    provenanceList: jspb.Message.toObjectList(msg.getProvenanceList(),
    proto.pfs.Branch.toObject, includeInstance),
    subvenanceList: jspb.Message.toObjectList(msg.getSubvenanceList(),
    proto.pfs.Branch.toObject, includeInstance),
    directProvenanceList: jspb.Message.toObjectList(msg.getDirectProvenanceList(),
    proto.pfs.Branch.toObject, includeInstance),
    trigger: (f = msg.getTrigger()) && proto.pfs.Trigger.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.BranchInfo}
 */
proto.pfs.BranchInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.BranchInfo;
  return proto.pfs.BranchInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.BranchInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.BranchInfo}
 */
proto.pfs.BranchInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.Branch;
      reader.readMessage(value,proto.pfs.Branch.deserializeBinaryFromReader);
      msg.setBranch(value);
      break;
    case 2:
      var value = new proto.pfs.Commit;
      reader.readMessage(value,proto.pfs.Commit.deserializeBinaryFromReader);
      msg.setHead(value);
      break;
    case 3:
      var value = new proto.pfs.Branch;
      reader.readMessage(value,proto.pfs.Branch.deserializeBinaryFromReader);
      msg.addProvenance(value);
      break;
    case 4:
      var value = new proto.pfs.Branch;
      reader.readMessage(value,proto.pfs.Branch.deserializeBinaryFromReader);
      msg.addSubvenance(value);
      break;
    case 5:
      var value = new proto.pfs.Branch;
      reader.readMessage(value,proto.pfs.Branch.deserializeBinaryFromReader);
      msg.addDirectProvenance(value);
      break;
    case 6:
      var value = new proto.pfs.Trigger;
      reader.readMessage(value,proto.pfs.Trigger.deserializeBinaryFromReader);
      msg.setTrigger(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.BranchInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.BranchInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.BranchInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.BranchInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBranch();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.Branch.serializeBinaryToWriter
    );
  }
  f = message.getHead();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pfs.Commit.serializeBinaryToWriter
    );
  }
  f = message.getProvenanceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.pfs.Branch.serializeBinaryToWriter
    );
  }
  f = message.getSubvenanceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.pfs.Branch.serializeBinaryToWriter
    );
  }
  f = message.getDirectProvenanceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.pfs.Branch.serializeBinaryToWriter
    );
  }
  f = message.getTrigger();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.pfs.Trigger.serializeBinaryToWriter
    );
  }
};


/**
 * optional Branch branch = 1;
 * @return {?proto.pfs.Branch}
 */
proto.pfs.BranchInfo.prototype.getBranch = function() {
  return /** @type{?proto.pfs.Branch} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Branch, 1));
};


/**
 * @param {?proto.pfs.Branch|undefined} value
 * @return {!proto.pfs.BranchInfo} returns this
*/
proto.pfs.BranchInfo.prototype.setBranch = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.BranchInfo} returns this
 */
proto.pfs.BranchInfo.prototype.clearBranch = function() {
  return this.setBranch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.BranchInfo.prototype.hasBranch = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Commit head = 2;
 * @return {?proto.pfs.Commit}
 */
proto.pfs.BranchInfo.prototype.getHead = function() {
  return /** @type{?proto.pfs.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Commit, 2));
};


/**
 * @param {?proto.pfs.Commit|undefined} value
 * @return {!proto.pfs.BranchInfo} returns this
*/
proto.pfs.BranchInfo.prototype.setHead = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.BranchInfo} returns this
 */
proto.pfs.BranchInfo.prototype.clearHead = function() {
  return this.setHead(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.BranchInfo.prototype.hasHead = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Branch provenance = 3;
 * @return {!Array<!proto.pfs.Branch>}
 */
proto.pfs.BranchInfo.prototype.getProvenanceList = function() {
  return /** @type{!Array<!proto.pfs.Branch>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs.Branch, 3));
};


/**
 * @param {!Array<!proto.pfs.Branch>} value
 * @return {!proto.pfs.BranchInfo} returns this
*/
proto.pfs.BranchInfo.prototype.setProvenanceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.pfs.Branch=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs.Branch}
 */
proto.pfs.BranchInfo.prototype.addProvenance = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.pfs.Branch, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs.BranchInfo} returns this
 */
proto.pfs.BranchInfo.prototype.clearProvenanceList = function() {
  return this.setProvenanceList([]);
};


/**
 * repeated Branch subvenance = 4;
 * @return {!Array<!proto.pfs.Branch>}
 */
proto.pfs.BranchInfo.prototype.getSubvenanceList = function() {
  return /** @type{!Array<!proto.pfs.Branch>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs.Branch, 4));
};


/**
 * @param {!Array<!proto.pfs.Branch>} value
 * @return {!proto.pfs.BranchInfo} returns this
*/
proto.pfs.BranchInfo.prototype.setSubvenanceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.pfs.Branch=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs.Branch}
 */
proto.pfs.BranchInfo.prototype.addSubvenance = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.pfs.Branch, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs.BranchInfo} returns this
 */
proto.pfs.BranchInfo.prototype.clearSubvenanceList = function() {
  return this.setSubvenanceList([]);
};


/**
 * repeated Branch direct_provenance = 5;
 * @return {!Array<!proto.pfs.Branch>}
 */
proto.pfs.BranchInfo.prototype.getDirectProvenanceList = function() {
  return /** @type{!Array<!proto.pfs.Branch>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs.Branch, 5));
};


/**
 * @param {!Array<!proto.pfs.Branch>} value
 * @return {!proto.pfs.BranchInfo} returns this
*/
proto.pfs.BranchInfo.prototype.setDirectProvenanceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.pfs.Branch=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs.Branch}
 */
proto.pfs.BranchInfo.prototype.addDirectProvenance = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.pfs.Branch, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs.BranchInfo} returns this
 */
proto.pfs.BranchInfo.prototype.clearDirectProvenanceList = function() {
  return this.setDirectProvenanceList([]);
};


/**
 * optional Trigger trigger = 6;
 * @return {?proto.pfs.Trigger}
 */
proto.pfs.BranchInfo.prototype.getTrigger = function() {
  return /** @type{?proto.pfs.Trigger} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Trigger, 6));
};


/**
 * @param {?proto.pfs.Trigger|undefined} value
 * @return {!proto.pfs.BranchInfo} returns this
*/
proto.pfs.BranchInfo.prototype.setTrigger = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.BranchInfo} returns this
 */
proto.pfs.BranchInfo.prototype.clearTrigger = function() {
  return this.setTrigger(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.BranchInfo.prototype.hasTrigger = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pfs.BranchInfos.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.BranchInfos.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.BranchInfos.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.BranchInfos} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.BranchInfos.toObject = function(includeInstance, msg) {
  var f, obj = {
    branchInfoList: jspb.Message.toObjectList(msg.getBranchInfoList(),
    proto.pfs.BranchInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.BranchInfos}
 */
proto.pfs.BranchInfos.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.BranchInfos;
  return proto.pfs.BranchInfos.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.BranchInfos} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.BranchInfos}
 */
proto.pfs.BranchInfos.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.BranchInfo;
      reader.readMessage(value,proto.pfs.BranchInfo.deserializeBinaryFromReader);
      msg.addBranchInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.BranchInfos.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.BranchInfos.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.BranchInfos} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.BranchInfos.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBranchInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pfs.BranchInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated BranchInfo branch_info = 1;
 * @return {!Array<!proto.pfs.BranchInfo>}
 */
proto.pfs.BranchInfos.prototype.getBranchInfoList = function() {
  return /** @type{!Array<!proto.pfs.BranchInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs.BranchInfo, 1));
};


/**
 * @param {!Array<!proto.pfs.BranchInfo>} value
 * @return {!proto.pfs.BranchInfos} returns this
*/
proto.pfs.BranchInfos.prototype.setBranchInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pfs.BranchInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs.BranchInfo}
 */
proto.pfs.BranchInfos.prototype.addBranchInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pfs.BranchInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs.BranchInfos} returns this
 */
proto.pfs.BranchInfos.prototype.clearBranchInfoList = function() {
  return this.setBranchInfoList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.Trigger.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.Trigger.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.Trigger} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.Trigger.toObject = function(includeInstance, msg) {
  var f, obj = {
    branch: jspb.Message.getFieldWithDefault(msg, 1, ""),
    all: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    cronSpec: jspb.Message.getFieldWithDefault(msg, 3, ""),
    size: jspb.Message.getFieldWithDefault(msg, 4, ""),
    commits: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.Trigger}
 */
proto.pfs.Trigger.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.Trigger;
  return proto.pfs.Trigger.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.Trigger} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.Trigger}
 */
proto.pfs.Trigger.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBranch(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAll(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCronSpec(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSize(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCommits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.Trigger.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.Trigger.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.Trigger} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.Trigger.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBranch();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAll();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getCronSpec();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSize();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCommits();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional string branch = 1;
 * @return {string}
 */
proto.pfs.Trigger.prototype.getBranch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.Trigger} returns this
 */
proto.pfs.Trigger.prototype.setBranch = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool all = 2;
 * @return {boolean}
 */
proto.pfs.Trigger.prototype.getAll = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs.Trigger} returns this
 */
proto.pfs.Trigger.prototype.setAll = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string cron_spec = 3;
 * @return {string}
 */
proto.pfs.Trigger.prototype.getCronSpec = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.Trigger} returns this
 */
proto.pfs.Trigger.prototype.setCronSpec = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string size = 4;
 * @return {string}
 */
proto.pfs.Trigger.prototype.getSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.Trigger} returns this
 */
proto.pfs.Trigger.prototype.setSize = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 commits = 5;
 * @return {number}
 */
proto.pfs.Trigger.prototype.getCommits = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs.Trigger} returns this
 */
proto.pfs.Trigger.prototype.setCommits = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.CommitOrigin.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.CommitOrigin.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.CommitOrigin} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.CommitOrigin.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.CommitOrigin}
 */
proto.pfs.CommitOrigin.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.CommitOrigin;
  return proto.pfs.CommitOrigin.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.CommitOrigin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.CommitOrigin}
 */
proto.pfs.CommitOrigin.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.pfs.OriginKind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.CommitOrigin.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.CommitOrigin.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.CommitOrigin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.CommitOrigin.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional OriginKind kind = 1;
 * @return {!proto.pfs.OriginKind}
 */
proto.pfs.CommitOrigin.prototype.getKind = function() {
  return /** @type {!proto.pfs.OriginKind} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.pfs.OriginKind} value
 * @return {!proto.pfs.CommitOrigin} returns this
 */
proto.pfs.CommitOrigin.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.Commit.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.Commit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.Commit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.Commit.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    branch: (f = msg.getBranch()) && proto.pfs.Branch.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.Commit}
 */
proto.pfs.Commit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.Commit;
  return proto.pfs.Commit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.Commit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.Commit}
 */
proto.pfs.Commit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.pfs.Branch;
      reader.readMessage(value,proto.pfs.Branch.deserializeBinaryFromReader);
      msg.setBranch(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.Commit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.Commit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.Commit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.Commit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBranch();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pfs.Branch.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.pfs.Commit.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.Commit} returns this
 */
proto.pfs.Commit.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Branch branch = 2;
 * @return {?proto.pfs.Branch}
 */
proto.pfs.Commit.prototype.getBranch = function() {
  return /** @type{?proto.pfs.Branch} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Branch, 2));
};


/**
 * @param {?proto.pfs.Branch|undefined} value
 * @return {!proto.pfs.Commit} returns this
*/
proto.pfs.Commit.prototype.setBranch = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.Commit} returns this
 */
proto.pfs.Commit.prototype.clearBranch = function() {
  return this.setBranch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.Commit.prototype.hasBranch = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.CommitRange.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.CommitRange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.CommitRange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.CommitRange.toObject = function(includeInstance, msg) {
  var f, obj = {
    lower: (f = msg.getLower()) && proto.pfs.Commit.toObject(includeInstance, f),
    upper: (f = msg.getUpper()) && proto.pfs.Commit.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.CommitRange}
 */
proto.pfs.CommitRange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.CommitRange;
  return proto.pfs.CommitRange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.CommitRange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.CommitRange}
 */
proto.pfs.CommitRange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.Commit;
      reader.readMessage(value,proto.pfs.Commit.deserializeBinaryFromReader);
      msg.setLower(value);
      break;
    case 2:
      var value = new proto.pfs.Commit;
      reader.readMessage(value,proto.pfs.Commit.deserializeBinaryFromReader);
      msg.setUpper(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.CommitRange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.CommitRange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.CommitRange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.CommitRange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLower();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.Commit.serializeBinaryToWriter
    );
  }
  f = message.getUpper();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pfs.Commit.serializeBinaryToWriter
    );
  }
};


/**
 * optional Commit lower = 1;
 * @return {?proto.pfs.Commit}
 */
proto.pfs.CommitRange.prototype.getLower = function() {
  return /** @type{?proto.pfs.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Commit, 1));
};


/**
 * @param {?proto.pfs.Commit|undefined} value
 * @return {!proto.pfs.CommitRange} returns this
*/
proto.pfs.CommitRange.prototype.setLower = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.CommitRange} returns this
 */
proto.pfs.CommitRange.prototype.clearLower = function() {
  return this.setLower(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.CommitRange.prototype.hasLower = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Commit upper = 2;
 * @return {?proto.pfs.Commit}
 */
proto.pfs.CommitRange.prototype.getUpper = function() {
  return /** @type{?proto.pfs.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Commit, 2));
};


/**
 * @param {?proto.pfs.Commit|undefined} value
 * @return {!proto.pfs.CommitRange} returns this
*/
proto.pfs.CommitRange.prototype.setUpper = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.CommitRange} returns this
 */
proto.pfs.CommitRange.prototype.clearUpper = function() {
  return this.setUpper(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.CommitRange.prototype.hasUpper = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.CommitProvenance.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.CommitProvenance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.CommitProvenance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.CommitProvenance.toObject = function(includeInstance, msg) {
  var f, obj = {
    commit: (f = msg.getCommit()) && proto.pfs.Commit.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.CommitProvenance}
 */
proto.pfs.CommitProvenance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.CommitProvenance;
  return proto.pfs.CommitProvenance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.CommitProvenance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.CommitProvenance}
 */
proto.pfs.CommitProvenance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.Commit;
      reader.readMessage(value,proto.pfs.Commit.deserializeBinaryFromReader);
      msg.setCommit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.CommitProvenance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.CommitProvenance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.CommitProvenance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.CommitProvenance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.Commit.serializeBinaryToWriter
    );
  }
};


/**
 * optional Commit commit = 1;
 * @return {?proto.pfs.Commit}
 */
proto.pfs.CommitProvenance.prototype.getCommit = function() {
  return /** @type{?proto.pfs.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Commit, 1));
};


/**
 * @param {?proto.pfs.Commit|undefined} value
 * @return {!proto.pfs.CommitProvenance} returns this
*/
proto.pfs.CommitProvenance.prototype.setCommit = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.CommitProvenance} returns this
 */
proto.pfs.CommitProvenance.prototype.clearCommit = function() {
  return this.setCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.CommitProvenance.prototype.hasCommit = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pfs.CommitInfo.repeatedFields_ = [5,9,11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.CommitInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.CommitInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.CommitInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.CommitInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    commit: (f = msg.getCommit()) && proto.pfs.Commit.toObject(includeInstance, f),
    origin: (f = msg.getOrigin()) && proto.pfs.CommitOrigin.toObject(includeInstance, f),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    parentCommit: (f = msg.getParentCommit()) && proto.pfs.Commit.toObject(includeInstance, f),
    childCommitsList: jspb.Message.toObjectList(msg.getChildCommitsList(),
    proto.pfs.Commit.toObject, includeInstance),
    started: (f = msg.getStarted()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    finished: (f = msg.getFinished()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    sizeBytes: jspb.Message.getFieldWithDefault(msg, 8, 0),
    provenanceList: jspb.Message.toObjectList(msg.getProvenanceList(),
    proto.pfs.CommitProvenance.toObject, includeInstance),
    readyProvenance: jspb.Message.getFieldWithDefault(msg, 10, 0),
    subvenanceList: jspb.Message.toObjectList(msg.getSubvenanceList(),
    proto.pfs.CommitRange.toObject, includeInstance),
    subvenantCommitsSuccess: jspb.Message.getFieldWithDefault(msg, 12, 0),
    subvenantCommitsFailure: jspb.Message.getFieldWithDefault(msg, 13, 0),
    subvenantCommitsTotal: jspb.Message.getFieldWithDefault(msg, 14, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.CommitInfo}
 */
proto.pfs.CommitInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.CommitInfo;
  return proto.pfs.CommitInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.CommitInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.CommitInfo}
 */
proto.pfs.CommitInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.Commit;
      reader.readMessage(value,proto.pfs.Commit.deserializeBinaryFromReader);
      msg.setCommit(value);
      break;
    case 2:
      var value = new proto.pfs.CommitOrigin;
      reader.readMessage(value,proto.pfs.CommitOrigin.deserializeBinaryFromReader);
      msg.setOrigin(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = new proto.pfs.Commit;
      reader.readMessage(value,proto.pfs.Commit.deserializeBinaryFromReader);
      msg.setParentCommit(value);
      break;
    case 5:
      var value = new proto.pfs.Commit;
      reader.readMessage(value,proto.pfs.Commit.deserializeBinaryFromReader);
      msg.addChildCommits(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStarted(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFinished(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSizeBytes(value);
      break;
    case 9:
      var value = new proto.pfs.CommitProvenance;
      reader.readMessage(value,proto.pfs.CommitProvenance.deserializeBinaryFromReader);
      msg.addProvenance(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReadyProvenance(value);
      break;
    case 11:
      var value = new proto.pfs.CommitRange;
      reader.readMessage(value,proto.pfs.CommitRange.deserializeBinaryFromReader);
      msg.addSubvenance(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSubvenantCommitsSuccess(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSubvenantCommitsFailure(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSubvenantCommitsTotal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.CommitInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.CommitInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.CommitInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.CommitInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.Commit.serializeBinaryToWriter
    );
  }
  f = message.getOrigin();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pfs.CommitOrigin.serializeBinaryToWriter
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getParentCommit();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.pfs.Commit.serializeBinaryToWriter
    );
  }
  f = message.getChildCommitsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.pfs.Commit.serializeBinaryToWriter
    );
  }
  f = message.getStarted();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getFinished();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSizeBytes();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getProvenanceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.pfs.CommitProvenance.serializeBinaryToWriter
    );
  }
  f = message.getReadyProvenance();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getSubvenanceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.pfs.CommitRange.serializeBinaryToWriter
    );
  }
  f = message.getSubvenantCommitsSuccess();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getSubvenantCommitsFailure();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getSubvenantCommitsTotal();
  if (f !== 0) {
    writer.writeInt64(
      14,
      f
    );
  }
};


/**
 * optional Commit commit = 1;
 * @return {?proto.pfs.Commit}
 */
proto.pfs.CommitInfo.prototype.getCommit = function() {
  return /** @type{?proto.pfs.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Commit, 1));
};


/**
 * @param {?proto.pfs.Commit|undefined} value
 * @return {!proto.pfs.CommitInfo} returns this
*/
proto.pfs.CommitInfo.prototype.setCommit = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.CommitInfo} returns this
 */
proto.pfs.CommitInfo.prototype.clearCommit = function() {
  return this.setCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.CommitInfo.prototype.hasCommit = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CommitOrigin origin = 2;
 * @return {?proto.pfs.CommitOrigin}
 */
proto.pfs.CommitInfo.prototype.getOrigin = function() {
  return /** @type{?proto.pfs.CommitOrigin} */ (
    jspb.Message.getWrapperField(this, proto.pfs.CommitOrigin, 2));
};


/**
 * @param {?proto.pfs.CommitOrigin|undefined} value
 * @return {!proto.pfs.CommitInfo} returns this
*/
proto.pfs.CommitInfo.prototype.setOrigin = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.CommitInfo} returns this
 */
proto.pfs.CommitInfo.prototype.clearOrigin = function() {
  return this.setOrigin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.CommitInfo.prototype.hasOrigin = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.pfs.CommitInfo.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.CommitInfo} returns this
 */
proto.pfs.CommitInfo.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Commit parent_commit = 4;
 * @return {?proto.pfs.Commit}
 */
proto.pfs.CommitInfo.prototype.getParentCommit = function() {
  return /** @type{?proto.pfs.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Commit, 4));
};


/**
 * @param {?proto.pfs.Commit|undefined} value
 * @return {!proto.pfs.CommitInfo} returns this
*/
proto.pfs.CommitInfo.prototype.setParentCommit = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.CommitInfo} returns this
 */
proto.pfs.CommitInfo.prototype.clearParentCommit = function() {
  return this.setParentCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.CommitInfo.prototype.hasParentCommit = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated Commit child_commits = 5;
 * @return {!Array<!proto.pfs.Commit>}
 */
proto.pfs.CommitInfo.prototype.getChildCommitsList = function() {
  return /** @type{!Array<!proto.pfs.Commit>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs.Commit, 5));
};


/**
 * @param {!Array<!proto.pfs.Commit>} value
 * @return {!proto.pfs.CommitInfo} returns this
*/
proto.pfs.CommitInfo.prototype.setChildCommitsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.pfs.Commit=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs.Commit}
 */
proto.pfs.CommitInfo.prototype.addChildCommits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.pfs.Commit, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs.CommitInfo} returns this
 */
proto.pfs.CommitInfo.prototype.clearChildCommitsList = function() {
  return this.setChildCommitsList([]);
};


/**
 * optional google.protobuf.Timestamp started = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pfs.CommitInfo.prototype.getStarted = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pfs.CommitInfo} returns this
*/
proto.pfs.CommitInfo.prototype.setStarted = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.CommitInfo} returns this
 */
proto.pfs.CommitInfo.prototype.clearStarted = function() {
  return this.setStarted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.CommitInfo.prototype.hasStarted = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp finished = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pfs.CommitInfo.prototype.getFinished = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pfs.CommitInfo} returns this
*/
proto.pfs.CommitInfo.prototype.setFinished = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.CommitInfo} returns this
 */
proto.pfs.CommitInfo.prototype.clearFinished = function() {
  return this.setFinished(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.CommitInfo.prototype.hasFinished = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint64 size_bytes = 8;
 * @return {number}
 */
proto.pfs.CommitInfo.prototype.getSizeBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs.CommitInfo} returns this
 */
proto.pfs.CommitInfo.prototype.setSizeBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * repeated CommitProvenance provenance = 9;
 * @return {!Array<!proto.pfs.CommitProvenance>}
 */
proto.pfs.CommitInfo.prototype.getProvenanceList = function() {
  return /** @type{!Array<!proto.pfs.CommitProvenance>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs.CommitProvenance, 9));
};


/**
 * @param {!Array<!proto.pfs.CommitProvenance>} value
 * @return {!proto.pfs.CommitInfo} returns this
*/
proto.pfs.CommitInfo.prototype.setProvenanceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.pfs.CommitProvenance=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs.CommitProvenance}
 */
proto.pfs.CommitInfo.prototype.addProvenance = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.pfs.CommitProvenance, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs.CommitInfo} returns this
 */
proto.pfs.CommitInfo.prototype.clearProvenanceList = function() {
  return this.setProvenanceList([]);
};


/**
 * optional int64 ready_provenance = 10;
 * @return {number}
 */
proto.pfs.CommitInfo.prototype.getReadyProvenance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs.CommitInfo} returns this
 */
proto.pfs.CommitInfo.prototype.setReadyProvenance = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * repeated CommitRange subvenance = 11;
 * @return {!Array<!proto.pfs.CommitRange>}
 */
proto.pfs.CommitInfo.prototype.getSubvenanceList = function() {
  return /** @type{!Array<!proto.pfs.CommitRange>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs.CommitRange, 11));
};


/**
 * @param {!Array<!proto.pfs.CommitRange>} value
 * @return {!proto.pfs.CommitInfo} returns this
*/
proto.pfs.CommitInfo.prototype.setSubvenanceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.pfs.CommitRange=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs.CommitRange}
 */
proto.pfs.CommitInfo.prototype.addSubvenance = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.pfs.CommitRange, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs.CommitInfo} returns this
 */
proto.pfs.CommitInfo.prototype.clearSubvenanceList = function() {
  return this.setSubvenanceList([]);
};


/**
 * optional int64 subvenant_commits_success = 12;
 * @return {number}
 */
proto.pfs.CommitInfo.prototype.getSubvenantCommitsSuccess = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs.CommitInfo} returns this
 */
proto.pfs.CommitInfo.prototype.setSubvenantCommitsSuccess = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int64 subvenant_commits_failure = 13;
 * @return {number}
 */
proto.pfs.CommitInfo.prototype.getSubvenantCommitsFailure = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs.CommitInfo} returns this
 */
proto.pfs.CommitInfo.prototype.setSubvenantCommitsFailure = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int64 subvenant_commits_total = 14;
 * @return {number}
 */
proto.pfs.CommitInfo.prototype.getSubvenantCommitsTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs.CommitInfo} returns this
 */
proto.pfs.CommitInfo.prototype.setSubvenantCommitsTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.Job.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.Job.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.Job} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.Job.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.Job}
 */
proto.pfs.Job.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.Job;
  return proto.pfs.Job.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.Job} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.Job}
 */
proto.pfs.Job.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.Job.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.Job.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.Job} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.Job.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.pfs.Job.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.Job} returns this
 */
proto.pfs.Job.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pfs.StoredJobInfo.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.StoredJobInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.StoredJobInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.StoredJobInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.StoredJobInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    job: (f = msg.getJob()) && proto.pfs.Job.toObject(includeInstance, f),
    origin: (f = msg.getOrigin()) && proto.pfs.CommitOrigin.toObject(includeInstance, f),
    commitsList: jspb.Message.toObjectList(msg.getCommitsList(),
    proto.pfs.Commit.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.StoredJobInfo}
 */
proto.pfs.StoredJobInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.StoredJobInfo;
  return proto.pfs.StoredJobInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.StoredJobInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.StoredJobInfo}
 */
proto.pfs.StoredJobInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.Job;
      reader.readMessage(value,proto.pfs.Job.deserializeBinaryFromReader);
      msg.setJob(value);
      break;
    case 2:
      var value = new proto.pfs.CommitOrigin;
      reader.readMessage(value,proto.pfs.CommitOrigin.deserializeBinaryFromReader);
      msg.setOrigin(value);
      break;
    case 3:
      var value = new proto.pfs.Commit;
      reader.readMessage(value,proto.pfs.Commit.deserializeBinaryFromReader);
      msg.addCommits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.StoredJobInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.StoredJobInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.StoredJobInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.StoredJobInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJob();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.Job.serializeBinaryToWriter
    );
  }
  f = message.getOrigin();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pfs.CommitOrigin.serializeBinaryToWriter
    );
  }
  f = message.getCommitsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.pfs.Commit.serializeBinaryToWriter
    );
  }
};


/**
 * optional Job job = 1;
 * @return {?proto.pfs.Job}
 */
proto.pfs.StoredJobInfo.prototype.getJob = function() {
  return /** @type{?proto.pfs.Job} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Job, 1));
};


/**
 * @param {?proto.pfs.Job|undefined} value
 * @return {!proto.pfs.StoredJobInfo} returns this
*/
proto.pfs.StoredJobInfo.prototype.setJob = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.StoredJobInfo} returns this
 */
proto.pfs.StoredJobInfo.prototype.clearJob = function() {
  return this.setJob(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.StoredJobInfo.prototype.hasJob = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CommitOrigin origin = 2;
 * @return {?proto.pfs.CommitOrigin}
 */
proto.pfs.StoredJobInfo.prototype.getOrigin = function() {
  return /** @type{?proto.pfs.CommitOrigin} */ (
    jspb.Message.getWrapperField(this, proto.pfs.CommitOrigin, 2));
};


/**
 * @param {?proto.pfs.CommitOrigin|undefined} value
 * @return {!proto.pfs.StoredJobInfo} returns this
*/
proto.pfs.StoredJobInfo.prototype.setOrigin = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.StoredJobInfo} returns this
 */
proto.pfs.StoredJobInfo.prototype.clearOrigin = function() {
  return this.setOrigin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.StoredJobInfo.prototype.hasOrigin = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Commit commits = 3;
 * @return {!Array<!proto.pfs.Commit>}
 */
proto.pfs.StoredJobInfo.prototype.getCommitsList = function() {
  return /** @type{!Array<!proto.pfs.Commit>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs.Commit, 3));
};


/**
 * @param {!Array<!proto.pfs.Commit>} value
 * @return {!proto.pfs.StoredJobInfo} returns this
*/
proto.pfs.StoredJobInfo.prototype.setCommitsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.pfs.Commit=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs.Commit}
 */
proto.pfs.StoredJobInfo.prototype.addCommits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.pfs.Commit, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs.StoredJobInfo} returns this
 */
proto.pfs.StoredJobInfo.prototype.clearCommitsList = function() {
  return this.setCommitsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pfs.JobInfo.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.JobInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.JobInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.JobInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.JobInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    job: (f = msg.getJob()) && proto.pfs.Job.toObject(includeInstance, f),
    origin: (f = msg.getOrigin()) && proto.pfs.CommitOrigin.toObject(includeInstance, f),
    commitsList: jspb.Message.toObjectList(msg.getCommitsList(),
    proto.pfs.CommitInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.JobInfo}
 */
proto.pfs.JobInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.JobInfo;
  return proto.pfs.JobInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.JobInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.JobInfo}
 */
proto.pfs.JobInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.Job;
      reader.readMessage(value,proto.pfs.Job.deserializeBinaryFromReader);
      msg.setJob(value);
      break;
    case 2:
      var value = new proto.pfs.CommitOrigin;
      reader.readMessage(value,proto.pfs.CommitOrigin.deserializeBinaryFromReader);
      msg.setOrigin(value);
      break;
    case 3:
      var value = new proto.pfs.CommitInfo;
      reader.readMessage(value,proto.pfs.CommitInfo.deserializeBinaryFromReader);
      msg.addCommits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.JobInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.JobInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.JobInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.JobInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJob();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.Job.serializeBinaryToWriter
    );
  }
  f = message.getOrigin();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pfs.CommitOrigin.serializeBinaryToWriter
    );
  }
  f = message.getCommitsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.pfs.CommitInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional Job job = 1;
 * @return {?proto.pfs.Job}
 */
proto.pfs.JobInfo.prototype.getJob = function() {
  return /** @type{?proto.pfs.Job} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Job, 1));
};


/**
 * @param {?proto.pfs.Job|undefined} value
 * @return {!proto.pfs.JobInfo} returns this
*/
proto.pfs.JobInfo.prototype.setJob = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.JobInfo} returns this
 */
proto.pfs.JobInfo.prototype.clearJob = function() {
  return this.setJob(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.JobInfo.prototype.hasJob = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CommitOrigin origin = 2;
 * @return {?proto.pfs.CommitOrigin}
 */
proto.pfs.JobInfo.prototype.getOrigin = function() {
  return /** @type{?proto.pfs.CommitOrigin} */ (
    jspb.Message.getWrapperField(this, proto.pfs.CommitOrigin, 2));
};


/**
 * @param {?proto.pfs.CommitOrigin|undefined} value
 * @return {!proto.pfs.JobInfo} returns this
*/
proto.pfs.JobInfo.prototype.setOrigin = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.JobInfo} returns this
 */
proto.pfs.JobInfo.prototype.clearOrigin = function() {
  return this.setOrigin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.JobInfo.prototype.hasOrigin = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated CommitInfo commits = 3;
 * @return {!Array<!proto.pfs.CommitInfo>}
 */
proto.pfs.JobInfo.prototype.getCommitsList = function() {
  return /** @type{!Array<!proto.pfs.CommitInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs.CommitInfo, 3));
};


/**
 * @param {!Array<!proto.pfs.CommitInfo>} value
 * @return {!proto.pfs.JobInfo} returns this
*/
proto.pfs.JobInfo.prototype.setCommitsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.pfs.CommitInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs.CommitInfo}
 */
proto.pfs.JobInfo.prototype.addCommits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.pfs.CommitInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs.JobInfo} returns this
 */
proto.pfs.JobInfo.prototype.clearCommitsList = function() {
  return this.setCommitsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.FileInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.FileInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.FileInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.FileInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    file: (f = msg.getFile()) && proto.pfs.File.toObject(includeInstance, f),
    fileType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sizeBytes: jspb.Message.getFieldWithDefault(msg, 3, 0),
    committed: (f = msg.getCommitted()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    hash: msg.getHash_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.FileInfo}
 */
proto.pfs.FileInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.FileInfo;
  return proto.pfs.FileInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.FileInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.FileInfo}
 */
proto.pfs.FileInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.File;
      reader.readMessage(value,proto.pfs.File.deserializeBinaryFromReader);
      msg.setFile(value);
      break;
    case 2:
      var value = /** @type {!proto.pfs.FileType} */ (reader.readEnum());
      msg.setFileType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSizeBytes(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCommitted(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setHash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.FileInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.FileInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.FileInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.FileInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.File.serializeBinaryToWriter
    );
  }
  f = message.getFileType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getSizeBytes();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getCommitted();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getHash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
};


/**
 * optional File file = 1;
 * @return {?proto.pfs.File}
 */
proto.pfs.FileInfo.prototype.getFile = function() {
  return /** @type{?proto.pfs.File} */ (
    jspb.Message.getWrapperField(this, proto.pfs.File, 1));
};


/**
 * @param {?proto.pfs.File|undefined} value
 * @return {!proto.pfs.FileInfo} returns this
*/
proto.pfs.FileInfo.prototype.setFile = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.FileInfo} returns this
 */
proto.pfs.FileInfo.prototype.clearFile = function() {
  return this.setFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.FileInfo.prototype.hasFile = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional FileType file_type = 2;
 * @return {!proto.pfs.FileType}
 */
proto.pfs.FileInfo.prototype.getFileType = function() {
  return /** @type {!proto.pfs.FileType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.pfs.FileType} value
 * @return {!proto.pfs.FileInfo} returns this
 */
proto.pfs.FileInfo.prototype.setFileType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint64 size_bytes = 3;
 * @return {number}
 */
proto.pfs.FileInfo.prototype.getSizeBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs.FileInfo} returns this
 */
proto.pfs.FileInfo.prototype.setSizeBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp committed = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pfs.FileInfo.prototype.getCommitted = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pfs.FileInfo} returns this
*/
proto.pfs.FileInfo.prototype.setCommitted = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.FileInfo} returns this
 */
proto.pfs.FileInfo.prototype.clearCommitted = function() {
  return this.setCommitted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.FileInfo.prototype.hasCommitted = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bytes hash = 5;
 * @return {string}
 */
proto.pfs.FileInfo.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes hash = 5;
 * This is a type-conversion wrapper around `getHash()`
 * @return {string}
 */
proto.pfs.FileInfo.prototype.getHash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getHash()));
};


/**
 * optional bytes hash = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getHash()`
 * @return {!Uint8Array}
 */
proto.pfs.FileInfo.prototype.getHash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getHash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.pfs.FileInfo} returns this
 */
proto.pfs.FileInfo.prototype.setHash = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.CreateRepoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.CreateRepoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.CreateRepoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.CreateRepoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repo: (f = msg.getRepo()) && proto.pfs.Repo.toObject(includeInstance, f),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    update: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.CreateRepoRequest}
 */
proto.pfs.CreateRepoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.CreateRepoRequest;
  return proto.pfs.CreateRepoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.CreateRepoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.CreateRepoRequest}
 */
proto.pfs.CreateRepoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.Repo;
      reader.readMessage(value,proto.pfs.Repo.deserializeBinaryFromReader);
      msg.setRepo(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.CreateRepoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.CreateRepoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.CreateRepoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.CreateRepoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.Repo.serializeBinaryToWriter
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUpdate();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional Repo repo = 1;
 * @return {?proto.pfs.Repo}
 */
proto.pfs.CreateRepoRequest.prototype.getRepo = function() {
  return /** @type{?proto.pfs.Repo} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Repo, 1));
};


/**
 * @param {?proto.pfs.Repo|undefined} value
 * @return {!proto.pfs.CreateRepoRequest} returns this
*/
proto.pfs.CreateRepoRequest.prototype.setRepo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.CreateRepoRequest} returns this
 */
proto.pfs.CreateRepoRequest.prototype.clearRepo = function() {
  return this.setRepo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.CreateRepoRequest.prototype.hasRepo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.pfs.CreateRepoRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.CreateRepoRequest} returns this
 */
proto.pfs.CreateRepoRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool update = 3;
 * @return {boolean}
 */
proto.pfs.CreateRepoRequest.prototype.getUpdate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs.CreateRepoRequest} returns this
 */
proto.pfs.CreateRepoRequest.prototype.setUpdate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.InspectRepoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.InspectRepoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.InspectRepoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.InspectRepoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repo: (f = msg.getRepo()) && proto.pfs.Repo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.InspectRepoRequest}
 */
proto.pfs.InspectRepoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.InspectRepoRequest;
  return proto.pfs.InspectRepoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.InspectRepoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.InspectRepoRequest}
 */
proto.pfs.InspectRepoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.Repo;
      reader.readMessage(value,proto.pfs.Repo.deserializeBinaryFromReader);
      msg.setRepo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.InspectRepoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.InspectRepoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.InspectRepoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.InspectRepoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.Repo.serializeBinaryToWriter
    );
  }
};


/**
 * optional Repo repo = 1;
 * @return {?proto.pfs.Repo}
 */
proto.pfs.InspectRepoRequest.prototype.getRepo = function() {
  return /** @type{?proto.pfs.Repo} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Repo, 1));
};


/**
 * @param {?proto.pfs.Repo|undefined} value
 * @return {!proto.pfs.InspectRepoRequest} returns this
*/
proto.pfs.InspectRepoRequest.prototype.setRepo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.InspectRepoRequest} returns this
 */
proto.pfs.InspectRepoRequest.prototype.clearRepo = function() {
  return this.setRepo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.InspectRepoRequest.prototype.hasRepo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.ListRepoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.ListRepoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.ListRepoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.ListRepoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.ListRepoRequest}
 */
proto.pfs.ListRepoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.ListRepoRequest;
  return proto.pfs.ListRepoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.ListRepoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.ListRepoRequest}
 */
proto.pfs.ListRepoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.ListRepoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.ListRepoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.ListRepoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.ListRepoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.pfs.ListRepoRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.ListRepoRequest} returns this
 */
proto.pfs.ListRepoRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pfs.ListRepoResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.ListRepoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.ListRepoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.ListRepoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.ListRepoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    repoInfoList: jspb.Message.toObjectList(msg.getRepoInfoList(),
    proto.pfs.RepoInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.ListRepoResponse}
 */
proto.pfs.ListRepoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.ListRepoResponse;
  return proto.pfs.ListRepoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.ListRepoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.ListRepoResponse}
 */
proto.pfs.ListRepoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.RepoInfo;
      reader.readMessage(value,proto.pfs.RepoInfo.deserializeBinaryFromReader);
      msg.addRepoInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.ListRepoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.ListRepoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.ListRepoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.ListRepoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepoInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pfs.RepoInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RepoInfo repo_info = 1;
 * @return {!Array<!proto.pfs.RepoInfo>}
 */
proto.pfs.ListRepoResponse.prototype.getRepoInfoList = function() {
  return /** @type{!Array<!proto.pfs.RepoInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs.RepoInfo, 1));
};


/**
 * @param {!Array<!proto.pfs.RepoInfo>} value
 * @return {!proto.pfs.ListRepoResponse} returns this
*/
proto.pfs.ListRepoResponse.prototype.setRepoInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pfs.RepoInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs.RepoInfo}
 */
proto.pfs.ListRepoResponse.prototype.addRepoInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pfs.RepoInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs.ListRepoResponse} returns this
 */
proto.pfs.ListRepoResponse.prototype.clearRepoInfoList = function() {
  return this.setRepoInfoList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.DeleteRepoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.DeleteRepoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.DeleteRepoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.DeleteRepoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repo: (f = msg.getRepo()) && proto.pfs.Repo.toObject(includeInstance, f),
    force: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    all: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.DeleteRepoRequest}
 */
proto.pfs.DeleteRepoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.DeleteRepoRequest;
  return proto.pfs.DeleteRepoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.DeleteRepoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.DeleteRepoRequest}
 */
proto.pfs.DeleteRepoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.Repo;
      reader.readMessage(value,proto.pfs.Repo.deserializeBinaryFromReader);
      msg.setRepo(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForce(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAll(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.DeleteRepoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.DeleteRepoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.DeleteRepoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.DeleteRepoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.Repo.serializeBinaryToWriter
    );
  }
  f = message.getForce();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getAll();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional Repo repo = 1;
 * @return {?proto.pfs.Repo}
 */
proto.pfs.DeleteRepoRequest.prototype.getRepo = function() {
  return /** @type{?proto.pfs.Repo} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Repo, 1));
};


/**
 * @param {?proto.pfs.Repo|undefined} value
 * @return {!proto.pfs.DeleteRepoRequest} returns this
*/
proto.pfs.DeleteRepoRequest.prototype.setRepo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.DeleteRepoRequest} returns this
 */
proto.pfs.DeleteRepoRequest.prototype.clearRepo = function() {
  return this.setRepo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.DeleteRepoRequest.prototype.hasRepo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool force = 2;
 * @return {boolean}
 */
proto.pfs.DeleteRepoRequest.prototype.getForce = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs.DeleteRepoRequest} returns this
 */
proto.pfs.DeleteRepoRequest.prototype.setForce = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool all = 3;
 * @return {boolean}
 */
proto.pfs.DeleteRepoRequest.prototype.getAll = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs.DeleteRepoRequest} returns this
 */
proto.pfs.DeleteRepoRequest.prototype.setAll = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pfs.StartCommitRequest.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.StartCommitRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.StartCommitRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.StartCommitRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.StartCommitRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parent: (f = msg.getParent()) && proto.pfs.Commit.toObject(includeInstance, f),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    branch: (f = msg.getBranch()) && proto.pfs.Branch.toObject(includeInstance, f),
    provenanceList: jspb.Message.toObjectList(msg.getProvenanceList(),
    proto.pfs.CommitProvenance.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.StartCommitRequest}
 */
proto.pfs.StartCommitRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.StartCommitRequest;
  return proto.pfs.StartCommitRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.StartCommitRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.StartCommitRequest}
 */
proto.pfs.StartCommitRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.Commit;
      reader.readMessage(value,proto.pfs.Commit.deserializeBinaryFromReader);
      msg.setParent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = new proto.pfs.Branch;
      reader.readMessage(value,proto.pfs.Branch.deserializeBinaryFromReader);
      msg.setBranch(value);
      break;
    case 4:
      var value = new proto.pfs.CommitProvenance;
      reader.readMessage(value,proto.pfs.CommitProvenance.deserializeBinaryFromReader);
      msg.addProvenance(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.StartCommitRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.StartCommitRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.StartCommitRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.StartCommitRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.Commit.serializeBinaryToWriter
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBranch();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.pfs.Branch.serializeBinaryToWriter
    );
  }
  f = message.getProvenanceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.pfs.CommitProvenance.serializeBinaryToWriter
    );
  }
};


/**
 * optional Commit parent = 1;
 * @return {?proto.pfs.Commit}
 */
proto.pfs.StartCommitRequest.prototype.getParent = function() {
  return /** @type{?proto.pfs.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Commit, 1));
};


/**
 * @param {?proto.pfs.Commit|undefined} value
 * @return {!proto.pfs.StartCommitRequest} returns this
*/
proto.pfs.StartCommitRequest.prototype.setParent = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.StartCommitRequest} returns this
 */
proto.pfs.StartCommitRequest.prototype.clearParent = function() {
  return this.setParent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.StartCommitRequest.prototype.hasParent = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.pfs.StartCommitRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.StartCommitRequest} returns this
 */
proto.pfs.StartCommitRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Branch branch = 3;
 * @return {?proto.pfs.Branch}
 */
proto.pfs.StartCommitRequest.prototype.getBranch = function() {
  return /** @type{?proto.pfs.Branch} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Branch, 3));
};


/**
 * @param {?proto.pfs.Branch|undefined} value
 * @return {!proto.pfs.StartCommitRequest} returns this
*/
proto.pfs.StartCommitRequest.prototype.setBranch = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.StartCommitRequest} returns this
 */
proto.pfs.StartCommitRequest.prototype.clearBranch = function() {
  return this.setBranch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.StartCommitRequest.prototype.hasBranch = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated CommitProvenance provenance = 4;
 * @return {!Array<!proto.pfs.CommitProvenance>}
 */
proto.pfs.StartCommitRequest.prototype.getProvenanceList = function() {
  return /** @type{!Array<!proto.pfs.CommitProvenance>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs.CommitProvenance, 4));
};


/**
 * @param {!Array<!proto.pfs.CommitProvenance>} value
 * @return {!proto.pfs.StartCommitRequest} returns this
*/
proto.pfs.StartCommitRequest.prototype.setProvenanceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.pfs.CommitProvenance=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs.CommitProvenance}
 */
proto.pfs.StartCommitRequest.prototype.addProvenance = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.pfs.CommitProvenance, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs.StartCommitRequest} returns this
 */
proto.pfs.StartCommitRequest.prototype.clearProvenanceList = function() {
  return this.setProvenanceList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.FinishCommitRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.FinishCommitRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.FinishCommitRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.FinishCommitRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    commit: (f = msg.getCommit()) && proto.pfs.Commit.toObject(includeInstance, f),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sizeBytes: jspb.Message.getFieldWithDefault(msg, 3, 0),
    empty: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.FinishCommitRequest}
 */
proto.pfs.FinishCommitRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.FinishCommitRequest;
  return proto.pfs.FinishCommitRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.FinishCommitRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.FinishCommitRequest}
 */
proto.pfs.FinishCommitRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.Commit;
      reader.readMessage(value,proto.pfs.Commit.deserializeBinaryFromReader);
      msg.setCommit(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSizeBytes(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEmpty(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.FinishCommitRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.FinishCommitRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.FinishCommitRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.FinishCommitRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.Commit.serializeBinaryToWriter
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSizeBytes();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getEmpty();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional Commit commit = 1;
 * @return {?proto.pfs.Commit}
 */
proto.pfs.FinishCommitRequest.prototype.getCommit = function() {
  return /** @type{?proto.pfs.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Commit, 1));
};


/**
 * @param {?proto.pfs.Commit|undefined} value
 * @return {!proto.pfs.FinishCommitRequest} returns this
*/
proto.pfs.FinishCommitRequest.prototype.setCommit = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.FinishCommitRequest} returns this
 */
proto.pfs.FinishCommitRequest.prototype.clearCommit = function() {
  return this.setCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.FinishCommitRequest.prototype.hasCommit = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.pfs.FinishCommitRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.FinishCommitRequest} returns this
 */
proto.pfs.FinishCommitRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 size_bytes = 3;
 * @return {number}
 */
proto.pfs.FinishCommitRequest.prototype.getSizeBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs.FinishCommitRequest} returns this
 */
proto.pfs.FinishCommitRequest.prototype.setSizeBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool empty = 4;
 * @return {boolean}
 */
proto.pfs.FinishCommitRequest.prototype.getEmpty = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs.FinishCommitRequest} returns this
 */
proto.pfs.FinishCommitRequest.prototype.setEmpty = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.InspectCommitRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.InspectCommitRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.InspectCommitRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.InspectCommitRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    commit: (f = msg.getCommit()) && proto.pfs.Commit.toObject(includeInstance, f),
    blockState: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.InspectCommitRequest}
 */
proto.pfs.InspectCommitRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.InspectCommitRequest;
  return proto.pfs.InspectCommitRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.InspectCommitRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.InspectCommitRequest}
 */
proto.pfs.InspectCommitRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.Commit;
      reader.readMessage(value,proto.pfs.Commit.deserializeBinaryFromReader);
      msg.setCommit(value);
      break;
    case 2:
      var value = /** @type {!proto.pfs.CommitState} */ (reader.readEnum());
      msg.setBlockState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.InspectCommitRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.InspectCommitRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.InspectCommitRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.InspectCommitRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.Commit.serializeBinaryToWriter
    );
  }
  f = message.getBlockState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional Commit commit = 1;
 * @return {?proto.pfs.Commit}
 */
proto.pfs.InspectCommitRequest.prototype.getCommit = function() {
  return /** @type{?proto.pfs.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Commit, 1));
};


/**
 * @param {?proto.pfs.Commit|undefined} value
 * @return {!proto.pfs.InspectCommitRequest} returns this
*/
proto.pfs.InspectCommitRequest.prototype.setCommit = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.InspectCommitRequest} returns this
 */
proto.pfs.InspectCommitRequest.prototype.clearCommit = function() {
  return this.setCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.InspectCommitRequest.prototype.hasCommit = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CommitState block_state = 2;
 * @return {!proto.pfs.CommitState}
 */
proto.pfs.InspectCommitRequest.prototype.getBlockState = function() {
  return /** @type {!proto.pfs.CommitState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.pfs.CommitState} value
 * @return {!proto.pfs.InspectCommitRequest} returns this
 */
proto.pfs.InspectCommitRequest.prototype.setBlockState = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.ListCommitRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.ListCommitRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.ListCommitRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.ListCommitRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repo: (f = msg.getRepo()) && proto.pfs.Repo.toObject(includeInstance, f),
    from: (f = msg.getFrom()) && proto.pfs.Commit.toObject(includeInstance, f),
    to: (f = msg.getTo()) && proto.pfs.Commit.toObject(includeInstance, f),
    number: jspb.Message.getFieldWithDefault(msg, 4, 0),
    reverse: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.ListCommitRequest}
 */
proto.pfs.ListCommitRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.ListCommitRequest;
  return proto.pfs.ListCommitRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.ListCommitRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.ListCommitRequest}
 */
proto.pfs.ListCommitRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.Repo;
      reader.readMessage(value,proto.pfs.Repo.deserializeBinaryFromReader);
      msg.setRepo(value);
      break;
    case 2:
      var value = new proto.pfs.Commit;
      reader.readMessage(value,proto.pfs.Commit.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 3:
      var value = new proto.pfs.Commit;
      reader.readMessage(value,proto.pfs.Commit.deserializeBinaryFromReader);
      msg.setTo(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNumber(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReverse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.ListCommitRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.ListCommitRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.ListCommitRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.ListCommitRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.Repo.serializeBinaryToWriter
    );
  }
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pfs.Commit.serializeBinaryToWriter
    );
  }
  f = message.getTo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.pfs.Commit.serializeBinaryToWriter
    );
  }
  f = message.getNumber();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getReverse();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional Repo repo = 1;
 * @return {?proto.pfs.Repo}
 */
proto.pfs.ListCommitRequest.prototype.getRepo = function() {
  return /** @type{?proto.pfs.Repo} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Repo, 1));
};


/**
 * @param {?proto.pfs.Repo|undefined} value
 * @return {!proto.pfs.ListCommitRequest} returns this
*/
proto.pfs.ListCommitRequest.prototype.setRepo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.ListCommitRequest} returns this
 */
proto.pfs.ListCommitRequest.prototype.clearRepo = function() {
  return this.setRepo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.ListCommitRequest.prototype.hasRepo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Commit from = 2;
 * @return {?proto.pfs.Commit}
 */
proto.pfs.ListCommitRequest.prototype.getFrom = function() {
  return /** @type{?proto.pfs.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Commit, 2));
};


/**
 * @param {?proto.pfs.Commit|undefined} value
 * @return {!proto.pfs.ListCommitRequest} returns this
*/
proto.pfs.ListCommitRequest.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.ListCommitRequest} returns this
 */
proto.pfs.ListCommitRequest.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.ListCommitRequest.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Commit to = 3;
 * @return {?proto.pfs.Commit}
 */
proto.pfs.ListCommitRequest.prototype.getTo = function() {
  return /** @type{?proto.pfs.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Commit, 3));
};


/**
 * @param {?proto.pfs.Commit|undefined} value
 * @return {!proto.pfs.ListCommitRequest} returns this
*/
proto.pfs.ListCommitRequest.prototype.setTo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.ListCommitRequest} returns this
 */
proto.pfs.ListCommitRequest.prototype.clearTo = function() {
  return this.setTo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.ListCommitRequest.prototype.hasTo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 number = 4;
 * @return {number}
 */
proto.pfs.ListCommitRequest.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs.ListCommitRequest} returns this
 */
proto.pfs.ListCommitRequest.prototype.setNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool reverse = 5;
 * @return {boolean}
 */
proto.pfs.ListCommitRequest.prototype.getReverse = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs.ListCommitRequest} returns this
 */
proto.pfs.ListCommitRequest.prototype.setReverse = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pfs.CommitInfos.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.CommitInfos.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.CommitInfos.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.CommitInfos} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.CommitInfos.toObject = function(includeInstance, msg) {
  var f, obj = {
    commitInfoList: jspb.Message.toObjectList(msg.getCommitInfoList(),
    proto.pfs.CommitInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.CommitInfos}
 */
proto.pfs.CommitInfos.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.CommitInfos;
  return proto.pfs.CommitInfos.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.CommitInfos} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.CommitInfos}
 */
proto.pfs.CommitInfos.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.CommitInfo;
      reader.readMessage(value,proto.pfs.CommitInfo.deserializeBinaryFromReader);
      msg.addCommitInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.CommitInfos.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.CommitInfos.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.CommitInfos} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.CommitInfos.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommitInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pfs.CommitInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CommitInfo commit_info = 1;
 * @return {!Array<!proto.pfs.CommitInfo>}
 */
proto.pfs.CommitInfos.prototype.getCommitInfoList = function() {
  return /** @type{!Array<!proto.pfs.CommitInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs.CommitInfo, 1));
};


/**
 * @param {!Array<!proto.pfs.CommitInfo>} value
 * @return {!proto.pfs.CommitInfos} returns this
*/
proto.pfs.CommitInfos.prototype.setCommitInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pfs.CommitInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs.CommitInfo}
 */
proto.pfs.CommitInfos.prototype.addCommitInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pfs.CommitInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs.CommitInfos} returns this
 */
proto.pfs.CommitInfos.prototype.clearCommitInfoList = function() {
  return this.setCommitInfoList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.SquashCommitRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.SquashCommitRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.SquashCommitRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.SquashCommitRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    commit: (f = msg.getCommit()) && proto.pfs.Commit.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.SquashCommitRequest}
 */
proto.pfs.SquashCommitRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.SquashCommitRequest;
  return proto.pfs.SquashCommitRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.SquashCommitRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.SquashCommitRequest}
 */
proto.pfs.SquashCommitRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.Commit;
      reader.readMessage(value,proto.pfs.Commit.deserializeBinaryFromReader);
      msg.setCommit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.SquashCommitRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.SquashCommitRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.SquashCommitRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.SquashCommitRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.Commit.serializeBinaryToWriter
    );
  }
};


/**
 * optional Commit commit = 1;
 * @return {?proto.pfs.Commit}
 */
proto.pfs.SquashCommitRequest.prototype.getCommit = function() {
  return /** @type{?proto.pfs.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Commit, 1));
};


/**
 * @param {?proto.pfs.Commit|undefined} value
 * @return {!proto.pfs.SquashCommitRequest} returns this
*/
proto.pfs.SquashCommitRequest.prototype.setCommit = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.SquashCommitRequest} returns this
 */
proto.pfs.SquashCommitRequest.prototype.clearCommit = function() {
  return this.setCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.SquashCommitRequest.prototype.hasCommit = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pfs.FlushCommitRequest.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.FlushCommitRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.FlushCommitRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.FlushCommitRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.FlushCommitRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    commitsList: jspb.Message.toObjectList(msg.getCommitsList(),
    proto.pfs.Commit.toObject, includeInstance),
    toReposList: jspb.Message.toObjectList(msg.getToReposList(),
    proto.pfs.Repo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.FlushCommitRequest}
 */
proto.pfs.FlushCommitRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.FlushCommitRequest;
  return proto.pfs.FlushCommitRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.FlushCommitRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.FlushCommitRequest}
 */
proto.pfs.FlushCommitRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.Commit;
      reader.readMessage(value,proto.pfs.Commit.deserializeBinaryFromReader);
      msg.addCommits(value);
      break;
    case 2:
      var value = new proto.pfs.Repo;
      reader.readMessage(value,proto.pfs.Repo.deserializeBinaryFromReader);
      msg.addToRepos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.FlushCommitRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.FlushCommitRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.FlushCommitRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.FlushCommitRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommitsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pfs.Commit.serializeBinaryToWriter
    );
  }
  f = message.getToReposList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.pfs.Repo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Commit commits = 1;
 * @return {!Array<!proto.pfs.Commit>}
 */
proto.pfs.FlushCommitRequest.prototype.getCommitsList = function() {
  return /** @type{!Array<!proto.pfs.Commit>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs.Commit, 1));
};


/**
 * @param {!Array<!proto.pfs.Commit>} value
 * @return {!proto.pfs.FlushCommitRequest} returns this
*/
proto.pfs.FlushCommitRequest.prototype.setCommitsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pfs.Commit=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs.Commit}
 */
proto.pfs.FlushCommitRequest.prototype.addCommits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pfs.Commit, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs.FlushCommitRequest} returns this
 */
proto.pfs.FlushCommitRequest.prototype.clearCommitsList = function() {
  return this.setCommitsList([]);
};


/**
 * repeated Repo to_repos = 2;
 * @return {!Array<!proto.pfs.Repo>}
 */
proto.pfs.FlushCommitRequest.prototype.getToReposList = function() {
  return /** @type{!Array<!proto.pfs.Repo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs.Repo, 2));
};


/**
 * @param {!Array<!proto.pfs.Repo>} value
 * @return {!proto.pfs.FlushCommitRequest} returns this
*/
proto.pfs.FlushCommitRequest.prototype.setToReposList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.pfs.Repo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs.Repo}
 */
proto.pfs.FlushCommitRequest.prototype.addToRepos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.pfs.Repo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs.FlushCommitRequest} returns this
 */
proto.pfs.FlushCommitRequest.prototype.clearToReposList = function() {
  return this.setToReposList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.SubscribeCommitRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.SubscribeCommitRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.SubscribeCommitRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.SubscribeCommitRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repo: (f = msg.getRepo()) && proto.pfs.Repo.toObject(includeInstance, f),
    branch: jspb.Message.getFieldWithDefault(msg, 2, ""),
    prov: (f = msg.getProv()) && proto.pfs.CommitProvenance.toObject(includeInstance, f),
    from: (f = msg.getFrom()) && proto.pfs.Commit.toObject(includeInstance, f),
    state: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.SubscribeCommitRequest}
 */
proto.pfs.SubscribeCommitRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.SubscribeCommitRequest;
  return proto.pfs.SubscribeCommitRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.SubscribeCommitRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.SubscribeCommitRequest}
 */
proto.pfs.SubscribeCommitRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.Repo;
      reader.readMessage(value,proto.pfs.Repo.deserializeBinaryFromReader);
      msg.setRepo(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBranch(value);
      break;
    case 3:
      var value = new proto.pfs.CommitProvenance;
      reader.readMessage(value,proto.pfs.CommitProvenance.deserializeBinaryFromReader);
      msg.setProv(value);
      break;
    case 4:
      var value = new proto.pfs.Commit;
      reader.readMessage(value,proto.pfs.Commit.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 5:
      var value = /** @type {!proto.pfs.CommitState} */ (reader.readEnum());
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.SubscribeCommitRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.SubscribeCommitRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.SubscribeCommitRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.SubscribeCommitRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.Repo.serializeBinaryToWriter
    );
  }
  f = message.getBranch();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProv();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.pfs.CommitProvenance.serializeBinaryToWriter
    );
  }
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.pfs.Commit.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * optional Repo repo = 1;
 * @return {?proto.pfs.Repo}
 */
proto.pfs.SubscribeCommitRequest.prototype.getRepo = function() {
  return /** @type{?proto.pfs.Repo} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Repo, 1));
};


/**
 * @param {?proto.pfs.Repo|undefined} value
 * @return {!proto.pfs.SubscribeCommitRequest} returns this
*/
proto.pfs.SubscribeCommitRequest.prototype.setRepo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.SubscribeCommitRequest} returns this
 */
proto.pfs.SubscribeCommitRequest.prototype.clearRepo = function() {
  return this.setRepo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.SubscribeCommitRequest.prototype.hasRepo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string branch = 2;
 * @return {string}
 */
proto.pfs.SubscribeCommitRequest.prototype.getBranch = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.SubscribeCommitRequest} returns this
 */
proto.pfs.SubscribeCommitRequest.prototype.setBranch = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional CommitProvenance prov = 3;
 * @return {?proto.pfs.CommitProvenance}
 */
proto.pfs.SubscribeCommitRequest.prototype.getProv = function() {
  return /** @type{?proto.pfs.CommitProvenance} */ (
    jspb.Message.getWrapperField(this, proto.pfs.CommitProvenance, 3));
};


/**
 * @param {?proto.pfs.CommitProvenance|undefined} value
 * @return {!proto.pfs.SubscribeCommitRequest} returns this
*/
proto.pfs.SubscribeCommitRequest.prototype.setProv = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.SubscribeCommitRequest} returns this
 */
proto.pfs.SubscribeCommitRequest.prototype.clearProv = function() {
  return this.setProv(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.SubscribeCommitRequest.prototype.hasProv = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Commit from = 4;
 * @return {?proto.pfs.Commit}
 */
proto.pfs.SubscribeCommitRequest.prototype.getFrom = function() {
  return /** @type{?proto.pfs.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Commit, 4));
};


/**
 * @param {?proto.pfs.Commit|undefined} value
 * @return {!proto.pfs.SubscribeCommitRequest} returns this
*/
proto.pfs.SubscribeCommitRequest.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.SubscribeCommitRequest} returns this
 */
proto.pfs.SubscribeCommitRequest.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.SubscribeCommitRequest.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CommitState state = 5;
 * @return {!proto.pfs.CommitState}
 */
proto.pfs.SubscribeCommitRequest.prototype.getState = function() {
  return /** @type {!proto.pfs.CommitState} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.pfs.CommitState} value
 * @return {!proto.pfs.SubscribeCommitRequest} returns this
 */
proto.pfs.SubscribeCommitRequest.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.ClearCommitRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.ClearCommitRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.ClearCommitRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.ClearCommitRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    commit: (f = msg.getCommit()) && proto.pfs.Commit.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.ClearCommitRequest}
 */
proto.pfs.ClearCommitRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.ClearCommitRequest;
  return proto.pfs.ClearCommitRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.ClearCommitRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.ClearCommitRequest}
 */
proto.pfs.ClearCommitRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.Commit;
      reader.readMessage(value,proto.pfs.Commit.deserializeBinaryFromReader);
      msg.setCommit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.ClearCommitRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.ClearCommitRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.ClearCommitRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.ClearCommitRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.Commit.serializeBinaryToWriter
    );
  }
};


/**
 * optional Commit commit = 1;
 * @return {?proto.pfs.Commit}
 */
proto.pfs.ClearCommitRequest.prototype.getCommit = function() {
  return /** @type{?proto.pfs.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Commit, 1));
};


/**
 * @param {?proto.pfs.Commit|undefined} value
 * @return {!proto.pfs.ClearCommitRequest} returns this
*/
proto.pfs.ClearCommitRequest.prototype.setCommit = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.ClearCommitRequest} returns this
 */
proto.pfs.ClearCommitRequest.prototype.clearCommit = function() {
  return this.setCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.ClearCommitRequest.prototype.hasCommit = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pfs.CreateBranchRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.CreateBranchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.CreateBranchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.CreateBranchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.CreateBranchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    head: (f = msg.getHead()) && proto.pfs.Commit.toObject(includeInstance, f),
    branch: (f = msg.getBranch()) && proto.pfs.Branch.toObject(includeInstance, f),
    provenanceList: jspb.Message.toObjectList(msg.getProvenanceList(),
    proto.pfs.Branch.toObject, includeInstance),
    trigger: (f = msg.getTrigger()) && proto.pfs.Trigger.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.CreateBranchRequest}
 */
proto.pfs.CreateBranchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.CreateBranchRequest;
  return proto.pfs.CreateBranchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.CreateBranchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.CreateBranchRequest}
 */
proto.pfs.CreateBranchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.Commit;
      reader.readMessage(value,proto.pfs.Commit.deserializeBinaryFromReader);
      msg.setHead(value);
      break;
    case 2:
      var value = new proto.pfs.Branch;
      reader.readMessage(value,proto.pfs.Branch.deserializeBinaryFromReader);
      msg.setBranch(value);
      break;
    case 3:
      var value = new proto.pfs.Branch;
      reader.readMessage(value,proto.pfs.Branch.deserializeBinaryFromReader);
      msg.addProvenance(value);
      break;
    case 4:
      var value = new proto.pfs.Trigger;
      reader.readMessage(value,proto.pfs.Trigger.deserializeBinaryFromReader);
      msg.setTrigger(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.CreateBranchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.CreateBranchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.CreateBranchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.CreateBranchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHead();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.Commit.serializeBinaryToWriter
    );
  }
  f = message.getBranch();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pfs.Branch.serializeBinaryToWriter
    );
  }
  f = message.getProvenanceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.pfs.Branch.serializeBinaryToWriter
    );
  }
  f = message.getTrigger();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.pfs.Trigger.serializeBinaryToWriter
    );
  }
};


/**
 * optional Commit head = 1;
 * @return {?proto.pfs.Commit}
 */
proto.pfs.CreateBranchRequest.prototype.getHead = function() {
  return /** @type{?proto.pfs.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Commit, 1));
};


/**
 * @param {?proto.pfs.Commit|undefined} value
 * @return {!proto.pfs.CreateBranchRequest} returns this
*/
proto.pfs.CreateBranchRequest.prototype.setHead = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.CreateBranchRequest} returns this
 */
proto.pfs.CreateBranchRequest.prototype.clearHead = function() {
  return this.setHead(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.CreateBranchRequest.prototype.hasHead = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Branch branch = 2;
 * @return {?proto.pfs.Branch}
 */
proto.pfs.CreateBranchRequest.prototype.getBranch = function() {
  return /** @type{?proto.pfs.Branch} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Branch, 2));
};


/**
 * @param {?proto.pfs.Branch|undefined} value
 * @return {!proto.pfs.CreateBranchRequest} returns this
*/
proto.pfs.CreateBranchRequest.prototype.setBranch = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.CreateBranchRequest} returns this
 */
proto.pfs.CreateBranchRequest.prototype.clearBranch = function() {
  return this.setBranch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.CreateBranchRequest.prototype.hasBranch = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Branch provenance = 3;
 * @return {!Array<!proto.pfs.Branch>}
 */
proto.pfs.CreateBranchRequest.prototype.getProvenanceList = function() {
  return /** @type{!Array<!proto.pfs.Branch>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pfs.Branch, 3));
};


/**
 * @param {!Array<!proto.pfs.Branch>} value
 * @return {!proto.pfs.CreateBranchRequest} returns this
*/
proto.pfs.CreateBranchRequest.prototype.setProvenanceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.pfs.Branch=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pfs.Branch}
 */
proto.pfs.CreateBranchRequest.prototype.addProvenance = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.pfs.Branch, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pfs.CreateBranchRequest} returns this
 */
proto.pfs.CreateBranchRequest.prototype.clearProvenanceList = function() {
  return this.setProvenanceList([]);
};


/**
 * optional Trigger trigger = 4;
 * @return {?proto.pfs.Trigger}
 */
proto.pfs.CreateBranchRequest.prototype.getTrigger = function() {
  return /** @type{?proto.pfs.Trigger} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Trigger, 4));
};


/**
 * @param {?proto.pfs.Trigger|undefined} value
 * @return {!proto.pfs.CreateBranchRequest} returns this
*/
proto.pfs.CreateBranchRequest.prototype.setTrigger = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.CreateBranchRequest} returns this
 */
proto.pfs.CreateBranchRequest.prototype.clearTrigger = function() {
  return this.setTrigger(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.CreateBranchRequest.prototype.hasTrigger = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.InspectBranchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.InspectBranchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.InspectBranchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.InspectBranchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    branch: (f = msg.getBranch()) && proto.pfs.Branch.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.InspectBranchRequest}
 */
proto.pfs.InspectBranchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.InspectBranchRequest;
  return proto.pfs.InspectBranchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.InspectBranchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.InspectBranchRequest}
 */
proto.pfs.InspectBranchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.Branch;
      reader.readMessage(value,proto.pfs.Branch.deserializeBinaryFromReader);
      msg.setBranch(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.InspectBranchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.InspectBranchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.InspectBranchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.InspectBranchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBranch();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.Branch.serializeBinaryToWriter
    );
  }
};


/**
 * optional Branch branch = 1;
 * @return {?proto.pfs.Branch}
 */
proto.pfs.InspectBranchRequest.prototype.getBranch = function() {
  return /** @type{?proto.pfs.Branch} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Branch, 1));
};


/**
 * @param {?proto.pfs.Branch|undefined} value
 * @return {!proto.pfs.InspectBranchRequest} returns this
*/
proto.pfs.InspectBranchRequest.prototype.setBranch = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.InspectBranchRequest} returns this
 */
proto.pfs.InspectBranchRequest.prototype.clearBranch = function() {
  return this.setBranch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.InspectBranchRequest.prototype.hasBranch = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.ListBranchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.ListBranchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.ListBranchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.ListBranchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    repo: (f = msg.getRepo()) && proto.pfs.Repo.toObject(includeInstance, f),
    reverse: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.ListBranchRequest}
 */
proto.pfs.ListBranchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.ListBranchRequest;
  return proto.pfs.ListBranchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.ListBranchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.ListBranchRequest}
 */
proto.pfs.ListBranchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.Repo;
      reader.readMessage(value,proto.pfs.Repo.deserializeBinaryFromReader);
      msg.setRepo(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReverse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.ListBranchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.ListBranchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.ListBranchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.ListBranchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRepo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.Repo.serializeBinaryToWriter
    );
  }
  f = message.getReverse();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional Repo repo = 1;
 * @return {?proto.pfs.Repo}
 */
proto.pfs.ListBranchRequest.prototype.getRepo = function() {
  return /** @type{?proto.pfs.Repo} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Repo, 1));
};


/**
 * @param {?proto.pfs.Repo|undefined} value
 * @return {!proto.pfs.ListBranchRequest} returns this
*/
proto.pfs.ListBranchRequest.prototype.setRepo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.ListBranchRequest} returns this
 */
proto.pfs.ListBranchRequest.prototype.clearRepo = function() {
  return this.setRepo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.ListBranchRequest.prototype.hasRepo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool reverse = 2;
 * @return {boolean}
 */
proto.pfs.ListBranchRequest.prototype.getReverse = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs.ListBranchRequest} returns this
 */
proto.pfs.ListBranchRequest.prototype.setReverse = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.DeleteBranchRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.DeleteBranchRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.DeleteBranchRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.DeleteBranchRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    branch: (f = msg.getBranch()) && proto.pfs.Branch.toObject(includeInstance, f),
    force: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.DeleteBranchRequest}
 */
proto.pfs.DeleteBranchRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.DeleteBranchRequest;
  return proto.pfs.DeleteBranchRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.DeleteBranchRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.DeleteBranchRequest}
 */
proto.pfs.DeleteBranchRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.Branch;
      reader.readMessage(value,proto.pfs.Branch.deserializeBinaryFromReader);
      msg.setBranch(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForce(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.DeleteBranchRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.DeleteBranchRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.DeleteBranchRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.DeleteBranchRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBranch();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.Branch.serializeBinaryToWriter
    );
  }
  f = message.getForce();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional Branch branch = 1;
 * @return {?proto.pfs.Branch}
 */
proto.pfs.DeleteBranchRequest.prototype.getBranch = function() {
  return /** @type{?proto.pfs.Branch} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Branch, 1));
};


/**
 * @param {?proto.pfs.Branch|undefined} value
 * @return {!proto.pfs.DeleteBranchRequest} returns this
*/
proto.pfs.DeleteBranchRequest.prototype.setBranch = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.DeleteBranchRequest} returns this
 */
proto.pfs.DeleteBranchRequest.prototype.clearBranch = function() {
  return this.setBranch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.DeleteBranchRequest.prototype.hasBranch = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool force = 2;
 * @return {boolean}
 */
proto.pfs.DeleteBranchRequest.prototype.getForce = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs.DeleteBranchRequest} returns this
 */
proto.pfs.DeleteBranchRequest.prototype.setForce = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.pfs.PutFile.oneofGroups_ = [[3,4,5]];

/**
 * @enum {number}
 */
proto.pfs.PutFile.SourceCase = {
  SOURCE_NOT_SET: 0,
  RAW_FILE_SOURCE: 3,
  TAR_FILE_SOURCE: 4,
  URL_FILE_SOURCE: 5
};

/**
 * @return {proto.pfs.PutFile.SourceCase}
 */
proto.pfs.PutFile.prototype.getSourceCase = function() {
  return /** @type {proto.pfs.PutFile.SourceCase} */(jspb.Message.computeOneofCase(this, proto.pfs.PutFile.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.PutFile.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.PutFile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.PutFile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.PutFile.toObject = function(includeInstance, msg) {
  var f, obj = {
    append: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    tag: jspb.Message.getFieldWithDefault(msg, 2, ""),
    rawFileSource: (f = msg.getRawFileSource()) && proto.pfs.RawFileSource.toObject(includeInstance, f),
    tarFileSource: (f = msg.getTarFileSource()) && proto.pfs.TarFileSource.toObject(includeInstance, f),
    urlFileSource: (f = msg.getUrlFileSource()) && proto.pfs.URLFileSource.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.PutFile}
 */
proto.pfs.PutFile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.PutFile;
  return proto.pfs.PutFile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.PutFile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.PutFile}
 */
proto.pfs.PutFile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAppend(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTag(value);
      break;
    case 3:
      var value = new proto.pfs.RawFileSource;
      reader.readMessage(value,proto.pfs.RawFileSource.deserializeBinaryFromReader);
      msg.setRawFileSource(value);
      break;
    case 4:
      var value = new proto.pfs.TarFileSource;
      reader.readMessage(value,proto.pfs.TarFileSource.deserializeBinaryFromReader);
      msg.setTarFileSource(value);
      break;
    case 5:
      var value = new proto.pfs.URLFileSource;
      reader.readMessage(value,proto.pfs.URLFileSource.deserializeBinaryFromReader);
      msg.setUrlFileSource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.PutFile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.PutFile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.PutFile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.PutFile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppend();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getTag();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRawFileSource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.pfs.RawFileSource.serializeBinaryToWriter
    );
  }
  f = message.getTarFileSource();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.pfs.TarFileSource.serializeBinaryToWriter
    );
  }
  f = message.getUrlFileSource();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.pfs.URLFileSource.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool append = 1;
 * @return {boolean}
 */
proto.pfs.PutFile.prototype.getAppend = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs.PutFile} returns this
 */
proto.pfs.PutFile.prototype.setAppend = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string tag = 2;
 * @return {string}
 */
proto.pfs.PutFile.prototype.getTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.PutFile} returns this
 */
proto.pfs.PutFile.prototype.setTag = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional RawFileSource raw_file_source = 3;
 * @return {?proto.pfs.RawFileSource}
 */
proto.pfs.PutFile.prototype.getRawFileSource = function() {
  return /** @type{?proto.pfs.RawFileSource} */ (
    jspb.Message.getWrapperField(this, proto.pfs.RawFileSource, 3));
};


/**
 * @param {?proto.pfs.RawFileSource|undefined} value
 * @return {!proto.pfs.PutFile} returns this
*/
proto.pfs.PutFile.prototype.setRawFileSource = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.pfs.PutFile.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.PutFile} returns this
 */
proto.pfs.PutFile.prototype.clearRawFileSource = function() {
  return this.setRawFileSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.PutFile.prototype.hasRawFileSource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional TarFileSource tar_file_source = 4;
 * @return {?proto.pfs.TarFileSource}
 */
proto.pfs.PutFile.prototype.getTarFileSource = function() {
  return /** @type{?proto.pfs.TarFileSource} */ (
    jspb.Message.getWrapperField(this, proto.pfs.TarFileSource, 4));
};


/**
 * @param {?proto.pfs.TarFileSource|undefined} value
 * @return {!proto.pfs.PutFile} returns this
*/
proto.pfs.PutFile.prototype.setTarFileSource = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.pfs.PutFile.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.PutFile} returns this
 */
proto.pfs.PutFile.prototype.clearTarFileSource = function() {
  return this.setTarFileSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.PutFile.prototype.hasTarFileSource = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional URLFileSource url_file_source = 5;
 * @return {?proto.pfs.URLFileSource}
 */
proto.pfs.PutFile.prototype.getUrlFileSource = function() {
  return /** @type{?proto.pfs.URLFileSource} */ (
    jspb.Message.getWrapperField(this, proto.pfs.URLFileSource, 5));
};


/**
 * @param {?proto.pfs.URLFileSource|undefined} value
 * @return {!proto.pfs.PutFile} returns this
*/
proto.pfs.PutFile.prototype.setUrlFileSource = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.pfs.PutFile.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.PutFile} returns this
 */
proto.pfs.PutFile.prototype.clearUrlFileSource = function() {
  return this.setUrlFileSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.PutFile.prototype.hasUrlFileSource = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.RawFileSource.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.RawFileSource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.RawFileSource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.RawFileSource.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    data: msg.getData_asB64(),
    eof: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.RawFileSource}
 */
proto.pfs.RawFileSource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.RawFileSource;
  return proto.pfs.RawFileSource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.RawFileSource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.RawFileSource}
 */
proto.pfs.RawFileSource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEof(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.RawFileSource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.RawFileSource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.RawFileSource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.RawFileSource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getEof();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string path = 1;
 * @return {string}
 */
proto.pfs.RawFileSource.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.RawFileSource} returns this
 */
proto.pfs.RawFileSource.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes data = 2;
 * @return {string}
 */
proto.pfs.RawFileSource.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.pfs.RawFileSource.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.pfs.RawFileSource.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.pfs.RawFileSource} returns this
 */
proto.pfs.RawFileSource.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bool EOF = 3;
 * @return {boolean}
 */
proto.pfs.RawFileSource.prototype.getEof = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs.RawFileSource} returns this
 */
proto.pfs.RawFileSource.prototype.setEof = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.TarFileSource.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.TarFileSource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.TarFileSource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.TarFileSource.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.TarFileSource}
 */
proto.pfs.TarFileSource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.TarFileSource;
  return proto.pfs.TarFileSource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.TarFileSource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.TarFileSource}
 */
proto.pfs.TarFileSource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.TarFileSource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.TarFileSource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.TarFileSource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.TarFileSource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes data = 1;
 * @return {string}
 */
proto.pfs.TarFileSource.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.pfs.TarFileSource.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.pfs.TarFileSource.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.pfs.TarFileSource} returns this
 */
proto.pfs.TarFileSource.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.URLFileSource.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.URLFileSource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.URLFileSource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.URLFileSource.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    url: jspb.Message.getFieldWithDefault(msg, 2, ""),
    recursive: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.URLFileSource}
 */
proto.pfs.URLFileSource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.URLFileSource;
  return proto.pfs.URLFileSource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.URLFileSource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.URLFileSource}
 */
proto.pfs.URLFileSource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRecursive(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.URLFileSource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.URLFileSource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.URLFileSource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.URLFileSource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRecursive();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string path = 1;
 * @return {string}
 */
proto.pfs.URLFileSource.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.URLFileSource} returns this
 */
proto.pfs.URLFileSource.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string URL = 2;
 * @return {string}
 */
proto.pfs.URLFileSource.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.URLFileSource} returns this
 */
proto.pfs.URLFileSource.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool recursive = 3;
 * @return {boolean}
 */
proto.pfs.URLFileSource.prototype.getRecursive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs.URLFileSource} returns this
 */
proto.pfs.URLFileSource.prototype.setRecursive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.DeleteFile.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.DeleteFile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.DeleteFile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.DeleteFile.toObject = function(includeInstance, msg) {
  var f, obj = {
    file: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tag: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.DeleteFile}
 */
proto.pfs.DeleteFile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.DeleteFile;
  return proto.pfs.DeleteFile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.DeleteFile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.DeleteFile}
 */
proto.pfs.DeleteFile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFile(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTag(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.DeleteFile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.DeleteFile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.DeleteFile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.DeleteFile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFile();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTag();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string file = 1;
 * @return {string}
 */
proto.pfs.DeleteFile.prototype.getFile = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.DeleteFile} returns this
 */
proto.pfs.DeleteFile.prototype.setFile = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string tag = 2;
 * @return {string}
 */
proto.pfs.DeleteFile.prototype.getTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.DeleteFile} returns this
 */
proto.pfs.DeleteFile.prototype.setTag = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.CopyFile.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.CopyFile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.CopyFile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.CopyFile.toObject = function(includeInstance, msg) {
  var f, obj = {
    append: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    tag: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dst: jspb.Message.getFieldWithDefault(msg, 3, ""),
    src: (f = msg.getSrc()) && proto.pfs.File.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.CopyFile}
 */
proto.pfs.CopyFile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.CopyFile;
  return proto.pfs.CopyFile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.CopyFile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.CopyFile}
 */
proto.pfs.CopyFile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAppend(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTag(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDst(value);
      break;
    case 4:
      var value = new proto.pfs.File;
      reader.readMessage(value,proto.pfs.File.deserializeBinaryFromReader);
      msg.setSrc(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.CopyFile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.CopyFile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.CopyFile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.CopyFile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAppend();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getTag();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDst();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSrc();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.pfs.File.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool append = 1;
 * @return {boolean}
 */
proto.pfs.CopyFile.prototype.getAppend = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs.CopyFile} returns this
 */
proto.pfs.CopyFile.prototype.setAppend = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string tag = 2;
 * @return {string}
 */
proto.pfs.CopyFile.prototype.getTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.CopyFile} returns this
 */
proto.pfs.CopyFile.prototype.setTag = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string dst = 3;
 * @return {string}
 */
proto.pfs.CopyFile.prototype.getDst = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.CopyFile} returns this
 */
proto.pfs.CopyFile.prototype.setDst = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional File src = 4;
 * @return {?proto.pfs.File}
 */
proto.pfs.CopyFile.prototype.getSrc = function() {
  return /** @type{?proto.pfs.File} */ (
    jspb.Message.getWrapperField(this, proto.pfs.File, 4));
};


/**
 * @param {?proto.pfs.File|undefined} value
 * @return {!proto.pfs.CopyFile} returns this
*/
proto.pfs.CopyFile.prototype.setSrc = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.CopyFile} returns this
 */
proto.pfs.CopyFile.prototype.clearSrc = function() {
  return this.setSrc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.CopyFile.prototype.hasSrc = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.pfs.ModifyFileRequest.oneofGroups_ = [[2,3,4]];

/**
 * @enum {number}
 */
proto.pfs.ModifyFileRequest.ModificationCase = {
  MODIFICATION_NOT_SET: 0,
  PUT_FILE: 2,
  DELETE_FILE: 3,
  COPY_FILE: 4
};

/**
 * @return {proto.pfs.ModifyFileRequest.ModificationCase}
 */
proto.pfs.ModifyFileRequest.prototype.getModificationCase = function() {
  return /** @type {proto.pfs.ModifyFileRequest.ModificationCase} */(jspb.Message.computeOneofCase(this, proto.pfs.ModifyFileRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.ModifyFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.ModifyFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.ModifyFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.ModifyFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    commit: (f = msg.getCommit()) && proto.pfs.Commit.toObject(includeInstance, f),
    putFile: (f = msg.getPutFile()) && proto.pfs.PutFile.toObject(includeInstance, f),
    deleteFile: (f = msg.getDeleteFile()) && proto.pfs.DeleteFile.toObject(includeInstance, f),
    copyFile: (f = msg.getCopyFile()) && proto.pfs.CopyFile.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.ModifyFileRequest}
 */
proto.pfs.ModifyFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.ModifyFileRequest;
  return proto.pfs.ModifyFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.ModifyFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.ModifyFileRequest}
 */
proto.pfs.ModifyFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.Commit;
      reader.readMessage(value,proto.pfs.Commit.deserializeBinaryFromReader);
      msg.setCommit(value);
      break;
    case 2:
      var value = new proto.pfs.PutFile;
      reader.readMessage(value,proto.pfs.PutFile.deserializeBinaryFromReader);
      msg.setPutFile(value);
      break;
    case 3:
      var value = new proto.pfs.DeleteFile;
      reader.readMessage(value,proto.pfs.DeleteFile.deserializeBinaryFromReader);
      msg.setDeleteFile(value);
      break;
    case 4:
      var value = new proto.pfs.CopyFile;
      reader.readMessage(value,proto.pfs.CopyFile.deserializeBinaryFromReader);
      msg.setCopyFile(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.ModifyFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.ModifyFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.ModifyFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.ModifyFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.Commit.serializeBinaryToWriter
    );
  }
  f = message.getPutFile();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pfs.PutFile.serializeBinaryToWriter
    );
  }
  f = message.getDeleteFile();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.pfs.DeleteFile.serializeBinaryToWriter
    );
  }
  f = message.getCopyFile();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.pfs.CopyFile.serializeBinaryToWriter
    );
  }
};


/**
 * optional Commit commit = 1;
 * @return {?proto.pfs.Commit}
 */
proto.pfs.ModifyFileRequest.prototype.getCommit = function() {
  return /** @type{?proto.pfs.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Commit, 1));
};


/**
 * @param {?proto.pfs.Commit|undefined} value
 * @return {!proto.pfs.ModifyFileRequest} returns this
*/
proto.pfs.ModifyFileRequest.prototype.setCommit = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.ModifyFileRequest} returns this
 */
proto.pfs.ModifyFileRequest.prototype.clearCommit = function() {
  return this.setCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.ModifyFileRequest.prototype.hasCommit = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PutFile put_file = 2;
 * @return {?proto.pfs.PutFile}
 */
proto.pfs.ModifyFileRequest.prototype.getPutFile = function() {
  return /** @type{?proto.pfs.PutFile} */ (
    jspb.Message.getWrapperField(this, proto.pfs.PutFile, 2));
};


/**
 * @param {?proto.pfs.PutFile|undefined} value
 * @return {!proto.pfs.ModifyFileRequest} returns this
*/
proto.pfs.ModifyFileRequest.prototype.setPutFile = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.pfs.ModifyFileRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.ModifyFileRequest} returns this
 */
proto.pfs.ModifyFileRequest.prototype.clearPutFile = function() {
  return this.setPutFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.ModifyFileRequest.prototype.hasPutFile = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DeleteFile delete_file = 3;
 * @return {?proto.pfs.DeleteFile}
 */
proto.pfs.ModifyFileRequest.prototype.getDeleteFile = function() {
  return /** @type{?proto.pfs.DeleteFile} */ (
    jspb.Message.getWrapperField(this, proto.pfs.DeleteFile, 3));
};


/**
 * @param {?proto.pfs.DeleteFile|undefined} value
 * @return {!proto.pfs.ModifyFileRequest} returns this
*/
proto.pfs.ModifyFileRequest.prototype.setDeleteFile = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.pfs.ModifyFileRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.ModifyFileRequest} returns this
 */
proto.pfs.ModifyFileRequest.prototype.clearDeleteFile = function() {
  return this.setDeleteFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.ModifyFileRequest.prototype.hasDeleteFile = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CopyFile copy_file = 4;
 * @return {?proto.pfs.CopyFile}
 */
proto.pfs.ModifyFileRequest.prototype.getCopyFile = function() {
  return /** @type{?proto.pfs.CopyFile} */ (
    jspb.Message.getWrapperField(this, proto.pfs.CopyFile, 4));
};


/**
 * @param {?proto.pfs.CopyFile|undefined} value
 * @return {!proto.pfs.ModifyFileRequest} returns this
*/
proto.pfs.ModifyFileRequest.prototype.setCopyFile = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.pfs.ModifyFileRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.ModifyFileRequest} returns this
 */
proto.pfs.ModifyFileRequest.prototype.clearCopyFile = function() {
  return this.setCopyFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.ModifyFileRequest.prototype.hasCopyFile = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.GetFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.GetFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.GetFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.GetFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    file: (f = msg.getFile()) && proto.pfs.File.toObject(includeInstance, f),
    url: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.GetFileRequest}
 */
proto.pfs.GetFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.GetFileRequest;
  return proto.pfs.GetFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.GetFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.GetFileRequest}
 */
proto.pfs.GetFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.File;
      reader.readMessage(value,proto.pfs.File.deserializeBinaryFromReader);
      msg.setFile(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.GetFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.GetFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.GetFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.GetFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.File.serializeBinaryToWriter
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional File file = 1;
 * @return {?proto.pfs.File}
 */
proto.pfs.GetFileRequest.prototype.getFile = function() {
  return /** @type{?proto.pfs.File} */ (
    jspb.Message.getWrapperField(this, proto.pfs.File, 1));
};


/**
 * @param {?proto.pfs.File|undefined} value
 * @return {!proto.pfs.GetFileRequest} returns this
*/
proto.pfs.GetFileRequest.prototype.setFile = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.GetFileRequest} returns this
 */
proto.pfs.GetFileRequest.prototype.clearFile = function() {
  return this.setFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.GetFileRequest.prototype.hasFile = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string URL = 2;
 * @return {string}
 */
proto.pfs.GetFileRequest.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.GetFileRequest} returns this
 */
proto.pfs.GetFileRequest.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.InspectFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.InspectFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.InspectFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.InspectFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    file: (f = msg.getFile()) && proto.pfs.File.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.InspectFileRequest}
 */
proto.pfs.InspectFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.InspectFileRequest;
  return proto.pfs.InspectFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.InspectFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.InspectFileRequest}
 */
proto.pfs.InspectFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.File;
      reader.readMessage(value,proto.pfs.File.deserializeBinaryFromReader);
      msg.setFile(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.InspectFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.InspectFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.InspectFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.InspectFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.File.serializeBinaryToWriter
    );
  }
};


/**
 * optional File file = 1;
 * @return {?proto.pfs.File}
 */
proto.pfs.InspectFileRequest.prototype.getFile = function() {
  return /** @type{?proto.pfs.File} */ (
    jspb.Message.getWrapperField(this, proto.pfs.File, 1));
};


/**
 * @param {?proto.pfs.File|undefined} value
 * @return {!proto.pfs.InspectFileRequest} returns this
*/
proto.pfs.InspectFileRequest.prototype.setFile = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.InspectFileRequest} returns this
 */
proto.pfs.InspectFileRequest.prototype.clearFile = function() {
  return this.setFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.InspectFileRequest.prototype.hasFile = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.ListFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.ListFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.ListFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.ListFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    file: (f = msg.getFile()) && proto.pfs.File.toObject(includeInstance, f),
    full: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.ListFileRequest}
 */
proto.pfs.ListFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.ListFileRequest;
  return proto.pfs.ListFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.ListFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.ListFileRequest}
 */
proto.pfs.ListFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.File;
      reader.readMessage(value,proto.pfs.File.deserializeBinaryFromReader);
      msg.setFile(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFull(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.ListFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.ListFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.ListFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.ListFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.File.serializeBinaryToWriter
    );
  }
  f = message.getFull();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional File file = 1;
 * @return {?proto.pfs.File}
 */
proto.pfs.ListFileRequest.prototype.getFile = function() {
  return /** @type{?proto.pfs.File} */ (
    jspb.Message.getWrapperField(this, proto.pfs.File, 1));
};


/**
 * @param {?proto.pfs.File|undefined} value
 * @return {!proto.pfs.ListFileRequest} returns this
*/
proto.pfs.ListFileRequest.prototype.setFile = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.ListFileRequest} returns this
 */
proto.pfs.ListFileRequest.prototype.clearFile = function() {
  return this.setFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.ListFileRequest.prototype.hasFile = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool full = 2;
 * @return {boolean}
 */
proto.pfs.ListFileRequest.prototype.getFull = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs.ListFileRequest} returns this
 */
proto.pfs.ListFileRequest.prototype.setFull = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.WalkFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.WalkFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.WalkFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.WalkFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    file: (f = msg.getFile()) && proto.pfs.File.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.WalkFileRequest}
 */
proto.pfs.WalkFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.WalkFileRequest;
  return proto.pfs.WalkFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.WalkFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.WalkFileRequest}
 */
proto.pfs.WalkFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.File;
      reader.readMessage(value,proto.pfs.File.deserializeBinaryFromReader);
      msg.setFile(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.WalkFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.WalkFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.WalkFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.WalkFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.File.serializeBinaryToWriter
    );
  }
};


/**
 * optional File file = 1;
 * @return {?proto.pfs.File}
 */
proto.pfs.WalkFileRequest.prototype.getFile = function() {
  return /** @type{?proto.pfs.File} */ (
    jspb.Message.getWrapperField(this, proto.pfs.File, 1));
};


/**
 * @param {?proto.pfs.File|undefined} value
 * @return {!proto.pfs.WalkFileRequest} returns this
*/
proto.pfs.WalkFileRequest.prototype.setFile = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.WalkFileRequest} returns this
 */
proto.pfs.WalkFileRequest.prototype.clearFile = function() {
  return this.setFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.WalkFileRequest.prototype.hasFile = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.GlobFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.GlobFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.GlobFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.GlobFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    commit: (f = msg.getCommit()) && proto.pfs.Commit.toObject(includeInstance, f),
    pattern: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.GlobFileRequest}
 */
proto.pfs.GlobFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.GlobFileRequest;
  return proto.pfs.GlobFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.GlobFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.GlobFileRequest}
 */
proto.pfs.GlobFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.Commit;
      reader.readMessage(value,proto.pfs.Commit.deserializeBinaryFromReader);
      msg.setCommit(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPattern(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.GlobFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.GlobFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.GlobFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.GlobFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.Commit.serializeBinaryToWriter
    );
  }
  f = message.getPattern();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Commit commit = 1;
 * @return {?proto.pfs.Commit}
 */
proto.pfs.GlobFileRequest.prototype.getCommit = function() {
  return /** @type{?proto.pfs.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Commit, 1));
};


/**
 * @param {?proto.pfs.Commit|undefined} value
 * @return {!proto.pfs.GlobFileRequest} returns this
*/
proto.pfs.GlobFileRequest.prototype.setCommit = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.GlobFileRequest} returns this
 */
proto.pfs.GlobFileRequest.prototype.clearCommit = function() {
  return this.setCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.GlobFileRequest.prototype.hasCommit = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string pattern = 2;
 * @return {string}
 */
proto.pfs.GlobFileRequest.prototype.getPattern = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.GlobFileRequest} returns this
 */
proto.pfs.GlobFileRequest.prototype.setPattern = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.DiffFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.DiffFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.DiffFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.DiffFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    newFile: (f = msg.getNewFile()) && proto.pfs.File.toObject(includeInstance, f),
    oldFile: (f = msg.getOldFile()) && proto.pfs.File.toObject(includeInstance, f),
    shallow: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.DiffFileRequest}
 */
proto.pfs.DiffFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.DiffFileRequest;
  return proto.pfs.DiffFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.DiffFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.DiffFileRequest}
 */
proto.pfs.DiffFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.File;
      reader.readMessage(value,proto.pfs.File.deserializeBinaryFromReader);
      msg.setNewFile(value);
      break;
    case 2:
      var value = new proto.pfs.File;
      reader.readMessage(value,proto.pfs.File.deserializeBinaryFromReader);
      msg.setOldFile(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShallow(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.DiffFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.DiffFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.DiffFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.DiffFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNewFile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.File.serializeBinaryToWriter
    );
  }
  f = message.getOldFile();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pfs.File.serializeBinaryToWriter
    );
  }
  f = message.getShallow();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional File new_file = 1;
 * @return {?proto.pfs.File}
 */
proto.pfs.DiffFileRequest.prototype.getNewFile = function() {
  return /** @type{?proto.pfs.File} */ (
    jspb.Message.getWrapperField(this, proto.pfs.File, 1));
};


/**
 * @param {?proto.pfs.File|undefined} value
 * @return {!proto.pfs.DiffFileRequest} returns this
*/
proto.pfs.DiffFileRequest.prototype.setNewFile = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.DiffFileRequest} returns this
 */
proto.pfs.DiffFileRequest.prototype.clearNewFile = function() {
  return this.setNewFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.DiffFileRequest.prototype.hasNewFile = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional File old_file = 2;
 * @return {?proto.pfs.File}
 */
proto.pfs.DiffFileRequest.prototype.getOldFile = function() {
  return /** @type{?proto.pfs.File} */ (
    jspb.Message.getWrapperField(this, proto.pfs.File, 2));
};


/**
 * @param {?proto.pfs.File|undefined} value
 * @return {!proto.pfs.DiffFileRequest} returns this
*/
proto.pfs.DiffFileRequest.prototype.setOldFile = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.DiffFileRequest} returns this
 */
proto.pfs.DiffFileRequest.prototype.clearOldFile = function() {
  return this.setOldFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.DiffFileRequest.prototype.hasOldFile = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool shallow = 3;
 * @return {boolean}
 */
proto.pfs.DiffFileRequest.prototype.getShallow = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs.DiffFileRequest} returns this
 */
proto.pfs.DiffFileRequest.prototype.setShallow = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.DiffFileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.DiffFileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.DiffFileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.DiffFileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    newFile: (f = msg.getNewFile()) && proto.pfs.FileInfo.toObject(includeInstance, f),
    oldFile: (f = msg.getOldFile()) && proto.pfs.FileInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.DiffFileResponse}
 */
proto.pfs.DiffFileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.DiffFileResponse;
  return proto.pfs.DiffFileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.DiffFileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.DiffFileResponse}
 */
proto.pfs.DiffFileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.FileInfo;
      reader.readMessage(value,proto.pfs.FileInfo.deserializeBinaryFromReader);
      msg.setNewFile(value);
      break;
    case 2:
      var value = new proto.pfs.FileInfo;
      reader.readMessage(value,proto.pfs.FileInfo.deserializeBinaryFromReader);
      msg.setOldFile(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.DiffFileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.DiffFileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.DiffFileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.DiffFileResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNewFile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.FileInfo.serializeBinaryToWriter
    );
  }
  f = message.getOldFile();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.pfs.FileInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional FileInfo new_file = 1;
 * @return {?proto.pfs.FileInfo}
 */
proto.pfs.DiffFileResponse.prototype.getNewFile = function() {
  return /** @type{?proto.pfs.FileInfo} */ (
    jspb.Message.getWrapperField(this, proto.pfs.FileInfo, 1));
};


/**
 * @param {?proto.pfs.FileInfo|undefined} value
 * @return {!proto.pfs.DiffFileResponse} returns this
*/
proto.pfs.DiffFileResponse.prototype.setNewFile = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.DiffFileResponse} returns this
 */
proto.pfs.DiffFileResponse.prototype.clearNewFile = function() {
  return this.setNewFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.DiffFileResponse.prototype.hasNewFile = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional FileInfo old_file = 2;
 * @return {?proto.pfs.FileInfo}
 */
proto.pfs.DiffFileResponse.prototype.getOldFile = function() {
  return /** @type{?proto.pfs.FileInfo} */ (
    jspb.Message.getWrapperField(this, proto.pfs.FileInfo, 2));
};


/**
 * @param {?proto.pfs.FileInfo|undefined} value
 * @return {!proto.pfs.DiffFileResponse} returns this
*/
proto.pfs.DiffFileResponse.prototype.setOldFile = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.DiffFileResponse} returns this
 */
proto.pfs.DiffFileResponse.prototype.clearOldFile = function() {
  return this.setOldFile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.DiffFileResponse.prototype.hasOldFile = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.FsckRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.FsckRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.FsckRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.FsckRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fix: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.FsckRequest}
 */
proto.pfs.FsckRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.FsckRequest;
  return proto.pfs.FsckRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.FsckRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.FsckRequest}
 */
proto.pfs.FsckRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFix(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.FsckRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.FsckRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.FsckRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.FsckRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFix();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool fix = 1;
 * @return {boolean}
 */
proto.pfs.FsckRequest.prototype.getFix = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pfs.FsckRequest} returns this
 */
proto.pfs.FsckRequest.prototype.setFix = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.FsckResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.FsckResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.FsckResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.FsckResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    fix: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.FsckResponse}
 */
proto.pfs.FsckResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.FsckResponse;
  return proto.pfs.FsckResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.FsckResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.FsckResponse}
 */
proto.pfs.FsckResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFix(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.FsckResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.FsckResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.FsckResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.FsckResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFix();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string fix = 1;
 * @return {string}
 */
proto.pfs.FsckResponse.prototype.getFix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.FsckResponse} returns this
 */
proto.pfs.FsckResponse.prototype.setFix = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.pfs.FsckResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.FsckResponse} returns this
 */
proto.pfs.FsckResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.CreateFilesetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.CreateFilesetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.CreateFilesetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.CreateFilesetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    filesetId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.CreateFilesetResponse}
 */
proto.pfs.CreateFilesetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.CreateFilesetResponse;
  return proto.pfs.CreateFilesetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.CreateFilesetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.CreateFilesetResponse}
 */
proto.pfs.CreateFilesetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilesetId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.CreateFilesetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.CreateFilesetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.CreateFilesetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.CreateFilesetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilesetId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string fileset_id = 1;
 * @return {string}
 */
proto.pfs.CreateFilesetResponse.prototype.getFilesetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.CreateFilesetResponse} returns this
 */
proto.pfs.CreateFilesetResponse.prototype.setFilesetId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.GetFilesetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.GetFilesetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.GetFilesetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.GetFilesetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    commit: (f = msg.getCommit()) && proto.pfs.Commit.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.GetFilesetRequest}
 */
proto.pfs.GetFilesetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.GetFilesetRequest;
  return proto.pfs.GetFilesetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.GetFilesetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.GetFilesetRequest}
 */
proto.pfs.GetFilesetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.Commit;
      reader.readMessage(value,proto.pfs.Commit.deserializeBinaryFromReader);
      msg.setCommit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.GetFilesetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.GetFilesetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.GetFilesetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.GetFilesetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.Commit.serializeBinaryToWriter
    );
  }
};


/**
 * optional Commit commit = 1;
 * @return {?proto.pfs.Commit}
 */
proto.pfs.GetFilesetRequest.prototype.getCommit = function() {
  return /** @type{?proto.pfs.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Commit, 1));
};


/**
 * @param {?proto.pfs.Commit|undefined} value
 * @return {!proto.pfs.GetFilesetRequest} returns this
*/
proto.pfs.GetFilesetRequest.prototype.setCommit = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.GetFilesetRequest} returns this
 */
proto.pfs.GetFilesetRequest.prototype.clearCommit = function() {
  return this.setCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.GetFilesetRequest.prototype.hasCommit = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.AddFilesetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.AddFilesetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.AddFilesetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.AddFilesetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    commit: (f = msg.getCommit()) && proto.pfs.Commit.toObject(includeInstance, f),
    filesetId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.AddFilesetRequest}
 */
proto.pfs.AddFilesetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.AddFilesetRequest;
  return proto.pfs.AddFilesetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.AddFilesetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.AddFilesetRequest}
 */
proto.pfs.AddFilesetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.Commit;
      reader.readMessage(value,proto.pfs.Commit.deserializeBinaryFromReader);
      msg.setCommit(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilesetId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.AddFilesetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.AddFilesetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.AddFilesetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.AddFilesetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommit();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.Commit.serializeBinaryToWriter
    );
  }
  f = message.getFilesetId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional Commit commit = 1;
 * @return {?proto.pfs.Commit}
 */
proto.pfs.AddFilesetRequest.prototype.getCommit = function() {
  return /** @type{?proto.pfs.Commit} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Commit, 1));
};


/**
 * @param {?proto.pfs.Commit|undefined} value
 * @return {!proto.pfs.AddFilesetRequest} returns this
*/
proto.pfs.AddFilesetRequest.prototype.setCommit = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.AddFilesetRequest} returns this
 */
proto.pfs.AddFilesetRequest.prototype.clearCommit = function() {
  return this.setCommit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.AddFilesetRequest.prototype.hasCommit = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string fileset_id = 2;
 * @return {string}
 */
proto.pfs.AddFilesetRequest.prototype.getFilesetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.AddFilesetRequest} returns this
 */
proto.pfs.AddFilesetRequest.prototype.setFilesetId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.RenewFilesetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.RenewFilesetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.RenewFilesetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.RenewFilesetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filesetId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ttlSeconds: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.RenewFilesetRequest}
 */
proto.pfs.RenewFilesetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.RenewFilesetRequest;
  return proto.pfs.RenewFilesetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.RenewFilesetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.RenewFilesetRequest}
 */
proto.pfs.RenewFilesetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilesetId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTtlSeconds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.RenewFilesetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.RenewFilesetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.RenewFilesetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.RenewFilesetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilesetId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTtlSeconds();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string fileset_id = 1;
 * @return {string}
 */
proto.pfs.RenewFilesetRequest.prototype.getFilesetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.RenewFilesetRequest} returns this
 */
proto.pfs.RenewFilesetRequest.prototype.setFilesetId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 ttl_seconds = 2;
 * @return {number}
 */
proto.pfs.RenewFilesetRequest.prototype.getTtlSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs.RenewFilesetRequest} returns this
 */
proto.pfs.RenewFilesetRequest.prototype.setTtlSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.ActivateAuthRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.ActivateAuthRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.ActivateAuthRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.ActivateAuthRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.ActivateAuthRequest}
 */
proto.pfs.ActivateAuthRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.ActivateAuthRequest;
  return proto.pfs.ActivateAuthRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.ActivateAuthRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.ActivateAuthRequest}
 */
proto.pfs.ActivateAuthRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.ActivateAuthRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.ActivateAuthRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.ActivateAuthRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.ActivateAuthRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.ActivateAuthResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.ActivateAuthResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.ActivateAuthResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.ActivateAuthResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.ActivateAuthResponse}
 */
proto.pfs.ActivateAuthResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.ActivateAuthResponse;
  return proto.pfs.ActivateAuthResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.ActivateAuthResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.ActivateAuthResponse}
 */
proto.pfs.ActivateAuthResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.ActivateAuthResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.ActivateAuthResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.ActivateAuthResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.ActivateAuthResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.RunLoadTestRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.RunLoadTestRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.RunLoadTestRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.RunLoadTestRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    spec: msg.getSpec_asB64(),
    seed: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.RunLoadTestRequest}
 */
proto.pfs.RunLoadTestRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.RunLoadTestRequest;
  return proto.pfs.RunLoadTestRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.RunLoadTestRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.RunLoadTestRequest}
 */
proto.pfs.RunLoadTestRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSpec(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSeed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.RunLoadTestRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.RunLoadTestRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.RunLoadTestRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.RunLoadTestRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpec_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getSeed();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional bytes spec = 1;
 * @return {string}
 */
proto.pfs.RunLoadTestRequest.prototype.getSpec = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes spec = 1;
 * This is a type-conversion wrapper around `getSpec()`
 * @return {string}
 */
proto.pfs.RunLoadTestRequest.prototype.getSpec_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSpec()));
};


/**
 * optional bytes spec = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSpec()`
 * @return {!Uint8Array}
 */
proto.pfs.RunLoadTestRequest.prototype.getSpec_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSpec()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.pfs.RunLoadTestRequest} returns this
 */
proto.pfs.RunLoadTestRequest.prototype.setSpec = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional int64 seed = 2;
 * @return {number}
 */
proto.pfs.RunLoadTestRequest.prototype.getSeed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs.RunLoadTestRequest} returns this
 */
proto.pfs.RunLoadTestRequest.prototype.setSeed = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pfs.RunLoadTestResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pfs.RunLoadTestResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pfs.RunLoadTestResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.RunLoadTestResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    branch: (f = msg.getBranch()) && proto.pfs.Branch.toObject(includeInstance, f),
    seed: jspb.Message.getFieldWithDefault(msg, 2, 0),
    error: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pfs.RunLoadTestResponse}
 */
proto.pfs.RunLoadTestResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pfs.RunLoadTestResponse;
  return proto.pfs.RunLoadTestResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pfs.RunLoadTestResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pfs.RunLoadTestResponse}
 */
proto.pfs.RunLoadTestResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pfs.Branch;
      reader.readMessage(value,proto.pfs.Branch.deserializeBinaryFromReader);
      msg.setBranch(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSeed(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pfs.RunLoadTestResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pfs.RunLoadTestResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pfs.RunLoadTestResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pfs.RunLoadTestResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBranch();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pfs.Branch.serializeBinaryToWriter
    );
  }
  f = message.getSeed();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Branch branch = 1;
 * @return {?proto.pfs.Branch}
 */
proto.pfs.RunLoadTestResponse.prototype.getBranch = function() {
  return /** @type{?proto.pfs.Branch} */ (
    jspb.Message.getWrapperField(this, proto.pfs.Branch, 1));
};


/**
 * @param {?proto.pfs.Branch|undefined} value
 * @return {!proto.pfs.RunLoadTestResponse} returns this
*/
proto.pfs.RunLoadTestResponse.prototype.setBranch = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pfs.RunLoadTestResponse} returns this
 */
proto.pfs.RunLoadTestResponse.prototype.clearBranch = function() {
  return this.setBranch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pfs.RunLoadTestResponse.prototype.hasBranch = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 seed = 2;
 * @return {number}
 */
proto.pfs.RunLoadTestResponse.prototype.getSeed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pfs.RunLoadTestResponse} returns this
 */
proto.pfs.RunLoadTestResponse.prototype.setSeed = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string error = 3;
 * @return {string}
 */
proto.pfs.RunLoadTestResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pfs.RunLoadTestResponse} returns this
 */
proto.pfs.RunLoadTestResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * @enum {number}
 */
proto.pfs.OriginKind = {
  USER: 0,
  AUTO: 1,
  FSCK: 2
};

/**
 * @enum {number}
 */
proto.pfs.FileType = {
  RESERVED: 0,
  FILE: 1,
  DIR: 2
};

/**
 * @enum {number}
 */
proto.pfs.CommitState = {
  STARTED: 0,
  READY: 1,
  FINISHED: 2
};

/**
 * @enum {number}
 */
proto.pfs.Delimiter = {
  NONE: 0,
  JSON: 1,
  LINE: 2,
  SQL: 3,
  CSV: 4
};

goog.object.extend(exports, proto.pfs);
