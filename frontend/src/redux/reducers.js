import { combineReducers } from "redux";
import { userReducer } from "./auth/reducers";
import { productReducer } from "./products/reducers";

export const rootReducer = combineReducers({
    userReducer,
    productReducer,
});