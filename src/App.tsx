import React from 'react';
import 'react-native-gesture-handler';
import Routes from './Routes';
import {AppContextProvider} from './context/AppContext';
import {enableScreens} from 'react-native-screens';
import codePush from 'react-native-code-push';

enableScreens();

let codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};

const App = () => (
  <AppContextProvider>
    <Routes />
  </AppContextProvider>
);

export default codePush(codePushOptions)(App);
