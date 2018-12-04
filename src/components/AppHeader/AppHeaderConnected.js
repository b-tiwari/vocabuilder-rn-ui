import { connect } from 'react-redux';
import AppHeader from './AppHeader';
import { GoogleSignIn_logOut } from '../../redux/actions/googleSignInActions';
const mapStateToProps = state => ({
    googleUser: state.googleSignInReducer.googleUser
});

const mapDispatchToProps = dispatch => ({
    GoogleSignIn_logOut: () => {
        dispatch(GoogleSignIn_logOut()) 
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
