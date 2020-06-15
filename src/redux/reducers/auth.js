import {
  JRB_AUTH_LOGIN_REQUEST,
  JRB_AUTH_LOGIN_SUCCESS,
  JRB_AUTH_LOGIN_ERROR,
  JRB_AUTH_FORGOT_REQUEST,
  JRB_AUTH_FORGOT_SUCCESS,
  JRB_AUTH_FORGOT_ERROR,
} from '../actions/auth';

const token = JSON.parse(window.localStorage.getItem('token'));

const initialState = {
  loading: false,
  success: false,
  error: null,
  user: null,
  authenticated: !!token,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case JRB_AUTH_LOGIN_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
        success: false,
      };
    case JRB_AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        success: true,
        authenticated: true,
      };
    case JRB_AUTH_LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        success: false,
      };
    case JRB_AUTH_FORGOT_REQUEST:
      return {
        ...state,
        error: null,
        loading: true,
        success: false,
      };
    case JRB_AUTH_FORGOT_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        success: true,
      };
    case JRB_AUTH_FORGOT_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        success: false,
      };
    default:
      return state;
  }
}
