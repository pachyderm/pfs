import countBy from 'lodash/countBy';
import sum from 'lodash/sum';
import values from 'lodash/values';
import {useCallback, useMemo} from 'react';
import {useHistory} from 'react-router';

import useJobList from '@dash-frontend/components/JobList/hooks/useJobList';
import useUrlQueryState from '@dash-frontend/hooks/useUrlQueryState';
import useUrlState from '@dash-frontend/hooks/useUrlState';
import {jobsRoute} from '@dash-frontend/views/Project/utils/routes';
import {PipelineJobState} from '@graphqlTypes';

import {useSearch} from './useSearch';

export const useDefaultDropdown = () => {
  const {projectId} = useUrlState();
  const {pipelineJobs} = useJobList({projectId});
  const browserHistory = useHistory();
  const {setUrlFromViewState} = useUrlQueryState();
  const {closeDropdown} = useSearch();

  const stateCounts = useMemo(
    () => countBy(pipelineJobs, (job) => job.state),
    [pipelineJobs],
  );
  const allJobs = useMemo(() => sum(values(stateCounts)), [stateCounts]);

  const handleJobChipClick = useCallback(
    (value?: PipelineJobState) => {
      const params = value
        ? setUrlFromViewState({pipelineJobFilters: [value]})
        : setUrlFromViewState({
            pipelineJobFilters: Object.values(PipelineJobState),
          });

      browserHistory.push(params);
      browserHistory.push(jobsRoute({projectId}));
      closeDropdown();
    },
    [browserHistory, closeDropdown, projectId, setUrlFromViewState],
  );

  return {stateCounts, allJobs, handleJobChipClick};
};
