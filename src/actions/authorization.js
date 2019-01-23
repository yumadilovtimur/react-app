export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SAVE_TOKEN = 'SAVE_TOKEN';
export const LOGOUT = 'LOGOUT';

export const loginRequest = (username, password) => ({
  type: LOGIN_REQUEST,
  payload: {
    username,
    password
  }
});

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload
});

export const loginError = payload => ({
  type: LOGIN_ERROR,
  payload
});

export const saveToken = payload => ({
  type: SAVE_TOKEN,
  payload
});

export const logout = () => ({
  type: LOGOUT
});
