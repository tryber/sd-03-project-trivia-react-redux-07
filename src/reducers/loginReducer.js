import { SAVE_USER_DATA, CLEAR_LOGIN_INFO } from '../actions/index';

const INITIAL_STATE = [];

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_USER_DATA: return [...state, { name: action.name, avatar: action.avatar }];
    case CLEAR_LOGIN_INFO: return [];
    default: return state;
  }
};

export default loginReducer;
