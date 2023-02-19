import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './screens/Home';
import QuizScreen from './screens/Quiz';
import CreditsScreen from './screens/Credits';
import ProfileScreen from './screens/Profile';
import config from '../android/app/auth/authO-configuration';
import { Auth0Provider } from 'react-native-auth0';

export type StackParamList = {
  Credits: undefined;
  Home: undefined;
  Quiz: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const Routes = () => (
  <Auth0Provider domain={config.domain} clientId={config.clientId}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerBackTitleStyle: {
            color: 'rgb(80, 77, 210)',
          },
          headerTransparent: true,
          headerTintColor: 'rgb(80, 77, 210)',
          headerTitleStyle: {
            color: '#000',
          },
          gestureEnabled: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={{ title: 'Guess the Repo' }}
        />
        <Stack.Screen name="Credits" component={CreditsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </Auth0Provider>
);

export default Routes;
