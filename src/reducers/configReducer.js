import { CONFIG_CATEGORY, CONFIG_DIFFICULTY, CONFIG_TYPE } from '../actions/index';

const initialState = {
  confCategory: '',
  confDifficulty: '',
  confType: '',
};

const configReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONFIG_CATEGORY:
      return {
        ...state,
        confCategory: action.confCategory,
      };
    case CONFIG_DIFFICULTY:
      return {
        ...state,
        confDifficulty: action.confDifficulty,
      };
    case CONFIG_TYPE:
      return {
        ...state,
        confType: action.confType,
      };
    default:
      return state;
  }
};

export default configReducer;
