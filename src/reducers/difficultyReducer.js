import { CHANGE_DIFFICULTY } from '../actions/index';

const INITIAL_STATE = 1;

const difficultyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_DIFFICULTY: {
      if (action.difficulty === 'easy') return 1;
      if (action.difficulty === 'medium') return 2;
      if (action.difficulty === 'hard') return 3;
    } break;
    default: return state;
  }
};

export default difficultyReducer;
