import {takeLatest} from "redux-saga/effects";
import {
	ADD_CUSTOMER_REQUEST,
	FETCH_CUSTOMERS_REQUEST,
	FETCH_SINGLE_CUSTOMER_REQUEST,
	UPDATE_SINGLE_CUSTOMER_REQUEST,
	DELETE_SINGLE_CUSTOMER_REQUEST
} from "./types";


import {
	addCustomerSaga,
	fetchCustomersSaga,
	fetchSingleCustomersSaga,
	updateSingleCustomersSaga,
	deleteSingleCustomersSaga
} from "./sagas/customersSagas";

export default function* rootSaga() {
	yield takeLatest(FETCH_CUSTOMERS_REQUEST, fetchCustomersSaga);
	yield takeLatest(ADD_CUSTOMER_REQUEST, addCustomerSaga);
	yield takeLatest(FETCH_SINGLE_CUSTOMER_REQUEST, fetchSingleCustomersSaga);
	yield takeLatest(UPDATE_SINGLE_CUSTOMER_REQUEST, updateSingleCustomersSaga);
	yield takeLatest(DELETE_SINGLE_CUSTOMER_REQUEST, deleteSingleCustomersSaga);
}
