import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    posts: [],
    status: 'idle',
    error: null
}

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async () => {
        const response = axios.get('https://jsonplaceholder.typicode.com/posts')
        return response.data
    }
)

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
            .addCase(getPosts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.posts = action.payload
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const selectAllPosts = (state) => state.posts.posts
export const getPostsStatus = (state) => state.posts.status
export const getPostsError = (state) => state.posts.error
export default postSlice.reducer