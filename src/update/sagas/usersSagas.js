import {call, put} from "redux-saga/effects";
import {
	userLoggedIn,
	userLoggedOut,
	loginUserFailure,
	confirmUserFailure
} from "../actions/auth";
import {
	createUserFailure,
	fetchAllUsersFailure,
	fetchAllUsersSuccess
} from "../actions/users";
import api from "../apis/api";
import history from "../history";
import setAuthorizationHeader from "../utils/setAuthorizationHeader";

export function* createUserSaga(action) {
	try {
		const user = yield call(api.user.signup, action.user);
		localStorage.bookwormJWT = user.token;
		yield put(userLoggedIn(user));
		history.push("/dashboard");
	} catch (err) {
		yield put(createUserFailure(err.response.data.errors));
	}
}

export function* fetchUserSaga() {
	const user = yield call(api.user.fetchCurrentUser);
	yield put(userLoggedIn(user));
}

export function* fetchAllUsersSaga(action) {
	try {
		const users = yield call(api.users.fetchAllUsers);
		yield put(fetchAllUsersSuccess(users.data));
	} catch (err) {
		yield put(fetchAllUsersFailure(err.response.data.errors));
	}
}

export function* loginUserSaga(action) {
	try {
		const user = yield call(api.user.login, action.user);
		localStorage.bookwormJWT = user.token;
		yield put(userLoggedIn(user));
		setAuthorizationHeader(user.token);
		history.push("/dashboard");
	} catch (err) {
		yield put(loginUserFailure(err.response.data.errors));
	}
}

export function* logoutUserSaga() {
	localStorage.removeItem("bookwormJWT");
	yield put(userLoggedOut());
	setAuthorizationHeader();
}

export function* confirmUserAccountSaga(action) {
	try {
		const user = yield call(api.user.confirm, action.token);
		localStorage.bookwormJWT = user.token;
		yield put(userLoggedIn(user));
	} catch (err) {
		yield put(confirmUserFailure(err.response.data.errors));
	}
}

export function* addUserSaga(action) {}
