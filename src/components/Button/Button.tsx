import React from 'react';
import styled from 'styled-components/native';

interface WrapperProps {
  marginBottom?: boolean;
}

const Wrapper = styled.TouchableOpacity`
  width: 100%;
  border-radius: 20px;
  background-color: #000000;
  padding: 10px 20px;
  ${(p: WrapperProps) => p.marginBottom && 'margin-bottom: 20px'}
`;

const Label = styled.Text`
  font-size: 24px;
  color: #fff;
  text-align: center;
`;

interface ButtonProps {
  label: string;
  marginBottom?: boolean;
  onPress: () => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <Wrapper onPress={props.onPress} marginBottom={props.marginBottom}>
      <Label>{props.label}</Label>
    </Wrapper>
  );
};
