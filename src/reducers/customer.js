import {
    ADD_CUSTOMER_REQUEST,
    ADD_CUSTOMER_SUCCESS,
    FETCH_SINGLE_CUSTOMER_REQUEST,
    FETCH_SINGLE_CUSTOMER_SUCCESS,
    UPDATE_SINGLE_CUSTOMER_REQUEST,
    UPDATE_SINGLE_CUSTOMER_SUCCESS,
    DELETE_SINGLE_CUSTOMER_REQUEST,
    DELETE_SINGLE_CUSTOMER_SUCCESS
} from "../types";

export default function(state = {}, action = {}) {
    switch (action.type) {
        case ADD_CUSTOMER_REQUEST:
        case FETCH_SINGLE_CUSTOMER_REQUEST:
        case UPDATE_SINGLE_CUSTOMER_REQUEST:
        case DELETE_SINGLE_CUSTOMER_REQUEST:
            return {
                ...state
            };

        case ADD_CUSTOMER_SUCCESS:
            return {
                ...state,
                customer: action.customer
            };

        case FETCH_SINGLE_CUSTOMER_SUCCESS:
            return {
                ...state,
                customer: action.customer
            };

        case UPDATE_SINGLE_CUSTOMER_SUCCESS:
            let newData = [];
            for (const item of state.customers) {
                if (item.id === action.item.id) {
                    newData.push(action.item);
                } else {
                    newData.push(item);
                }
            }
            return {customers: newData}

        case DELETE_SINGLE_CUSTOMER_SUCCESS:
            return {
                customers: state
                    .customers
                    .filter((item) => item.id !== action.item.id)
            }

        default:
            return state;
    }
}
