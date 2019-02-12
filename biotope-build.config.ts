import { Options } from '@biotope/build';

const getVariables = (environment: string) => ({
  [environment]: { ENVIRONMENT: environment },
});

const options: Options = {
  webpack: {
    alias: {
      '^components$': './src/components',
      '^services$': './src/services',
      '^theme$': './src/theme/index.scss',
    },
  },
  runtime: {
    ENVIRONMENT: 'local',
    ROOTID: 'root-element',

    ...getVariables('development'),
    ...getVariables('production'),
  },
};

export = options;
