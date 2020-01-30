import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/Home';
import QuizScreen from './screens/Quiz';

const AppNavigator = createStackNavigator({
  home: HomeScreen,
  quiz: QuizScreen,
});

export default createAppContainer(AppNavigator);
