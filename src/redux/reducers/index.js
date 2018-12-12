import { combineReducers } from 'redux';
import googleSignInReducer from './googleSignInReducer';
import wordsReducer from './wordsReducer';

const rootReducer = combineReducers({
    googleSignInReducer,
    wordsReducer
});

export default rootReducer;
