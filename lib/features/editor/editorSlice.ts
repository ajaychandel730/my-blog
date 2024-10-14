import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import EditorJS from "@editorjs/editorjs";

type InitialState = {
    editor : EditorJS | undefined;
}

const initialState:InitialState = {
    editor : undefined,
}

const editorSlice = createSlice({
    name : "editorSlice",
    initialState,
    reducers : {
        setEditor : (state, action:PayloadAction<EditorJS | undefined>)=>{
         state.editor = action.payload;
        }
    }
});

export const {setEditor} = editorSlice.actions;
export const editorReducer = editorSlice.reducer;
