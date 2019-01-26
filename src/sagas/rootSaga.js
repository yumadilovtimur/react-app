import loginFlow from './authorization';
import getAddressesFlow from './addresses';
import getCoordinatesFlow from './order';
import { call, takeEvery, all } from 'redux-saga/effects';
import { ADDRESSES_REQUEST } from '../actions/addresses';

function* rootSaga() {
  yield all([
    call(loginFlow),
    takeEvery(ADDRESSES_REQUEST, getAddressesFlow),
    call(getCoordinatesFlow)
  ]);
}

export default rootSaga;
