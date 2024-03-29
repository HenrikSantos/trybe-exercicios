// src/store/index.js
import {legacy_createStore as createStore, combineReducers } from 'redux';
import clickReducer from '../reducers';
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({ clickReducer });

const store = createStore(rootReducer, composeWithDevTools());

export default store;