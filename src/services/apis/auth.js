import apiHandler from '../helper';

export const login = ({ email, password }) => apiHandler('post', 'auth/login', false, {
  email, password,
});

export const forgotPassword = ({ email }) => apiHandler('post', '/auth/forgot-password', false, {
  email,
});
