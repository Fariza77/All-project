import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice";

const store = configureStore({ 
    reducer: { 
        todos: todoReducer,
        // products: "...", 
        // blogs: "...", 
    } 
});

export default store;