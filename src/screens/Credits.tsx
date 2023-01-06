import { cx } from 'class-variance-authority';
import React from 'react';
import { Linking, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Link } from '../components/Link';
import { FlashList } from '@shopify/flash-list';
import repos from '../data/repos.json';

const CreditsHeader = () => (
  <View className="m-5">
    <Text className="text-base">
      Credits to all the Open Source contributors!
    </Text>
    <Text className="text-base">
      The app itself is created by{' '}
      <Link url="https://www.itiden.se">itiden</Link> and is open sourced at{' '}
      <Link url="https://github.com/itiden/guess-the-repo">
        github.com/itiden/guess-the-repo
      </Link>
    </Text>
    <Text className="text-base">
      The following repos are used to create all questions.
    </Text>
  </View>
);

const Credits = () => (
  <FlashList
    ListHeaderComponent={CreditsHeader}
    keyExtractor={(item) => item.full_name}
    data={repos}
    estimatedItemSize={200}
    renderItem={({ item, index }) => (
      <TouchableOpacity
        className={cx(
          'p-2 flex-row',
          index % 2 !== 0 ? 'bg-[#efefef]' : 'bg-[#fefefe]',
        )}
        onPress={() =>
          Linking.openURL(`https://www.github.com/${item.full_name}`)
        }
      >
        <Text className="flex-1">{item.full_name}</Text>
        <Text className="text-primary">&gt;</Text>
      </TouchableOpacity>
    )}
  />
);

export default Credits;
