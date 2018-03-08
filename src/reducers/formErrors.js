import {
	ADD_CUSTOMER_REQUEST,
	ADD_CUSTOMER_FAILURE,
	FETCH_SINGLE_CUSTOMER_REQUEST,
	FETCH_SINGLE_CUSTOMER_FAILURE
} from "../types";

export default function formErrors(state = {}, action = {}, loaded : false) {
	switch (action.type) {
		case ADD_CUSTOMER_REQUEST:
			return {...state, customer: {}, loaded: true};
		case ADD_CUSTOMER_FAILURE:
			return { ...state, customer: action.errors, loaded: false};
		case FETCH_SINGLE_CUSTOMER_REQUEST:
				return {...state, customer: {}, loaded: true};
		case FETCH_SINGLE_CUSTOMER_FAILURE:
				return { ...state, customer: action.errors, loaded: false};
		default:
			return state;
	}
}
