import axios from 'axios';
import * as actionTypes from './actionTypes';

const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

const authSuccess = (authData) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData: authData,
  };
};

const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

const auth = (email, password) => {
  //here dispatch is in argument thanks to "thunk"
  return (dispatch) => {
    dispatch(authStart());
    //https://firebase.google.com/docs/reference/rest/auth?authuser=0#section-create-email-password
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    axios
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCGvCA6Y_jcsWi7GrW1hosbV6ugT0eWEwM',
        authData
      )
      .then((response) => {
        console.log(response);
        dispatch(authSuccess(response.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};

export { authStart, authSuccess, authFail, auth };
