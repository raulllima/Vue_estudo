import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5500',
  headers: {
    'content-type': 'application/json',
  }
});

export default api;