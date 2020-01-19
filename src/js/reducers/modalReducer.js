import { OPEN_MODAL, CLOSE_MODAL } from '../actions/types';

const initialState = {
	one: false,
	two: false,
	three: false,
	four: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case OPEN_MODAL:
			switch (action.payload) {
				case 1:
					return { ...state, one: true, two: false, three: false, four: false };
				case 2:
					return { ...state, two: true, one: false, three: false, four: false };
				case 3:
					return { ...state, three: true, one: false, two: false, four: false };
				case 4:
					return { ...state, four: true, one: false, two: false, three: false };
			}
		case CLOSE_MODAL:
			return { ...state, one: false, two: false, three: false, four: false };
		default:
			return state;
	}
};
