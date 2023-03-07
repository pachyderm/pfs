import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as requestAPI from '../../../../../handler';
import {mockedRequestAPI} from 'utils/testUtils';
import Pipeline from '../Pipeline';
jest.mock('../../../../../handler');

describe('PPS screen', () => {
  let setShowPipeline = jest.fn();
  const mockRequestAPI = requestAPI as jest.Mocked<typeof requestAPI>;

  beforeEach(() => {
    setShowPipeline = jest.fn();
    mockRequestAPI.requestAPI.mockImplementation(mockedRequestAPI({}));
  });

  describe('spec preview', () => {
    it('proper preview', async () => {
      const {getByTestId, findByTestId} = render(
        <Pipeline setShowPipeline={setShowPipeline} />,
      );

      const inputPipelineName = await findByTestId(
        'Pipeline__inputPipelineName',
      );
      userEvent.type(inputPipelineName, 'ThisPipelineIsNamedFred');

      const inputImageName = await findByTestId('Pipeline__inputImageName');
      userEvent.type(inputImageName, 'ThisImageIsNamedLucy');

      const inputRequirements = await findByTestId(
        'Pipeline__inputRequirements',
      );
      userEvent.type(inputRequirements, './requirements.txt');

      const inputInputSpec = await findByTestId('Pipeline__inputSpecInput');
      userEvent.type(
        inputInputSpec,
        `pfs:
  repo: data
  branch: primary
  glob: /`,
      );
      // expect(setInputSpec).toHaveBeenCalled();

      const specPreview = getByTestId('Pipeline__specPreview');
      expect(specPreview).toHaveValue(
        `name: ThisPipelineIsNamedFred
transform:
  image: ThisImageIsNamedLucy
input:
  pfs:
    repo: data
    branch: primary
    glob: /
`,
      );
    });
  });
});
