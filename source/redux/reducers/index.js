import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import RegisterReducer from './RegisterReducer';

const rootReducers = combineReducers({
   auth: AuthReducer,
   register: RegisterReducer
});

export default rootReducers;