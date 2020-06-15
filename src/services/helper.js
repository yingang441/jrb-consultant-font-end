import axios from 'axios';
import { API_URL } from 'configs';

export const validateEmail = (email) => {
  if (email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  }
  return true;
};

export const getHeader = (auth) => {
  let header = {};
  if (auth) {
    const tokenData = JSON.parse(window.localStorage.getItem('token'));
    if (tokenData) {
      const { token } = tokenData;
      header = {
        Authorization: 'Bearer ${token}',
      };
    }
  }
  header = {
    ...header,
    'Content-Type': 'application/json',
  };
  return header;
}

const apiHandler = (
  requestType,
  url,
  auth = true,
  data = undefined,
) => axios({
  baseURL: API_URL,
  url,
  method: requestType,
  headers: getHeader(auth),
  data,
});

export default apiHandler;
