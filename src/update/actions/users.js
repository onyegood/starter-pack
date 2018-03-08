import {
  CREATE_USER_REQUEST,
  CREATE_USER_FAILURE,
  FETCH_CURRENT_USER_REQUEST,
  FETCH_CURRENT_USER_SUCCESS,
  FETCH_ALL_USERS_REQUEST,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS_FAILURE,

  ADD_USER_REQUEST,
  ADD_USER_FAILURE,
  ADD_USER_SUCCESS
} from "../types";

export const createUserRequest = user => ({
  type: CREATE_USER_REQUEST,
  user
});

export const createUserFailure = errors => ({
  type: CREATE_USER_FAILURE,
  errors
});

export const fetchCurrentUserRequest = () => ({
  type: FETCH_CURRENT_USER_REQUEST
});

export const fetchCurrentUserSuccess = user => ({
  type: FETCH_CURRENT_USER_SUCCESS,
  user
});

export const fetchAllUsersRequest = users => ({
   type: FETCH_ALL_USERS_REQUEST,
   users
});

export const fetchAllUsersSuccess = users => ({
	type: FETCH_ALL_USERS_SUCCESS,
	users
});

export const fetchAllUsersFailure = errors => ({
	type: FETCH_ALL_USERS_FAILURE,
	errors
});

export const addUserRequest = data => ({
  type: ADD_USER_REQUEST,
  data
});

export const addUserSuccess = data => ({
  type: ADD_USER_SUCCESS,
  data
});

export const addUserFailure = errors => ({
  type: ADD_USER_FAILURE,
  errors
});
