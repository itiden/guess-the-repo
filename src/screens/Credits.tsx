import React, {memo} from 'react';
import {Linking} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {Link} from '../components/Link';
import repos from '../data/repos.json';

const Header = styled.View`
  margin: 20px;
`;

const HeaderText = styled.Text`
  font-size: 16px;
`;

interface ListItemProps {
  odd: boolean;
}

const ListItem = styled(TouchableOpacity)`
  padding: 10px;
  background-color: ${(p: ListItemProps) => (p.odd ? '#efefef' : '#fefefe')};
  flex-direction: row;
`;

const RepoText = styled.Text`
  flex: 1;
`;

const Arrow = styled.Text`
  color: rgb(80, 77, 210);
`;

const Credits = memo(() => (
  <FlatList
    ListHeaderComponent={() => (
      <Header>
        <HeaderText>Credits to all the Open Source contributors!</HeaderText>
        <HeaderText>
          The app itself is created by{' '}
          <Link url="https://www.itiden.se">itiden</Link> and is open sourced at{' '}
          <Link url="https://github.com/itiden/guess-the-repo">
            github.com/itiden/guess-the-repo
          </Link>
        </HeaderText>
        <HeaderText>
          The following repos are used to create all questions.
        </HeaderText>
      </Header>
    )}
    keyExtractor={item => item.full_name}
    data={repos}
    renderItem={({item, index}) => (
      <ListItem
        onPress={() =>
          Linking.openURL(`https://www.github.com/${item.full_name}`)
        }
        odd={index % 2 !== 0}>
        <RepoText>{item.full_name}</RepoText>
        <Arrow>></Arrow>
      </ListItem>
    )}
  />
));

export default Credits;
