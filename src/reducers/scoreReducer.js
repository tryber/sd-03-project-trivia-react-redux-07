import { UPDATE_SCORE } from '../actions/index';

const INITIAL_STATE = 0;

const scoreReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SCORE: return state + action.points;
    default: return state;
  }
};

export default scoreReducer;
