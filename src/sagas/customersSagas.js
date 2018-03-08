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
	deleteSingleCustomerSuccess,
	deleteSingleCustomerFailure
} from "../actions/customerActions";
import history from "../history";

export function* addCustomerSaga(action) {
	try {
		const response = yield axios.post(baseURL + 'api/customer', action.customer)
		yield put(addCustomerSuccess(response.data.customer));
		history.push('/all/customers');
	} catch (err) {
		yield put(addCustomerFailure(err.response.data.errors));
	}
}

export function* fetchCustomersSaga() {
  try {
		const response = yield axios.get(baseURL + 'api/customers')
		yield put(fetchCustomersSuccess(response.data.customers));
	} catch (err) {
	   yield put(fetchCustomersFailure(err.response.data.errors));
	}
}

export function* fetchSingleCustomersSaga(action) {
  try {
		const response = yield axios.get(baseURL + 'api/customer/' + action.customer)
		yield put(fetchSingleCustomerSuccess(response.data.customer));
	} catch (err) {
	   yield put(fetchSingleCustomerFailure(err.response.data.errors));
	}
}

export function* updateSingleCustomersSaga(action, newData) {
  try {
		const response = yield axios.put(baseURL + 'api/customer/update/' + action.customer.id.toString(), action.newData)
		console.log('hhahaha', response);
		yield put(updateSingleCustomerSuccess(response.data.customer));
		console.log('Update customer from saga',  action.newData);
	} catch (err) {
	   yield put(updateSingleCustomerFailure(err));
	}
}

export function* deleteSingleCustomersSaga(action) {
  try {
		const response = yield axios.delete(baseURL + 'api/customer/delete/' + action.customer.id)
		yield put(deleteSingleCustomerSuccess(response));
	} catch (err) {
	   yield put(deleteSingleCustomerFailure(err));
	}
}
