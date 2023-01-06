import React from 'react';
import 'react-native-gesture-handler';
import Routes from './Routes';
import { AppContextProvider } from './context/AppContext';

const App = () => (
  <AppContextProvider>
    <Routes />
  </AppContextProvider>
);

export default App;
