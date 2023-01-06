import React from 'react';
import 'react-native-gesture-handler';
import Routes from './Routes';
import { AppContextProvider } from './context/AppContext';
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia';
import { Dimensions } from 'react-native';
import { styled } from 'nativewind';

const StyledCanvas = styled(Canvas);

const App = () => {
  const width = Dimensions.get('screen').width;
  const height = Dimensions.get('screen').height;
  return (
    <AppContextProvider>
      <StyledCanvas className="flex-1 absolute">
        <Rect x={0} y={0} width={width} height={height}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(width, height)}
            colors={['blue', 'yellow']}
          />
        </Rect>
      </StyledCanvas>
      <Routes />
    </AppContextProvider>
  );
};

export default App;
