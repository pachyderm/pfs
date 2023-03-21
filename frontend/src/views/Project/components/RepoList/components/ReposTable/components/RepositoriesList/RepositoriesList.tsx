import {ApolloError} from '@apollo/client';
import {ReposWithCommitQuery} from '@graphqlTypes';
import {format, fromUnixTime} from 'date-fns';
import React from 'react';

import EmptyState from '@dash-frontend/components/EmptyState';
import ErrorStateSupportLink from '@dash-frontend/components/ErrorStateSupportLink';
import {TableViewWrapper} from '@dash-frontend/components/TableView';
import useUrlQueryState from '@dash-frontend/hooks/useUrlQueryState';
import {Table, LoadingDots} from '@pachyderm/components';

import useRepositoriesList from './hooks/useRepositoriesList';

const NO_ACCESS_TOOLTIP =
  "You currently don't have permission to view this pipeline. To change your permission level, contact your admin.";

type RepositoriesListProps = {
  error?: ApolloError;
  loading: boolean;
  totalReposLength: number;
  repos?: ReposWithCommitQuery['repos'];
};

const RepositoriesList: React.FC<RepositoriesListProps> = ({
  totalReposLength,
  repos = [],
  loading,
  error,
}) => {
  const {generateIconItems, onOverflowMenuSelect} = useRepositoriesList();
  const {searchParams, updateSearchParamsAndGo} = useUrlQueryState();

  const addSelection = (value: string) => {
    if (searchParams.selectedRepos && searchParams.selectedRepos[0] === value) {
      updateSearchParamsAndGo({
        selectedRepos: [],
      });
    } else {
      updateSearchParamsAndGo({
        selectedRepos: [value],
      });
    }
  };

  if (loading) {
    return <LoadingDots />;
  }

  if (error) {
    return (
      <ErrorStateSupportLink
        title="We couldn't load the repositories list"
        message="Your repositories exist, but we couldn't fetch a list of them from our end. Please try refreshing this page."
      />
    );
  }

  if (totalReposLength === 0) {
    return (
      <EmptyState
        title="This DAG has no repositories"
        message="This is normal for new DAGs, but we still wanted to notify you because Pachyderm didn't detect any repositories on our end."
        linkToDocs={{
          text: 'Try creating a repository',
          link: 'https://docs.pachyderm.com/latest/concepts/data-concepts/repo/',
        }}
      />
    );
  }

  if (repos?.length === 0) {
    return (
      <EmptyState
        title="No matching results"
        message="We couldn't find any results matching your filters. Try using a different set of filters."
      />
    );
  }

  return (
    <TableViewWrapper>
      <Table>
        <Table.Head sticky>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Size</Table.HeaderCell>
            <Table.HeaderCell>Created</Table.HeaderCell>
            <Table.HeaderCell>Last Commit</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Head>

        <Table.Body>
          {repos.map((repo) => (
            <Table.Row
              key={repo?.id}
              data-testid="RepositoriesList__row"
              onClick={
                repo?.access ? () => addSelection(repo?.id || '') : undefined
              }
              isSelected={searchParams.selectedRepos?.includes(repo?.id || '')}
              hasRadio={repo?.access}
              hasLock={!repo?.access}
              lockedTooltipText={!repo?.access ? NO_ACCESS_TOOLTIP : undefined}
              overflowMenuItems={generateIconItems(repo?.lastCommit?.id)}
              dropdownOnSelect={onOverflowMenuSelect(repo)}
            >
              <Table.DataCell>{repo?.name}</Table.DataCell>
              <Table.DataCell>{repo?.sizeDisplay || '-'}</Table.DataCell>
              <Table.DataCell>
                {repo?.createdAt
                  ? format(
                      fromUnixTime(repo?.createdAt),
                      'MMM dd, yyyy; h:mmaaa',
                    )
                  : '-'}
              </Table.DataCell>
              <Table.DataCell>
                {repo?.lastCommit
                  ? repo?.lastCommit?.finished &&
                    `${format(
                      fromUnixTime(repo?.lastCommit?.finished),
                      'MMM dd, yyyy; h:mmaaa',
                    )}; ${repo.lastCommit.id.slice(0, 6)}...`
                  : '-'}
              </Table.DataCell>
              <Table.DataCell>{repo?.description}</Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </TableViewWrapper>
  );
};

export default RepositoriesList;
