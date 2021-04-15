import {
    GET_PRODUCT,
    GET_PRODUCT_ERROR,
    GET_PRODUCT_SUCCESS,
} from "../actions";

export const getProduct = () => ({
    type: GET_PRODUCT,
});

export const getProductSuccess = (res) => ({
    type: GET_PRODUCT_SUCCESS,
    payload: res,
});

export const getProductError = (error) => ({
    type: GET_PRODUCT_ERROR,
    payload: error,
});