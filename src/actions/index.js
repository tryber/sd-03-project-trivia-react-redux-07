import apiTokenService from '../services/apiTokenService.js';
import getQuestions from '../services/apiQuestionsService.js';

export const GENERATE_TOKEN = 'GENERATE_TOKEN';
export const STORE_QUESTIONS = 'STORE_QUESTIONS';

const storeToken = (payload) => ({
  type: GENERATE_TOKEN,
  payload,
});

const storeQuestions = (payload) => ({
  type: STORE_QUESTIONS,
  payload,
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
)
