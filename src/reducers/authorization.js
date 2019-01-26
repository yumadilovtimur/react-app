import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT
} from '../actions/authorization';

const token = localStorage.getItem('token');

const getToken = () => {
  switch (token) {
    case null:
      return false;
    case 'true':
      return true;
    case 'false':
      return false;
    default:
      return false;
  }
};

const initialState = {
  isAuthorize: getToken(),
  error: null,
  isFetching: false,
  isFetched: false
};

const authorization = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isFetched: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthorize: true,
        isFetched: true,
        isFetching: false,
        error: null
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isFetched: true,
        isFetching: false,
        error: action.payload
      };
    case LOGOUT:
      localStorage.setItem('token', false);
      return {
        ...state,
        isAuthorize: false
      };
    default:
      return state;
  }
};

export default authorization;
