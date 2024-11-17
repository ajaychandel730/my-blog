import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JSONContent } from "novel";

export interface Blog {
  title? : string;
  topics? : string[];
  image?: string;
  description?: string;
  content?: JSONContent | undefined;
}

type InitialState = {
  blog: Blog;
};


const initialState: InitialState = {
  blog: {
    title : "",
    topics : [], 
    image: "",
    description: "",
    content: undefined
  },
};

const editorSlice = createSlice({
  name: "editorSlice",
  initialState,
  reducers: {
    setBlog: (state, action: PayloadAction<Blog>) => {
      state.blog = {
        ...state.blog,
        ...action.payload,
      };
      localStorage.setItem("blog", JSON.stringify(state.blog));
    },
  },
});

export const { setBlog } = editorSlice.actions;
export const editorReducer = editorSlice.reducer;
