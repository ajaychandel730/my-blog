import { configureStore } from "@reduxjs/toolkit";
// reducers
import {editorReducer} from "./features/editor/editorSlice";

// actions
import { setBlog } from "./features/editor/editorSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {editorReducer},
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

// export actions
export {
  setBlog
}