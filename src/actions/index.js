import { apiTokenService } from "../services/apiTokenService.js";
import { requestQuestions } from "../services/apiQuestionsService.js";

export const GENERATE_TOKEN = "GENERATE_TOKEN";
export const GENERATE_QUESTIONS = "GENERATE_QUESTIONS";

const storeToken = (payload) => ({
  type: GENERATE_TOKEN,
  payload,
});

const storeQuestions = (payload) => ({
  type: GENERATE_QUESTIONS,
  payload,
});

export const generateToken = () => {
  return (dispatch) => {
    return apiTokenService().then((response) => dispatch(storeToken(response)));
  };
};
