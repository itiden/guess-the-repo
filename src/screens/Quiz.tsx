import LottieView from 'lottie-react-native';
import {observer} from 'mobx-react';
import React, {useState} from 'react';
import 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {Button} from '../components/Button';
import {generateQuestions} from '../utils/questionUtil';
import {useQuizStore} from '../context/AppContext';

const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const Container = styled.SafeAreaView`
  flex: 1;
  max-width: 600px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Footer = styled.View`
  align-items: center;
`;

const FooterText = styled.Text`
  font-size: 20px;
`;

const TopHalf = styled.View`
  flex: 2;
  justify-content: flex-end;
  padding-bottom: 20px;
`;

const BottomHalf = styled.View`
  flex: 3;
  justify-content: flex-start;
  width: 100%;
`;

const Question = styled.Text`
  font-size: 24px;
`;

const StyledLottieView = styled(LottieView)`
  width: 300px;
  height: 300px;
`;

const questions = generateQuestions();

const QuizScreen = () => {
  const [question, setQuestion] = useState(questions[0]);
  const [isCorrect, setIsCorrect] = useState<boolean>();
  const quizStore = useQuizStore();

  const answer = (no: number) => {
    const correct = no === question.correct;
    if (correct) {
      quizStore.addScore();
    }
    setIsCorrect(correct);
  };

  const nextQuestion = () => {
    const nextQuestions = questions.filter(
      nextQuestion => nextQuestion.type !== question.type,
    );
    setQuestion(
      nextQuestions[Math.floor(Math.random() * nextQuestions.length)],
    );
    setIsCorrect(undefined);
  };

  return (
    <Wrapper>
      <Container>
        {isCorrect !== undefined && isCorrect && (
          <StyledLottieView
            source={require('../assets/lottie/correct.json')}
            autoPlay
            loop={false}
            onAnimationFinish={() => nextQuestion()}
          />
        )}
        {isCorrect !== undefined && !isCorrect && (
          <StyledLottieView
            source={require('../assets/lottie/not-correct.json')}
            autoPlay
            loop={false}
            onAnimationFinish={() => nextQuestion()}
          />
        )}
        {isCorrect === undefined && (
          <>
            <TopHalf>
              <Question>{question.question}</Question>
            </TopHalf>
            <BottomHalf>
              <Button
                label={question.anwers[0]}
                onPress={() => answer(1)}
                marginBottom
              />
              <Button
                label={question.anwers[1]}
                onPress={() => answer(2)}
                marginBottom
              />
              <Button
                label={question.anwers[2]}
                onPress={() => answer(3)}
                marginBottom
              />
              <Button label={question.anwers[3]} onPress={() => answer(4)} />
            </BottomHalf>
          </>
        )}
      </Container>
      <Footer>
        <FooterText>Score {quizStore.score}</FooterText>
      </Footer>
    </Wrapper>
  );
};

export default observer(QuizScreen);
