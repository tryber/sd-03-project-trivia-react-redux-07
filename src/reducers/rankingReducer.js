import { UPDATE_RANKING } from '../actions/index';

const initialState = [];

const rankingReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_RANKING: return [...state,
      { name: action.name, avatar: action.avatar, score: action.score }];
    default:
      return state;
  }
};

export default rankingReducer;
