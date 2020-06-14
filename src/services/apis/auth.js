import apiHandler from '../helper';

export const login = ({ email, password }) => apiHandler('post', 'auth/login', false, {
  email, password,
});
