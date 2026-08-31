import LottieView from 'lottie-react-native';
import React, { useCallback, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  runOnJS,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const styles = StyleSheet.create({
  animation: { width: 300, height: 300 },
});

type QuestionFeedbackAnimationProps = {
  correct: boolean;
  onAnimationFinish: () => void;
};

export const QuestionFeedbackAnimation = ({
  correct,
  onAnimationFinish,
}: QuestionFeedbackAnimationProps) => {
  const progress = useSharedValue<number | undefined>(0);

  const handleAnimationFinish = useCallback(onAnimationFinish, [
    onAnimationFinish,
  ]);

  useEffect(() => {
    progress.value = withTiming(1, { duration: 1200 }, () => {
      runOnJS(handleAnimationFinish)();
    });
  }, [progress, handleAnimationFinish]);

  return (
    <AnimatedLottieView
      style={styles.animation}
      source={
        correct
          ? require('../assets/lottie/correct.json')
          : require('../assets/lottie/not-correct.json')
      }
      loop={false}
      progress={progress}
    />
  );
};
