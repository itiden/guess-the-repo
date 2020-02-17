import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';
jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
jest.mock('react-native-screens', () => {
  const RealComponent = jest.requireActual('react-native-screens');
  RealComponent.enableScreens = function() {};
  return RealComponent;
});
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.mock('mobx-persist', () => {
  const RealComponent = jest.requireActual('mobx-persist');
  RealComponent.create = config => (key, store) => {};
  return RealComponent;
});
jest.mock('react-native-code-push', () => {
  const cp = (_) => (app) => app;
  Object.assign(cp, {
    InstallMode: {},
    CheckFrequency: {},
    SyncStatus: {},
    UpdateState: {},
    DeploymentStatus: {},
    DEFAULT_UPDATE_DIALOG: {},

    checkForUpdate: jest.fn(),
    codePushify: jest.fn(),
    getConfiguration: jest.fn(),
    getCurrentPackage: jest.fn(),
    getUpdateMetadata: jest.fn(),
    log: jest.fn(),
    notifyAppReady: jest.fn(),
    notifyApplicationReady: jest.fn(),
    sync: jest.fn(),
  });
  return cp;
});