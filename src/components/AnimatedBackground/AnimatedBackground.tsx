import {
  Canvas,
  LinearGradient,
  mix,
  Rect,
  useSharedValueEffect,
  useValue,
  vec,
} from '@shopify/react-native-skia';
import { styled } from 'nativewind';
import React, { useEffect } from 'react';
import { Dimensions } from 'react-native';
import {
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import colors from 'tailwindcss/colors';

const StyledCanvas = styled(Canvas);

export const AnimatedBackground = () => {
  const width = Dimensions.get('screen').width;
  const height = Dimensions.get('screen').height;
  const x = useValue(vec(0, 0));
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 5000 }), -1, true);
  }, [progress]);

  useSharedValueEffect(() => {
    x.current = vec(0, mix(progress.value, 0, height));
  }, progress);

  return (
    <StyledCanvas className="absolute w-full h-full">
      <Rect x={0} y={0} width={width} height={height}>
        <LinearGradient
          start={x}
          end={vec(width, height)}
          colors={[colors.violet[100], colors.violet[400]]}
        />
      </Rect>
    </StyledCanvas>
  );
};
