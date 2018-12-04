import { connect } from 'react-redux';
import GoogleAuthentication from './GoogleAuthentication';
import {
    GoogleSignIn_onSuccess,
    GoogleSignIn_onError,
    GoogleSignIn_logOut
} from '../../redux/actions/googleSignInActions';

const mapStateToProps = state => ({
    googleUser: state.googleSignInReducer.googleUser,
    googleAuthToken: state.googleSignInReducer.googleAuthToken,
    signInFailedReason: state.googleSignInReducer.signInFailedReason
});

const mapDispatchToProps = dispatch => ({
    GoogleSignIn_onSuccess: (data) => {
        dispatch(GoogleSignIn_onSuccess(data));
    },
    GoogleSignIn_onError: (data) => {
        dispatch(GoogleSignIn_onError(data))
    },
    GoogleSignIn_logOut: (data) => {
        dispatch(GoogleSignIn_logOut(data)) 
    }
});

export default  connect(mapStateToProps, mapDispatchToProps)(GoogleAuthentication);
