import { combineReducers } from "redux";
import { userReducer } from "./auth/reducers";



export const rootReducer = combineReducers( {
    userReducer
} );