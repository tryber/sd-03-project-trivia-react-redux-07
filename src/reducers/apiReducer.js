import { GENERATE_TOKEN } from '../actions/index';

const initialState = {
  token: '',
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_TOKEN:
      // const { token } = action.payload.data;
      return { ...state, token: action.payload.data.token };

    default:
      return state;
  }
};

export default apiReducer;
