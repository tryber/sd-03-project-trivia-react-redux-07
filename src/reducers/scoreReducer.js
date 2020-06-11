import { UPDATE_SCORE, COUNT_RIGHT_ANSWEAR } from '../actions/index';

const INITIAL_STATE = {
  points: 0,
  answers: 0,
};

const scoreReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SCORE: {
      return {
        ...state,
        points: state.points + action.points,
      };
    }

    case COUNT_RIGHT_ANSWEAR: {
      return {
        ...state,
        answers: state.answers + 1,
      };
    }

    default: return state;
  }
};

export default scoreReducer;
