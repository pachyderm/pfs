import isEmpty from 'lodash/isEmpty';
import {useCallback} from 'react';
import {useForm} from 'react-hook-form';

import useCreateProject from '@dash-frontend/hooks/useCreateProject';
import {useProjects} from '@dash-frontend/hooks/useProjects';
import useRefetchOnCreate from '@dash-frontend/hooks/useRefetchOnCreate';

type CreateProjectFormValues = {
  name: string;
  description: string;
};

const useCreateProjectModal = (onHide?: () => void) => {
  const {
    createProject,
    loading: createProjectLoading,
    error,
  } = useCreateProject(onHide);
  const {
    projects,
    loading: projectsLoading,
    error: projectsError,
    refetch,
  } = useProjects();

  useRefetchOnCreate({refetch, loading: createProjectLoading});

  const formCtx = useForm<CreateProjectFormValues>({mode: 'onChange'});

  const {
    watch,
    reset,
    formState: {errors: formErrors},
  } = formCtx;

  const name = watch('name');

  const validateProjectName = useCallback(
    (value: string) => {
      if (projects && projects.map((project) => project?.id).includes(value)) {
        return 'Project name already in use';
      }
    },
    [projects],
  );

  const isFormComplete = Boolean(name) && isEmpty(formErrors);

  const handleSubmit = useCallback(
    (values: CreateProjectFormValues) => {
      createProject({
        name: values.name.trim(),
        description: values.description,
      });
      reset();
    },
    [createProject, reset],
  );

  return {
    formCtx,
    error: projectsError?.message || error?.message,
    handleSubmit,
    isFormComplete,
    loading: createProjectLoading || projectsLoading,
    validateProjectName,
    reset,
  };
};

export default useCreateProjectModal;
