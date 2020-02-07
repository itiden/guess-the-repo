import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './screens/Home';
import QuizScreen from './screens/Quiz';

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{gestureEnabled: false}}>
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
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
