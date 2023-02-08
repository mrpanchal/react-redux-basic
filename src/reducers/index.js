import counterReducer from './counter';
import isLoggedReducer from './islogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    loggedInStatus: isLoggedReducer
})

export default allReducers;