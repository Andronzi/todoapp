import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./features/profileSlice";
import contentReducer from "./features/contentSlice";

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    content: contentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
