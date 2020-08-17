import { combineReducers } from 'redux';
import UserReducers from './userReducers';

const rootReducers = combineReducers({
	User : UserReducers,
})

export default rootReducers ;