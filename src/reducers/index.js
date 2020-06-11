import { combineReducers } from 'redux';
import apiReducer from './apiReducer';
import loginReducer from './loginReducer';
import scoreReducer from './scoreReducer';
import counterReducer from './counterReducer';
import rankingReducer from './rankingReducer';

const rootReducer = combineReducers({
  apiReducer,
  loginReducer,
  scoreReducer,
  counterReducer,
  rankingReducer,
});

export default rootReducer;
