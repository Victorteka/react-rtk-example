import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    status: 'idle' 
}

export const getPosts = createAsyncThunk(
    ''
)

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{},
    extraReducers:{

    }
})

export const selectAllPosts = (state) => state.posts
export default postSlice.reducer