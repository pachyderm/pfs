import {FileCommitState} from '@dash-backend/generated/types';
import formatBytes from '@dash-backend/lib/formatBytes';
import {DiffFileResponse} from '@dash-backend/proto';

const formatDiff = (diff: DiffFileResponse.AsObject[]) => {
  const counts = {
    added: {count: 0, sizeDelta: 0},
    updated: {count: 0, sizeDelta: 0},
    deleted: {count: 0, sizeDelta: 0},
  };

  const diffTotals: Record<string, FileCommitState> = {};

  for (const fileDiff of diff) {
    if (fileDiff.newFile?.file && !fileDiff.oldFile?.file) {
      if (!fileDiff.newFile.file.path.endsWith('/')) {
        counts.added.count += 1;
        counts.added.sizeDelta += fileDiff.newFile.sizeBytes;
      }
      diffTotals[fileDiff.newFile.file.path] = FileCommitState.ADDED;
    } else if (!fileDiff.newFile?.file && fileDiff.oldFile?.file) {
      if (!fileDiff.oldFile.file.path.endsWith('/')) {
        counts.deleted.count += 1;
        counts.deleted.sizeDelta -= fileDiff.oldFile.sizeBytes || 0;
      }
      diffTotals[fileDiff.oldFile.file.path] = FileCommitState.DELETED;
    } else if (fileDiff.newFile?.file && fileDiff.oldFile?.file) {
      if (!fileDiff.newFile.file.path.endsWith('/')) {
        counts.updated.count += 1;
        counts.updated.sizeDelta +=
          fileDiff.newFile.sizeBytes - fileDiff.oldFile.sizeBytes;
      }
      diffTotals[fileDiff.newFile.file.path] = FileCommitState.UPDATED;
    }
  }

  const sizeDiff =
    (diff[0]?.newFile?.sizeBytes || 0) - (diff[0]?.oldFile?.sizeBytes || 0);

  return {
    diffTotals,
    diff: {
      size: sizeDiff,
      sizeDisplay: formatBytes(sizeDiff),
      filesAdded: counts.added,
      filesUpdated: counts.updated,
      filesDeleted: counts.deleted,
    },
  };
};

export default formatDiff;
