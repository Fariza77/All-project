import { createContext } from "react";
import { globalReducer } from "./helpers";

const BASE_URL = "http://localhost:3000/"
const globalContext = createContext()

// -------------------------------------------------------------
//   URL  -> consists of 
//    -  https://    ->  protocol  (secure  ->  encrypted)
//    -  www         ->  subdomain  (optional)   -  World Wide Web
//    -  localhost   ->  domain  (name of the server)
//    -  :3000       ->  port  (where the server is running)
//    -  /...        ->  path  (where the resource is located)
//    -  ?...&...    ->  parameters  (additional information)
// ---------------------------------------------------------
// example:
// https://www.youtube.com/embed/9d13hduhd93?controls=0&muted=1&autoplay=1
// -------------------------------------------------------------



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