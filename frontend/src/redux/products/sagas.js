import { all, put, takeEvery, call, fork } from "redux-saga/effects";
import { GET_PRODUCT } from "../actions";
import axios from "axios";
import { message } from "antd";

function* watchGetProducts() {
    yield takeEvery(GET_PRODUCT, workGetProducts);
}

function fetchGetProduct() {
    return axios
        .get("/api/auth/get_product", {
            headers: {},
        })
        .then((res) => ({ res }))
        .catch((error) => ({ error }));
}

function* workGetProducts({ payload }) {
    const { res, error } = yield call(fetchGetProduct);

    if (res) {
        console.log(res);
    } else {
        console.log(error);
    }
}

export default function* productSaga() {
    yield all([fork(watchGetProducts)]);
}