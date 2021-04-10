import { all, put, takeEvery, call, fork } from "redux-saga/effects";
import { USER_LOGIN } from "../actions";

import axios from "axios";

function* watchUserLogin () {
    yield takeEvery( USER_LOGIN, workUserLogin );
}


function fetchUserLogin ( req ) {
    return axios.post( 'http://localhost:5000/api/auth/login', {
        headers: {
            'Content-Type': 'application/json'
        }
    }, req ).then( ( res ) => ( { res } ) ).catch( ( error ) => ( { error } ) );
}

function* workUserLogin ( { payload } ) {
    const { req, history } = payload;

    const { res, error } = yield call( fetchUserLogin, req );

    if ( res ) {
        console.log( res );
        console.log( history );
    } else {
        console.log( error );
    }

}

export default function* authSaga () {
    yield all( [ fork( watchUserLogin ) ] )
}