import {put} from "redux-saga/effects";
import axios from "axios";
import {baseURL} from "../baseURL";

import {
	addCustomerFailure,
	fetchCustomersSuccess,
  	fetchCustomersFailure,
	addCustomerSuccess,
	fetchSingleCustomerSuccess,
	fetchSingleCustomerFailure,
	updateSingleCustomerFailure,
	updateSingleCustomerSuccess,
	deleteCustomerSuccess,
	deleteCustomerFaild
} from "../actions/customerActions";
import history from "../history";

export function* addCustomerSaga(action) {
	try {
		const response = yield axios.post(baseURL + `api/customer`, action.customer)
		yield put(addCustomerSuccess(response.data.customer));
		history.push('/');
	} catch (err) {
		yield put(addCustomerFailure(err.response.data.errors));
	}
}

export function* fetchCustomersSaga() {
  try {
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

export function* updateSingleCustomersSaga(action) {
  try {
		const response = yield axios.put(baseURL + `api/customer/update/${action.customer.id}`, action.customer)
		yield put(updateSingleCustomerSuccess(response.data.customer));
		history.push('/');
	} catch (err) {
	   yield put(updateSingleCustomerFailure(err));
	}
}

export function* deleteCustomerSaga(action) {
  try {
		yield axios.delete(baseURL + `/api/customer/delete/${action.id}`)
		yield put(deleteCustomerSuccess(action.id));
	} catch (err) {
	   yield put(deleteCustomerFaild(err));
	}
}