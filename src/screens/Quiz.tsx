import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import styled from 'styled-components/native';
import Button from '../components/Button';
import {generateQuestions} from '../utils/questionUtil';

const Wrapper = styled.SafeAreaView`
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Question = styled.Text`
  font-size: 24px;
  margin: 20px;
`;

const questions = generateQuestions();

const QuizScreen = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = questions[questionIndex];

  const answer = (no: number) => {
    setQuestionIndex(questionIndex + 1);
  };

  return (
    <Wrapper>
      <Question>{question.question}</Question>
      <Button label={question.anwers[0]} onPress={() => answer(1)} />
      <Button label={question.anwers[1]} onPress={() => answer(2)} />
      <Button label={question.anwers[2]} onPress={() => answer(3)} />
      <Button label={question.anwers[3]} onPress={() => answer(4)} />
    </Wrapper>
  );
};

export default QuizScreen;
