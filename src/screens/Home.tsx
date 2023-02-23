import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { memo, useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, Alert } from 'react-native';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { Button } from '../components/Button';
import { StackParamList } from '../Routes';
import { useAuth0 } from 'react-native-auth0';

type Props = NativeStackNavigationProp<StackParamList, 'Home'>;

const HomeScreen = memo(() => {
  const navigation = useNavigation<Props>();
  const { user, authorize } = useAuth0();
  const [buttonText, setButtonText] = useState('Login');

  const onLogin = async () => {
    if (user) {
      navigation.navigate('Profile');
    } else {
      try {
        setButtonText('Loading...');
        await authorize({ scope: 'openid profile email' });
        setButtonText('Profile');
      } catch (error) {
        Alert.alert('Failed to logout ');
        setButtonText('Login');
      }
    }
  };

  useEffect(() => {
    user ? setButtonText('Profile') : setButtonText('Login');
  }, [user]);

  return (
    <>
      <AnimatedBackground />
      <View className="  flex-1 m-10">
        <View className="justify-center  flex-1 ">
          <Text className="mb-4 text-3xl text-center">Guess the Repo</Text>
          <Button label="Play!" onPress={() => navigation.navigate('Quiz')} />
          <View className="justify-center mt-2 ">
            <Button
              label={buttonText}
              onPress={() => {
                onLogin();
              }}
            />
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Credits')}>
          <Text className="flex1 text-lg text-center text-violet-700 ">
            Credits
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
});

export default HomeScreen;
