import {
  ADD_CUSTOMER_REQUEST,
  ADD_CUSTOMER_FAILURE,
  FETCH_CUSTOMERS_REQUEST,
  FETCH_CUSTOMERS_SUCCESS,
  FETCH_CUSTOMERS_FAILURE,
  ADD_CUSTOMER_SUCCESS,
  FETCH_SINGLE_CUSTOMER_REQUEST,
  FETCH_SINGLE_CUSTOMER_SUCCESS,
  FETCH_SINGLE_CUSTOMER_FAILURE,
  UPDATE_SINGLE_CUSTOMER_REQUEST,
  UPDATE_SINGLE_CUSTOMER_SUCCESS,
  UPDATE_SINGLE_CUSTOMER_FAILURE,
  DELETE_SINGLE_CUSTOMER_REQUEST,
  DELETE_SINGLE_CUSTOMER_SUCCESS,
  DELETE_SINGLE_CUSTOMER_FAILURE
} from "../types";

export const addCustomerRequest = customer => ({
  type: ADD_CUSTOMER_REQUEST,
  customer
});

export const addCustomerSuccess = customer => ({
  type: ADD_CUSTOMER_SUCCESS,
  customer
});

export const addCustomerFailure = errors => ({
  type: ADD_CUSTOMER_FAILURE,
  errors
});


export const fetchCustomersRequest = customers => ({
  type: FETCH_CUSTOMERS_REQUEST,
  customers
});

export const fetchCustomersSuccess = customers => ({
  type: FETCH_CUSTOMERS_SUCCESS,
  customers
});

export const fetchCustomersFailure = errors => ({
  type: FETCH_CUSTOMERS_FAILURE,
  errors
});

export const fetchSingleCustomerRequest = customer => ({
  type: FETCH_SINGLE_CUSTOMER_REQUEST,
  customer
});

export const fetchSingleCustomerSuccess = (customer, id) => ({
  type: FETCH_SINGLE_CUSTOMER_SUCCESS,
  customer: customer,
  id: id
});

export const fetchSingleCustomerFailure = errors => ({
  type: FETCH_SINGLE_CUSTOMER_FAILURE,
  errors
});

export const updateSingleCustomerRequest = (customer, id) => ({
  type: UPDATE_SINGLE_CUSTOMER_REQUEST,
  customer,
  id
});

export const updateSingleCustomerSuccess = (customer, id, newData) => ({
  type: UPDATE_SINGLE_CUSTOMER_SUCCESS,
  customer,
  newData,
  id
});

export const updateSingleCustomerFailure = errors => ({
  type: UPDATE_SINGLE_CUSTOMER_FAILURE,
  errors
});

export const deleteSingleCustomerRequest = customer => ({
  type: DELETE_SINGLE_CUSTOMER_REQUEST,
  customer
});

export const deleteSingleCustomerSuccess = (customer) => ({
  type: DELETE_SINGLE_CUSTOMER_SUCCESS,
  customer
});

export const deleteSingleCustomerFailure = errors => ({
  type: DELETE_SINGLE_CUSTOMER_FAILURE,
  errors
});
