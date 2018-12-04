import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import GoogleAuthentication  from '../components/GoogleAuthentication/GoogleAuthenticationConnected';

export default class SignIn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <GoogleAuthentication navigation={this.props.navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
