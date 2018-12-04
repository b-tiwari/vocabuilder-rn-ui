import { GOOGLE_SIGNIN } from '../actions/constants';

const defaultState = {
    googleUser: {},
    googleAuthToken: {},
    signInFailedReason: ''
};

export default function googleSignInReducer(state = defaultState, action) {
  switch (action.type) {
    case GOOGLE_SIGNIN.SUCCESS:
      return {
        ...state,
        googleUser: action.payload.googleUser,
        googleAuthToken: action.payload.googleAuthToken,
      };
    case GOOGLE_SIGNIN.ERROR:
      return {
        ...state,
        signInFailedReason: action.payload.signInFailedReason
      };
    case GOOGLE_SIGNIN.LOGOUT:
      return { ...defaultState }; // reset to default state on logout
    default:
      return state;
  }
}
