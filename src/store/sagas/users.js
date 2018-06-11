import axios from "../../axios-api";
import {put} from "redux-saga/effects";
import {push} from "react-router-redux";
import {NotificationManager} from "react-notifications";

import {registerUserFailure, registerUserSuccess} from "../actions/users";

export function* registerUserSaga(action) {
  try {
    const response = yield axios.post('/users', action.userData);
    yield put(registerUserSuccess());
    yield put(push('/'));
    yield NotificationManager.success('Success', 'Registration successful');
  } catch (error) {
    yield put(registerUserFailure(error.response.data));
  }
}