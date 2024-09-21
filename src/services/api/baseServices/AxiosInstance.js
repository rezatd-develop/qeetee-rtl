'use client'

import axios from 'axios';

const token = localStorage.getItem('token');

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export default axiosInstance;
