import axios from 'axios';

const api = axios.create({
  baseURL: 'https://devprod.cf',
});

export default api;
