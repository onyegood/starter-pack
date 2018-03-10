import {
  FETCH_CUSTOMERS_REQUEST,
  FETCH_CUSTOMERS_SUCCESS,
  ADD_CUSTOMER_REQUEST,
  ADD_CUSTOMER_SUCCESS,
  FETCH_SINGLE_CUSTOMER_REQUEST,
  FETCH_SINGLE_CUSTOMER_SUCCESS,
  UPDATE_SINGLE_CUSTOMER_REQUEST,
  UPDATE_SINGLE_CUSTOMER_SUCCESS,
  CUSTOMER_DELETED,
  CUSTOMER_DELETED_SUCCESS,
  CUSTOMER_DELETED_REQUEST
} from "../types";

const initialState = {
  isLoading: false,
  errors: null,
  customers: []
}

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case ADD_CUSTOMER_REQUEST:
    case FETCH_SINGLE_CUSTOMER_REQUEST:
    case UPDATE_SINGLE_CUSTOMER_REQUEST:
    case CUSTOMER_DELETED_REQUEST:
    case FETCH_CUSTOMERS_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case FETCH_CUSTOMERS_SUCCESS:
      return {
        ...state,
        customers: action.customers,
        isLoading: false
      };

    case ADD_CUSTOMER_SUCCESS:
      return {
        ...state,
        customer: action.customer,
        isLoading: false
      };

    case FETCH_SINGLE_CUSTOMER_SUCCESS:
      return {
        ...state,
        customer: action.customer,
        isLoading: false
      };

    case UPDATE_SINGLE_CUSTOMER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        customers: [state.customers.filter(customer => customer.id !== action.customer.id, action.customer)]
      }

    case CUSTOMER_DELETED_SUCCESS:
    return {
      isLoading: false,
      customer: state.customers.filter(customer => customer.id !== action.customerId)
    }

    default:
      return state;
  }
}
