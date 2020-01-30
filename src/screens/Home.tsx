import React from 'react';
import 'react-native-gesture-handler';
import styled from 'styled-components/native';
import Button from '../components/Button';
import {useNavigation} from 'react-navigation-hooks';

const Wrapper = styled.SafeAreaView`
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Title = styled.Text`
  font-size: 36px;
  margin: 20px;
`;

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <Title>Guess the Repo</Title>
      <Button label="Play!" onPress={() => navigation.navigate('quiz')} />
    </Wrapper>
  );
};

HomeScreen.navigationOptions = {
  headerShown: false,
};

export default HomeScreen;
