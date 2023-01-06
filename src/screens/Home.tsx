import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../components/Button';
import { StackParamList } from '../Routes';

type Props = NativeStackNavigationProp<StackParamList, 'Home'>;

const HomeScreen = memo(() => {
  const navigation = useNavigation<Props>();
  return (
    <View className="justify-center flex-1 m-10">
      <View className="justify-center flex-1 m-5">
        <Text className="text-3xl text-center mb-4">Guess the Repo</Text>
        <Button label="Play!" onPress={() => navigation.navigate('Quiz')} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Credits')}>
        <Text className="text-lg text-center text-primary">Credits</Text>
      </TouchableOpacity>
    </View>
  );
});

export default HomeScreen;
