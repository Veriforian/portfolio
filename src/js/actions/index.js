import { CHANGE_NAV, OPEN_MODAL, CLOSE_MODAL } from './types';

export const changeNav = navState => {
	return { type: CHANGE_NAV, payload: navState };
};

export const openModal = modalState => {
	return { type: OPEN_MODAL, payload: modalState };
};

export const closeModal = () => {
	return { type: CLOSE_MODAL };
};
