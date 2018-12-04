import { GOOGLE_SIGNIN } from './constants';

export const GoogleSignIn_onSuccess = payload => ({
    type: GOOGLE_SIGNIN.SUCCESS,
    payload
});

export const GoogleSignIn_onError = payload => ({
    type: GOOGLE_SIGNIN.ERROR,
    payload
});

export const GoogleSignIn_logOut = () => ({
    type: GOOGLE_SIGNIN.LOGOUT
});
