import axios from 'axios';
import * as actionTypes from './actionTypes';

const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
  };
};

const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

const auth = (email, password, isSignup) => {
  //here dispatch is in argument thanks to "thunk"
  return (dispatch) => {
    dispatch(authStart());
    //https://firebase.google.com/docs/reference/rest/auth?authuser=0#section-create-email-password
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCGvCA6Y_jcsWi7GrW1hosbV6ugT0eWEwM';
    if (!isSignup) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCGvCA6Y_jcsWi7GrW1hosbV6ugT0eWEwM';
    }
    axios
      .post(url, authData)
      .then((response) => {
        console.log(response);
        //I`ve taken "localId" from response
        dispatch(authSuccess(response.data.idToken, response.data.localId));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};

export { authStart, authSuccess, authFail, auth };
