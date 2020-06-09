import { combineReducers } from 'redux';

import apiReducer from './apiReducer';
import loginReducer from './loginReducer';
import scoreReducer from './scoreReducer';

const rootReducer = combineReducers({ apiReducer, loginReducer, scoreReducer });

export default rootReducer;
