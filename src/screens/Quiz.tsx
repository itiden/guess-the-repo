import LottieView from 'lottie-react-native';
import {observer} from 'mobx-react';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Button} from '../components/Button';
import {useQuizStore} from '../context/AppContext';
import {generateQuestions, Question} from '../utils/questionUtil';

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
  align-items: flex-end;
  flex-direction: row;
`;

const BottomHalf = styled.View`
  flex: 3;
  justify-content: flex-start;
  width: 100%;
  padding-top: 20px;
`;

const QuestionText = styled.Text`
  font-size: 22px;
  flex: 1;
`;

const StyledLottieView = styled(LottieView)`
  width: 300px;
  height: 300px;
`;

const questions = generateQuestions();

function getNewQuestion(answeredQuestions: Question[]) {
  const filteredQuestions = questions.filter(
    q =>
      !answeredQuestions
        .map(aq => `${aq.type}${aq.repo.full_name}`)
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
    <Wrapper>
      <Container>
        {state === 'correct' && (
          <StyledLottieView
            source={require('../assets/lottie/correct.json')}
            autoPlay
            loop={false}
            onAnimationFinish={() => nextQuestion()}
          />
        )}
        {state === 'wrong' && (
          <StyledLottieView
            source={require('../assets/lottie/not-correct.json')}
            autoPlay
            loop={false}
            onAnimationFinish={() => nextQuestion()}
          />
        )}
        {state === 'waiting' && (
          <>
            <TopHalf>
              <QuestionText>{question.question}</QuestionText>
            </TopHalf>
            <BottomHalf>
              {question.answers.map((a, index) => {
                const answerButtonProps = {
                  label: a,
                  onPress: () => answer(index + 1),
                  marginBottom: index !== question.answers.length - 1,
                };
                return <Button key={index} {...answerButtonProps} />;
              })}
            </BottomHalf>
          </>
        )}
      </Container>
      <Footer>
        <FooterText>
          Your Score {quizStore.score} (
          {((quizStore.score / questions.length) * 100).toFixed(2)}%)
        </FooterText>
      </Footer>
    </Wrapper>
  );
};

export default observer(QuizScreen);
