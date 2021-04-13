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
  };
};

export { authStart, authSuccess, authFail, auth };
