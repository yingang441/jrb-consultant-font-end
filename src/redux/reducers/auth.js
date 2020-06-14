import {
  JRB_AUTH_LOGIN_REQUEST,
  JRB_AUTH_LOGIN_SUCCESS,
  JRB_AUTH_LOGIN_ERROR,
} from '../actions/auth';

const initialState = {
  loading: false,
  success: false,
  error: null,
  user: null,
  authenticated: false,
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
    default:
      return state;
  }
}
