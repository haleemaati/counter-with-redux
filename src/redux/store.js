import { configureStore } from "@reduxjs/toolkit";
import counderSlice from "./counderSlice";


export const store = configureStore({
    reducer:{
        // reducers should key-value pair
        counter:counderSlice
    }
})