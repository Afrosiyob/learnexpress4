import { REGISTRATION_USER, REGISTRATION_USER_ERROR, REGISTRATION_USER_SUCCESS, USER_LOGIN, USER_LOGIN_ERROR, USER_LOGIN_SUCCESS } from "../actions";

const INIT_STATE = {
    loading: false,
    error: '',
    user: []
}


export const userReducer = ( state = INIT_STATE, { type, payload } ) => {

    switch ( type ) {
        case USER_LOGIN:
            return { ...state, loading: true }

        case USER_LOGIN_SUCCESS:
            return { ...state, loading: false, user: payload }

        case USER_LOGIN_ERROR:
            return { ...state, loading: false, error: payload }

        case REGISTRATION_USER:
            return { ...state, loading: true }

        case REGISTRATION_USER_SUCCESS:
            return { ...state, loading: false, user: payload }

        case REGISTRATION_USER_ERROR:
            return { ...state, loading: false, error: payload }

        default:
            return { ...state }
    }


}