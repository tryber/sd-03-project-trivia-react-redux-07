import { combineReducers } from 'redux';
import apiReducer from './apiReducer';
import loginReducer from './loginReducer';
import scoreReducer from './scoreReducer';
import difficultyReducer from './difficultyReducer';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  apiReducer,
  loginReducer,
  scoreReducer,
  counterReducer,
  difficultyReducer,
});

export default rootReducer;
