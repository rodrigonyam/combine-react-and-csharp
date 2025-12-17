import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:7001/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// API service functions
export const authService = {
  login: (credentials) => api.post('/auth/login', credentials).then(res => res.data),
  register: (userData) => api.post('/auth/register', userData).then(res => res.data),
  refreshToken: () => api.post('/auth/refresh').then(res => res.data),
};

export const projectService = {
  getAllProjects: () => api.get('/projects').then(res => res.data),
  getProject: (id) => api.get(`/projects/${id}`).then(res => res.data),
  createProject: (data) => api.post('/projects', data).then(res => res.data),
  updateProject: (id, data) => api.put(`/projects/${id}`, data).then(res => res.data),
  deleteProject: (id) => api.delete(`/projects/${id}`),
};

export const taskService = {
  getAllTasks: () => api.get('/tasks').then(res => res.data),
  getTask: (id) => api.get(`/tasks/${id}`).then(res => res.data),
  createTask: (data) => api.post('/tasks', data).then(res => res.data),
  updateTask: (id, data) => api.put(`/tasks/${id}`, data).then(res => res.data),
  deleteTask: (id) => api.delete(`/tasks/${id}`),
};

export const userService = {
  getProfile: () => api.get('/users/profile').then(res => res.data),
  updateProfile: (data) => api.put('/users/profile', data).then(res => res.data),
  getAllUsers: () => api.get('/users').then(res => res.data),
};

export default api;