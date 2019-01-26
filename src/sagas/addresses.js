import { put, call } from 'redux-saga/effects';
import { addressesSuccess, addressesError } from '../actions/addresses';

function fetchAddresses() {
  return fetch(`https://loft-taxi.glitch.me/addressList`, {
    method: 'GET'
  })
    .then(response => response.json())
    .then(response => ({ response }))
    .catch(error => ({ error }));
}

export default function* getAddressesFlow() {
  try {
    const data = yield call(fetchAddresses);
    yield put(addressesSuccess(data.response.addresses));
  } catch (error) {
    yield put(addressesError(error));
  }
}
