import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { AppNavigationContainer } from './routes/AppStackNavigator';
import { appReduxStore } from './redux/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={appReduxStore}>
        <AppNavigationContainer />
      </Provider>
    );
  }
}
