import history from 'services/history';
import ApiHandler from 'services/apis';

export const JRB_AUTH_LOGIN_REQUEST = 'JRB_AUTH_LOGIN_REQUEST';
export const JRB_AUTH_LOGIN_SUCCESS = 'JRB_AUTH_LOGIN_SUCCESS';
export const JRB_AUTH_LOGIN_ERROR = 'JRB_AUTH_LOGIN_ERROR';
export const JRB_AUTH_FORGOT_REQUEST = 'JRB_AUTH_FORGOT_REQUEST';
export const JRB_AUTH_FORGOT_SUCCESS = 'JRB_AUTH_FORGOT_SUCCESS';
export const JRB_AUTH_FORGOT_ERROR = 'JRB_AUTH_FORGOT_ERROR';

/* Login */
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
  dispatch(authLoginRequest());
  ApiHandler.auth.login({ email, password })
    .then(({ data }) => {
      dispatch(authLoginSuccess());
      history.push('/admin');
    })
    .catch((err) => dispatch(authLoginError(err.response.data.msg)));
};

/* Forgot Password */
const authForgotRequest = () => ({
  type: JRB_AUTH_FORGOT_REQUEST,
});

const authForgotSuccess = () => ({
  type: JRB_AUTH_FORGOT_SUCCESS,
});

const authForgotError = (payload) => ({
  type: JRB_AUTH_FORGOT_ERROR,
  payload,
});

/* thunk */
export const forgotPassword = ({
  email,
}) => (dispatch) => {
  dispatch(authForgotRequest());
  ApiHandler.auth.forgotPassword({ email })
    .then(({ data }) => {
      dispatch(authForgotSuccess());
    })
    .catch((err) => dispatch(authForgotError(err.response.data.msg)));
};
