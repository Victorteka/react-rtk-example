import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../features/postSlice'
import postDetailsReducer from "../features/postDetails";


export const store = configureStore({
    reducer:{
        post: postDetailsReducer,
        posts: postReducer
    }
})