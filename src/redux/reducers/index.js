import { combineReducers } from 'redux';
import colorReducer from './colorReducer';
import listReducer from './listReducer';
import taskReducer from './taskReducer';

export const rootReducer = combineReducers({
  list: listReducer,
  colors: colorReducer,
  tasks: taskReducer,
});
