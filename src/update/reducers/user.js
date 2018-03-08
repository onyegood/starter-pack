import {
	USER_LOGGED_IN,
	USER_LOGGED_OUT,
	FETCH_CURRENT_USER_SUCCESS,
	CONFIRM_USER_REQUEST
} from "../types";

const initialState = {
	loaded: false,
	users: [],
	errors: null
}

export default function user(state = initialState, action = {}) {
	switch (action.type) {
		case USER_LOGGED_IN:
			return {...action.user, loaded: true};
		case FETCH_CURRENT_USER_SUCCESS:
			return {...state, ...action.user, loaded: true};
		case USER_LOGGED_OUT:
			return {loaded: true};

		case CONFIRM_USER_REQUEST:
			return { ...state, ...action.confirm, loaded: true };

		default:
			return state;
	}
}
