import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1';

export const fazzpayAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const fazzpayPrivateAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
