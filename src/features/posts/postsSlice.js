import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        image: "https://picsum.photos/id/123/500/500",
        description: "Post 1 description",
        date: new Date().toISOString(),
        likes: 15,
        comments: 5,
    },
    {
        id: 2,
        image: "https://picsum.photos/id/124/500/500",
        description: "Post 2 description",
        date: new Date().toISOString(),
        likes: 30,
        comments: 10,
    }
]

const postsSlice = createSlice({
    name: "posts",
    initialState: initialState,
    reducers: {
        createPost: (state, action) => {
            const newPost = {
                id: Date.now(),
                image: action.payload.image,
                description: action.payload.description,
                date: new Date().toISOString(), //format for current date
                likes: 0,
                comments: "",
            }
            state.push(newPost);
        },
        updatePost: (state, action) => {
            const index = state.findIndex((post) => post.id === action.payload.id);
            state[index] = action.payload; // do the actual editing
        },
        deletePost: (state, action) => {
            return state.filter((post) => post.id !== action.payload);
        }
    }
})

export const { createPost, updatePost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
