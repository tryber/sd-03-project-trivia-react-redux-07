import { combineReducers } from 'redux';

import apiReducer from './apiReducer';
import loginReducer from './loginReducer';
import scoreReducer from './scoreReducer';
import difficultyReducer from './difficultyReducer';

const rootReducer = combineReducers({ apiReducer, loginReducer, scoreReducer, difficultyReducer });

export default rootReducer;
