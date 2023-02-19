import React from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { Button } from '../components/Button';
import { useAuth0 } from 'react-native-auth0';
import { StackParamList } from '../Routes';

type Props = NativeStackNavigationProp<StackParamList, 'Home'>;

const ProfileScreen = () => {
  const { clearSession, user } = useAuth0();
  const navigation = useNavigation<Props>();

  const handleLogout = async () => {
    try {
      await clearSession();
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Failed to logout');
    }
  };

  return (
    <>
      <AnimatedBackground />
      <View className="justify-center flex-1 m-10">
        <View className="justify-center flex-1 m-5">
          <Text className="mb-4 text-3xl text-center">My Profile</Text>
          {user?.picture && (
            <Image
              className=" ml-auto mr-auto"
              source={{ uri: `${user.picture}` }}
              style={{ width: 200, height: 200 }}
            />
          )}

          <Text className="mb-4 text-2xl text-center">
            Name: {user?.nickname}
          </Text>
          <Button label="Log out" onPress={handleLogout} />
        </View>
      </View>
    </>
  );
};

export default ProfileScreen;
