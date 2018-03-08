import {
    USER_LOGGED_IN,
    USER_LOGGED_OUT,
    LOGIN_USER_REQUEST,
    LOGIN_USER_FAIL,
    LOGOUT_USER_REQUEST,
    CONFIRM_USER_REQUEST,
    CONFIRM_USER_FAILURE
} from "../types";
import api from "../apis/api";

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const loginUserRequests = user => ({
    type: LOGIN_USER_REQUEST,
    user
});

export const loginUserFailure = errors => ({
	type: LOGIN_USER_FAIL,
	errors
});

export const logoutUserRequest = user => ({
    type: LOGOUT_USER_REQUEST,
    user
});

// Not in use yet
export const confirmUserRequest = token => ({
	type: CONFIRM_USER_REQUEST,
	token
});

export const confirmUserFailure = errors => ({
	type: CONFIRM_USER_FAILURE,
	errors
});

//Not in use yet

export const confirm = token => dispatch =>
  api.user.confirm(token).then(user => {
    localStorage.bookwormJWT = user.token;
    dispatch(userLoggedIn(user));
  });

export const resetPasswordRequest = ({ email }) => () =>
  api.user.resetPasswordRequest(email);

export const validateToken = token => () => api.user.validateToken(token);

export const resetPassword = data => () => api.user.resetPassword(data);
