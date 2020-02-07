// jest.config.js
const {defaults: tsjPreset} = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  transform: {
    ...tsjPreset.transform,
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  cacheDirectory: '.jest/cache',
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './__setup__/jestSetupFile.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@?react-navigation|@react-native-community|mobx)',
  ],
  moduleNameMapper: {
    '^mobx$': '<rootDir>/node_modules/mobx/lib/mobx.module',
    '^mobx-react-lite$': '<rootDir>/node_modules/mobx-react-lite/dist/native',
    '^mobx-react$':
      '<rootDir>/node_modules/mobx-react/dist/mobx-react.rn.module',
  },
};
