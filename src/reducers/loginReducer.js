import { SAVE_USER_DATA } from '../actions/index';

const INITIAL_STATE = [];

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_USER_DATA: return [...state, { name: action.name, avatar: action.avatar }];
    default: return state;
  }
};

export default loginReducer;
