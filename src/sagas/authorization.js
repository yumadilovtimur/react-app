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
      method: 'GET',
      mode: 'no-cors'
    }
  )
    .then(response => response.json())
    .then(response => ({ response }))
    .catch(error => ({ error }));
}

function* authorize(username, password) {
  try {
    const token = yield call(fetchLogin, username, password);
    yield put(loginSuccess(token));
    // yield call(Api.storeItem, { token });
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
      // yield call(Api.clearItem, 'token');
    }
  }
}
