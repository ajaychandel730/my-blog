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
  isReseting? : boolean,
};


const initialState: InitialState = {
  blog: {
    title : "",
    topics : [], 
    image: "",
    description: "",
    content: undefined,
  },
  isReseting : false
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
    isReseting : (state, action:PayloadAction<boolean>)=>{
      state.isReseting = action.payload;
      return state;
    },

    resetBlog : ()=>{
         return {...initialState};
    }
  },
});

export const { setBlog, resetBlog, isReseting } = editorSlice.actions;
export const editorReducer = editorSlice.reducer;
