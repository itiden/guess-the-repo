import {
  Canvas,
  LinearGradient,
  mix,
  Rect,
  vec,
} from '@shopify/react-native-skia';
import React, { useEffect } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import {
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import colors from 'tailwindcss/colors';

export const AnimatedBackground = () => {
  const width = Dimensions.get('screen').width;
  const height = Dimensions.get('screen').height;
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(withTiming(1, { duration: 5000 }), -1, true);
  }, [progress]);

  const start = useDerivedValue(() => {
    return vec(0, mix(progress.value, 0, height));
  });

  return (
    <Canvas style={StyleSheet.absoluteFill}>
      <Rect x={0} y={0} width={width} height={height}>
        <LinearGradient
          start={start}
          end={vec(width, height)}
          colors={[colors.violet[100], colors.violet[400]]}
        />
      </Rect>
    </Canvas>
  );
};
