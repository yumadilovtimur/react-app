import {
  ADDRESSES_REQUEST,
  ADDRESSES_SUCCESS,
  ADDRESSES_ERROR
} from '../actions/addresses';

const initialState = {
  addresses: [],
  error: null,
  isFetching: false,
  isFetched: false
};

const addresses = (state = initialState, action) => {
  switch (action.type) {
    case ADDRESSES_REQUEST:
      return {
        ...state,
        isFetching: true,
        isFetched: false
      };
    case ADDRESSES_SUCCESS:
      return {
        ...state,
        isFetched: true,
        isFetching: false,
        error: null,
        addresses: action.payload
      };
    case ADDRESSES_ERROR:
      return {
        ...state,
        isFetched: true,
        isFetching: false,
        error: `Что-то пошло не так: ${action.payload}`
      };
    default:
      return state;
  }
};

export default addresses;
