import { combineReducers } from 'redux';
import cardLayoutReducer from './reducers/cardLayoutReducer';
import hintReducer from './reducers/hintReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  cardLayoutReducer, 
  hintReducer, 
  userReducer
});

export default rootReducer;