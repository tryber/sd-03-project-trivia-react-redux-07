const axios = require('axios');

const URL = 'https://opentdb.com/api_token.php?command=request';

const apiTokenService = () => axios.get(URL).then((response) => {
  console.log(response)
  return response
});

export default apiTokenService;
