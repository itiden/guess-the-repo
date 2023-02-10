import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { AppContextProvider } from './context/AppContext';
import Routes from './Routes';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);
  return (
    <AppContextProvider>
      <Routes />
    </AppContextProvider>
  );
};

export default App;
