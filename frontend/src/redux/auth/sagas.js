import { all, put, takeEvery, call, fork } from "redux-saga/effects";
import { USER_LOGIN } from "../actions";

import axios from "axios";
import { message } from "antd";
import { userLoginSuccess } from "./actions";

function* watchUserLogin () {
    yield takeEvery( USER_LOGIN, workUserLogin );
}


function fetchUserLogin ( req ) {
    return axios.post( '/api/auth/login', req, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",

        }
    } ).then( ( res ) => ( { res } ) ).catch( ( error ) => ( { error } ) );
}

function* workUserLogin ( { payload } ) {
    const { req, history } = payload;

    const { res, error } = yield call( fetchUserLogin, req );

    if ( res ) {

        localStorage.setItem( "token", res.data.token );
        history.push( '/' );
        yield put( userLoginSuccess( res.data ) );
        message.loading( "waiting..." ).then( () => message.success( "welcome..." ) )

    } else {
        console.log( error );
        
    }

}

export default function* authSaga () {
    yield all( [ fork( watchUserLogin ) ] )
}