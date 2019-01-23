import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT
} from '../actions/authorization';

const initialState = {
  isAuthorize: false,
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
        isFetched: true,
        isFetching: false
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isFetched: true,
        isFetching: false,
        error: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        isAuthorize: false
      };
    default:
      return state;
  }
};

export default authorization;
