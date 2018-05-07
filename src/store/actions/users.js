import axios from '../../axios-api';
import {push} from 'react-router-redux';
import {REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS} from "./actionTypes";

const registerUserSuccess = () => {
  return {type: REGISTER_USER_SUCCESS};
};

const registerUserFailure = error => {
  return {type: REGISTER_USER_FAILURE, error};
};

export const registerUser = userData => {
  return dispatch => {
    return axios.post('/users', userData).then(
      response => {
        dispatch(registerUserSuccess());
        dispatch(push('/'));
      },
      error => {
        dispatch(registerUserFailure(error.response.data));
      }
    );
  };
};