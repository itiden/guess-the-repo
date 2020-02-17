import {observer} from 'mobx-react';
import React from 'react';
import 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import {Button} from '../components/Button';

const Wrapper = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
  flex: 1;
  margin: 40px;
`;

const Title = styled.Text`
  font-size: 36px;
  margin: 20px;
  text-align: center;
`;

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <Title>Guess the Repo</Title>
      <Button label="Play!" onPress={() => navigation.navigate('Quiz')} />
    </Wrapper>
  );
};

export default observer(HomeScreen);
