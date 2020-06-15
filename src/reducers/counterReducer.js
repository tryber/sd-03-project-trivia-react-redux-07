import { TICK_TOCK, RESTORE_CLOCK, CLOCK_FREEZED } from '../actions/index';

const INITIAL_STATE = {
  count: 30,
};

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TICK_TOCK:
      return {
        ...state,
        count: state.count - 1,
      };

    case CLOCK_FREEZED:
      return {
        ...state,
        freeze: true,
      };


    case RESTORE_CLOCK:
      return {
        ...state,
        count: 30,
        freeze: false,
      };

    default:
      return state;
  }
};

export default counterReducer;
