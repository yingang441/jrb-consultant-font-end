import axios from 'axios';
import { API_URL } from 'configs';

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
