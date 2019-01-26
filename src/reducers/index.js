import { combineReducers } from 'redux';
import authorization from './authorization';
import personal from './personal';
import addresses from './addresses';
import order from './order';

const rootReducer = combineReducers({
  authorization,
  personal,
  addresses,
  order
});

export default rootReducer;
