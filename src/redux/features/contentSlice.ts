import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ContentState {
  groupName: string;
}

const initialState: ContentState = {
  groupName: "Мой день",
} as ContentState;

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    changeGroupName: (state, action: PayloadAction<{ name: string }>) => ({
      ...state,
      name: action.payload.name,
    }),
  },
});

export const { changeGroupName } = contentSlice.actions;
export default contentSlice.reducer;
