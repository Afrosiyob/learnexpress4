import {
    GET_PRODUCT,
    GET_PRODUCT_ERROR,
    GET_PRODUCT_SUCCESS,
} from "../actions";

const INIT_STATE = {
    loading: false,
    error: "",
    products: [],
};

export const productReducer = (state = INIT_STATE, { type, payload }) => {
    switch (type) {
        case GET_PRODUCT:
            return {...state, loading: true };

        case GET_PRODUCT_SUCCESS:
            return {...state, loading: false, products: payload };

        case GET_PRODUCT_ERROR:
            return {...state, loading: false, error: payload };

        default:
            return {...state };
    }
};