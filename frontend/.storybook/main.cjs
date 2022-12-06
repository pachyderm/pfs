const path = require('path');
const svgr = require('@svgr/rollup');
const customMedia = require('postcss-custom-media');
const flexbugFixes = require('postcss-flexbugs-fixes');
const normalize = require('postcss-normalize');
const presetEnv = require('postcss-preset-env');
const {mergeConfig, loadConfigFromFile} = require('vite');
const tsconfigPaths = require('vite-tsconfig-paths');

module.exports = {
  async viteFinal(config) {
    const userConfig = {
      build: {
        sourcemap: true,
        target: 'ES2018',
        minify: false,
      },
      resolve: {
        alias: {
          '@pachyderm/components': path.resolve(__dirname, '../components/src'),
          '@pachyderm/components/*': path.resolve(__dirname, '../components/src/*'),
        },
      },
      css: {
        postcss: {
          plugins: [customMedia(), normalize(), flexbugFixes(), presetEnv()],
        },
      },
      plugins: [tsconfigPaths, svgr()],
    };
    return mergeConfig(config, userConfig);
  },
  stories: ['../components/src/**/*.stories.tsx'],
  addons: [
    "@storybook/addon-essentials",
    '@storybook/addon-links',
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite"
  },
  staticDirs: ['../components/public'],
  features: {
    "storyStoreV7": true
  },
};
