import { UPDATE_SCORE, CLEAR_LOGIN_INFO, COUNT_RIGHT_ANSWEAR } from '../actions/index';

const INITIAL_STATE = {
  points: 0,
  answers: 0,
};

const scoreReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLEAR_LOGIN_INFO: return { ...state, points: 0 };
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
