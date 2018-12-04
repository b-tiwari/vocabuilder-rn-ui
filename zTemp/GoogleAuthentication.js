import React, { Component } from 'react';
import {
    ActivityIndicator,
    Alert,
    StyleSheet,
    Text,
    View,
    Button
  } from 'react-native'
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';

export default class GoogleAuthentication extends Component  {
    state = {
        isSigninInProgress: false,
        isUserSignedIn: false,
        loggedInUser: {},
        checkingSignedInStatus: true
    }

    constructor(props) {
        super(props);
        GoogleSignin.configure();
    }

    componentDidMount() {
        this.isUserSignedIn();
    }

    render() {
        if (this.state.checkingSignedInStatus) {
            return (
                <View>
                    <ActivityIndicator size="large" color="#00ff00" />
                </View>
            );
        } else {
            return (
                <View>
                    <Text>Sign in with Google</Text>
                    <GoogleSigninButton
                        style={{ width: 200, height: 48 }}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={this.onSignInPress}
                        disabled={this.state.isSigninInProgress} />
                </View>
            );
        }
    }

    
    /**
     * @name onSignInPress
     */
    onSignInPress = async () => {
        try {
            this.setState({isSigninInProgress: true});
            const loggedInUser = await GoogleSignin.signIn();
            this.props.navigation.navigate('Home');
        } catch (error) {
            this.handleSignInError(error);
            this.setState({ loggedInUser: {}, isSigninInProgress: false, isUserSignedIn: false });
        }
    };

    /**
     * @name isUserSignedIn
     */
    isUserSignedIn = async () => {
        this.setState ({ isUserSignedIn: false, checkingSignedInStatus: true });
        const isUserSignedIn = await GoogleSignin.isSignedIn();
        if (isUserSignedIn) {
            this.props.navigation.navigate('Home');
        } else {
            this.setState({ isUserSignedIn, checkingSignedInStatus: false });
        }
    };
    
    /**
     * @name getCurrentUserInfo
     */
    getCurrentUserInfo = async () => {
        try {
            const loggedInUser = await GoogleSignin.signInSilently();
            this.setState({ loggedInUser });
        } catch (error) {
            this.setState({ loggedInUser: {} });
        }
    };

    /**
     * @name signOut
     */
    signOut = async () => {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          this.setState({ isUserSignedIn: false, loggedInUser: null }); // Remember to remove the user from your app's state as well
        } catch (error) {
          console.error(error);
        }
    };

    /**
     * @name handleSignInError
     * @param error the SignIn error object
     */
    handleSignInError = async (error) => {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            this.showGoogleSignInError('user cancelled the login flow');
        } else if (error.code === statusCodes.IN_PROGRESS) {
            this.showGoogleSignInError('Sign in is in progress already');
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            await this.getGooglePlayServices();
        } else {
            this.showGoogleSignInError(JSON.stringify(error));
        }
    }

    /**
     * @name getGooglePlayServices
     */
    getGooglePlayServices = async () => {
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // google services are available
        } catch (err) {
            console.error('play services are not available');
        }
    }

    /**
     * @name showGoogleSignInError
     * @param alertMessage - message to be shown on alert box
     */
    showGoogleSignInError = (alertMessage) => {
        Alert.alert(
            'Google Signin Error',
            alertMessage,
            [    
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        )
    }
}
