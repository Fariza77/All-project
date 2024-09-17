import { createContext } from "react";
import { globalReducer } from "./helpers";

const BASE_URL = "http://localhost:3000/"
const globalContext = createContext()


const initialState = {
    user: {},
    blogs: [],
    coordinates: {},
    blogActivePage: "blogs",
}


export {
    BASE_URL,
    globalContext,
    initialState,
    globalReducer
}