import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartSlice"
// thunkMiddleware from 'redux-thunk';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    //middleware: [thunkMiddleware]
})

export default store