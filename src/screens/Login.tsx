import React from 'react';
import { View, Text, Alert } from 'react-native';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { Button } from '../components/Button';
import { useAuth0 } from 'react-native-auth0';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { StackParamList } from '../Routes';

type Props = NativeStackNavigationProp<StackParamList, 'Login'>;

const LoginScreen = () => {
  const { authorize, getCredentials } = useAuth0();
  const navigation = useNavigation<Props>();

  const onLogin = async () => {
    try {
      await authorize({ scope: 'openid profile email' });
      const { accessToken } = await getCredentials(); //accessToken Will be used;
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Failed to logout ');
    }
  };

  return (
    <>
      <AnimatedBackground />
      <View className="justify-center flex-1 m-10">
        <View className="justify-center flex-1 m-5">
          <Text className="mb-4 text-3xl text-center">Login with Github</Text>
          <Button
            label="Login"
            onPress={() => {
              onLogin();
            }}
          />
        </View>
      </View>
    </>
  );
};

export default LoginScreen;
