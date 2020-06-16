const axios = require('axios');

const URL = 'https://opentdb.com/api.php?amount=5&token=';

const getQuestions = (token, confCategory, confDifficulty, confType) => (
  axios.get(`${URL}${token}&category=${confCategory}&difficulty=${confDifficulty}&type=${confType}`).then((response) => response)
);

export default getQuestions;
