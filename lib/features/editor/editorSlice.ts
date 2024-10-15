import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import EditorJS from "@editorjs/editorjs";

export interface Blog {
    image? : string;
}

type InitialState = {
    blog : Blog;
};

const initialState:InitialState = {
    blog : {
        image : ""
    }
};

const editorSlice = createSlice({
    name : "editorSlice",
    initialState,
    reducers : {
       setBlog : (state, action:PayloadAction<Blog>)=>{
          state.blog = {
            ...state.blog,
            ...action.payload
          }
       }
    }
});

export const {setBlog} = editorSlice.actions;
export const editorReducer = editorSlice.reducer;
