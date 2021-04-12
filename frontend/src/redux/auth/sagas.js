import { all, put, takeEvery, call, fork } from "redux-saga/effects";
import { REGISTRATION_USER, USER_LOGIN } from "../actions";

import axios from "axios";
import { message } from "antd";
import { userLoginSuccess } from "./actions";

function* watchUserLogin() {
    yield takeEvery(USER_LOGIN, workUserLogin);
}

function fetchUserLogin(req) {
    return axios
        .post("/api/auth/login", req, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
        .then((res) => ({ res }))
        .catch((error) => ({ error }));
}

function* workUserLogin({ payload }) {
    const { req, history } = payload;

    const { res, error } = yield call(fetchUserLogin, req);

    if (res) {
        localStorage.setItem("token", res.data.token);
        history.push("/");
        yield put(userLoginSuccess(res.data));
        message.loading("waiting...").then(() => message.success("welcome..."));
    } else {
        console.log(error);
        message
            .loading("waiting")
            .then(() => message.error(error.response.data.message));
    }
}

function* watchRegistrationUser() {
    yield takeEvery(REGISTRATION_USER, workRegistrationUser);
}

function fetchRegistrationUser(req) {
    return axios
        .post("/api/auth/registration", req, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
        .then((res) => ({ res }))
        .catch((error) => ({ error }));
}

function* workRegistrationUser({ payload }) {
    const { req, history } = payload;

    const { res, error } = yield call(fetchRegistrationUser, req);

    if (res) {
        message.loading("waiting").then(() => message.success("User created..."));

        history.push("/");
    } else {
        message
            .loading("waiting")
            .then(() => message.error(error.response.data.message));
    }
}

export default function* authSaga() {
    yield all([fork(watchUserLogin), fork(watchRegistrationUser)]);
}