import { combineReducers } from 'redux';
import rootReducer from './root';
// import userReducer from './user';

const reducers = combineReducers({
    root: rootReducer,
    // user: userReducer
});

export default reducers;