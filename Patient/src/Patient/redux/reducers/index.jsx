// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import headerReducer from './headerReducer';

const rootReducer = combineReducers({
  header: headerReducer,
  // other reducers
});

export default rootReducer;
