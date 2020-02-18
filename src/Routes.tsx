import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './screens/Home';
import QuizScreen from './screens/Quiz';
import CreditsScreen from './screens/Credits';

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerBackTitleStyle: {
          color: 'rgb(80, 77, 210)',
        },
        headerTintColor: 'rgb(80, 77, 210)',
        headerTitleStyle: {
          color: '#000',
        },
        gestureEnabled: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home', headerShown: false}}
      />
      <Stack.Screen
        name="Quiz"
        component={QuizScreen}
        options={{title: 'Guess the Repo'}}
      />
      <Stack.Screen name="Credits" component={CreditsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
