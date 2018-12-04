import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/Home';
import SignIn from '../screens/SignIn';

const AppStackNavigator = createStackNavigator(
    {
      Home: { screen: HomeScreen },
      SignIn: { screen: SignIn}
    },
    {
      initialRouteName: 'SignIn',
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      }
    }
  );

export const AppNavigationContainer = createAppContainer(AppStackNavigator);
