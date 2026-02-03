// api/apiClient.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  timeout: 10000, // Global timeout
  headers: { 'Accept': 'application/json' },
});

// Request interceptor untuk headers dinamis
api.interceptors.request.use(config => {
  // Tambah headers umum, e.g., User-Agent
  config.headers['User-Agent'] = 'MyApp/1.0';
  return config;
});

// Response interceptor untuk transform
api.interceptors.response.use(
  res => {
    // Auto-transform jika diperlukan
    return res;
  }
);

export default api;