import LottieView from 'lottie-react-native';
import { observer } from 'mobx-react';
import { styled } from 'nativewind';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { Button } from '../components/Button';
import { useQuizStore } from '../context/AppContext';
import { generateQuestions, Question } from '../utils/questionUtil';

const StyledLottieView = styled(LottieView);

const questions = generateQuestions();

function getNewQuestion(answeredQuestions: Question[]) {
  const filteredQuestions = questions.filter(
    (q) =>
      !answeredQuestions
        .map((aq) => `${aq.type}${aq.repo.full_name}`)
        .includes(`${q.type}${q.repo.full_name}`),
  );
  // All questions answered! Good job!
  if (filteredQuestions.length === 0) {
    return questions[Math.floor(Math.random() * questions.length)];
  }
  return filteredQuestions[
    Math.floor(Math.random() * filteredQuestions.length)
  ];
}

type AnswerState = 'waiting' | 'correct' | 'wrong';

const QuizScreen = () => {
  const quizStore = useQuizStore();
  const [question, setQuestion] = useState(
    getNewQuestion(quizStore.answeredQuestions),
  );
  const [state, setState] = useState<AnswerState>('waiting');

  const answer = (no: number) => {
    const correct = no === question.correct;
    quizStore.addAnswer({
      correct,
      question,
    });
    setState(correct ? 'correct' : 'wrong');
  };

  const nextQuestion = () => {
    setQuestion(getNewQuestion(quizStore.answeredQuestions));
    setState('waiting');
  };

  return (
    <>
      <AnimatedBackground />
      <SafeAreaView className="items-center justify-center flex-1 m-5">
        <View className="items-center justify-center flex-1 w-full max-w-xl">
          {state === 'correct' && (
            <StyledLottieView
              className="w-[300px] h-[300px]"
              source={require('../assets/lottie/correct.json')}
              autoPlay
              loop={false}
              onAnimationFinish={() => nextQuestion()}
            />
          )}
          {state === 'wrong' && (
            <StyledLottieView
              className="w-[300px] h-[300px]"
              source={require('../assets/lottie/not-correct.json')}
              autoPlay
              loop={false}
              onAnimationFinish={() => nextQuestion()}
            />
          )}
          {state === 'waiting' && (
            <>
              <View className="flex-row items-end flex-2">
                <Text className="flex-1 text-xl">{question.question}</Text>
              </View>
              <View className="justify-start w-full pt-5 flex-3">
                {question.answers.map((a, index) => {
                  const answerButtonProps = {
                    label: a,
                    onPress: () => answer(index + 1),
                    marginBottom: index !== question.answers.length - 1,
                  };
                  return <Button key={index} {...answerButtonProps} />;
                })}
              </View>
            </>
          )}
        </View>
        <View className="items-center">
          <Text className="text-xl">
            Your Score {quizStore.score} (
            {((quizStore.score / questions.length) * 100).toFixed(2)}%)
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default observer(QuizScreen);
