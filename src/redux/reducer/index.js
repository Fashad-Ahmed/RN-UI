import {combineReducers} from 'redux';

import enterReducer from './enterReducer';
import inputReducer from './inputReducer';
import newReducer from './newReducer';
import objectReducer from './objectReducer';

const appReducer = combineReducers({
  enterReducer,
  inputReducer,
  newReducer,
  objectReducer,
});

export default appReducer;
