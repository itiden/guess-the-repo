import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { Button } from '../components/Button';
import { StackParamList } from '../Routes';

type Props = NativeStackNavigationProp<StackParamList, 'Home'>;

const HomeScreen = memo(() => {
  const navigation = useNavigation<Props>();

  return (
    <>
      <AnimatedBackground />
      <View className="justify-center flex-1 m-10">
        <View className="justify-center flex-1 m-5">
          <Text className="mb-4 text-3xl text-center">Guess the Repo</Text>
          <Button label="Play!" onPress={() => navigation.navigate('Quiz')} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Credits')}>
          <Text className="text-lg text-center text-violet-700">Credits</Text>
        </TouchableOpacity>
      </View>
    </>
  );
});

export default HomeScreen;
