import { combineReducers } from 'redux';
import authReducer from './slices/authSlice.js';
import brandReducer from './slices/brandSlice.js';
import modelReducer from './slices/modelSlice.js';

const rootReducer = combineReducers({
    auth: authReducer,
    brands: brandReducer,
    models: modelReducer
});

export default rootReducer;
    