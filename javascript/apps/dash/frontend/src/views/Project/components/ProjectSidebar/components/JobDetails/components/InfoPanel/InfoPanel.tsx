import {fromUnixTime, formatDistanceToNow, formatDistance} from 'date-fns';
import React, {useMemo} from 'react';
import {useRouteMatch} from 'react-router';

import Description from '@dash-frontend/components/Description';
import JSONBlock from '@dash-frontend/components/JSONBlock';
import PipelineInput from '@dash-frontend/components/PipelineInput';
import {useJob} from '@dash-frontend/hooks/useJob';
import readableJobState from '@dash-frontend/lib/readableJobState';
import {ProjectRouteParams} from '@dash-frontend/lib/types';

import styles from './InfoPanel.module.css';

interface InfoPanelParams extends ProjectRouteParams {
  jobId: string;
  pipelineId: string;
}

const InfoPanel = () => {
  const {
    params: {jobId, projectId, pipelineId},
  } = useRouteMatch<InfoPanelParams>();

  const {job} = useJob({
    id: jobId,
    pipelineName: pipelineId,
    projectId,
  });

  const transformString = useMemo(() => {
    if (job?.transform) {
      return (
        <JSONBlock>
          {JSON.stringify(
            {
              image: job.transform.image,
              cmd: job.transform.cmdList,
            },
            null,
            2,
          )}
        </JSONBlock>
      );
    }
    return 'N/A';
  }, [job?.transform]);

  const started = useMemo(() => {
    return job?.createdAt
      ? formatDistanceToNow(fromUnixTime(job.createdAt), {
          addSuffix: true,
        })
      : 'N/A';
  }, [job?.createdAt]);

  const duration = useMemo(() => {
    return job?.finishedAt && job?.createdAt
      ? formatDistance(
          fromUnixTime(job.finishedAt),
          fromUnixTime(job.createdAt),
        )
      : 'N/A';
  }, [job?.createdAt, job?.finishedAt]);

  return (
    <dl className={styles.base}>
      <Description term="Inputs" lines={9}>
        {job?.inputString ? (
          <PipelineInput
            inputString={job.inputString}
            branchId={job.inputBranch || 'master'}
            projectId={projectId}
          />
        ) : (
          'N/A'
        )}
      </Description>

      <Description term="Transform">{transformString}</Description>

      <hr className={styles.divider} />

      <Description term="ID">{job?.id}</Description>
      <Description term="Pipeline">{job?.pipelineName}</Description>
      <Description term="State">
        {job?.state ? readableJobState(job.state) : 'N/A'}
      </Description>
      <Description term="Started">{started}</Description>
      <Description term="Duration">{duration}</Description>
    </dl>
  );
};

export default InfoPanel;
