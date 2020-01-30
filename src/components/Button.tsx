import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.TouchableOpacity`
  border-radius: 20px;
  background-color: #000000;
  padding: 10px 20px;
`;

const Label = styled.Text`
  font-size: 24px;
  color: #fff;
`;

interface ButtonProps {
  label: string;
  onPress: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <Wrapper onPress={props.onPress}>
      <Label>{props.label}</Label>
    </Wrapper>
  );
};

export default Button;
