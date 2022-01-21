import {
  ButtonLink,
  TrashSVG,
  Icon,
  Tooltip,
  BasicModal,
} from '@pachyderm/components';
import React from 'react';

import useDeleteRepoButton from './hooks/useDeleteRepoButton';

const DeleteRepoButton: React.FC = () => {
  const {canDelete, modalOpen, setModalOpen, onDelete, updating} =
    useDeleteRepoButton();

  return (
    <>
      {modalOpen && (
        <BasicModal
          show={true}
          onHide={() => {
            setModalOpen(false);
          }}
          headerContent={
            <span>Are you sure you want to delete this Repo?</span>
          }
          actionable
          small
          confirmText="Delete"
          onConfirm={onDelete}
          updating={updating}
          loading={false}
        >
          Deleting this repo will erase all data inside it.
        </BasicModal>
      )}
      <Tooltip
        tooltipKey="Delete info"
        tooltipText={
          canDelete
            ? 'Delete Repo'
            : "This repo can't be deleted while it has associated pipelines."
        }
      >
        <ButtonLink
          disabled={!canDelete}
          onClick={() => setModalOpen(true)}
          data-testid="DeleteRepoButton__link"
        >
          <Icon color="plum">
            <TrashSVG aria-label="Delete" />
          </Icon>
        </ButtonLink>
      </Tooltip>
    </>
  );
};

export default DeleteRepoButton;
