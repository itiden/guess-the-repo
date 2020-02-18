import React, {ReactNode} from 'react';
import {Linking} from 'react-native';
import styled from 'styled-components/native';

interface LinkProps {
  url: string;
  children: ReactNode;
}

const LinkText = styled.Text`
  color: rgb(80, 77, 210);
`;

export const Link = (props: LinkProps) => (
  <LinkText onPress={() => Linking.openURL(props.url)}>
    {props.children}
  </LinkText>
);
