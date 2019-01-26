import {
  ORDER_REQUEST,
  ORDER_SUCCESS,
  ORDER_ERROR,
  ORDER_RESET
} from '../actions/order';

const initialState = {
  coordinates: [],
  error: null,
  isFetching: false,
  isFetched: false,
  routeIsBuilt: false
};

const order = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_REQUEST:
      return {
        ...state,
        isFetching: true,
        isFetched: false
      };
    case ORDER_SUCCESS:
      return {
        ...state,
        isFetched: true,
        isFetching: false,
        error: null,
        coordinates: action.payload
      };
    case ORDER_ERROR:
      return {
        ...state,
        isFetched: true,
        isFetching: false,
        error: `Что-то пошло не так: ${action.payload}`
      };
    case ORDER_RESET:
      return {
        ...state,
        coordinates: [],
        error: null,
        isFetching: false,
        isFetched: false,
        routeIsBuilt: true
      };
    default:
      return state;
  }
};

export default order;
