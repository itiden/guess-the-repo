import React, {FC} from 'react';
import {Linking} from 'react-native';
import styled from 'styled-components/native';

interface LinkProps {
  url: string;
}

const LinkText = styled.Text`
  color: rgb(80, 77, 210);
`;

export const Link: FC<LinkProps> = ({url, children}) => (
  <LinkText onPress={() => Linking.openURL(url)}>{children}</LinkText>
);
