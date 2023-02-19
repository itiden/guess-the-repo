import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { memo } from 'react';
import { Text, TouchableOpacity, View,Alert } from 'react-native';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { Button } from '../components/Button';
import { StackParamList } from '../Routes';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useAuth0 } from 'react-native-auth0';

type Props = NativeStackNavigationProp<StackParamList, 'Home'>;

const HomeScreen = memo(() => {
  const navigation = useNavigation<Props>();
  const { clearSession, user,getCredentials,authorize } = useAuth0();


  const handleLogin=()=>{

    navigation.navigate('Quiz')
  }

  const onLogin = async () => {
    try {
      await authorize({ scope: 'openid profile email' });
      const { accessToken } = await getCredentials();
    } catch (error) {
      Alert.alert('Failed to logout ');
    }
  };

  return (
    <>
      <AnimatedBackground />
      <View className="  flex-1 m-10">
        <View className="justify-center  flex-1 ">
          <Text className="mb-4 text-3xl text-center">Guess the Repo</Text>
          <Button label="Play!" onPress={() => navigation.navigate('Quiz')} />
          {!user ? <View className="justify-center mt-2 ">
          <Button label="Login" onPress={() => {onLogin()}} />
        </View> :   <View className="justify-center  mt-2">
          <Button label="Profile" onPress={() => {navigation.navigate("Profile")}} />
        </View>}
        </View> 
        <TouchableOpacity onPress={() => navigation.navigate('Credits')}>
          <Text className="flex1 text-lg text-center text-violet-700 ">Credits</Text>
        </TouchableOpacity>
      </View>
    </>
  );
});

export default HomeScreen;
