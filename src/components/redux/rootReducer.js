import { combineReducers } from 'redux';
import authReducer from './slices/authSlice.js';
import brandReducer from './slices/brandSlice.js';

const rootReducer = combineReducers({
    auth: authReducer,
    brands: brandReducer
});

export default rootReducer;
    