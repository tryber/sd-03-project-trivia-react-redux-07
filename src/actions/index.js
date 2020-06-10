import apiTokenService from '../services/apiTokenService.js';

export const GENERATE_TOKEN = 'GENERATE_TOKEN';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const UPDATE_SCORE = 'UPDATE_SCORE';


const storeToken = (payload) => ({
  type: GENERATE_TOKEN,
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

export const generateToken = () => (
  (dispatch) => {
    apiTokenService().then((response) => dispatch(storeToken(response)));
  }
);
