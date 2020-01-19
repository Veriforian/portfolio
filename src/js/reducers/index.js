import { combineReducers } from 'redux';
import navReducer from './navReducer';
import modalReducer from './modalReducer';

const reducers = combineReducers({
	nav: navReducer,
	modal: modalReducer
});

export default reducers;
