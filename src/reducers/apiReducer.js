import { GENERATE_TOKEN, STORE_QUESTIONS } from '../actions/index';

const initialState = {
  token: '',
  questions: [],
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_TOKEN:
      localStorage.setItem('token', action.payload.data.token);
      return { ...state, token: action.payload.data.token };
    case STORE_QUESTIONS:
      console.log(state);
      return {
        ...state,
        questions: [...action.payload.data.results],
      };
    default:
      return state;
  }
};

export default apiReducer;
