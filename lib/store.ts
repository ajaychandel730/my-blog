import { configureStore } from "@reduxjs/toolkit";
// reducers
import {editorReducer} from "./features/editor/editorSlice";

// actions
import { setBlog, resetBlog, isReseting, editBlog } from "./features/editor/editorSlice";

export const globalStore = configureStore({
    reducer: {editorReducer},
  });

// Infer the type of makeStore
export type AppStore = typeof globalStore;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

// export actions
export {
  setBlog,
  resetBlog,
  isReseting,
  editBlog
}