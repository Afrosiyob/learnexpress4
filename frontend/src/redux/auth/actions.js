import { REGISTRATION_USER, REGISTRATION_USER_ERROR, REGISTRATION_USER_SUCCESS, USER_LOGIN, USER_LOGIN_ERROR, USER_LOGIN_SUCCESS } from "../actions";

export const userLogin = ( req, history ) => ( {
    type: USER_LOGIN,
    payload: { req, history }
} );

export const userLoginSuccess = ( res ) => ( {
    type: USER_LOGIN_SUCCESS,
    payload: { res }
} );

export const userLoginError = ( error ) => ( {
    type: USER_LOGIN_ERROR,
    payload: error
} );

export const registrationUser = ( req, history ) => ( {
    type: REGISTRATION_USER,
    payload: { req, history }
} );

export const registrationUserSuccess = ( res ) => ( {
    type: REGISTRATION_USER_SUCCESS,
    payload: res
} );

export const registrationUserError = ( error ) => ( {
    type: REGISTRATION_USER_ERROR,
    payload: error
} );