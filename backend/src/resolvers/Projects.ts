import {ApolloError} from 'apollo-server-errors';

import formatBytes from '@dash-backend/lib/formatBytes';
import getSizeBytes from '@dash-backend/lib/getSizeBytes';
import {PipelineInfo, PipelineState} from '@dash-backend/proto';
import {ProjectInfo} from '@dash-backend/proto/proto/pfs/pfs_pb';
import {MutationResolvers, ProjectStatus, QueryResolvers} from '@graphqlTypes';

import {jobSetsToGQLJobSets} from './builders/pps';

interface ProjectsResolver {
  Query: {
    project: QueryResolvers['project'];
    projects: QueryResolvers['projects'];
    projectDetails: QueryResolvers['projectDetails'];
  };
  Mutation: {
    createProject: MutationResolvers['createProject'];
    updateProject: MutationResolvers['updateProject'];
    deleteProjectAndResources: MutationResolvers['deleteProjectAndResources'];
  };
}

const rpcToGraphqlProject = (
  project: ProjectInfo.AsObject,
  pipelines: PipelineInfo.AsObject[],
) => ({
  id: project.project?.name || '',
  description: project.description,
  status: getProjectHealth(pipelines),
});

const getProjectHealth = (pipelines: PipelineInfo.AsObject[]) => {
  const status = pipelines.some(
    (pipeline) =>
      pipeline.state === PipelineState.PIPELINE_CRASHING ||
      pipeline.state === PipelineState.PIPELINE_FAILURE,
  )
    ? ProjectStatus.UNHEALTHY
    : ProjectStatus.HEALTHY;

  return status;
};

const projectsResolver: ProjectsResolver = {
  Query: {
    project: async (_field, {id}, {pachClient}) => {
      const pipelines = await pachClient.pps().listPipeline({projectIds: [id]});
      return rpcToGraphqlProject(
        await pachClient.pfs().inspectProject(id),
        pipelines,
      );
    },
    projects: async (_field, _args, {pachClient}) => {
      const projects = await pachClient.pfs().listProject();
      return projects.map(async (project) => {
        const projectId = project.project?.name ?? '';
        // TODO: Improve this from N+1 to 2 lookups.
        const pipelines = await pachClient
          .pps()
          .listPipeline({projectIds: [projectId]});
        return rpcToGraphqlProject(
          await pachClient.pfs().inspectProject(projectId),
          pipelines,
        );
      });
    },
    projectDetails: async (
      _field,
      {args: {jobSetsLimit, projectId}},
      {pachClient, log},
    ) => {
      log.info({
        eventSource: 'projectDetails resolver',
        event: 'returning project details',
      });

      const [repos, pipelines, jobSets] = await Promise.all([
        pachClient.pfs().listRepo({projectIds: [projectId]}),
        pachClient.pps().listPipeline({projectIds: [projectId]}),
        pachClient.pps().listJobSets({
          projectIds: [projectId],
          limit: jobSetsLimit,
          details: false,
        }),
      ]);

      const totalSizeBytes = repos.reduce((sum, r) => sum + getSizeBytes(r), 0);

      return {
        sizeBytes: totalSizeBytes,
        sizeDisplay: formatBytes(totalSizeBytes),
        repoCount: repos.length,
        pipelineCount: pipelines.length,
        jobSets: jobSetsToGQLJobSets(jobSets),
        status: getProjectHealth(pipelines),
      };
    },
  },
  Mutation: {
    createProject: async (
      _parent,
      {args: {name, description}},
      {pachClient},
    ) => {
      await pachClient.pfs().createProject({
        name,
        description: description || undefined,
      });
      const project = await pachClient.pfs().inspectProject(name);
      return {
        id: project.project?.name || '',
        description: project.description,
        status: ProjectStatus.HEALTHY,
      };
    },
    updateProject: async (
      _parent,
      {args: {name, description}},
      {pachClient},
    ) => {
      await pachClient.pfs().createProject({
        name,
        description: description,
        update: true,
      });
      const pipelines = await pachClient
        .pps()
        .listPipeline({projectIds: [name]});
      return rpcToGraphqlProject(
        await pachClient.pfs().inspectProject(name),
        pipelines,
      );
    },
    deleteProjectAndResources: async (
      _parent,
      {args: {name}},
      {pachClient},
    ) => {
      try {
        await pachClient.pps().deletePipelines({projectIds: [name]});
        await pachClient.pfs().deleteRepos({projectIds: [name]});
        await pachClient.pfs().deleteProject({projectId: name});
        return true;
      } catch (e) {
        throw new ApolloError(`Failed to delete project '${name}'`);
      }
    },
  },
};

export default projectsResolver;
