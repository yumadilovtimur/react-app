import { take, put, call, fork, cancel } from 'redux-saga/effects';
import {
  LOGIN_REQUEST,
  LOGIN_ERROR,
  LOGOUT,
  loginSuccess,
  loginError
} from '../actions/authorization';

function fetchLogin(username, password) {
  return fetch(
    `https://loft-taxi.glitch.me/auth?username=${username}&password=${password}`,
    {
      method: 'GET'
    }
  )
    .then(response => response.json())
    .then(response => ({ response }))
    .catch(error => ({ error }));
}

const setToken = token => {
  localStorage.setItem('token', token);
};

function* authorize(username, password) {
  try {
    const token = yield call(fetchLogin, username, password);
    if (token.response.success) {
      yield put(loginSuccess());
      yield call(setToken, token.response.success);
    } else {
      yield put(loginError(token.response.error));
    }
  } catch (error) {
    yield put(loginError(error));
  }
}

export default function* loginFlow() {
  while (true) {
    const {
      payload: { username, password }
    } = yield take(LOGIN_REQUEST);
    const task = yield fork(authorize, username, password);
    const action = yield take([LOGOUT, LOGIN_ERROR]);
    if (action.type === LOGOUT) {
      yield cancel(task);
    }
  }
}
