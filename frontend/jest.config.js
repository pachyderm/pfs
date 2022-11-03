/* eslint-disable @typescript-eslint/no-var-requires */

const {pathsToModuleNameMapper} = require('ts-jest/utils');

const baseConfig = require('../jest.config.js');

const tsConfig = require('./tsconfig.json');

const moduleNameMapper = pathsToModuleNameMapper(
  tsConfig.compilerOptions.paths,
  {
    prefix: '<rootDir>/src',
  },
);

baseConfig.moduleNameMapper = {
  '\\.(css)$': 'identity-obj-proxy',
  '\\.(gif|jpg|png)$': '<rootDir>/jest.file.mock.js',
  '\\.svg': '<rootDir>/jest.svg.mock.js',
  ...moduleNameMapper,
  // react: '<rootDir>/node_modules/react/react.development.js',
  // 'react-dom': '<rootDir>/node_modules/react-dom',
  d3: '<rootDir>/node_modules/d3/dist/d3.min.js',
  '^d3-(.*)$': `d3-$1/dist/d3-$1`,
};

baseConfig.timers = 'real';
baseConfig.testEnvironment = './dash-jsdom-environment';

module.exports = baseConfig;
