import {
    GET_PRODUCT,
    GET_PRODUCT_ERROR,
    GET_PRODUCT_SUCCESS,
    NEW_PRODUCT,
    NEW_PRODUCT_ERROR,
    NEW_PRODUCT_SUCCESS,
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

export const newProduct = (req) => ({
    type: NEW_PRODUCT,
    payload: req,
});

export const newProductSuccess = (res) => ({
    type: NEW_PRODUCT_SUCCESS,
    payload: res,
});

export const newProductError = (error) => ({
    type: NEW_PRODUCT_ERROR,
    payload: error,
});