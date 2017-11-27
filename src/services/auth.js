import api from './api';

export const login = user => api.post('/login', user);
export const signUp = user => api.post('/users', user);
export const updateUser = user => api.put('/users', user);