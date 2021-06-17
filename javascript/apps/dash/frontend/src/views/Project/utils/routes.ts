import {ExtractRouteParams, generatePath as rrGeneratePath} from 'react-router';

import {
  JOBS_PATH,
  PIPELINE_PATH,
  PROJECT_PATH,
  REPO_PATH,
  FILE_BROWSER_PATH,
  JOB_PATH,
  PIPELINE_JOB_PATH,
} from '../constants/projectPaths';

const generatePathWithSearch = <S extends string>(
  pathTemplate: string,
  params?: ExtractRouteParams<S>,
) => {
  const path = encodeURI(rrGeneratePath(pathTemplate, {...params}));
  const urlParams = new URLSearchParams(window.location.search);
  return path + '?' + urlParams.toString();
};

const generateRouteFn = <S extends string>(path: S) => {
  return (params?: ExtractRouteParams<S>, withSearch = true) => {
    return withSearch
      ? generatePathWithSearch(path, params)
      : encodeURI(rrGeneratePath(path, params));
  };
};

export const projectRoute = generateRouteFn(PROJECT_PATH);
export const jobsRoute = generateRouteFn(JOBS_PATH);
export const repoRoute = generateRouteFn(REPO_PATH);
export const pipelineRoute = generateRouteFn(PIPELINE_PATH);
export const fileBrowserRoute = generateRouteFn(FILE_BROWSER_PATH);
export const jobRoute = generateRouteFn(JOB_PATH);
export const pipelineJobRoute = generateRouteFn(PIPELINE_JOB_PATH);
