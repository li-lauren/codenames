import { combineReducers } from 'redux';
import cardLayoutReducer from './reducers/cardLayoutReducer';
import hintReducer from './reducers/hintReducer';

const rootReducer = combineReducers({
  cardLayoutReducer, 
  hintReducer
});

export default rootReducer;