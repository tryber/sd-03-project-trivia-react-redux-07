import { UPDATE_SCORE, CLEAR_LOGIN_INFO } from '../actions/index';

const INITIAL_STATE = 0;

const scoreReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SCORE: return state + action.points;
    case CLEAR_LOGIN_INFO: return 0;
    default: return state;
  }
};

export default scoreReducer;
