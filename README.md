# Guess the Repo React Native app

Built with React Native, TypeScript, React Navigation, NativeWind and MobX.  
App available on app stores for iOS and Android, see https://guesstherepo.itiden.se

To run:

```
yarn
npx pod-install (for ios)
yarn ios|android
```

To test:

```
yarn test
yarn lint:test
yarn format:test
```

## Deployment

This app is deployed through Expo EAS.

### Build test app

1. Checkout whatever branch you want to test and have a clean state
1. Run `yarn deploy:test`
1. Build will be available on [EAS](https://expo.dev/)

### Build app for AppStore/Google Play

1. Checkout `main` branch and have a clean state
1. Update build numbers in Android gradle and Xcode
1. Run `yarn deploy:prod`
1. Build will be submitted to TestFlight and Google Play Open Beta
