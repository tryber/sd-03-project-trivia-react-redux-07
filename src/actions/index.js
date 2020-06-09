import { apiTokenService } from '../services/apiTokenService.js';

export const GENERATE_TOKEN = 'GENERATE_TOKEN';

const storeToken = (payload) => ({
  type: GENERATE_TOKEN,
  payload,
});

export const generateToken = () => {
  return (dispatch) => {
    return apiTokenService().then((response) => dispatch(storeToken(response)));
  };
};
