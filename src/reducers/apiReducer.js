import { GENERATE_TOKEN, STORE_QUESTIONS } from '../actions/index';

const initialState = {
  token: '',
  questions: [],
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_TOKEN:
      // const { token } = action.payload.data;
      return { ...state, token: action.payload.data.token };
    case STORE_QUESTIONS:
      return {
        ...state,
        questions: [...action.payload.data.results],
      };
    default:
      return state;
  }
};

export default apiReducer;
