'use client'

import axios from 'axios';

// const token = localStorage.getItem('token');
const testToken = 'efdwefd';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    Authorization: `Bearer ${testToken}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export default axiosInstance;
