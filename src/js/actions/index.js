import { CHANGE_NAV } from './types';

export const changeNav = navState => {
	return { type: CHANGE_NAV, payload: navState };
};
