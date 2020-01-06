import { CHANGE_NAV } from '../actions/types';

export default (state = 0, action) => {
	switch (action.type) {
		case CHANGE_NAV:
			return action.payload;
		default:
			return state;
	}
};
