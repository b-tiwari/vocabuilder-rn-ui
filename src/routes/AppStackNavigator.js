import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/Home';
import SignIn from '../screens/SignIn';
import AddWordScreen from '../screens/AddWord/AddWordConnected';

const AppStackNavigator = createStackNavigator(
    {
      Home: { screen: HomeScreen },
      SignIn: { screen: SignIn},
      AddWord: { screen: AddWordScreen }
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
