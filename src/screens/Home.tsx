import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { Button } from '../components/Button';
import { StackParamList } from '../Routes';
import AntDesign from 'react-native-vector-icons/AntDesign';

type Props = NativeStackNavigationProp<StackParamList, 'Home'>;

const HomeScreen = memo(() => {
  const navigation = useNavigation<Props>();

  return (
    <>
      <AnimatedBackground />
      <View className="w-14 m-auto">
        <AntDesign.Button
          name="user"
          backgroundColor="rgb(80, 77, 210)"
          color={'white'}
          onPress={() => navigation.navigate('Profile')}
          size={40}
        />
      </View>
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
