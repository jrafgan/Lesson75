import {takeEvery} from "redux-saga/effects";
import {REGISTER_USER} from "../actions/actionTypes";
import {registerUserSaga} from "./users";


export function* watchRegisterUser() {
  yield takeEvery(REGISTER_USER, registerUserSaga);
}

export function* watchSomethingElse() {
  yield takeEvery(SOMETHING, doSomethingSaga);
}

export default function* rootSaga() {
  yield all([watchRegisterUser(), watchSomethingElse()]);
}