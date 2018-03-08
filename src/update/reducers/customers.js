import {
  FETCH_CUSTOMERS_REQUEST,
  FETCH_CUSTOMERS_SUCCESS,
  ADD_CUSTOMER_REQUEST,
  ADD_CUSTOMER_SUCCESS,
  FETCH_SINGLE_CUSTOMER_REQUEST,
  FETCH_SINGLE_CUSTOMER_SUCCESS,
  UPDATE_SINGLE_CUSTOMER_REQUEST,
  UPDATE_SINGLE_CUSTOMER_SUCCESS,
  DELETE_SINGLE_CUSTOMER_REQUEST,
  DELETE_SINGLE_CUSTOMER_SUCCESS
} from "../types";

const initialState = {
	isLoading: false,
	errors: null
}

export default function customers(state = {customers:[]}, action = {}) {
  switch (action.type) {
      case ADD_CUSTOMER_REQUEST:
      case FETCH_SINGLE_CUSTOMER_REQUEST:
      case UPDATE_SINGLE_CUSTOMER_REQUEST:
      case DELETE_SINGLE_CUSTOMER_REQUEST:
      case FETCH_CUSTOMERS_REQUEST:
      	return { ...state, isLoading: true };

      case FETCH_CUSTOMERS_SUCCESS:
        return { ...state, customers: action.customers, isLoading: false };

      case ADD_CUSTOMER_SUCCESS:
      	return { ...state, customer: action.customer, isLoading: false };

     case FETCH_SINGLE_CUSTOMER_SUCCESS:
       return { ...state, customer: action.customer, isLoading: false };

     case UPDATE_SINGLE_CUSTOMER_SUCCESS:
     let newData = [];
     for (const item of state.customers) {
      if (item.id === action.item.id) {
        newData.push(action.item);
      }else {
        newData.push(item);
      }
     }
     return {
       customers: newData
     }

     case DELETE_SINGLE_CUSTOMER_SUCCESS:
     return {
       customers: state.customers.filter((item) => item.id !== action.item.id)
     }

		default:
			return state;
    }
}
