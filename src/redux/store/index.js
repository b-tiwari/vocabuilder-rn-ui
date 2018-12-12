import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const initialState = {};

const reduxMiddlewares = applyMiddleware(thunk, logger);

export const appReduxStore = createStore(rootReducer, initialState, reduxMiddlewares);
