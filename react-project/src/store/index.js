import { createContext } from "react";
import { globalReducer } from "./helpers";


const globalContext = createContext()

const initialState = {
    user: {},
    coordinates: {},
    blogActivePage: "blogs",
}


export {
    globalContext,
    initialState,
    globalReducer
}