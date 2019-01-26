export const ADDRESSES_REQUEST = 'ADDRESSES_REQUEST';
export const ADDRESSES_SUCCESS = 'ADDRESSES_SUCCESS';
export const ADDRESSES_ERROR = 'ADDRESSES_ERROR';

export const addressesRequest = () => ({
  type: ADDRESSES_REQUEST
});

export const addressesSuccess = payload => ({
  type: ADDRESSES_SUCCESS,
  payload
});

export const addressesError = payload => ({
  type: ADDRESSES_ERROR,
  payload
});
