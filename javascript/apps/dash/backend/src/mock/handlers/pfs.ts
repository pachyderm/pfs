import {IAPIServer} from '@pachyderm/proto/pb/pfs/pfs_grpc_pb';
import {ListRepoResponse} from '@pachyderm/proto/pb/pfs/pfs_pb';

import repos from '@dash-backend/mock/fixtures/repos';

const pfs: Pick<IAPIServer, 'listRepo' | 'inspectRepo'> = {
  listRepo: (call, callback) => {
    const [projectId] = call.metadata.get('project-id');

    const reply = new ListRepoResponse();

    // "tutorial" in this case represents the default/catch-all project in core pach
    reply.setRepoInfoList(
      projectId ? repos[projectId.toString()] : repos['tutorial'],
    );

    callback(null, reply);
  },
  inspectRepo: (call, callback) => {
    const [projectId] = call.metadata.get('project-id');
    const repoName = call.request.getRepo()?.getName();
    const repo = (projectId
      ? repos[projectId.toString()]
      : repos['tutorial']
    ).find((r) => r.getRepo()?.getName() === repoName);

    callback(null, repo);
  },
};

export default pfs;
