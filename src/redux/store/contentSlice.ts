import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ContentState {
  groupName: string;
  isHome: boolean;
  date: string;
}

const initialState = {
  groupName: "Мой день",
  isHome: true,
  date: "Thursday, 25 Augast",
} as ContentState;

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    changeGroupName: (state, action: PayloadAction<string>) => {
      state.groupName = action.payload;
    },
    setIsHome: (state, action: PayloadAction<boolean>) => {
      state.isHome = action.payload;
    },
    setDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
  },
});

export const { changeGroupName, setIsHome, setDate } = contentSlice.actions;
export default contentSlice.reducer;
