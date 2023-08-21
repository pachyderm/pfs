import {useCallback, useEffect, useState} from 'react';
import {useHistory} from 'react-router';

import {useDeleteFilesMutation} from '@dash-frontend/generated/hooks';
import useCurrentRepoWithLinkedPipeline from '@dash-frontend/hooks/useCurrentRepoWithLinkedPipeline';
import useUrlState from '@dash-frontend/hooks/useUrlState';
import {getProxyEnabled} from '@dash-frontend/lib/runtimeVariables';
import useArchiveDownload from '@dash-frontend/views/FileBrowser/hooks/useArchiveDownload';
import {fileBrowserRoute} from '@dash-frontend/views/Project/utils/routes';
import {useModal} from '@pachyderm/components';

const useListViewTable = () => {
  const {repoId, branchId, projectId, filePath} = useUrlState();
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const browserHistory = useHistory();

  const {loading: repoLoading, repo} = useCurrentRepoWithLinkedPipeline();

  const noFilesSelected = selectedFiles.length === 0;
  const isOutputRepo = Boolean(repo?.linkedPipeline);

  const addSelection = useCallback(
    (filePath: string) => {
      if (selectedFiles.includes(filePath)) {
        setSelectedFiles((selectedFiles) =>
          selectedFiles.filter((file) => file !== filePath),
        );
      } else {
        setSelectedFiles((selectedFiles) => [...selectedFiles, filePath]);
      }
    },
    [selectedFiles],
  );

  useEffect(() => {
    setSelectedFiles([]);
  }, [filePath]);

  const {
    openModal: openDeleteModal,
    closeModal,
    isOpen: deleteModalOpen,
  } = useModal(false);

  const [deleteFilesMutation, {loading: deleteLoading, error: deleteError}] =
    useDeleteFilesMutation();
  const deleteFiles = useCallback(async () => {
    const deleteCommit = await deleteFilesMutation({
      variables: {
        args: {
          filePaths: selectedFiles,
          repo: repoId,
          branch: branchId,
          projectId,
        },
      },
    });
    deleteCommit.data?.deleteFiles &&
      browserHistory.push(
        fileBrowserRoute({
          repoId,
          branchId,
          projectId,
          commitId: deleteCommit.data?.deleteFiles,
        }),
      );
  }, [
    branchId,
    browserHistory,
    deleteFilesMutation,
    projectId,
    repoId,
    selectedFiles,
  ]);

  const {archiveDownload} = useArchiveDownload();

  const downloadSelected = useCallback(async () => {
    await archiveDownload(selectedFiles);
  }, [archiveDownload, selectedFiles]);

  const proxyEnabled = getProxyEnabled();

  return {
    repoId,
    repoLoading,
    branchId,
    selectedFiles,
    addSelection,
    deleteModalOpen,
    openDeleteModal,
    closeModal,
    deleteFiles,
    deleteLoading,
    deleteError,
    downloadSelected,
    proxyEnabled,
    isOutputRepo,
    noFilesSelected,
  };
};

export default useListViewTable;
