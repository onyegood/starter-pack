import {
	FETCH_ALL_USERS_REQUEST,
	FETCH_ALL_USERS_SUCCESS
} from "../types";

const initialState = {
	isLoading: false,
	errors: null,
  users:[]
}

export default function user(state = initialState, action = {}) {
	switch (action.type) {
		case FETCH_ALL_USERS_REQUEST:
			return {...state, isLoading: true};
		case FETCH_ALL_USERS_SUCCESS:
			return {...state, users: action.users, isLoading: false};
		default:
			return state;
	}
}
