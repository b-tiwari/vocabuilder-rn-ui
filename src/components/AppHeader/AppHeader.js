import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, StyleSheet } from 'react-native';
import { Header, Left, Title,Subtitle, Right, Button, Body, Icon } from 'native-base';
import { GoogleSignin } from 'react-native-google-signin';

export default class AppHeader extends Component {
  
  constructor(props) {
      super(props);
  }

  render() {
    return (
          <Header style={styles.headerBar} iosBarStyle="dark-content" androidStatusBarColor="lightgray">
            
            <Left>
              <TouchableHighlight style={styles.profileImgContainer} >
                <Image 
                  source={{ uri: this.props.googleUser.photo }} 
                  style={styles.profileImg} />
              </TouchableHighlight>
            </Left>
            
            <Body style={{ flex: 3 }}>
                <Title>{this.props.title} </Title>
                <Subtitle>{this.props.googleUser.email || 'not found'}</Subtitle>
            </Body>
            
            <Right>
              <Button transparent dark onPress={() => this.signOut()}>
                <Text>Log out</Text>
              </Button>
            </Right>
          </Header>
    );
  }

  /**
   * @name signOut
   */
  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {
      // console.error(error);
    } finally {
      this.props.GoogleSignIn_logOut();
      this.props.navigation.navigate('SignIn');
    }
  };

  // subscribe to 'didFocus' event of react-navigation
  // whenever this component is loaded(focused), check if an authenticated user is avaible
  // if not, navigate the user back to SignIn screen
  componentFocusSubscription = this.props.navigation.addListener('didFocus', () => {
    console.log('in componentFocusSubscription of AppHeader');
        if(!this.props.googleUser){
          this.props.navigation.navigate('SignIn');
        }
  });
  componentDidMount() {
    console.log('in componentDidMount of AppHeader');
    this.componentFocusSubscription.remove();
  }
  componentWillUnmount() {
    console.log('in componentWillUnmount of AppHeader');
      // this.componentFocusSubscription.remove();
  }
}

const styles = StyleSheet.create({
  headerBar: {
    backgroundColor: 'white', 
    shadowColor: 'black', 
    shadowOpacity: 1, 
    elevation: 4
  },
  profileImgContainer: {
    marginLeft: 5,
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  profileImg: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});
