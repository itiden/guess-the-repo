import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { AppContextProvider } from './context/AppContext';
import Routes from './Routes';
import RNBootSplash from 'react-native-bootsplash';
import { StatusBar } from 'react-native';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);
  return (
    <AppContextProvider>
      <StatusBar translucent barStyle="dark-content" />
      <Routes />
    </AppContextProvider>
  );
};

export default App;
