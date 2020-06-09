const axios = require('axios');

// Faz um request para o endpoint e retorna um token convertido para JSON
// Modelo de saída do JSON
// {
//     "response_code": 0,
//     "response_message": "Token Generated Successfully!",
//     "token": "0f1f6866115f718be43d7751e0b217eda5edc414a4fd8f671007b4e5ad3f3f9c"
// }

const URL = 'https://opentdb.com/api_token.php?command=request';

const apiTokenService = () => axios.get(URL).then((response) => response);

export default apiTokenService;
