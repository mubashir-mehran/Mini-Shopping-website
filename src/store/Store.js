import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import prodcutReducer from './productSlice'


const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: prodcutReducer,
    }
});
export default store;