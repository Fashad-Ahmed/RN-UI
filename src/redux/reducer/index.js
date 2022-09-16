import {combineReducers} from 'redux';

import enterReducer from './enterReducer';
// import inputReducer from './inputReducer';
const appReducer = combineReducers({
  enterReducer,
});

export default appReducer;
