module.exports = {
  preset: '@react-native/jest-preset',
  setupFilesAfterEnv: [
    'react-native-gesture-handler/jestSetup',
    '<rootDir>/jest.setup.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|@react-navigation|@shopify|lottie-react-native|nativewind|react-native-bootsplash|react-native-css-interop|react-native-gesture-handler|react-native-mmkv|react-native-nitro-modules|react-native-reanimated|react-native-safe-area-context|react-native-screens|react-native-worklets)/)',
  ],
};
