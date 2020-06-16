const axios = require('axios');

const URL = 'https://opentdb.com/api.php?amount=5&token=';

const getQuestions = (token, confCategory, confDifficulty, confType) => {
  console.log(token, confCategory, confDifficulty, confType);
  return axios.get(`${URL}${token}&category=${confCategory}&difficulty=${confDifficulty}&type=${confType}`).then((response) => response)
};

export default getQuestions;

// async function getQuestions(token, confCategory, confDifficulty, confType) {
//   return fetch(
//     `https://opentdb.com/api.php?amount=5&token=${token}&category=${confCategory}&difficulty=${confDifficulty}&type=${confType}`,
//   )
//     .then((trivia) => trivia
//       .json()
//       .then((json) => (trivia.ok ? Promise.resolve(json) : Promise.reject(json))));
// }

// export default getQuestions;