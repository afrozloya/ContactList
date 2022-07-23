import { combineReducers } from 'redux';
import contact from './ContactReducer';

const rootReducer = combineReducers({
  contact,
});

export default rootReducer;
