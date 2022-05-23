import axios from 'axios';

const getToken = () => {
  const token = localStorage.getItem('accessToken');
  return token;
};

const api = axios.create({
  baseURL: process.env.REACT_API_URL ? process.env.REACT_API_URL : 'http://localhost:3333',
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}
);

api.interceptors.response.use(response => response, (error) => {
  if (error.response === null && error.response.status === 401) {
    localStorage.removeItem('token');
    return window.location.href = '/login';
  }
  return Promise.reject(error, error.response);
}
);

export default api;