import {Status} from '@grpc/grpc-js/build/src/constants';
import {IAPIServer} from '@pachyderm/proto/pb/pps/pps_grpc_pb';
import {PipelineInfos} from '@pachyderm/proto/pb/pps/pps_pb';
import {run} from 'node-jq';

import jobs from '@dash-backend/mock/fixtures/jobs';
import pipelines from '@dash-backend/mock/fixtures/pipelines';

import {pipelineInfoFromObject} from '../../grpc/builders/pps';

const pps: Pick<IAPIServer, 'listPipeline' | 'listJob'> = {
  listPipeline: (call, callback) => {
    const [projectId] = call.metadata.get('project-id');
    const [authToken] = call.metadata.get('authn-token');

    if (authToken && authToken === 'expired') {
      callback(
        {
          code: Status.UNAUTHENTICATED,
          details:
            'provided auth token is corrupted or has expired (try logging in again)',
        },
        null,
      );
    }

    const reply = new PipelineInfos();
    // "tutorial" in this case represents the default/catch-all project in core pach
    reply.setPipelineInfoList(
      projectId ? pipelines[projectId.toString()] : pipelines['1'],
    );

    if (call.request.getJqfilter()) {
      run(
        `.pipelineInfoList[] | ${call.request.getJqfilter()}`,
        reply.toObject(),
        {
          input: 'json',
          output: 'string',
        },
      ).then((filteredResponse) => {
        if (filteredResponse && typeof filteredResponse === 'string') {
          const parsedPipelineInfo = filteredResponse
            .split('\n')
            .map((pipelineInfo) => {
              return pipelineInfoFromObject(JSON.parse(pipelineInfo));
            });

          reply.setPipelineInfoList(parsedPipelineInfo);
          callback(null, reply);
        } else {
          return callback(null, new PipelineInfos());
        }
      });
    } else {
      callback(null, reply);
    }
  },
  listJob: (call) => {
    const [projectId] = call.metadata.get('project-id');
    const replyJobs = projectId ? jobs[projectId.toString()] : jobs['1'];
    replyJobs.forEach((job) => call.write(job));
    call.end();
  },
};

export default pps;
