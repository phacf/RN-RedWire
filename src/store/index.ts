import {combineReducers, compose, applyMiddleware} from 'redux';
import Auth from './auth/reducer';
import {configureStore} from '@reduxjs/toolkit';

import promiseMiddleware from 'redux-promise';

const rootReducer = combineReducers({
  Auth,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
  reducer: rootReducer,
  enhancers: composeEnhancers(applyMiddleware(promiseMiddleware)),
});

export {store};
