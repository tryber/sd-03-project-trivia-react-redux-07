const axios = require('axios');

const URL = 'https://opentdb.com/api.php?amount=5&token=';

const getQuestions = (token) => (
  axios.get(`${URL}${token}`).then((response) => response)
);

export default getQuestions;
