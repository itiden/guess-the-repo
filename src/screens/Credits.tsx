import React from 'react';
import {FlatList, Text} from 'react-native';
import repos from '../data/repos.json';
import styled from 'styled-components/native';

const Header = styled.View`
  margin: 20px;
`;

const HeaderText = styled.Text`
  font-size: 16px;
`;

interface ListItemProps {
  odd: boolean;
}

const ListItem = styled.View`
  padding: 10px;
  background-color: ${(p: ListItemProps) => (p.odd ? '#efefef' : '#fefefe')};
`;

const Credits = () => (
  <FlatList
    ListHeaderComponent={() => (
      <Header>
        <HeaderText>Credits to all the Open Source contributors!</HeaderText>
        <HeaderText>
          The following repos are used to create all questions.
        </HeaderText>
      </Header>
    )}
    keyExtractor={item => item.full_name}
    data={repos}
    renderItem={({item, index}) => (
      <ListItem odd={index % 2 !== 0}>
        <Text>{item.full_name}</Text>
      </ListItem>
    )}
  />
);

export default Credits;
