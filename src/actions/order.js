export const ORDER_REQUEST = 'ORDER_REQUEST';
export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_ERROR = 'ORDER_ERROR';
export const ORDER_RESET = 'ORDER_RESET';

export const orderRequest = (address1, address2) => ({
  type: ORDER_REQUEST,
  payload: {
    address1,
    address2
  }
});

export const orderSuccess = payload => ({
  type: ORDER_SUCCESS,
  payload
});

export const orderError = payload => ({
  type: ORDER_ERROR,
  payload
});

export const orderReset = () => ({
  type: ORDER_RESET
});
