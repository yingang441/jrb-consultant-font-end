import history from 'services/history';
import ApiHandler from 'services/apis';

export const JRB_AUTH_LOGIN_REQUEST = 'JRB_AUTH_LOGIN_REQUEST';
export const JRB_AUTH_LOGIN_SUCCESS = 'JRB_AUTH_LOGIN_SUCCESS';
export const JRB_AUTH_LOGIN_ERROR = 'JRB_AUTH_LOGIN_ERROR';


const authLoginRequest = () => ({
  type: JRB_AUTH_LOGIN_REQUEST,
});

const authLoginSuccess = (payload) => ({
  type: JRB_AUTH_LOGIN_SUCCESS,
  payload,
});

const authLoginError = (payload) => ({
  type: JRB_AUTH_LOGIN_ERROR,
  payload,
});

/* thunk */
export const login = ({
  email, password,
}) => (dispatch) => {
  console.log("email ", email);
  console.log("password ", password);
  dispatch(authLoginRequest());
  ApiHandler.auth.login({ email, password })
    .then(({ data }) => {
      dispatch(authLoginSuccess());
      history.push('/admin');
    })
    .catch((err) => dispatch(authLoginError(err.response.data.msg)));
};
