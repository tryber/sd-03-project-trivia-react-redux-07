import apiTokenService from '../services/apiTokenService';
import getQuestions from '../services/apiQuestionsService';

export const GENERATE_TOKEN = 'GENERATE_TOKEN';
export const STORE_QUESTIONS = 'STORE_QUESTIONS';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const CHANGE_DIFFICULTY = 'CHANGE_DIFFICULTY';
export const TICK_TOCK = 'TICK_TOCK';
export const RESTORE_CLOCK = 'RESTORE_CLOCK';
export const UPDATE_RANKING = 'UPDATE_RANKING';
export const CLEAR_LOGIN_INFO = 'CLEAR_LOGIN_INFO';
export const COUNT_RIGHT_ANSWEAR = 'COUNT_RIGHT_ANSWEAR';
export const CLEAR_LOGIN_POINTS = 'CLEAR_LOGIN_POINTS';
export const CLOCK_FREEZED = 'CLOCK_FREEZED';
export const CONFIG_CATEGORY = 'CONFIG_CATEGORY';
export const CONFIG_DIFFICULTY = 'CONFIG_DIFFICULTY';
export const CONFIG_TYPE = 'CONFIG_TYPE';

const storeToken = (payload) => ({
  type: GENERATE_TOKEN,
  payload,
});

const storeQuestions = (payload) => ({
  type: STORE_QUESTIONS,
  payload,
});

export const countRight = () => ({
  type: COUNT_RIGHT_ANSWEAR,
});

export const getUserData = (name, avatar) => ({
  type: SAVE_USER_DATA,
  name,
  avatar,
});

export const updateScore = (points) => ({
  type: UPDATE_SCORE,
  points,
});

export const tik = () => ({
  type: TICK_TOCK,
});

export const restoreClock = () => ({
  type: RESTORE_CLOCK,
});

export const freezeClock = () => ({
  type: CLOCK_FREEZED,
});

export const updateRanking = (name, avatar, score) => ({
  type: UPDATE_RANKING,
  name,
  avatar,
  score,
});

export const clearLoginInfo = () => ({
  type: CLEAR_LOGIN_INFO,
});

export const clearLoginPoints = () => ({
  type: CLEAR_LOGIN_POINTS,
});

export const generateToken = () => (
  (dispatch) => {
    apiTokenService().then((response) => dispatch(storeToken(response)));
  }
);

export const generateQuestions = (tolkien, confCategory, confDifficulty, confType) => (
  (dispatch) => {
    getQuestions(tolkien, confCategory, confDifficulty, confType)
      .then((response) => dispatch(storeQuestions(response)));
  }
);

export const changeCategory = (confCategory) => ({
  type: CONFIG_CATEGORY,
  confCategory,
});

export const changeDifficulty = (confDifficulty) => ({
  type: CONFIG_DIFFICULTY,
  confDifficulty,
});

export const changeType = (confType) => ({
  type: CONFIG_TYPE,
  confType,
});
