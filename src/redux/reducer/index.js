import {combineReducers} from 'redux';
import imageReducer from './ImageReducer';
import UserReducer from './UserReducer';

const combinedReducers = combineReducers({
  userVal: UserReducer,
  imageVal: imageReducer,
});

export default combinedReducers;
