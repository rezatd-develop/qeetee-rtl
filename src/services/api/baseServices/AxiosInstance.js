import axios from 'axios';

const token = 'sss';

const api = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});

export default api;
