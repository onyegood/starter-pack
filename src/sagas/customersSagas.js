import {put, call} from "redux-saga/effects";
import axios from "axios";

import api from "../services/api";
import {baseURL} from "../baseURL";

import {
	addCustomerFailure,
	fetchCustomersSuccess,
  	fetchCustomersFailure,
	addCustomerSuccess,
	fetchSingleCustomerSuccess,
	fetchSingleCustomerFailure,
	updateCustomerFailure,
	updateCustomerSuccess,
	deleteCustomerSuccess,
	deleteCustomerFaild
} from "../actions/customerActions";
import history from "../history";

export function* addCustomerSaga(action) {
	try {
		const response = yield axios.post(baseURL + `api/customer`, action.customer)
		yield put(addCustomerSuccess(response.data.customer));
		//Update State
		const res = yield axios.get(baseURL + `api/customers`)
		yield put(fetchCustomersSuccess(res.data.customers));
	} catch (err) {
		yield put(addCustomerFailure(err.response.data.errors));
	}
}

export function* fetchCustomersSaga() {
  try {
		// const customers = yield call(api.customers.getCustomers)
		// yield put(fetchCustomersSuccess(customers));
		const response = yield axios.get(baseURL + `api/customers`)
		yield put(fetchCustomersSuccess(response.data.customers));
	} catch (err) {
	   yield put(fetchCustomersFailure(err.response.data.errors));
	}
}

export function* fetchSingleCustomersSaga(action) {
  try {
		const response = yield axios.get(baseURL + `api/customer/` + action.customer)
		yield put(fetchSingleCustomerSuccess(response.data.customer));
	} catch (err) {
	   yield put(fetchSingleCustomerFailure(err.response.data.errors));
	}
}

export function* updateCustomersSaga(action) {
  try {
		yield axios.put(baseURL + `api/customer/update/${action.customer.id}`, action.customer);
		yield put(updateCustomerSuccess(action));
		//Update State
		const response = yield axios.get(baseURL + `api/customers`)
		yield put(fetchCustomersSuccess(response.data.customers));

	} catch (err) {
	   yield put(updateCustomerFailure(err));
	}
}

export function* deleteCustomerSaga(action) {
  try {
		yield axios.delete(baseURL + `/api/customer/delete/${action.id}`)
		yield put(deleteCustomerSuccess(action));
		//Update State
		const response = yield axios.get(baseURL + `api/customers`)
		yield put(fetchCustomersSuccess(response.data.customers));
	} catch (err) {
	   yield put(deleteCustomerFaild(err));
	}
}