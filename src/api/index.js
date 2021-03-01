import axios from 'axios';

const api = axios.create({
  baseURL: 'https://front-test.beta.aviasales.ru',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
