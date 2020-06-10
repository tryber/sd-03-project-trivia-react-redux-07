import { CHANGE_DIFFICULTY } from '../actions/index';

const INITIAL_STATE = 1;

const difficultyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_DIFFICULTY: return state + action.points;
    default: return state;
  }
};

export default difficultyReducer;
