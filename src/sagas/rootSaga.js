import loginFlow from './authorization';
import { call } from 'redux-saga/effects';

function* rootSaga() {
  yield call(loginFlow);
}

export default rootSaga;
