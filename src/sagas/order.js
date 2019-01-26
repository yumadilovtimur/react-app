import { put, call, take } from 'redux-saga/effects';
import { ORDER_REQUEST, orderSuccess, orderError } from '../actions/order';

function fetchCoordinates(address1, address2) {
  return fetch(
    `https://loft-taxi.glitch.me/route?address1=${address1}&address2=${address2}`,
    {
      method: 'GET'
    }
  )
    .then(response => response.json())
    .then(response => ({ response }))
    .catch(error => ({ error }));
}

export default function* getCoordinatesFlow() {
  while (true) {
    try {
      const {
        payload: { address1, address2 }
      } = yield take(ORDER_REQUEST);

      const data = yield call(fetchCoordinates, address1, address2);
      yield put(orderSuccess(data.response));
    } catch (error) {
      yield put(orderError(error));
    }
  }
}
