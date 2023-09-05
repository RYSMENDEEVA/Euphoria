import {configureStore} from "@reduxjs/toolkit";
import women from "./products/products";
import oneProduct from "./OneProduct/oneProduct";


export const store = configureStore({
    reducer: {
        women,
         oneProduct
    }
})