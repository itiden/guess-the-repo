require('@shopify/react-native-skia/jestSetup');

jest.mock('react-native-worklets', () =>
  require('react-native-worklets/lib/module/mock'),
);

jest.mock('react-native-reanimated', () => {
  const createAnimatedComponent = (component) => component;

  return {
    __esModule: true,
    default: { createAnimatedComponent },
    createAnimatedComponent,
    runOnJS: (callback) => callback,
    useDerivedValue: (updater) => ({ value: updater() }),
    useSharedValue: (value) => ({ value }),
    withRepeat: (value) => value,
    withTiming: (value) => value,
  };
});

jest.mock('react-native-mmkv', () => ({
  createMMKV: () => {
    const data = new Map();

    return {
      set: (key, value) => data.set(key, value),
      getString: (key) => data.get(key),
      remove: (key) => data.delete(key),
    };
  },
}));

jest.mock('react-native-bootsplash', () => ({
  hide: jest.fn().mockResolvedValue(undefined),
}));

jest.mock('mobx-react', () => ({
  observer: (component) => component,
}));
