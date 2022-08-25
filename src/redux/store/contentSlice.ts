import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ContentState {
  groupName: string;
}

const initialState = {
  groupName: "Мой день",
} as ContentState;

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    changeGroupName: (state, action: PayloadAction<string>) => {
      state.groupName = action.payload;
    },
  },
});

export const { changeGroupName } = contentSlice.actions;
export default contentSlice.reducer;
