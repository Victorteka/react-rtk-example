import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    post: {},
    status: 'idle',
    error: null
}

export const getPostDetials = createAsyncThunk(
    'postDetails/getPostDetails',
    async (id) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return response.data
    }
)

const postDetailsSlice = createSlice({
    name: 'postDetails',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
            .addCase(getPostDetials.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getPostDetials.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.post = action.payload
            })
            .addCase(getPostDetials.rejected, (state, action) => {
                state.error = action.error.message
            })
    }
})

export const selectPost = (state) => state.post.post
export const getPostStatus = (state) => state.post.status
export const getPostError = (state) => state.post.error
export default postDetailsSlice.reducer