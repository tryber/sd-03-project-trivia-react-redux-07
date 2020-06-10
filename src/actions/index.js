import apiTokenService from '../services/apiTokenService.js';
import getQuestions from '../services/apiQuestionsService.js';

export const GENERATE_TOKEN = 'GENERATE_TOKEN';
export const STORE_QUESTIONS = 'STORE_QUESTIONS';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const TICK_TOCK = 'TICK_TOCK';
export const RESTORE_CLOCK = 'RESTORE_CLOCK';


const storeToken = (payload) => ({
  type: GENERATE_TOKEN,
  payload,
});

const storeQuestions = (payload) => ({
  type: STORE_QUESTIONS,
  payload,
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
})

export const generateToken = () => (
  (dispatch) => {
    apiTokenService().then((response) => dispatch(storeToken(response)));
  }
);

export const generateQuestions = (token) => (
  (dispatch) => {
    getQuestions(token).then((response) => dispatch(storeQuestions(response)));
  }
);
