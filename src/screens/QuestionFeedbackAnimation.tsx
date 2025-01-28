import LottieView from 'lottie-react-native';
import { styled } from 'nativewind';
import React, { useCallback, useEffect } from 'react';
import Animated, {
  runOnJS,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
const StyledLottieView = styled(Animated.createAnimatedComponent(LottieView));

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
    <StyledLottieView
      className="w-[300px] h-[300px]"
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
